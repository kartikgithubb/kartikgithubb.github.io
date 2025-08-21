import React from 'react';
import { MapPin } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative flex items-start space-x-6">
            {/* Logo with octagon mask */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 mask-octagon bg-card border-2 border-background shadow-lg hover-glow group cursor-pointer">
                {item.logo ? (
                  <img 
                    src={item.logo} 
                    alt={item.organization}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-muted-foreground">
                      {item.organization.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 mask-octagon bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {item.organization}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground text-right">
                    <div>{item.startDate} - {item.endDate}</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <ul className="space-y-2">
                    {item.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;