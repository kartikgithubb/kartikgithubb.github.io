import React from 'react';
import { ExternalLink, Clock, Tag } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface LearningItem {
  id: string;
  title: string;
  source: 'substack' | 'linkedin' | 'twitter' | 'rss';
  url: string;
  publishedAt: string;
  minutes: number;
  topics: string[];
}

interface LearningStripProps {
  items?: LearningItem[];
}

// Mock data for demonstration
const mockItems: LearningItem[] = [
  {
    id: '1',
    title: 'The Future of RAG Systems in Enterprise AI',
    source: 'substack',
    url: '#',
    publishedAt: '2024-01-15',
    minutes: 8,
    topics: ['RAG', 'AI', 'Enterprise']
  },
  {
    id: '2',
    title: 'Building Scalable Data Pipelines with Modern Tools',
    source: 'linkedin',
    url: '#',
    publishedAt: '2024-01-14',
    minutes: 5,
    topics: ['Data Engineering', 'Python', 'MLOps']
  },
  {
    id: '3',
    title: 'Product Management in the Age of AI',
    source: 'twitter',
    url: '#',
    publishedAt: '2024-01-13',
    minutes: 3,
    topics: ['Product Management', 'AI', 'Strategy']
  }
];

const sourceIcons = {
  substack: '📰',
  linkedin: '💼',
  twitter: '🐦',
  rss: '📡'
};

const LearningStrip = ({ items = mockItems }: LearningStripProps) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex space-x-4 animate-marquee hover:[animation-play-state:paused]">
        {items.concat(items).map((item, index) => (
          <Card key={`${item.id}-${index}`} className="flex-shrink-0 w-80 p-4 hover-lift">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{sourceIcons[item.source]}</span>
                <Badge variant="secondary" className="text-xs">
                  {item.source}
                </Badge>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {item.minutes}m
              </div>
            </div>
            
            <h3 className="font-medium text-sm line-clamp-2 mb-3">
              {item.title}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {item.topics.slice(0, 2).map((topic) => (
                  <Badge key={topic} variant="outline" className="text-xs">
                    <Tag className="h-2 w-2 mr-1" />
                    {topic}
                  </Badge>
                ))}
              </div>
              
              <a 
                href={item.url}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LearningStrip;