import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface RetroFallingTextProps {
  children: React.ReactNode;
  className?: string;
}

const RetroFallingText = ({ children, className }: RetroFallingTextProps) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  
  // Extract words from children
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' · ').filter(word => word.trim());
  
  const retro_colors = [
    'linear-gradient(45deg, #ff6b6b, #ff8e53)', // Red-Orange
    'linear-gradient(45deg, #4ecdc4, #44a08d)', // Teal-Green 
    'linear-gradient(45deg, #a8edea, #fed6e3)', // Light Blue-Pink
    'linear-gradient(45deg, #ffeaa7, #fab1a0)', // Yellow-Peach
    'linear-gradient(45deg, #fd79a8, #e84393)', // Pink-Purple
    'linear-gradient(45deg, #00b894, #00cec9)', // Green-Cyan
    'linear-gradient(45deg, #fdcb6e, #e17055)', // Orange-Red
    'linear-gradient(45deg, #6c5ce7, #a29bfe)'  // Purple-Lavender
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn('relative flex items-center justify-center flex-nowrap overflow-x-auto w-full max-w-7xl mx-auto px-4', className)}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <div
            className={`
              inline-block text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-pixel 
              transition-all duration-1000 ease-out transform
              ${animationStarted 
                ? 'translate-y-0 opacity-100 rotate-0' 
                : 'translate-y-[-100px] opacity-0 rotate-12'
              }
              hover:scale-110 hover:rotate-3 hover:drop-shadow-2xl
              cursor-pointer whitespace-nowrap
            `}
          style={{
            background: retro_colors[index % retro_colors.length],
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animationDelay: `${index * 200}ms`,
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
            textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2) rotate(-5deg) translateY(-10px)';
            e.currentTarget.style.filter = 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.8))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotate(0deg) translateY(0px)';
            e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))';
          }}
          >
            {word}
          </div>
          {index < words.length - 1 && (
            <span 
              className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-pixel mx-4 text-primary animate-pulse"
              style={{ animationDelay: `${(index + 1) * 200 + 100}ms` }}
            >
              ·
            </span>
          )}
        </React.Fragment>
      ))}
      
      {/* Retro background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default RetroFallingText;