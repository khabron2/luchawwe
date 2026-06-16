import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Trash2, RotateCcw, AlertTriangle, FileText, Check, Sparkles } from 'lucide-react';
import { WWEEvent } from '../data';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  events: WWEEvent[];
  onAddEvent: (newEvent: WWEEvent) => void;
  onDeleteEvent: (id: string) => void;
  onResetEvents: () => void;
}

const TEMPLATE_THUMBNAILS = [
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop", // Ring
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop", // Athlete Spotlight
  "https://images.unsplash.com/photo-1561532734-181145176a5e?q=80&w=600&auto=format&fit=crop"  // Stadium
];

const TEMPLATE_BACKGROUNDS = [
  "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop", // Ring Dark Full
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop", // Blue Stage
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"  // Big Screen
];

export default function AdminPanel({
  isOpen,
  onClose,
  events,
  onAddEvent,
  onDeleteEvent,
  onResetEvents
}: AdminPanelProps) {
  const [title, setTitle] = useState('');
  const [show, setShow] = useState<WWEEvent['show']>('RAW');
  const [date, setDate] = useState('2005-05-01');
  const [season, setSeason] = useState('');
  const [episode, setEpisode] = useState('');
  const [duration, setDuration] = useState('2h 10m');
  const [thumbnail, setThumbnail] = useState(TEMPLATE_THUMBNAILS[0]);
  const [background, setBackground] = useState(TEMPLATE_BACKGROUNDS[0]);
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/Z0o2XNizW_Y');
  const [description, setDescription] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  // Quick Preset auto-completer
  const applyPreset = (presetType: 'raw' | 'smackdown' | 'ppv') => {
    if (presetType === 'raw') {
      setTitle('RAW #620');
      setShow('RAW');
      setDate('2005-04-11');
      setSeason('Temporada 13');
      setEpisode('Episodio 15');
      setDuration('1h 45m');
      setThumbnail(TEMPLATE_THUMBNAILS[0]);
      setBackground(TEMPLATE_BACKGROUNDS[0]);
      setVideoUrl('https://www.youtube.com/embed/Z6fH_hI5G7A');
      setDescription('Un episodio repleto de emoción tras WrestleMania 21. Batista consolida su posición como campeón absoluto mientras Shawn Michaels busca saldar cuentas pendientes.');
    } else if (presetType === 'smackdown') {
      setTitle('SmackDown #290');
      setShow('SmackDown');
      setDate('2005-04-14');
      setSeason('Temporada 7');
      setEpisode('Episodio 14');
      setDuration('1h 32m');
      setThumbnail(TEMPLATE_THUMBNAILS[2]);
      setBackground(TEMPLATE_BACKGROUNDS[1]);
      setVideoUrl('https://www.youtube.com/embed/Wlh6aZ9f688');
      setDescription('John Cena estrena el nuevo e increíble cinturón giratorio (WWE Spinner Championship) desatando la euforia y el asombro del público de SmackDown y la envidia de JBL.');
    } else {
      setTitle('Judgment Day 2005');
      setShow('PPV');
      setDate('2005-05-22');
      setSeason('PPV Especial');
      setEpisode('Judgment Day');
      setDuration('2h 55m');
      setThumbnail(TEMPLATE_THUMBNAILS[1]);
      setBackground(TEMPLATE_BACKGROUNDS[2]);
      setVideoUrl('https://www.youtube.com/embed/Z0o2XNizW_Y');
      setDescription('Un sangriento e histórico combate de "I Quit" entre John Cena y John Bradshaw Layfield (JBL) que lleva la resistencia humana hasta límites insospechados.');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title) return;

    // Extract year and month
    const dateObj = new Date(date);
    const year = isNaN(dateObj.getFullYear()) ? 2005 : dateObj.getFullYear();
    const monthsName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const month = isNaN(dateObj.getMonth()) ? "Enero" : monthsName[dateObj.getMonth()];

    const newEvent: WWEEvent = {
      id: `custom-wwe-${Date.now()}`,
      title,
      show,
      date,
      month,
      year,
      season: season || undefined,
      episode: episode || undefined,
      duration,
      thumbnail,
      background,
      video_url: videoUrl,
      description: description || "Sin descripción proporcionada.",
      watched: false
    };

    onAddEvent(newEvent);
    setSuccessMsg(true);

    // Reset form fields
    setTitle('');
    setSeason('');
    setEpisode('');
    setDescription('');
    
    setTimeout(() => {
      setSuccessMsg(false);
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-sm">
          {/* Overlay mask click closes panel */}
          <div className="absolute inset-0 -z-10" onClick={onClose} />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="w-full max-w-xl bg-[#151922] border-l border-zinc-800 text-white flex flex-col h-full shadow-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {/* Admin Header */}
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60">
              <div className="flex items-center gap-2">
                <Sparkles className="text-[#107C10]" size={22} />
                <h2 className="text-xl font-bold font-display tracking-tight text-zinc-100">Panel de Control WWE</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors text-zinc-300"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto custom-scroll p-6 space-y-8">
              {/* Reset Database and Global control */}
              <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-yellow-500">
                  <AlertTriangle size={18} />
                  <h3 className="font-semibold text-sm">Zona de Restauración</h3>
                </div>
                <p className="text-xs text-zinc-400">
                  ¿Has modificado o eliminado elementos y deseas regresar al catálogo original de WWE Chrono Network? Presiona el botón de abajo.
                </p>
                <button
                  onClick={() => {
                    if(confirm("¿Seguro que deseas reiniciar el catálogo completo? Se perderán las cargas personalizadas.")) {
                      onResetEvents();
                      alert("Catálogo reiniciado exitosamente.");
                    }
                  }}
                  className="flex items-center gap-1.5 text-xs bg-zinc-800 hover:bg-red-950/40 hover:text-red-400 hover:border-red-900/40 border border-zinc-700 px-3 py-1.5 rounded-md transition-all font-medium text-zinc-300"
                >
                  <RotateCcw size={13} />
                  Reiniciar Base de Datos
                </button>
              </div>

              {/* Add event Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold font-display text-zinc-100 flex items-center gap-1.5">
                    <Plus className="text-[#107C10]" size={18} />
                    Agregar Episodio o PPV
                  </h3>

                  {/* Preset AutoFill Buttons */}
                  <div className="flex gap-1">
                    <button 
                      onClick={() => applyPreset('raw')} 
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-[#107C10]/10 border border-[#107C10]/30 text-[#107C10] hover:bg-[#107C10]/20 transition-all font-mono"
                    >
                      + RAW
                    </button>
                    <button 
                      onClick={() => applyPreset('smackdown')} 
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-blue-950/20 border border-blue-900/40 text-blue-400 hover:bg-blue-950/40 transition-all font-mono"
                    >
                      + SD
                    </button>
                    <button 
                      onClick={() => applyPreset('ppv')} 
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-purple-950/20 border border-purple-900/40 text-purple-400 hover:bg-purple-950/40 transition-all font-mono"
                    >
                      + PPV
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {successMsg && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-[#107C10]/20 border border-[#107C10]/40 text-[#107C10] font-semibold rounded-lg flex items-center gap-1.5"
                    >
                      <Check size={16} />
                      ¡Evento agregado y guardado localmente con éxito!
                    </motion.div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-zinc-400 block font-medium">Show / Categoría *</label>
                      <select
                        value={show}
                        onChange={(e) => setShow(e.target.value as WWEEvent['show'])}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 text-zinc-100 focus:border-[#107C10] focus:outline-none"
                      >
                        <option value="RAW">RAW</option>
                        <option value="SmackDown">SmackDown</option>
                        <option value="PPV">PPV Especial</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-400 block font-medium">Título del Show *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. SmackDown #285 / WrestleMania 21"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 text-zinc-100 focus:border-[#107C10] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-zinc-400 block font-medium">Fecha Completa *</label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 text-zinc-100 focus:border-[#107C10] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-400 block font-medium">Duración estimada</label>
                      <input
                        type="text"
                        placeholder="Ej. 1h 45m / 2h 55m"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 text-zinc-100 focus:border-[#107C10] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-zinc-400 block font-medium">Temporada (Opcional)</label>
                      <input
                        type="text"
                        placeholder="Ej. Temporada 13"
                        value={season}
                        onChange={(e) => setSeason(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 text-zinc-100 focus:border-[#107C10] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-400 block font-medium">Episodio / Match central (Opcional)</label>
                      <input
                        type="text"
                        placeholder="Ej. Episodio 4 o Undertaker vs. Orton"
                        value={episode}
                        onChange={(e) => setEpisode(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 text-zinc-100 focus:border-[#107C10] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-400 block font-medium">Póster Vertical (URL de imagen) *</label>
                    <input
                      type="url"
                      required
                      value={thumbnail}
                      onChange={(e) => setThumbnail(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 text-zinc-100 focus:border-[#107C10] focus:outline-none"
                    />
                    <div className="flex gap-2 pt-1 overflow-x-auto no-scrollbar">
                      {TEMPLATE_THUMBNAILS.map((t, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setThumbnail(t)}
                          className={`text-[10px] px-2 py-1 rounded border shrink-0 ${thumbnail === t ? 'bg-[#107C10]/20 border-[#107C10] text-[#107C10]' : 'bg-zinc-900 border-zinc-800 text-zinc-400'}`}
                        >
                          Muestra #{idx+1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-400 block font-medium">Fondo Fullscreen (URL de imagen) *</label>
                    <input
                      type="url"
                      required
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 text-zinc-100 focus:border-[#107C10] focus:outline-none"
                    />
                    <div className="flex gap-2 pt-1 overflow-x-auto no-scrollbar">
                      {TEMPLATE_BACKGROUNDS.map((bg, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setBackground(bg)}
                          className={`text-[10px] px-2 py-1 rounded border shrink-0 ${background === bg ? 'bg-[#107C10]/20 border-[#107C10] text-[#107C10]' : 'bg-zinc-900 border-zinc-800 text-zinc-400'}`}
                        >
                          Fondo Muestra #{idx+1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-400 block font-medium">URL de Video (YouTube Embed) *</label>
                    <input
                      type="url"
                      required
                      placeholder="Ej. https://www.youtube.com/embed/XXXXX"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 text-zinc-100 focus:border-[#107C10] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-400 block font-medium">Sinopsis descriptiva</label>
                    <textarea
                      rows={3}
                      placeholder="Escribe breve reseña histórica..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 text-zinc-100 focus:border-[#107C10] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#107C10] hover:bg-[#159c15] text-white p-3 rounded-lg font-bold transition-all text-sm cursor-pointer shadow-lg hover:shadow-green-950/40"
                  >
                    Guardar en la Línea de Tiempo
                  </button>
                </form>
              </div>

              {/* Delete / List events list */}
              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <h3 className="text-base font-bold font-display text-zinc-100 flex items-center gap-1.5">
                  <FileText className="text-red-500" size={18} />
                  Inventario de Eventos ({events.length})
                </h3>

                <div className="space-y-2 max-h-[300px] overflow-y-auto custom-scroll pr-1">
                  {events.map((ev) => (
                    <div 
                      key={ev.id} 
                      className="flex items-center justify-between p-3 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 rounded-lg group text-xs text-zinc-200"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img 
                          src={ev.thumbnail} 
                          alt="" 
                          className="w-8 h-10 object-cover rounded bg-zinc-800 shrink-0" 
                        />
                        <div className="min-w-0 text-left">
                          <p className="font-bold truncate text-zinc-100">{ev.title}</p>
                          <p className="text-[10px] text-zinc-400 font-mono">
                            {ev.show} • {ev.date}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          if (confirm(`¿Eliminar permanently de la línea de tiempo el evento: "${ev.title}"?`)) {
                            onDeleteEvent(ev.id);
                          }
                        }}
                        className="p-1 px-2 text-zinc-400 hover:text-red-400 hover:bg-red-950/20 rounded transition-colors"
                        title="Eliminar Evento"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
