import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  tags: string[];
  image?: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  onLearnMore: (project: Project) => void;
}

const ProjectCard = ({ project, onLearnMore }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden glass hover-lift cursor-pointer">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"
        style={{
          backgroundImage: project.image ? `url(${project.image})` : 'linear-gradient(135deg, hsl(var(--muted)), hsl(var(--accent)))',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Category Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge 
          variant="secondary" 
          className={`
            glass text-xs font-medium
            ${project.category === 'Data' ? 'bg-blue-500/20 text-blue-300' : ''}
            ${project.category === 'AI' ? 'bg-purple-500/20 text-purple-300' : ''}
            ${project.category === 'Product' ? 'bg-green-500/20 text-green-300' : ''}
          `}
        >
          {project.category}
        </Badge>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6 h-64 flex flex-col justify-end">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-foreground transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-200 text-sm line-clamp-2">
            {project.summary}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs glass border-white/20 text-white/80"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge 
                variant="outline" 
                className="text-xs glass border-white/20 text-white/60"
              >
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
          
          <Button 
            onClick={() => onLearnMore(project)}
            variant="secondary"
            size="sm"
            className="glass bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;