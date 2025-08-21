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
    },
    {
      progress: 78,
      label: 'AI/ML Focus',
      value: '78%',
      description: 'Time allocation'
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="p-6 text-center bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group"
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;