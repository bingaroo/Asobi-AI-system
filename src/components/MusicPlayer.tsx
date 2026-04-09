'use client';

import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-3">
      {/* Visualizer Animation */}
      {isPlaying && (
        <div className="flex gap-1 items-end h-6 mb-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1 bg-pink-500 animate-bounce"
              style={{
                animationDuration: `${0.5 + i * 0.1}s`,
                height: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Player Button */}
      <button
        onClick={togglePlay}
        className={`
          group relative w-14 h-14 rounded-full flex items-center justify-center
          transition-all duration-300 transform hover:scale-110
          ${isPlaying ? 'bg-black text-white' : 'bg-pink-500 text-white'}
          border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
        `}
      >
        <span className="text-2xl">
          {isPlaying ? '⏸️' : '🎵'}
        </span>
        
        {/* Tooltip */}
        <span className="absolute -top-10 right-0 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {isPlaying ? 'Pause BGM' : 'Play Asobi BGM'}
        </span>
      </button>

      {/* Audio Element (Royalty-free Lo-fi sample) */}
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
      />
    </div>
  );
};

export default MusicPlayer;
