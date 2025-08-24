import React from 'react';
import { Card } from '@/components/ui/card';
import ProgressRing from '@/components/progress/ProgressRing';

interface StatsSectionProps {
  className?: string;
}

const StatsSection = ({ className }: StatsSectionProps) => {
  const stats = [
    {
      progress: 85,
      label: 'Weekly Reading',
      value: '12h',
      description: 'Hours spent learning'
    },
    {
      progress: 67,
      label: 'Skill Coverage',
      value: '67%',
      description: 'Across key domains'
    },
    {
      progress: 92,
      label: 'Learning Streak',
      value: '23d',
      description: 'Consecutive days'
    }
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="display-title text-4xl font-bold mb-4">
              Continuous Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tracking my continuous growth across key areas that matter for modern data and AI roles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group"
              >
                <div className="mb-4">
                  <ProgressRing 
                    progress={stat.progress}
                    label=""
                    value=""
                    size="lg"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {stat.label}
                </h3>
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;