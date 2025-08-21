import React, { useState } from 'react';
import { Trophy, Medal, Star, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';

interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  logo: string;
}

const Awards = () => {
  const [hoveredAward, setHoveredAward] = useState<string | null>(null);

  const awards: Award[] = [
    {
      id: 'data-science-competition',
      title: 'First Place - Data Science Challenge',
      organization: 'KDD Cup',
      year: '2023',
      category: 'Data Science',
      description: 'Won first place in international competition with 2000+ participants',
      logo: '/placeholder.svg'
    },
    {
      id: 'hackathon-winner',
      title: 'Best AI Innovation',
      organization: 'TechCrunch Disrupt',
      year: '2022',
      category: 'AI/ML',
      description: 'Developed RAG-powered analytics platform in 48 hours',
      logo: '/placeholder.svg'
    },
    {
      id: 'academic-excellence',
      title: 'Outstanding Graduate Student',
      organization: 'Stanford University',
      year: '2022',
      category: 'Academic',
      description: 'Recognized for exceptional research in machine learning',
      logo: '/placeholder.svg'
    },
    {
      id: 'project-management',
      title: 'Project Excellence Award',
      organization: 'PMI Local Chapter',
      year: '2021',
      category: 'Project Management',
      description: 'Led successful digital transformation initiative',
      logo: '/placeholder.svg'
    },
    {
      id: 'innovation-award',
      title: 'Innovation in Analytics',
      organization: 'Analytics Society',
      year: '2021',
      category: 'Analytics',
      description: 'Pioneered new approach to social media sentiment analysis',
      logo: '/placeholder.svg'
    },
    {
      id: 'student-leadership',
      title: 'Student Leadership Award',
      organization: 'UC Berkeley',
      year: '2020',
      category: 'Leadership',
      description: 'Led student data science organization with 500+ members',
      logo: '/placeholder.svg'
    }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="crystal-text">Awards</span> & Recognition
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognition for excellence in data science, innovation, and leadership
            </p>
          </div>

          {/* Scrolling Marquee */}
          <div className="mb-16 overflow-hidden relative">
            <div className="flex animate-marquee space-x-8 py-8">
              {/* First set */}
              {awards.map((award) => (
                <div
                  key={`first-${award.id}`}
                  className="flex-shrink-0 w-32 h-32 relative cursor-pointer"
                  onMouseEnter={() => setHoveredAward(award.id)}
                  onMouseLeave={() => setHoveredAward(null)}
                >
                  <div className={`
                    w-full h-full rounded-2xl overflow-hidden shadow-md transition-all duration-300
                    ${hoveredAward === award.id ? 'scale-110 shadow-xl drop-shadow-glow' : ''}
                  `}>
                    <img 
                      src={award.logo} 
                      alt={award.organization}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Glow effect */}
                  {hoveredAward === award.id && (
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-pulse -z-10 scale-125 blur-md" />
                  )}
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {awards.map((award) => (
                <div
                  key={`second-${award.id}`}
                  className="flex-shrink-0 w-32 h-32 relative cursor-pointer"
                  onMouseEnter={() => setHoveredAward(award.id)}
                  onMouseLeave={() => setHoveredAward(null)}
                >
                  <div className={`
                    w-full h-full rounded-2xl overflow-hidden shadow-md transition-all duration-300
                    ${hoveredAward === award.id ? 'scale-110 shadow-xl drop-shadow-glow' : ''}
                  `}>
                    <img 
                      src={award.logo} 
                      alt={award.organization}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Glow effect */}
                  {hoveredAward === award.id && (
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-pulse -z-10 scale-125 blur-md" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award) => (
              <Card key={award.id} className="p-6 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                    <img 
                      src={award.logo} 
                      alt={award.organization}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {award.category}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{award.year}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold text-foreground mb-2">
                  {award.title}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-2">
                  {award.organization}
                </p>
                
                <p className="text-sm text-muted-foreground">
                  {award.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Awards;