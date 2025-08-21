import React, { useState } from 'react';
import { ExternalLink, Github, Tag, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  highlights: string[];
  stack: string[];
  tags: string[];
  links: {
    demo?: string;
    code?: string;
    case_study?: string;
  };
  category: string;
  image: string;
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
    tags: ['Machine Learning', 'Social Media', 'Analytics', 'Python', 'AI'],
    links: {
      demo: '#',
      code: '#',
      case_study: '#'
    },
    category: 'Data',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
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
    tags: ['Business Intelligence', 'Dashboard', 'Analytics', 'Power BI', 'Data Visualization'],
    links: {
      demo: '#'
    },
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
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
    tags: ['AI Assistant', 'Project Management', 'NLP', 'React', 'OpenAI'],
    links: {
      demo: '#',
      code: '#'
    },
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop'
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['All', 'Data', 'AI', 'Product'];

  // Get all unique tags from projects
  const allTags = Array.from(new Set(mockProjects.flatMap(project => project.tags)));

  const filteredProjects = mockProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search my Projects"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-full border-border/50 bg-background/50 backdrop-blur-sm"
            />
          </div>

          {/* Diamond Filter */}
          <div className="flex items-center gap-4">
            <div className="diamond-shape p-3 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 backdrop-blur-sm hover:from-primary/30 hover:to-primary/20 transition-all duration-300 cursor-pointer group">
              <span className="text-xs font-medium text-primary group-hover:text-primary/90">Filter by</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1 bg-muted/50 backdrop-blur-sm rounded-lg border border-border/50">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 relative group"
              >
                <span className="relative z-10">{category}</span>
                {selectedCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 rounded-md" />
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex flex-col md:flex-row gap-6">
              {/* Project Card */}
              <Card className="relative overflow-hidden border border-border/50 hover-lift group flex-1 min-h-[400px]">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
                
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="flex justify-center mb-4">
                    <div className="diamond-shape px-4 py-2 bg-gradient-to-br from-primary/30 to-primary/20 border border-primary/40 backdrop-blur-sm">
                      <span className="text-xs font-medium text-primary">{project.category}</span>
                    </div>
                  </div>
                  
                  {/* Project Name */}
                  <h3 className="text-center text-lg font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Learn More Button */}
                  <div className="mt-auto flex justify-center">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.location.href = project.links.case_study || project.links.demo || '#'}
                      className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* Project Details */}
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold">Title</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.summary}
                </p>
                
                {/* Skills Section */}
                <div>
                  <h4 className="font-semibold mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Tools Section */}
                <div>
                  <h4 className="font-semibold mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Projects;