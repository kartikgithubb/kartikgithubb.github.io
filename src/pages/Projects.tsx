import React, { useState } from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: {
    demo?: string;
    code?: string;
    case_study?: string;
  };
  category: string;
  image?: string;
}

const mockProjects: Project[] = [
  {
    id: 'social-emotions',
    title: 'Social Media Emotion Analytics',
    tagline: 'Understanding engagement through emotional intelligence',
    summary: 'Built comprehensive emotion detection pipeline for social media content analysis across Facebook, Instagram, and Twitter platforms.',
    highlights: [
      'Processed 1M+ social media posts',
      'Achieved 87% emotion classification accuracy',
      'Increased engagement prediction by 34%'
    ],
    stack: ['Python', 'TensorFlow', 'NLP', 'AWS', 'PostgreSQL'],
    links: {
      demo: '#',
      code: '#',
      case_study: '#'
    },
    category: 'AI/ML'
  },
  {
    id: 'powerbi-dashboard',
    title: 'Executive Analytics Dashboard',
    tagline: 'Real-time business intelligence for leadership',
    summary: 'Designed and deployed comprehensive Power BI dashboard suite providing real-time insights across key business metrics.',
    highlights: [
      'Consolidated 12 data sources',
      'Reduced reporting time by 75%',
      'Enabled data-driven decisions for C-suite'
    ],
    stack: ['Power BI', 'SQL Server', 'DAX', 'Azure', 'ETL'],
    links: {
      demo: '#'
    },
    category: 'Analytics'
  },
  {
    id: 'aura-pm',
    title: 'AURA - AI Project Assistant',
    tagline: 'Intelligent project management with AI agents',
    summary: 'Prototype AI-powered project management tool that uses natural language processing to automate task creation, status updates, and risk assessment.',
    highlights: [
      'RAG-powered project insights',
      'Automated risk detection',
      'Natural language task management'
    ],
    stack: ['React', 'Node.js', 'OpenAI', 'Vector DB', 'TypeScript'],
    links: {
      demo: '#',
      code: '#'
    },
    category: 'Product'
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'AI/ML', 'Analytics', 'Product'];

  const filteredProjects = selectedCategory === 'All' 
    ? mockProjects 
    : mockProjects.filter(project => project.category === selectedCategory);

  return (
    <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="crystal-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A showcase of data analytics, AI experiments, and product innovations 
            that demonstrate practical problem-solving skills
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1 bg-muted rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="p-8 hover-lift group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.summary}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex space-x-3">
                {project.links.demo && (
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                )}
                {project.links.code && (
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                )}
                {project.links.case_study && (
                  <Button size="sm">
                    Case Study
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Projects;