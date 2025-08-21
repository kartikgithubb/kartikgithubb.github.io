import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TextWaveProps {
  children: React.ReactNode;
  className?: string;
}

const TextWave = ({ children, className }: TextWaveProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn('relative inline-block cursor-pointer', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <section className={`
        relative z-10 transition-all duration-500 ease-out
        ${isHovered ? 'text-4xl md:text-6xl transform scale-110' : 'text-xl md:text-2xl'}
        ${isHovered ? 'animate-[wave_2s_ease-in-out_infinite]' : ''}
      `}>
        {children}
      </section>
      
      {/* Wave Effect */}
      <div 
        className={`
          absolute inset-0 pointer-events-none transition-opacity duration-300
          ${isHovered ? 'opacity-20' : 'opacity-0'}
        `}
        style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cfilter id='wave'%3E%3CfeTurbulence baseFrequency='0.02' numOctaves='3' seed='2'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='3'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23wave)' fill='%23000' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Ripple Effect */}
      {isHovered && (
        <div 
          className="absolute inset-0 rounded-full bg-primary/10 animate-ping"
          style={{
            animationDuration: '2s',
            animationIterationCount: '1'
          }}
        />
      )}
    </div>
  );
};

export default TextWave;