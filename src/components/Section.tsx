import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'subtle' | 'glass';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section = ({ 
  children, 
  className, 
  id, 
  background = 'default',
  padding = 'lg'
}: SectionProps) => {
  const backgrounds = {
    default: '',
    subtle: 'bg-gradient-to-b from-background to-surface-elevated',
    glass: 'glass'
  };

  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  return (
    <section 
      id={id}
      className={cn(
        'relative',
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;