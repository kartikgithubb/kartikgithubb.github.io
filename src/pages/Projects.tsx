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
const mockProjects: Project[] = [{
  id: 'social-emotions',
  title: 'Social Media Emotion Analytics',
  tagline: 'Understanding engagement through emotional intelligence',
  summary: 'Built comprehensive emotion detection pipeline for social media content analysis across Facebook, Instagram, and Twitter platforms.',
  highlights: ['Processed 1M+ social media posts', 'Achieved 87% emotion classification accuracy', 'Increased engagement prediction by 34%'],
  stack: ['Python', 'TensorFlow', 'NLP', 'AWS', 'PostgreSQL'],
  tags: ['Machine Learning', 'Social Media', 'Analytics', 'Python', 'AI'],
  links: {
    demo: '#',
    code: '#',
    case_study: '#'
  },
  category: 'Data',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
}, {
  id: 'powerbi-dashboard',
  title: 'Executive Analytics Dashboard',
  tagline: 'Real-time business intelligence for leadership',
  summary: 'Designed and deployed comprehensive Power BI dashboard suite providing real-time insights across key business metrics.',
  highlights: ['Consolidated 12 data sources', 'Reduced reporting time by 75%', 'Enabled data-driven decisions for C-suite'],
  stack: ['Power BI', 'SQL Server', 'DAX', 'Azure', 'ETL'],
  tags: ['Business Intelligence', 'Dashboard', 'Analytics', 'Power BI', 'Data Visualization'],
  links: {
    demo: '#'
  },
  category: 'AI',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
}, {
  id: 'aura-pm',
  title: 'AURA - AI Project Assistant',
  tagline: 'Intelligent project management with AI agents',
  summary: 'Prototype AI-powered project management tool that uses natural language processing to automate task creation, status updates, and risk assessment.',
  highlights: ['RAG-powered project insights', 'Automated risk detection', 'Natural language task management'],
  stack: ['React', 'Node.js', 'OpenAI', 'Vector DB', 'TypeScript'],
  tags: ['AI Assistant', 'Project Management', 'NLP', 'React', 'OpenAI'],
  links: {
    demo: '#',
    code: '#'
  },
  category: 'Product',
  image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop'
}];
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['All', 'Data', 'AI', 'Product'];

  // Get all unique tags from projects
  const allTags = Array.from(new Set(mockProjects.flatMap(project => project.tags)));
  const filteredProjects = mockProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = searchTerm === '' || project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) || project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  return <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        

        {/* Search Bar */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search my Projects" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-12 py-4 rounded-full border-2 border-border/30 bg-background/80 backdrop-blur-sm text-lg shadow-lg focus:border-primary/50 transition-all" />
          </div>
        </div>

        {/* Projects List */}
        <div className="max-w-6xl mx-auto space-y-8">
          {filteredProjects.map(project => <div key={project.id} className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Left Side - Project Card */}
              <div className="lg:w-96 flex-shrink-0">
                <Card className="relative overflow-hidden border-2 border-border/30 h-80 group hover:border-primary/30 transition-all duration-300">
                  {/* Background Image with transparency */}
                  <div className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-25 transition-opacity duration-300" style={{
                backgroundImage: `url(${project.image})`
              }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/85" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-background/90 backdrop-blur-sm border border-primary/30 px-3 py-1 rounded-md">
                      <span className="text-sm font-medium text-primary">{project.category}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center">
                      <h3 className="text-xl font-bold text-center w-full group-hover:text-primary transition-colors">
                        {project.title.replace('AURA - ', '')}
                      </h3>
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="flex justify-center">
                      <Button size="sm" variant="outline" onClick={() => window.location.href = project.links.case_study || project.links.demo || '#'} className="rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground px-6">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Right Side - Project Details */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.summary}
                  </p>
                </div>
                
                {/* Skills Section */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary" className="text-sm py-1 px-3 rounded-full">
                        {tag}
                      </Badge>)}
                  </div>
                </div>
                
                {/* Tools Section */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => <Badge key={tech} variant="outline" className="text-sm py-1 px-3 rounded-full border-primary/30 text-primary">
                        {tech}
                      </Badge>)}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>;
};
export default Projects;