import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressRingProps {
  progress: number; // 0-100
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  value?: string;
  className?: string;
}

const ProgressRing = ({ 
  progress, 
  size = 'md', 
  label, 
  value, 
  className 
}: ProgressRingProps) => {
  const sizes = {
    sm: { ring: 60, stroke: 4, text: 'text-xs' },
    md: { ring: 80, stroke: 6, text: 'text-sm' },
    lg: { ring: 120, stroke: 8, text: 'text-base' }
  };

  const { ring, stroke, text } = sizes[size];
  const radius = (ring - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn('flex flex-col items-center space-y-2', className)}>
      <div className="relative">
        <svg
          width={ring}
          height={ring}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={ring / 2}
            cy={ring / 2}
            r={radius}
            stroke="hsl(var(--border))"
            strokeWidth={stroke}
            fill="transparent"
            className="opacity-20"
          />
          
          {/* Progress circle */}
          <circle
            cx={ring / 2}
            cy={ring / 2}
            r={radius}
            stroke="hsl(var(--primary))"
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
            style={{
              filter: 'drop-shadow(0 0 6px hsl(var(--primary) / 0.3))'
            }}
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {value && (
            <span className={cn('font-semibold', text)}>
              {value}
            </span>
          )}
          <span className={cn('text-muted-foreground font-medium', 
            size === 'sm' ? 'text-[10px]' : 
            size === 'md' ? 'text-xs' : 'text-sm'
          )}>
            {Math.round(progress)}%
          </span>
        </div>
      </div>
      
      {label && (
        <span className="text-xs text-muted-foreground text-center font-medium">
          {label}
        </span>
      )}
    </div>
  );
};

export default ProgressRing;