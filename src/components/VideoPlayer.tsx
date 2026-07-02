import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
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
  onClose
}: VideoPlayerProps) {
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    // Listen to standard fullscreen change events
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  const isNativeVideo = event.video_url.includes('.mp4') || event.video_url.includes('archive.org');

  useEffect(() => {
    if (isNativeVideo && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Autoplay prevented or interrupted: ", err);
        });
      }
    }
  }, [event.video_url, isNativeVideo]);

  const getEmbedUrl = (url: string) => {
    if (url.includes('vkvideo.ru') || url.includes('vk.com')) {
      const match = url.match(/video(-?\d+)_(\d+)/);
      if (match) {
        return `https://vk.com/video_ext.php?oid=${match[1]}&id=${match[2]}&autoplay=1`;
      }
    }
    if (url.includes('ok.ru/video/')) {
      const match = url.match(/ok\.ru\/video\/(\d+)/);
      if (match) {
        return `https://ok.ru/videoembed/${match[1]}?autoplay=1`;
      }
    }
    if (url.includes('ok.ru/videoembed/')) {
      if (url.includes('?')) {
        return `${url}&autoplay=1`;
      }
      return `${url}?autoplay=1`;
    }
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      if (url.includes('?')) {
        return `${url}&autoplay=1&showinfo=0&rel=0`;
      }
      return `${url}?autoplay=1&showinfo=0&rel=0`;
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
        onMouseMove={handleMouseMove}
        className="relative w-full flex-grow flex flex-col justify-between bg-black text-white overflow-hidden"
        style={{ fontFamily: 'var(--font-sans)', height: '100vh' }}
      >
        {/* Video Stage Frame */}
        <div className="absolute inset-0 w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden z-10">
          {isNativeVideo ? (
            <video
              ref={videoRef}
              id="raw-video-player"
              src={event.video_url}
              autoPlay
              controls={true}
              className="w-full h-full bg-black shadow-2xl object-contain"
            />
          ) : (
            <iframe
              id="youtube-player-iframe"
              src={getEmbedUrl(event.video_url)}
              title={event.title}
              className="w-full h-full border-none shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>

        {/* Top Control Bar containing only emitting show name and close button, hiding on fullscreen/idle */}
        <div 
          className={`absolute top-0 inset-x-0 h-20 items-center justify-between px-6 bg-gradient-to-b from-black/90 to-transparent z-30 transition-opacity duration-300 flex ${(showControls && !isFullscreen) ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="flex items-center gap-4 text-left">
            <div className="bg-[#107C10] text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-wider shrink-0">
              {event.show}
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold font-display leading-none">{event.title}</h2>
              {event.date && <p className="text-xs text-zinc-400 mt-1">{event.date}</p>}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              id="player-close-btn"
              onClick={onClose}
              className="p-2 cursor-pointer bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 rounded-full transition-all text-zinc-300 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
