import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AlertCircle, Zap, Palette, ChevronDown, ArrowLeft, RotateCcw, Globe, Tv, Maximize2, Minimize2 } from 'lucide-react';
import { useRouter } from 'next/router';
import { StreamSource } from '../types';
import { UNIQUE_MOVIES, UNIQUE_TV_SHOWS, UNIQUE_SPORTS, UNIQUE_TV_LIVE } from '../services/tmdb';
import Hls from 'hls.js';

interface VideoPlayerProps {
  tmdbId?: string | number;
  type?: 'movie' | 'tv' | 'sports' | 'tv_live';
  season?: number;
  episode?: number;
  customStreams?: StreamSource[] | Record<string, string>;
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  tmdbId,
  type = 'movie',
  season = 1,
  episode = 1,
  customStreams,
  title,
}) => {
  const router = useRouter();
  const [activeServer, setActiveServer] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [videoFilter, setVideoFilter] = useState<string>('standard');
  const [playerError, setPlayerError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filterPresets: Record<string, string> = {
    standard: 'brightness(1.0) contrast(1.0) saturate(1.0) sepia(0) hue-rotate(0deg)',
    cinema: 'brightness(0.95) contrast(1.2) saturate(0.9) sepia(0.1)',
    hdr: 'brightness(1.1) contrast(1.3) saturate(1.3)',
    vivid: 'brightness(1.15) saturate(1.5) contrast(1.1)',
    // sports: 'saturate(1.4) contrast(1.2) brightness(1.1)',
    sharp: 'brightness(1.1) contrast(1.4) saturate(1.1)',
    gaming: 'brightness(1.05) contrast(1.2) saturate(1.5)',
    sports: 'brightness(1.15) contrast(1.25) saturate(1.5)',
    night: 'brightness(0.8) contrast(1.1) sepia(0.2)',
    grayscale: 'grayscale(1)',
    // sepia: 'sepia(1)',
    // invert: 'invert(1)',
    warm: 'sepia(0.4) saturate(1.2)',
    cool: 'hue-rotate(30deg) saturate(1.1)',
    // retro: 'sepia(0.5) contrast(0.9) brightness(0.9)',
    // matrix: 'invert(0.1) sepia(0.8) saturate(2.5) hue-rotate(90deg) contrast(1.2)',
    dream: 'blur(0.5px) brightness(1.1) saturate(1.2)',
    // midnight: 'brightness(0.6) contrast(1.3) hue-rotate(240deg)',
    // dawn: 'brightness(1.1) saturate(0.8) sepia(0.3)',
  };

  const handleUserActivity = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3500);
  };

  const streams = useMemo(() => {
    const format = (raw: any): StreamSource[] => {
      if (!raw) return [];
      if (Array.isArray(raw)) {
        return raw.map(s => ({
          ...s,
          type: (s.url.includes('.m3u8') || s.url.includes('hls')) ? 'hls' : (s.type || 'iframe')
        }));
      }
      return Object.entries(raw).map(([name, url], i) => {
        const u = String(url);
        return {
          id: `srv-${i}`,
          name,
          url: u,
          quality: 'HD',
          type: (u.includes('.m3u8') || u.includes('hls') || u.includes('playlist.m3u8')) ? 'hls' : 'iframe'
        };
      });
    };

    if (customStreams && (Array.isArray(customStreams) ? customStreams.length > 0 : Object.keys(customStreams).length > 0)) {
      return format(customStreams);
    }

    const sourceData = type === 'sports' ? UNIQUE_SPORTS : 
                      type === 'tv_live' ? UNIQUE_TV_LIVE : 
                      type === 'movie' ? UNIQUE_MOVIES : UNIQUE_TV_SHOWS;
    
    const item = sourceData.find(m => String(m.id) === String(tmdbId));
    if (item?.streams) return format(item.streams);

    if (type === 'movie') {
      return [
        { id: 'f-1', name: 'Server 1', url: `https://xprime.today/watch/${tmdbId}`, quality: 'HD', type: 'iframe' },
        { id: 'f-2', name: 'Server 2', url: `https://cinemaos.tech/player/${tmdbId}`, quality: 'HD', type: 'iframe' },
        { id: 'f-3', name: 'Server 3', url: `https://zxcstream.xyz/player/movie/${tmdbId}/english?autoplay=false&back=true&server=0`, quality: 'HD', type: 'iframe' },
        { id: 'f-4', name: 'Server 4', url: `https://www.cinezo.net/watch/movie/${tmdbId}`, quality: 'HD', type: 'iframe' },
        { id: 'f-5', name: 'Server 5', url: `https://vidsrc-embed.ru/embed/movie/${tmdbId}`, quality: 'HD', type: 'iframe' },
        { id: 'f-6', name: 'Server 6', url: `https://api.cinezo.net/embed/tmdb-movie-${tmdbId}`, quality: 'HD', type: 'iframe' },
        { id: 'f-7', name: 'Server 7 - HINDI', url: `https://zxcstream.xyz/player/movie/${tmdbId}/hindi?autoplay=false&back=true&server=0`, quality: 'HD', type: 'iframe' },
      ];
    }
    
    if (type === 'tv') {
      return [
        
        { id: 'f-1', name: 'Server 1', url: `https://xprime.today/watch/${tmdbId}/${season}/${episode}`, quality: 'HD', type: 'iframe' },
        { id: 'f-2', name: 'Server 2', url: `https://api.cinezo.net/embed/tmdb-tv-${tmdbId}/${season}/${episode}`, quality: 'HD', type: 'iframe' },
        { id: 'f-3', name: 'Server 3', url: `https://www.cinezo.net/watch/tv/${tmdbId}?season=${season}&episode=${episode}`, quality: 'HD', type: 'iframe' },
        { id: 'f-4', name: 'Server 4', url: `https://vidsrc-embed.ru/embed/tv/${tmdbId}/${season}/${episode}`, quality: 'HD', type: 'iframe' },
        { id: 'f-5', name: 'Server 5', url: `https://zxcstream.xyz/player/tv/${tmdbId}/s=${season}/e=${episode}/english?autoplay=false&back=true&server=0`, quality: 'HD', type: 'iframe' },
      ];
    }

    return [];
  }, [customStreams, tmdbId, type, season, episode]);

  useEffect(() => {
    const current = streams[activeServer];
    if (!current) {
      setPlayerError(true);
      setIsLoading(false);
      return;
    }
    
    if (hlsRef.current) hlsRef.current.destroy();
    setIsLoading(true);
    setPlayerError(false);

    if (current.type === 'hls' && videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls({ 
          enableWorker: true,
          debug: false,
          maxBufferLength: 30,
          maxMaxBufferLength: 60,
          maxBufferSize: 60 * 1000 * 1000,
        });
        hlsRef.current = hls;
        hls.loadSource(current.url);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => { 
          setIsLoading(false); 
          videoRef.current?.play().catch(() => {});
        });
        hls.on(Hls.Events.ERROR, (event, data) => { 
          console.error('HLS Error:', data);
          setPlayerError(true); 
          setIsLoading(false); 
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = current.url;
        videoRef.current.onloadedmetadata = () => { 
          setIsLoading(false); 
          videoRef.current?.play().catch(() => {}); 
        };
        videoRef.current.onerror = () => {
          setPlayerError(true);
          setIsLoading(false);
        };
      }
    } else {
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [activeServer, streams]);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(e => console.error(e));
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFS = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFS);
    return () => document.removeEventListener('fullscreenchange', handleFS);
  }, []);

  if (!streams.length) return (
    <div className="aspect-video bg-miraj-gray rounded-xl flex flex-col items-center justify-center p-6 text-center border border-white/5">
        <AlertCircle size={48} className="text-gray-500 mb-4" />
        <h3 className="text-xl font-bold text-white">No Streams Available</h3>
        <p className="text-gray-400 mt-2">Try checking back later or select different content</p>
    </div>
  );

  const currentStream = streams[activeServer];

  return (
    <div 
        ref={containerRef} 
        className={`relative bg-black group w-full overflow-hidden transition-all duration-500 ${isFullscreen ? 'fixed inset-0 z-[100]' : 'aspect-video rounded-xl border border-white/10 shadow-2xl'}`}
        onMouseMove={handleUserActivity}
        onTouchStart={handleUserActivity}
    >
        <div className={`absolute inset-0 z-50 pointer-events-none transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Optimized Top Control Bar - Reduced Height & Better Mobile Layout */}
            <div className="absolute top-0 inset-x-0 p-2 sm:p-3 md:p-4 bg-gradient-to-b from-black/95 via-black/50 to-transparent pointer-events-auto">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
                    
                    {/* Left: Back Button & Title */}
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-shrink">
                        <button 
                          onClick={() => router.back()} 
                          className="p-1.5 sm:p-2 bg-black/70 backdrop-blur-md rounded-full border border-white/10 hover:bg-miraj-red text-white transition-all shadow-lg flex-shrink-0"
                          aria-label="Go back"
                        >
                            <ArrowLeft size={14} className="sm:w-4 sm:h-4"/>
                        </button>
                        <div className="truncate min-w-0 hidden sm:block">
                            <p className="text-[9px] font-bold text-miraj-gold tracking-wider uppercase leading-tight">
                              {type === 'sports' ? 'LIVE SPORTS' : 
                               type === 'tv_live' ? 'LIVE TV' : 
                               type.toUpperCase()}
                            </p>
                            <h4 className="text-white text-[11px] font-bold truncate max-w-[120px] md:max-w-xs leading-tight">{title}</h4>
                        </div>
                    </div>

                    {/* CENTER: Compact Controls */}
                    <div className="flex items-center gap-1 sm:gap-1.5 bg-black/50 backdrop-blur-xl px-1.5 py-1 sm:py-1.5 rounded-full border border-white/10 shadow-2xl">
                        {streams.length > 1 && (
                            <div className="relative">
                                <select 
                                  value={activeServer} 
                                  onChange={(e) => setActiveServer(Number(e.target.value))} 
                                  className="bg-transparent text-white text-[9px] sm:text-[10px] font-black border-none rounded-full py-1 pl-2 pr-5 sm:pr-6 focus:outline-none appearance-none cursor-pointer uppercase tracking-tight"
                                  aria-label="Select server"
                                >
                                    {streams.map((s, i) => (
                                      <option key={i} value={i} className="bg-miraj-black">
                                        {s.name || `Server ${i + 1}`}
                                      </option>
                                    ))}
                                </select>
                                <ChevronDown size={10} className="absolute right-1 sm:right-1.5 top-1/2 -translate-y-1/2 text-miraj-gold pointer-events-none" />
                            </div>
                        )}
                        
                        {streams.length > 1 && (
                          <div className="w-[1px] h-3 bg-white/10" />
                        )}
                        
                        <div className="relative">
                            <select 
                              value={videoFilter} 
                              onChange={(e) => setVideoFilter(e.target.value)} 
                              className="bg-transparent text-white text-[9px] sm:text-[10px] font-black border-none rounded-full py-1 pl-2 pr-5 sm:pr-6 focus:outline-none appearance-none cursor-pointer uppercase tracking-tight"
                              aria-label="Select video filter"
                            >
                                {Object.keys(filterPresets).map(p => (
                                  <option key={p} value={p} className="bg-miraj-black">{p}</option>
                                ))}
                            </select>
                            <ChevronDown size={10} className="absolute right-1 sm:right-1.5 top-1/2 -translate-y-1/2 text-miraj-gold pointer-events-none" />
                        </div>
                        
                        <div className="w-[1px] h-3 bg-white/10" />
                        
                        <button 
                          onClick={toggleFullscreen} 
                          className="p-1 sm:p-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 hover:text-miraj-gold text-white transition-all shadow-lg flex-shrink-0"
                          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                        >
                            {isFullscreen ? (
                              <Minimize2 size={14} className="sm:w-4 sm:h-4"/>
                            ) : (
                              <Maximize2 size={14} className="sm:w-4 sm:h-4"/>
                            )}
                        </button>
                    </div>

                    {/* Right: Empty spacer for balance on desktop */}
                    <div className="hidden sm:block w-[80px] md:w-[120px]"></div>
                </div>
            </div>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20 pointer-events-none">
                <div className="w-8 h-8 sm:w-10 sm:h-10 border-3 sm:border-4 border-white/5 border-t-miraj-gold rounded-full animate-spin mb-2 sm:mb-3"/>
                <span className="text-miraj-gold text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] animate-pulse px-4 text-center">
                  {type === 'sports' ? 'LOADING LIVE SPORTS...' : 
                   type === 'tv_live' ? 'CONNECTING TO LIVE TV...' : 'LOADING STREAM...'}
                </span>
            </div>
        )}
        
        {/* Error State */}
        {playerError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/95 z-40 p-4 sm:p-6 text-center">
                <AlertCircle size={32} className="sm:w-10 sm:h-10 text-miraj-red mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Stream Unavailable</h3>
                <p className="text-gray-400 mb-3 sm:mb-4 max-w-md text-xs sm:text-sm px-4">
                  This server might be temporarily offline. Please try another server or check back later.
                </p>
                {streams.length > 1 && (
                  <button 
                    onClick={() => setActiveServer(s => (s + 1) % streams.length)} 
                    className="bg-miraj-gold text-black px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold hover:bg-yellow-500 transition-colors text-xs sm:text-sm"
                  >
                    Try Next Server ({streams.length - 1} remaining)
                  </button>
                )}
            </div>
        )}

        {/* Player Render */}
        <div className="w-full h-full flex items-center justify-center">
            {currentStream.type === 'iframe' ? (
                <iframe 
                  key={currentStream.url} 
                  src={currentStream.url} 
                  className="w-full h-full border-0" 
                  allowFullScreen 
                  style={{ filter: filterPresets[videoFilter] }} 
                  onLoad={() => setIsLoading(false)}
                  title={`${title} Player`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
            ) : (
                <video 
                  ref={videoRef} 
                  className="w-full h-full bg-black" 
                  controls 
                  playsInline 
                  autoPlay 
                  style={{ filter: filterPresets[videoFilter] }} 
                  onWaiting={() => setIsLoading(true)} 
                  onPlaying={() => setIsLoading(false)}
                  onError={() => {
                    setPlayerError(true);
                    setIsLoading(false);
                  }}
                  poster="/video-poster.jpg"
                  aria-label={`${title} video player`}
                />
            )}
        </div>
    </div>
  );
};

export default VideoPlayer;