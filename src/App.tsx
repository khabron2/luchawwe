import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Info, Check, Plus, Settings, Search, Clock, 
  Gamepad2, Calendar, ListFilter, RotateCcw, Sparkles, 
  ChevronLeft, ChevronRight, Tv, Award, PlayCircle, History,
  Maximize2, Volume2, User, UserCheck, CheckCircle2, Menu, X
} from 'lucide-react';

import { INITIAL_WWE_EVENTS, WWEEvent } from './data';
import VideoPlayer from './components/VideoPlayer';
import AdminPanel from './components/AdminPanel';

const SPANISH_MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export default function App() {
  // Store events list in localStorage or default to initial, merging any newly added defaults
  const [events, setEvents] = useState<WWEEvent[]>(() => {
    const saved = localStorage.getItem('wwe-chrono-events');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as WWEEvent[];
        parsed.sort((a, b) => a.date.localeCompare(b.date));
        const parsedIds = new Set(parsed.map(e => e.id));
        const missing = INITIAL_WWE_EVENTS.filter(e => !parsedIds.has(e.id));
        if (missing.length > 0) {
          const merged = [...parsed, ...missing];
          merged.sort((a, b) => a.date.localeCompare(b.date));
          localStorage.setItem('wwe-chrono-events', JSON.stringify(merged));
          return merged;
        }
        return parsed;
      } catch (err) {
        return INITIAL_WWE_EVENTS;
      }
    }
    return INITIAL_WWE_EVENTS;
  });

  const [selectedId, setSelectedId] = useState<string>(() => {
    const saved = localStorage.getItem('wwe-chrono-selected-id');
    if (saved) return saved;
    return events[0]?.id || '';
  });

  const [playingId, setPlayingId] = useState<string | null>(null);

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [yearFilter, setYearFilter] = useState<number | 'ALL'>(() => {
    const saved = localStorage.getItem('wwe-chrono-year-filter');
    if (saved) {
      return saved === 'ALL' ? 'ALL' : Number(saved);
    }
    return 'ALL';
  });

  const [showFilter, setShowFilter] = useState<WWEEvent['show'] | 'ALL'>(() => {
    const saved = localStorage.getItem('wwe-chrono-show-filter');
    return (saved as WWEEvent['show'] | 'ALL') || 'ALL';
  });

  const [monthFilter, setMonthFilter] = useState<string | 'ALL'>(() => {
    const saved = localStorage.getItem('wwe-chrono-month-filter');
    return saved || 'ALL';
  });
  
  // Quick profile stats
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [gamertag, setGamertag] = useState('WWEUniverse');
  const gamerscore = useMemo(() => events.filter(e => e.watched).length, [events]);
  const [clockStr, setClockStr] = useState('04:55 pm');
  const [activeRow, setActiveRow] = useState<'main' | 'sub-rows'>('main');

  // References for horizontal scrolling
  const carouselRef = useRef<HTMLDivElement>(null);
  const detailDrawerRef = useRef<boolean>(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Sync clock in real-time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // Hour '0' should be '12'
      setClockStr(`${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Synchronizers to localStorage
  useEffect(() => {
    if (selectedId) {
      localStorage.setItem('wwe-chrono-selected-id', selectedId);
    }
  }, [selectedId]);

  useEffect(() => {
    if (playingId) {
      localStorage.setItem('wwe-chrono-playing-id', playingId);
    } else {
      localStorage.removeItem('wwe-chrono-playing-id');
    }
  }, [playingId]);

  useEffect(() => {
    localStorage.setItem('wwe-chrono-year-filter', String(yearFilter));
  }, [yearFilter]);

  useEffect(() => {
    localStorage.setItem('wwe-chrono-show-filter', showFilter);
  }, [showFilter]);

  useEffect(() => {
    localStorage.setItem('wwe-chrono-month-filter', monthFilter);
  }, [monthFilter]);

  // Restore scroll centering for selectedId on startup
  useEffect(() => {
    if (selectedId && filteredEvents.length > 0) {
      const idx = filteredEvents.findIndex(e => e.id === selectedId);
      if (idx !== -1) {
        const timer = setTimeout(() => {
          scrollMainTileIntoView(idx);
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Filtered chronology for the main infinite carousel
  const filteredEvents = useMemo(() => {
    return events.filter(ev => {
      const matchesSearch = ev.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            ev.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            ev.show.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = yearFilter === 'ALL' || ev.year === yearFilter;
      const matchesShow = showFilter === 'ALL' || ev.show === showFilter;
      const matchesMonth = monthFilter === 'ALL' || ev.month.toLowerCase() === monthFilter.toLowerCase();
      return matchesSearch && matchesYear && matchesShow && matchesMonth;
    });
  }, [events, searchQuery, yearFilter, showFilter, monthFilter]);

  // Active / Selected event metadata
  const selectedEvent = useMemo(() => {
    const found = events.find(ev => ev.id === selectedId);
    return found || filteredEvents[0] || events[0];
  }, [events, selectedId, filteredEvents]);

  // Update selectedId if selectedId is not in filtered list
  useEffect(() => {
    if (filteredEvents.length > 0) {
      const exists = filteredEvents.some(e => e.id === selectedId);
      if (!exists) {
        setSelectedId(filteredEvents[0].id);
      }
    }
  }, [filteredEvents, selectedId]);

  // Helper lists for secondary category tracks
  const rawEvents = useMemo(() => events.filter(e => e.show === 'RAW'), [events]);
  const smackdownEvents = useMemo(() => events.filter(e => e.show === 'SmackDown'), [events]);
  const ppvEvents = useMemo(() => events.filter(e => e.show === 'PPV'), [events]);
  
  // Continue watching simulation (e.g. events that have progress or watched=true)
  const continueWatching = useMemo(() => {
    return events.filter(e => {
      const progressed = localStorage.getItem(`wwe-chrono-progress-${e.id}`);
      return (progressed && parseFloat(progressed) < 99) || e.watched;
    });
  }, [events, playingId]);

  // PPV del mes (featured spotlight matching selected show's month dynamically)
  const featuredPPV = useMemo(() => {
    if (!selectedEvent) {
      return events.find(e => e.show === 'PPV') || events[0];
    }
    
    // 1. Try to find a PPV from the SAME month and year as the selected event
    const sameMonthYearPPV = events.find(e => 
      e.show === 'PPV' && 
      e.month.toLowerCase() === selectedEvent.month.toLowerCase() && 
      e.year === selectedEvent.year
    );
    if (sameMonthYearPPV) {
      return sameMonthYearPPV;
    }

    // 2. Try to find a PPV from the SAME month of any year
    const sameMonthAnyYearPPV = events.find(e => 
      e.show === 'PPV' && 
      e.month.toLowerCase() === selectedEvent.month.toLowerCase()
    );
    if (sameMonthAnyYearPPV) {
      return sameMonthAnyYearPPV;
    }

    // 3. Try to find any PPV from the same year
    const sameYearPPV = events.find(e => 
      e.show === 'PPV' && e.year === selectedEvent.year
    );
    if (sameYearPPV) {
      return sameYearPPV;
    }

    // Default fallback
    return events.find(e => e.show === 'PPV') || events[0];
  }, [events, selectedEvent]);

  // Year lists for filters
  const availableYears = useMemo(() => {
    const yrs = events.map(e => e.year);
    return Array.from(new Set(yrs)).sort((a: number, b: number) => b - a);
  }, [events]);

  // Database operations
  const handleAddEvent = (newEvent: WWEEvent) => {
    const updated = [newEvent, ...events];
    setEvents(updated);
    localStorage.setItem('wwe-chrono-events', JSON.stringify(updated));
    setSelectedId(newEvent.id);
  };

  const handleDeleteEvent = (id: string) => {
    // Prevent delete from causing crash
    const updated = events.filter(e => e.id !== id);
    setEvents(updated);
    localStorage.setItem('wwe-chrono-events', JSON.stringify(updated));
    if (selectedId === id && updated.length > 0) {
      setSelectedId(updated[0].id);
    }
  };

  const handleResetEvents = () => {
    localStorage.removeItem('wwe-chrono-events');
    // Also clear watched progress
    events.forEach(e => localStorage.removeItem(`wwe-chrono-progress-${e.id}`));
    setEvents(INITIAL_WWE_EVENTS);
    setSelectedId(INITIAL_WWE_EVENTS[0].id);
  };

  const toggleWatched = (id: string, watchedState?: boolean) => {
    const updated = events.map(ev => {
      if (ev.id === id) {
        return { ...ev, watched: watchedState !== undefined ? watchedState : !ev.watched };
      }
      return ev;
    });
    setEvents(updated);
    localStorage.setItem('wwe-chrono-events', JSON.stringify(updated));
  };

  // Keyboard navigation & remote controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (playingId || isAdminOpen) return; // ignore when player or panel is open

      const currentIndex = filteredEvents.findIndex(ev => ev.id === selectedId);
      if (currentIndex === -1) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % filteredEvents.length;
        setSelectedId(filteredEvents[nextIndex].id);
        scrollMainTileIntoView(nextIndex);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + filteredEvents.length) % filteredEvents.length;
        setSelectedId(filteredEvents[prevIndex].id);
        scrollMainTileIntoView(prevIndex);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveRow('sub-rows');
        // Scroll down page smoothly
        window.scrollTo({ top: 380, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveRow('main');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        setPlayingId(selectedId);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setIsDetailOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, filteredEvents, playingId, isAdminOpen]);

  // Center horizontal carousel tile focus smoothly
  const scrollMainTileIntoView = (index: number) => {
    if (carouselRef.current) {
      const children = carouselRef.current.children;
      if (children[index]) {
        const child = children[index] as HTMLElement;
        const containerWidth = carouselRef.current.offsetWidth;
        const childOffset = child.offsetLeft;
        const childWidth = child.offsetWidth;
        
        // Compute snap point centering focused tile
        const scrollPosition = childOffset - (containerWidth / 2) + (childWidth / 2);
        carouselRef.current.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  // Autoplay chronological workflow index transitions
  const currentChronoIdx = events.findIndex(e => e.id === playingId);
  const nextChronoEvent = currentChronoIdx !== -1 && currentChronoIdx + 1 < events.length ? events[currentChronoIdx + 1] : undefined;
  const prevChronoEvent = currentChronoIdx !== -1 && currentChronoIdx - 1 >= 0 ? events[currentChronoIdx - 1] : undefined;

  const handleNextChronological = () => {
    if (nextChronoEvent) {
      setPlayingId(nextChronoEvent.id);
    }
  };

  const handlePrevChronological = () => {
    if (prevChronoEvent) {
      setPlayingId(prevChronoEvent.id);
    }
  };

  // Fast filter reset
  const resetFilters = () => {
    setSearchQuery('');
    setYearFilter('ALL');
    setShowFilter('ALL');
    setMonthFilter('ALL');
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-[#107C10] flex flex-col font-sans transition-colors duration-1000 overflow-x-hidden selection:text-white">
      
      {/* 1. CINEMATIC RADIAL OVERLAY & KEN BURNS BACKDROP */}
      {!playingId && (
        <div className="absolute top-0 left-0 w-full h-[620px] -z-10 overflow-hidden pointer-events-none">
          <AnimatePresence mode="popLayout">
            {selectedEvent && (
              <motion.div
                key={selectedEvent.id}
                initial={{ opacity: 0, scale: 1.15 }}
                animate={{ opacity: 0.55, scale: 1.05 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${selectedEvent.background})`
                }}
              />
            )}
          </AnimatePresence>
          
          {/* Gradients to fade to dark color scheme */}
          <div className="absolute inset-0 bg-radial-at-t from-[#151922]/0 via-[#0b0c0f]/80 to-[#0b0c0f]" />
          <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#0b0c0f] to-transparent" />
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/55 to-transparent" />
        </div>
      )}

      {/* 2. MAIN XBOX HEADER BAR */}
      {!playingId && (
        <header className="relative w-full z-20 px-6 py-4 flex items-center justify-between border-b border-white/5 bg-black/25 backdrop-blur-md">
          
          {/* Left Side: Gamer Info */}
          <div className="flex items-center gap-4">
            <div className="relative group cursor-pointer" onClick={() => {
              const newName = prompt("Ingresa tu Gamertag:", gamertag);
              if (newName) setGamertag(newName);
            }}>
              <div className="w-12 h-12 rounded-full ring-2 ring-[#107C10] ring-offset-2 ring-offset-[#0F1115] overflow-hidden group-hover:scale-105 transition-transform duration-350 bg-[#151922] flex items-center justify-center">
                <img 
                  src="https://www.seekpng.com/png/detail/314-3149979_wwe-logo-wwf-lucha-libre-logo.png" 
                  alt="Avatar" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#107C10] w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-[#0F1115]">
                <span className="text-[7px] font-bold">X</span>
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span id="gamertag-display" className="font-bold text-sm tracking-tight hover:text-[#107C10] transition-colors cursor-pointer" onClick={() => {
                  const newName = prompt("Ingresa tu Gamertag:", gamertag);
                  if (newName) setGamertag(newName);
                }}>
                  {gamertag}
                </span>
                <span className="text-[9px] bg-zinc-800 text-zinc-300 px-1 py-0.5 rounded font-bold font-mono tracking-wider">ULTIMATE</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-0.5">
                <span className="text-[#107C10] font-bold">G</span>
                <span className="font-bold font-mono text-zinc-300">{gamerscore.toLocaleString()}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-[#107C10] flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#107C10] animate-pulse"></span>
                  LIVE
                </span>
              </div>
            </div>
          </div>

          {/* Center: System Quick Nav */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-zinc-400">
            <button 
              onClick={() => resetFilters()} 
              className={`cursor-pointer uppercase tracking-wider text-xs pb-1 transition-all outline-none border-b-2 ${
                showFilter === 'ALL' && yearFilter === 'ALL' 
                  ? 'text-white border-[#107C10] font-bold opacity-100' 
                  : 'border-transparent opacity-60 hover:opacity-100 hover:text-white'
              }`}
            >
              Inicio Xbox
            </button>
            <button 
              onClick={() => setShowFilter('PPV')} 
              className={`cursor-pointer uppercase tracking-wider text-xs pb-1 transition-all outline-none border-b-2 ${
                showFilter === 'PPV' 
                  ? 'text-white border-[#107C10] font-bold opacity-100' 
                  : 'border-transparent opacity-60 hover:opacity-100 hover:text-white'
              }`}
            >
              Eventos PPV
            </button>
            <button 
              onClick={() => setShowFilter('RAW')} 
              className={`cursor-pointer uppercase tracking-wider text-xs pb-1 transition-all outline-none border-b-2 ${
                showFilter === 'RAW' 
                  ? 'text-white border-[#107C10] font-bold opacity-100' 
                  : 'border-transparent opacity-60 hover:opacity-100 hover:text-white'
              }`}
            >
              RAW
            </button>
            <button 
              onClick={() => setShowFilter('SmackDown')} 
              className={`cursor-pointer uppercase tracking-wider text-xs pb-1 transition-all outline-none border-b-2 ${
                showFilter === 'SmackDown' 
                  ? 'text-white border-[#107C10] font-bold opacity-100' 
                  : 'border-transparent opacity-60 hover:opacity-100 hover:text-white'
              }`}
            >
              SmackDown
            </button>
          </div>

          {/* Right Side: Indicators/Time */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
              <input
                type="text"
                placeholder="Buscar luchas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-900/80 border border-zinc-800 text-xs px-3 pl-8 py-2 rounded-full focus:outline-none focus:border-[#107C10] w-36 md:w-56 transition-all focus:w-64"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs"
                >
                  x
                </button>
              )}
            </div>

            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-2 cursor-pointer bg-zinc-900 border border-zinc-800 rounded-full hover:border-[#107C10] hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all"
              title="Agregar Contenido (Xbox Settings)"
            >
              <Settings size={16} />
            </button>
            
            <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-sm border-l border-zinc-800 pl-4">
              <span className="text-[10px]">🔋</span>
              <span className="text-zinc-200 font-bold">{clockStr}</span>
            </div>
          </div>
        </header>
      )}

      {playingId ? (
        <VideoPlayer
          event={events.find(e => e.id === playingId) || selectedEvent}
          nextEvent={nextChronoEvent}
          onClose={() => setPlayingId(null)}
          onNextEvent={handleNextChronological}
          onPrevEvent={handlePrevChronological}
          hasPrevEvent={!!prevChronoEvent}
          onMarkAsWatched={toggleWatched}
        />
      ) : (
        <>
          {/* QUICK FLOATING GREETING BANNER */}
          <div className="px-6 pt-5 flex flex-wrap items-center justify-between gap-4 z-10">
        

        {/* TIME-WARP CHRONOLOGY QUICK FILTERS ROW */}
        {/* Desktop Filters */}
        <div className="hidden md:flex items-center gap-2 flex-wrap text-xs">
          <div className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-lg text-zinc-300">
            <Calendar size={13} className="text-[#107C10]" />
            <span className="font-semibold select-none">Año:</span>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
              className="bg-zinc-950 text-white font-bold ml-1 rounded py-0.5 px-1.5 focus:outline-none cursor-pointer border-none"
            >
              <option value="ALL">Todos los años</option>
              {availableYears.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-lg text-zinc-300">
            <Calendar size={13} className="text-[#107C10]" />
            <span className="font-semibold select-none">Mes:</span>
            <select
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
              className="bg-zinc-950 text-white font-bold ml-1 rounded py-0.5 px-1.5 focus:outline-none cursor-pointer border-none"
            >
              <option value="ALL">Todos los meses</option>
              {SPANISH_MONTHS.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-lg text-zinc-300">
            <ListFilter size={13} className="text-[#107C10]" />
            <span className="font-semibold select-none">Show:</span>
            <select
              value={showFilter}
              onChange={(e) => setShowFilter(e.target.value as WWEEvent['show'] | 'ALL')}
              className="bg-zinc-950 text-white font-bold ml-1 rounded py-0.5 px-1.5 focus:outline-none cursor-pointer border-none"
            >
              <option value="ALL">Todo</option>
              <option value="RAW">RAW</option>
              <option value="SmackDown">SmackDown</option>
              <option value="PPV">PPVs Especiales</option>
            </select>
          </div>

          {(yearFilter !== 'ALL' || showFilter !== 'ALL' || monthFilter !== 'ALL' || searchQuery) && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-[11px] font-bold text-red-400 bg-red-950/20 border border-red-900/30 px-2.5 py-1.5 rounded-lg hover:bg-red-950/50 transition-colors"
            >
              <RotateCcw size={11} />
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Mobile Hamburger Filter Menu */}
        <div className="md:hidden flex flex-col w-full z-20">
          <div className="flex items-center justify-between w-full bg-zinc-900/95 border border-zinc-800 rounded-lg p-2.5">
            <div className="flex items-center gap-2 text-zinc-300 text-xs font-semibold">
              <span className="text-[#107C10]">●</span>
              <span>Filtros Activos:</span>
              <span className="text-zinc-400 font-mono text-[11px]">
                {yearFilter !== 'ALL' ? yearFilter : 'Anual'} / {monthFilter !== 'ALL' ? monthFilter.substring(0,3) : 'Mensual'} / {showFilter !== 'ALL' ? showFilter : 'Todos'}
              </span>
            </div>
            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-[#107C10] border border-zinc-700/80 focus:outline-none flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Toggle filters menu"
            >
              {isMobileFiltersOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {isMobileFiltersOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden bg-zinc-950/98 border-x border-b border-zinc-800 rounded-b-lg p-4 flex flex-col gap-3 mt-1 shadow-xl"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider">Filtrar por Año:</span>
                  <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-2 rounded text-zinc-300">
                    <Calendar size={14} className="text-[#107C10]" />
                    <select
                      value={yearFilter}
                      onChange={(e) => setYearFilter(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                      className="bg-transparent text-white font-bold ml-1 rounded py-0.5 focus:outline-none cursor-pointer border-none w-full"
                    >
                      <option value="ALL">Todos los años</option>
                      {availableYears.map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider">Filtrar por Mes:</span>
                  <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-2 rounded text-zinc-300">
                    <Calendar size={14} className="text-[#107C10]" />
                    <select
                      value={monthFilter}
                      onChange={(e) => setMonthFilter(e.target.value)}
                      className="bg-transparent text-white font-bold ml-1 rounded py-0.5 focus:outline-none cursor-pointer border-none w-full"
                    >
                      <option value="ALL">Todos los meses</option>
                      {SPANISH_MONTHS.map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider">Filtrar por Show:</span>
                  <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-2 rounded text-zinc-300">
                    <ListFilter size={14} className="text-[#107C10]" />
                    <select
                      value={showFilter}
                      onChange={(e) => setShowFilter(e.target.value as WWEEvent['show'] | 'ALL')}
                      className="bg-transparent text-white font-bold ml-1 rounded py-0.5 focus:outline-none cursor-pointer border-none w-full"
                    >
                      <option value="ALL">Todo</option>
                      <option value="RAW">RAW</option>
                      <option value="SmackDown">SmackDown</option>
                      <option value="PPV">PPVs Especiales</option>
                    </select>
                  </div>
                </div>

                {(yearFilter !== 'ALL' || showFilter !== 'ALL' || monthFilter !== 'ALL' || searchQuery) && (
                  <button
                    onClick={() => {
                      resetFilters();
                      setIsMobileFiltersOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 w-full text-xs font-bold text-red-400 bg-red-950/30 border border-red-900/50 py-2.5 rounded hover:bg-red-950/60 transition-colors cursor-pointer"
                  >
                    <RotateCcw size={13} />
                    Limpiar filtros
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. HERO VIEWPORT (TILE XBOX PRINCIPAL ACTIVE PANEL) */}
      <main className="px-6 py-4 grid grid-cols-1 xl:grid-cols-12 gap-8 z-10 items-start">
        
        {/* Selected Highlight Detail (Large Box on Left) */}
        <div className="xl:col-span-5 flex flex-col justify-between bg-black/60 border-2 border-[#107C10] rounded-lg p-6 backdrop-blur-md shadow-[0_0_30px_rgba(16,124,16,0.3)] space-y-6">
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider text-white ${
                selectedEvent.show === 'RAW' ? 'bg-red-700' :
                selectedEvent.show === 'SmackDown' ? 'bg-blue-700' :
                selectedEvent.show === 'PPV' ? 'bg-purple-700' : 'bg-[#107C10]'
              }`}>
                {selectedEvent.show}
              </span>
              <span className="text-xs text-zinc-400 font-mono font-bold tracking-tight">
                {selectedEvent.date}
              </span>
              {selectedEvent.watched && (
                <span className="flex items-center gap-1 text-[10px] font-bold text-[#107C10] bg-[#107C10]/10 px-2 py-0.5 rounded border border-[#107C10]/20">
                  ✔ VISTO
                </span>
              )}
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold font-display leading-tight text-white tracking-tight">
                {selectedEvent.title}
              </h2>
              {selectedEvent.season && (
                <div className="text-xs font-semibold text-[#107C10] font-mono tracking-wider mt-1 uppercase">
                  {selectedEvent.season} • {selectedEvent.episode || "Especial"}
                </div>
              )}
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-sans line-clamp-4">
              {selectedEvent.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-zinc-400 pt-1 font-mono">
              <div className="flex items-center gap-1">
                <Clock size={12} className="text-[#107C10]" />
                <span>{selectedEvent.duration}</span>
              </div>
              <div>•</div>
              <div>Año {selectedEvent.year}</div>
              <div>•</div>
              <div>Categoría: {selectedEvent.show}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              onClick={() => setPlayingId(selectedEvent.id)}
              className="bg-white text-black hover:bg-zinc-200 px-6 py-2 rounded-full font-extrabold flex items-center gap-1.5 transition-all text-xs cursor-pointer shadow-lg hover:scale-103 focus:outline-none uppercase tracking-wider"
            >
              <Play size={14} fill="currentColor" />
              ▶ Reproducir
            </button>

            <button
              onClick={() => setIsDetailOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 uppercase tracking-wider"
            >
              <Info size={14} />
              Detalles
            </button>

            <button
              onClick={() => toggleWatched(selectedEvent.id)}
              className={`p-2.5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
                selectedEvent.watched 
                  ? 'bg-[#107C10] text-white shadow-[0_0_15px_rgba(16,124,16,0.6)]' 
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white'
              }`}
              title={selectedEvent.watched ? 'Marcar como no visto' : 'Marcar como visto'}
              aria-label={selectedEvent.watched ? 'Marcar como no visto' : 'Marcar como visto'}
            >
              <Check size={16} strokeWidth={selectedEvent.watched ? 3.5 : 2} />
            </button>
          </div>
        </div>

        {/* 4. INFINITE HORIZONTAL CHRONOLOGICAL CAROUSEL (Right Side) */}
        <div className="xl:col-span-7 flex flex-col justify-start relative select-none">
          {/* Header Row for Carousel Navigation */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#107C10] font-mono">
              Sucesión Cronológica de Eventos ({filteredEvents.length} encontrados)
            </span>
            <div className="flex gap-1.5">
              <button 
                onClick={() => {
                  const currentIndex = filteredEvents.findIndex(ev => ev.id === selectedId);
                  if (currentIndex > 0) {
                    setSelectedId(filteredEvents[currentIndex - 1].id);
                    scrollMainTileIntoView(currentIndex - 1);
                  }
                }}
                className="p-1 px-2.5 bg-zinc-900/60 hover:bg-zinc-800 rounded border border-zinc-800/40 text-zinc-300 transition-colors"
                title="Anterior"
              >
                <ChevronLeft size={14} />
              </button>
              <button 
                onClick={() => {
                  const currentIndex = filteredEvents.findIndex(ev => ev.id === selectedId);
                  if (currentIndex < filteredEvents.length - 1) {
                    setSelectedId(filteredEvents[currentIndex + 1].id);
                    scrollMainTileIntoView(currentIndex + 1);
                  }
                }}
                className="p-1 px-2.5 bg-zinc-900/60 hover:bg-zinc-800 rounded border border-zinc-800/40 text-zinc-300 transition-colors"
                title="Siguiente"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="h-64 rounded-2xl bg-zinc-900/30 border border-dashed border-zinc-800 flex flex-col items-center justify-center text-center p-6 space-y-3">
              <span className="text-3xl">📭</span>
              <p className="text-sm font-bold text-zinc-300">Ningún evento coincide con el filtro seleccionado</p>
              <p className="text-xs text-zinc-500">Prueba limpiando los filtros rápidos o realizando otra búsqueda.</p>
              <button 
                onClick={resetFilters} 
                className="text-xs bg-zinc-800 text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg border border-zinc-700 transition"
              >
                Restaurar catálogo
              </button>
            </div>
          ) : (
            /* Horizontal Slider list grid */
            <div 
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar custom-scroll scroll-smooth"
            >
              {filteredEvents.map((ev, index) => {
                const isFocused = ev.id === selectedId;
                return (
                  <motion.div
                    key={ev.id}
                    onClick={() => setSelectedId(ev.id)}
                    className="snap-start shrink-0 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  >
                    {/* Active Poster format card (scale up if focused) */}
                    <div 
                      className={`relative w-40 md:w-44 h-64 md:h-72 rounded-xl overflow-hidden transition-all duration-300 border-2 select-none ${
                        isFocused 
                          ? 'border-[#107C10] scale-[1.03] shadow-[0_0_20px_3px_rgba(16,124,16,0.3)] z-10 ring-2 ring-[#107C10]/30' 
                          : 'border-zinc-800/40 grayscale-30 hover:grayscale-0'
                      }`}
                    >
                      <img 
                        src={ev.thumbnail} 
                        alt={ev.title} 
                        className="w-full h-full object-cover select-none pointer-events-none" 
                        referrerPolicy="no-referrer"
                      />

                      {/* Header show tag */}
                      <div className="absolute top-2 left-2 flex items-center gap-1 shadow-md z-10">
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded tracking-wider text-white ${
                          ev.show === 'RAW' ? 'bg-red-700' :
                          ev.show === 'SmackDown' ? 'bg-blue-700' :
                          ev.show === 'PPV' ? 'bg-purple-700' : 'bg-zinc-800'
                        }`}>
                          {ev.show}
                        </span>
                      </div>

                      {/* Watched complete badge */}
                      {ev.watched && (
                        <div className="absolute top-2 right-2 p-1 bg-[#107C10] rounded-full text-white shadow-lg z-10">
                          <Check size={9} strokeWidth={4} />
                        </div>
                      )}

                      {/* Dark layout cover on card base */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 pt-12 flex flex-col justify-end text-left">
                        <span className="text-[10px] text-[#107C10] font-mono font-bold tracking-tight">
                          {ev.date.split('-')[2]} / {ev.month.substring(0,3)} / {ev.year}
                        </span>
                        <h4 className="font-bold text-sm text-zinc-100 leading-tight truncate mt-0.5 group-hover:text-white">
                          {ev.title}
                        </h4>
                        <p className="text-[9px] text-zinc-400 font-mono mt-0.5 truncate">
                          {ev.season || ev.duration}
                        </p>
                      </div>
                    </div>

                    {/* Simple focused bottom indicator line */}
                    {isFocused && (
                      <motion.div 
                        layoutId="indicator"
                        className="h-1 bg-[#107C10] w-[80%] mx-auto mt-2 rounded-full" 
                        transition={{ type: 'spring', damping: 15 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* 5. SECCIONES INFERIORES (XBOX GRID BENTO ROWS) */}
      <section className="px-6 py-8 space-y-10 z-10 relative bg-[#0F1115]/45 border-t border-white/[0.02]">
        
        {/* Dynamic track: PPV DEL MES & CONTINUAR VIENDO (split row) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* PPV DEL MES (Featured spot box 1) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <h3 className="text-sm uppercase font-extrabold tracking-wider text-zinc-300 font-display flex items-center gap-1.5">
              <Award className="text-yellow-500" size={16} />
              PPV Destacado del Mes
            </h3>
            
            <div 
              onClick={() => setSelectedId(featuredPPV.id)}
              className="group relative min-h-[180px] rounded-2xl overflow-hidden border-2 border-zinc-800/40 hover:border-[#107C10] cursor-pointer shadow-lg hover:shadow-black/60 transition-all flex items-center p-4 gap-4"
            >
              {/* Blurred high-fidelity background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={featuredPPV.background} 
                  alt="" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-30 blur-sm scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-950/45" />
              </div>

              {/* Floating Majestic Mini-Poster on the Left */}
              <div className="relative z-10 shrink-0 select-none">
                <img 
                  src={featuredPPV.thumbnail} 
                  alt={featuredPPV.title} 
                  className="h-[140px] w-[95px] object-cover rounded-lg shadow-black/80 shadow-2xl border border-white/20 transition-transform group-hover:scale-103" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info on the Right */}
              <div className="relative z-10 text-left flex-1 min-w-0">
                <span className="text-[9px] uppercase font-bold tracking-widest text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                  RECOMENDACIÓN DEL MES ({featuredPPV.month})
                </span>
                <h4 className="text-xl font-black font-display text-white tracking-tight mt-1 group-hover:text-yellow-500 transition-colors truncate">
                  {featuredPPV.title}
                </h4>
                <p className="text-xs text-zinc-300 mt-1 line-clamp-3 leading-relaxed">
                  {featuredPPV.description}
                </p>
                <div className="flex items-center gap-2 mt-2 text-[10px] font-mono text-zinc-400">
                  <span>{featuredPPV.duration}</span>
                  <span>•</span>
                  <span>{featuredPPV.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTINUAR VIENDO */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <h3 className="text-sm uppercase font-extrabold tracking-wider text-zinc-300 font-display flex items-center gap-1.5">
              <History className="text-[#107C10]" size={16} />
              Continuar Viendo ({continueWatching.length})
            </h3>

            {continueWatching.length === 0 ? (
              <div className="flex-1 h-[180px] bg-zinc-900/20 border border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-center p-6 text-zinc-400 text-xs">
                <span>🛸</span>
                <p className="font-bold mt-1">Línea de tiempo virgen</p>
                <p className="text-zinc-500 text-[10px]">Los videos que marques como vistos o comiences a reproducir se guardarán aquí.</p>
              </div>
            ) : (
              <div className="flex-1 overflow-x-auto no-scrollbar custom-scroll flex gap-4 h-[180px] pb-1">
                {continueWatching.map(ev => {
                  const progressSaved = localStorage.getItem(`wwe-chrono-progress-${ev.id}`);
                  const progressPct = progressSaved ? parseFloat(progressSaved) : (ev.watched ? 100 : 0);

                  return (
                    <div 
                      key={ev.id}
                      onClick={() => {
                        setSelectedId(ev.id);
                        setPlayingId(ev.id);
                      }}
                      className="shrink-0 w-64 h-full bg-zinc-900/60 border border-zinc-800/60 rounded-xl overflow-hidden cursor-pointer hover:border-[#107C10] transition-colors flex flex-col justify-between p-3 group relative"
                    >
                      <img 
                        src={ev.background} 
                        alt="" 
                        className="absolute inset-0 w-full h-full object-cover opacity-15" 
                      />
                      <div className="flex items-start justify-between relative z-10">
                        <span className="text-[8px] font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">
                          {ev.show}
                        </span>
                        {ev.watched && (
                          <span className="text-[8px] bg-[#107C10]/10 border border-[#107C10]/30 text-[#107C10] px-1.5 py-0.5 rounded font-bold">
                            COMPLETADO
                          </span>
                        )}
                      </div>

                      <div className="relative z-10 text-left">
                        <h4 className="font-bold text-xs text-white line-clamp-1 group-hover:text-[#107C10] transition-colors">
                          {ev.title}
                        </h4>
                        <p className="text-[10px] text-zinc-400 mt-0.5 font-mono">
                          {ev.date}
                        </p>

                        {/* Progress slider bar simulation */}
                        <div className="mt-2.5 space-y-1">
                          <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-[#107C10]" style={{ width: `${progressPct}%` }} />
                          </div>
                          <div className="flex justify-between text-[8px] text-zinc-500 font-mono">
                            <span>Visto {progressPct.toFixed(0)}%</span>
                            <span>{ev.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* BRIGHT WWE SHOWROWS */}
        
        {/* ROW: RAW */}
        {rawEvents.length > 0 && (
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between border-b border-white/[0.03] pb-1.5 text-left">
              <h3 className="text-sm font-bold font-display uppercase tracking-wider text-red-500 flex items-center gap-2">
                <span className="w-1.5 h-3 bg-red-600 rounded"></span>
                RAW Classic Saga
              </h3>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar custom-scroll pb-2">
              {rawEvents.map(ev => (
                <div 
                  key={ev.id}
                  onClick={() => setSelectedId(ev.id)}
                  className={`w-40 md:w-44 shrink-0 cursor-pointer p-2 bg-zinc-900/45 rounded-lg border flex flex-col gap-2 transition-colors ${selectedId === ev.id ? 'border-[#107C10]' : 'border-zinc-800/40 hover:border-zinc-700'}`}
                >
                  <img src={ev.background} alt="" className="h-20 w-full object-cover rounded bg-zinc-800" />
                  <div className="text-left leading-snug">
                    <p className="font-bold text-xs line-clamp-1 text-white">{ev.title}</p>
                    <p className="text-[9px] text-zinc-500 mt-0.5">{ev.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROW: SMACKDOWN */}
        {smackdownEvents.length > 0 && (
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between border-b border-white/[0.03] pb-1.5 text-left">
              <h3 className="text-sm font-bold font-display uppercase tracking-wider text-blue-500 flex items-center gap-2">
                <span className="w-1.5 h-3 bg-blue-600 rounded"></span>
                SmackDown Golden Legacy
              </h3>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar custom-scroll pb-2">
              {smackdownEvents.map(ev => (
                <div 
                  key={ev.id}
                  onClick={() => setSelectedId(ev.id)}
                  className={`w-40 md:w-44 shrink-0 cursor-pointer p-2 bg-zinc-900/45 rounded-lg border flex flex-col gap-2 transition-colors ${selectedId === ev.id ? 'border-[#107C10]' : 'border-zinc-800/40 hover:border-zinc-700'}`}
                >
                  <img src={ev.background} alt="" className="h-20 w-full object-cover rounded bg-zinc-800" />
                  <div className="text-left leading-snug">
                    <p className="font-bold text-xs line-clamp-1 text-white">{ev.title}</p>
                    <p className="text-[9px] text-zinc-500 mt-0.5">{ev.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}







      </section>

      {/* 6. IMMERSIVE SIDE DETAILS DRAWER */}
      <AnimatePresence>
        {isDetailOpen && (
          <div className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm flex justify-start">
            {/* Click mask closes */}
            <div className="absolute inset-0" onClick={() => setIsDetailOpen(false)} />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-lg bg-[#151922] border-r border-zinc-800 p-8 flex flex-col justify-between h-full shadow-2xl z-20 text-left"
            >
              {/* Cover visual banner on top */}
              <div className="space-y-6 overflow-y-auto no-scrollbar pb-6 flex-1 pr-1">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#107C10] bg-[#107C10]/10 border border-[#107C10]/20 px-2 py-0.5 rounded">
                    WWE Chronology
                  </span>
                  <button 
                    onClick={() => setIsDetailOpen(false)}
                    className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 cursor-pointer text-zinc-300 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg border border-zinc-800">
                  <img src={selectedEvent.background} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
                    <span className="text-xl font-bold font-display">{selectedEvent.title}</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs leading-relaxed">
                  <h3 className="text-sm font-semibold font-display text-zinc-200">Sinopsis del Evento</h3>
                  <p className="text-zinc-400">{selectedEvent.description}</p>
                </div>

                {/* Technical data table */}
                <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4 space-y-2.5 text-xs">
                  <h4 className="font-bold text-zinc-300 font-display mb-1">Información Archivada</h4>
                  <div className="flex justify-between border-b border-zinc-800 pb-1.5">
                    <span className="text-zinc-400">Marca / Show:</span>
                    <span className="font-bold text-white font-mono">{selectedEvent.show}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-1.5">
                    <span className="text-zinc-400">Fecha de Lanzamiento:</span>
                    <span className="font-bold text-white font-mono">{selectedEvent.date}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-1.5">
                    <span className="text-zinc-400">Temporada & Cap:</span>
                    <span className="font-bold text-white font-mono">{selectedEvent.season || 'Especial'} {selectedEvent.episode ? `• ${selectedEvent.episode}` : ''}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-1.5">
                    <span className="text-zinc-400">Duración Completa:</span>
                    <span className="font-bold text-white font-mono">{selectedEvent.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Estado de reproducción:</span>
                    <span className={`font-bold ${selectedEvent.watched ? 'text-[#107C10]' : 'text-zinc-500'}`}>
                      {selectedEvent.watched ? 'Visto' : 'Pendiente'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom instant play */}
              <div className="pt-4 border-t border-zinc-800">
                <button
                  onClick={() => {
                    setIsDetailOpen(false);
                    setPlayingId(selectedEvent.id);
                  }}
                  className="w-full bg-[#107C10] hover:bg-[#159c15] text-white p-3 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                >
                  <Play size={13} fill="currentColor" />
                  Iniciar Reproducción de Video
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>



      {/* 8. ADMIN DRAWER (AGREGAR CONTENIDO) */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        events={events}
        onAddEvent={handleAddEvent}
        onDeleteEvent={handleDeleteEvent}
        onResetEvents={handleResetEvents}
      />

      {/* SYSTEMFOOTER (AUTHENTIC XBOX RAIL INDICATOR WITH PROFESSIONAL POLISH STATS) */}
      <footer className="w-full bg-black/40 border-t border-white/5 py-6 font-sans mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-left mb-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Colección Destacada</span>
            <span className="text-xs font-semibold text-[#107C10] hover:underline cursor-pointer" onClick={() => { setShowFilter('PPV'); setSelectedId('wwe-rr-2005'); }}>Ruta a WrestleMania 21</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Actividad Reciente</span>
            <span className="text-xs font-semibold text-zinc-200 truncate" title={selectedEvent?.title}>{selectedEvent?.title || "Survivor Series 2004"}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Continuar Reproduciendo</span>
            <span className="text-xs font-semibold text-zinc-200 truncate">{continueWatching[0]?.title || "RAW #606"}</span>
          </div>
          <div className="flex flex-col gap-1 md:text-right">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Almacenamiento Cloud</span>
            <span className="text-xs font-semibold text-zinc-200">4.2 TB Disponibles</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-4 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] text-zinc-500 font-mono">
          <p>© 2026 WWE CHRONO NETWORK on Xbox Live. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5 select-none">
            <span className="text-[#107C10]">🎮</span> Presiona <span className="bg-zinc-800 text-zinc-300 px-1 py-0.5 rounded font-bold font-sans">A</span> para jugar • <span className="bg-zinc-800 text-zinc-300 px-1 py-0.5 rounded font-bold font-sans">B</span> para cancelar • <span className="text-[#107C10]">● ACTIVE</span>
          </p>
        </div>
      </footer>
        </>
      )}
    </div>
  );
}
