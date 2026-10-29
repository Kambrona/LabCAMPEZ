import React from 'react';

export default function TechBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#090D16]">
      {/* Ambient Aurora Glow 1 - Deep Emerald Glow */}
      <div className="absolute -top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-emerald-600/[0.12] blur-[120px] animate-pulse duration-[8000ms]" />

      {/* Ambient Aurora Glow 2 - Sapphire Tech Blue */}
      <div className="absolute top-[35%] -right-[15%] w-[700px] h-[700px] rounded-full bg-blue-600/[0.10] blur-[140px]" />

      {/* Ambient Aurora Glow 3 - Subtle Teal / Indigo Center Depth */}
      <div className="absolute bottom-[5%] left-[20%] w-[650px] h-[650px] rounded-full bg-teal-500/[0.08] blur-[130px]" />

      {/* Refined Architectural Grid with radial vignette mask */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%, black 40%, transparent 95%)'
        }}
      />

      {/* Subtle fine horizontal accent lines for architectural depth */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </div>
  );
}
