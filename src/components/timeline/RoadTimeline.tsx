import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  id: string;
  org: string;
  role: string;
  start: string;
  end: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
  logo: string;
  type: 'professional' | 'volunteer';
}

interface RoadTimelineProps {
  experiences: ExperienceItem[];
  title: string;
  subtitle: string;
}

const RoadTimeline = ({ experiences, title, subtitle }: RoadTimelineProps) => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground italic">({subtitle})</p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Connecting Lines */}
        <div className="absolute inset-0 z-0">
          {experiences.map((_, index) => {
            if (index === experiences.length - 1) return null;
            const isCurrentEven = index % 2 === 0;
            const isNextEven = (index + 1) % 2 === 0;
            
            return (
              <div
                key={index}
                className="absolute border-t-2 border-dashed border-border opacity-60"
                style={{
                  top: `${(index + 1) * 160 + 40}px`,
                  left: isCurrentEven ? '80px' : '50%',
                  right: isNextEven ? 'calc(50% - 80px)' : '80px',
                  height: '2px',
                  transformOrigin: 'left center',
                }}
              />
            );
          })}
        </div>

        {/* Experience Items */}
        <div className="relative z-10 space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const positionClass = isEven ? 'justify-start' : 'justify-end';
            const contentAlign = isEven ? 'text-left' : 'text-right';
            const flexDirection = isEven ? 'flex-row' : 'flex-row-reverse';

            return (
              <div key={exp.id} className={`flex ${positionClass} items-center`}>
                <div className={`flex ${flexDirection} items-center gap-8 max-w-4xl`}>
                  {/* Timeline Marker with Logo */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-background border-4 border-primary shadow-lg overflow-hidden hover:scale-110 transition-transform duration-300">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.org} logo`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 max-w-md ${contentAlign}`}>
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-foreground mb-1">{exp.role}</h3>
                      <p className="text-sm font-medium text-primary mb-2">{exp.org}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.start} - {exp.end}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>


                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.slice(0, 4).map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-2 py-1">
                          {skill}
                        </Badge>
                      ))}
                      {exp.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{exp.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadTimeline;