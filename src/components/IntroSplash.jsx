import React, { useState, useEffect, useRef } from 'react';

export default function IntroSplash({ onFinish }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Single timer to remove splash completely after 3 seconds
    timerRef.current = setTimeout(() => {
      setIsDismissed(true);
      if (onFinish) onFinish();
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSkip = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsDismissed(true);
    if (onFinish) onFinish();
  };

  if (isDismissed) return null;

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070b14] cursor-pointer select-none splash-screen"
    >
      {/* Ambient background glows */}
      <div className="absolute w-96 h-96 rounded-full bg-emerald-500/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />

      {/* Center Logo Container */}
      <div className="relative z-10 flex flex-col items-center space-y-6 px-6 max-w-lg text-center splash-content">
        
        {/* Glowing backdrop circle */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-emerald-500/20 blur-xl opacity-80" />
          
          <img
            src="/brand/lab-campez/logo-horizontal-dark.svg"
            alt="Lab-CAMPEZ Logo Oficial"
            className="relative h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-[0_15px_30px_rgba(16,185,129,0.25)]"
          />
        </div>

        {/* Minimalist animated progress loader line */}
        <div className="w-48 sm:w-64 h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 rounded-full splash-loader" />
        </div>

        {/* Subtle tagline */}
        <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-slate-400 uppercase">
          Agile Tech Solutions
        </div>

        {/* Skip note */}
        <span className="text-[10px] text-slate-500 font-mono tracking-wider pt-1">
          Click en cualquier lugar para omitir
        </span>
      </div>
    </div>
  );
}
