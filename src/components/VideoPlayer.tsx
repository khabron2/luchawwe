import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X, RotateCcw, ChevronRight, ChevronLeft, Volume2, Maximize, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { WWEEvent } from '../data';

interface VideoPlayerProps {
  event: WWEEvent;
  nextEvent?: WWEEvent;
  onClose: () => void;
  onNextEvent?: () => void;
  onPrevEvent?: () => void;
  hasPrevEvent: boolean;
  onMarkAsWatched: (id: string, watched: boolean) => void;
}

export default function VideoPlayer({
  event,
  nextEvent,
  onClose,
  onNextEvent,
  onPrevEvent,
  hasPrevEvent,
  onMarkAsWatched
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackTime, setPlaybackTime] = useState(0); // Progress percentage
  const [isMuted, setIsMuted] = useState(false);
  const [quality, setQuality] = useState('1080p');
  const [isWidescreen, setIsWidescreen] = useState(false);
  const [showProgressToast, setShowProgressToast] = useState(false);
  const [savedTime, setSavedTime] = useState(0);

  // Native video state trackers
  const videoRef = useRef<HTMLVideoElement>(null);
  const isNativeVideo = event.video_url.includes('.mp4') || event.video_url.includes('archive.org');
  const [realCurrentTime, setRealCurrentTime] = useState(0);
  const [realDuration, setRealDuration] = useState(0);

  // Helper to format seconds into mm:ss
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === Infinity || seconds === null) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Load and save progress
  useEffect(() => {
    const progressKey = `wwe-chrono-progress-${event.id}`;
    const saved = localStorage.getItem(progressKey);
    if (saved) {
      const parsed = parseFloat(saved);
      if (parsed > 0 && parsed < 98) {
        setSavedTime(parsed);
        setShowProgressToast(true);
        setPlaybackTime(parsed);
      }
    } else {
      setPlaybackTime(0);
      setSavedTime(0);
      setShowProgressToast(false);
    }
  }, [event.id]);

  // Handle native video play/pause sync
  useEffect(() => {
    if (isNativeVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isNativeVideo, event.id]);

  // Simulate progress when video is "playing" (for IFRAME streams only)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !isNativeVideo) {
      interval = setInterval(() => {
        setPlaybackTime((prev) => {
          const next = prev + 0.2; // Slowly advance progress simulation
          if (next >= 100) {
            clearInterval(interval);
            onMarkAsWatched(event.id, true);
            return 100;
          }
          // Save every few seconds
          localStorage.setItem(`wwe-chrono-progress-${event.id}`, next.toFixed(1));
          return next;
        });
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isNativeVideo, event.id, onMarkAsWatched]);

  const handleResume = () => {
    setPlaybackTime(savedTime);
    if (isNativeVideo && videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (savedTime / 100) * videoRef.current.duration;
    }
    setShowProgressToast(false);
  };

  const handleRestart = () => {
    setPlaybackTime(0);
    localStorage.setItem(`wwe-chrono-progress-${event.id}`, "0");
    if (isNativeVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    setShowProgressToast(false);
  };

  const handleNativeTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 1;
      const pct = (current / dur) * 100;
      setPlaybackTime(pct);
      setRealCurrentTime(current);
      setRealDuration(dur);
      
      localStorage.setItem(`wwe-chrono-progress-${event.id}`, pct.toFixed(1));
      
      if (pct >= 99) {
        onMarkAsWatched(event.id, true);
      }
    }
  };

  const handleNativeLoadedMetadata = () => {
    if (videoRef.current) {
      setRealDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (percentage: number) => {
    setPlaybackTime(percentage);
    if (isNativeVideo && videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (percentage / 100) * videoRef.current.duration;
    }
  };

  const handleRewind = () => {
    if (isNativeVideo && videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
    } else {
      setPlaybackTime(Math.max(0, playbackTime - 5));
    }
  };

  const togglePlay = () => {
    if (isNativeVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes('ok.ru/video/')) {
      const match = url.match(/ok\.ru\/video\/(\d+)/);
      if (match) {
        return `https://ok.ru/videoembed/${match[1]}`;
      }
    }
    if (url.includes('ok.ru/videoembed/')) {
      return url;
    }
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      if (url.includes('?')) {
        return `${url}&autoplay=1&mute=${isMuted ? '1' : '0'}&controls=0&showinfo=0&rel=0`;
      }
      return `${url}?autoplay=1&mute=${isMuted ? '1' : '0'}&controls=0&showinfo=0&rel=0`;
    }
    return url;
  };

  return (
    <AnimatePresence>
      <motion.div
        id="video-player-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-black text-white"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {/* Top Control Bar */}
        <div className="flex h-20 items-center justify-between px-6 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-4">
            <div className="bg-[#107C10] text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-wider">
              {event.show}
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold font-display">{event.title}</h2>
              <p className="text-xs text-zinc-400">
                {event.season || event.year} • {event.episode || event.date} • Duración: {event.duration}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onMarkAsWatched(event.id, !event.watched)}
              className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-md transition-all font-medium ${
                event.watched 
                  ? 'bg-[#107C10]/20 text-[#107C10] border border-[#107C10]/40' 
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
              }`}
            >
              <CheckCircle size={14} className={event.watched ? 'fill-current' : ''} />
              {event.watched ? 'Visto' : 'Marcar Visto'}
            </button>
            
            <button
              id="player-close-btn"
              onClick={onClose}
              className="p-2 cursor-pointer bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 rounded-full transition-all text-zinc-300 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Video Stage Frame */}
        <div className="relative flex-1 flex items-center justify-center bg-zinc-950 overflow-hidden">
          {/* Conditional media render */}
          {event.video_url.includes('.mp4') || event.video_url.includes('archive.org') ? (
            <video
              ref={videoRef}
              id="raw-video-player"
              src={event.video_url}
              autoPlay
              muted={isMuted}
              onTimeUpdate={handleNativeTimeUpdate}
              onLoadedMetadata={handleNativeLoadedMetadata}
              onClick={togglePlay}
              className={`w-full h-full bg-black transition-all cursor-pointer ${isWidescreen ? 'scale-110' : 'max-h-[80vh] aspect-video border border-zinc-800/50 shadow-2xl rounded-lg'}`}
            />
          ) : (
            <iframe
              id="youtube-player-iframe"
              src={getEmbedUrl(event.video_url)}
              title={event.title}
              className={`w-full h-full border-none transition-all ${isWidescreen ? 'scale-110' : 'max-h-[80vh] aspect-video border border-zinc-800/50 shadow-2xl rounded-lg'}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}

          {/* Autoplay Toast Resume Alert */}
          {showProgressToast && (
            <motion.div
              initial={{ transform: 'translateY(100px)', opacity: 0 }}
              animate={{ transform: 'translateY(0)', opacity: 1 }}
              className="absolute bottom-6 left-6 z-50 bg-zinc-900 border border-zinc-800 p-4 rounded-lg shadow-2xl max-w-sm flex flex-col gap-3"
            >
              <div className="flex gap-2 text-zinc-200">
                <AlertCircle className="text-[#107C10] shrink-0" size={18} />
                <div className="text-xs">
                  <p className="font-semibold">Progreso de reproducción guardado</p>
                  <p className="text-zinc-400 mt-1">¿Deseas continuar en el {playbackTime.toFixed(0)}% donde quedaste?</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleResume}
                  className="bg-[#107C10] hover:bg-[#159c15] text-xs font-semibold px-3 py-1.5 rounded transition-colors text-white"
                >
                  Sí, reanudar
                </button>
                <button
                  onClick={handleRestart}
                  className="bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 px-3 py-1.5 rounded transition-colors"
                >
                  Empezar de nuevo
                </button>
              </div>
            </motion.div>
          )}

          {/* Dynamic overlay pause play indicator */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center animate-fade-in pointer-events-none">
              <div className="p-6 bg-zinc-900/90 rounded-full border border-zinc-800/50 shadow-2xl animate-pulse">
                <Pause size={44} className="text-[#107C10]" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Control Bar Timeline & Actions */}
        <div className="bg-gradient-to-t from-black via-black/95 to-transparent px-6 py-4 flex flex-col gap-3">
          {/* Custom streaming seekhbar */}
          <div className="flex items-center gap-3">
            {isNativeVideo ? (
              <span className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
                <span>{formatTime(realCurrentTime)}</span>
                <span className="text-[10px] text-[#107C10] font-sans font-bold bg-[#107C10]/10 px-1 py-0.5 rounded">
                  {playbackTime.toFixed(0)}% Visto
                </span>
              </span>
            ) : (
              <span className="text-xs text-[#107C10] font-sans font-bold flex items-center gap-1">
                <span>Porcentaje Visto:</span>
                <span className="bg-[#107C10]/15 px-1.5 py-0.5 rounded text-white">{playbackTime.toFixed(0)}%</span>
              </span>
            )}
            
            <div 
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const percentage = (clickX / rect.width) * 100;
                handleSeek(percentage);
              }}
              className="flex-1 h-1.5 rounded-full bg-zinc-800 cursor-pointer relative group transition-all hover:h-2"
            >
              <div 
                className="h-full bg-[#107C10] rounded-full relative group-hover:bg-[#159c15]" 
                style={{ width: `${playbackTime}%` }} 
              />
              <div 
                className="absolute w-3.5 h-3.5 rounded-full bg-white opacity-0 group-hover:opacity-100 shadow transition-opacity border-2 border-[#107C10]"
                style={{ left: `calc(${playbackTime}% - 7px)`, top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
            
            {isNativeVideo ? (
              <span className="text-xs text-zinc-400 font-mono">{formatTime(realDuration)}</span>
            ) : (
              <span className="text-xs text-zinc-400 font-mono">100%</span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Play controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-white text-black hover:bg-[#107C10] hover:text-white transition-all shadow-md focus:outline-none"
              >
                {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} className="translate-x-0.5" fill="currentColor" />}
              </button>

              <button
                onClick={handleRewind}
                className="p-2 cursor-pointer bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors text-zinc-300"
                title="Retroceder 10 Segundos"
              >
                <RotateCcw size={16} />
              </button>

              {/* Prev and Next Episode */}
              <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-md overflow-hidden">
                <button
                  disabled={!hasPrevEvent}
                  onClick={onPrevEvent}
                  className={`p-2 cursor-pointer flex items-center gap-1 text-xs hover:bg-zinc-800 transition-colors ${!hasPrevEvent ? 'opacity-40 cursor-not-allowed text-zinc-500' : 'text-zinc-300'}`}
                >
                  <ChevronLeft size={16} />
                  <span>Anterior</span>
                </button>
                <div className="w-[1px] h-4 bg-zinc-800" />
                <button
                  disabled={!nextEvent}
                  onClick={onNextEvent}
                  className={`p-2 cursor-pointer flex items-center gap-1 text-xs hover:bg-zinc-800 transition-colors ${!nextEvent ? 'opacity-40 cursor-not-allowed text-zinc-500' : 'text-zinc-300'}`}
                >
                  <span>Siguiente</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Mute and quality selectors */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 cursor-pointer rounded-md border ${isMuted ? 'bg-red-950/40 text-red-500 border-red-900/50' : 'bg-zinc-900 border-zinc-800 text-zinc-300'}`}
              >
                <Volume2 size={16} />
              </button>

              <select
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 py-1.5 px-2 rounded-md focus:outline-none cursor-pointer"
              >
                <option value="4K">Auto (4K)</option>
                <option value="1080p">1080p Ultra</option>
                <option value="720p">720p HD</option>
                <option value="480p">Standard SD</option>
              </select>

              <button
                onClick={() => setIsWidescreen(!isWidescreen)}
                className={`hidden md:block p-2 cursor-pointer rounded-md border ${isWidescreen ? 'bg-[#107C10]/20 text-[#107C10] border-[#107C10]/40' : 'bg-zinc-900 border-zinc-800 text-zinc-300'}`}
                title="Theater/Widescreen Toggle"
              >
                <Maximize size={16} />
              </button>
            </div>

            {/* Next Chronological Suggestion (Xbox Ribbon) */}
            {nextEvent && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 bg-zinc-900/90 border border-[#107C10]/30 hover:border-[#107C10]/70 p-2 pl-3 pr-4 rounded-lg cursor-pointer max-w-sm transition-all group"
                onClick={onNextEvent}
              >
                <Info size={14} className="text-[#107C10] shrink-0" />
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase font-bold tracking-widest text-[#107C10]">Continuar la Historia</div>
                  <div className="text-xs font-bold text-zinc-100 line-clamp-1 group-hover:text-white transition-colors">{nextEvent.title}</div>
                  <div className="text-[10px] text-zinc-400">{nextEvent.date}</div>
                </div>
                <ChevronRight size={16} className="text-[#107C10] shrink-0 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
