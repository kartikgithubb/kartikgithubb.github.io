import React, { useState } from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';

interface EducationItem {
  id: string;
  school: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  location: string;
  logo?: string;
  image?: string;
  crazyFact: string;
  gpa?: string;
  honors?: string[];
}

const Education = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const education: EducationItem[] = [
    {
      id: 'masters',
      school: 'Stanford University',
      degree: 'Master of Science',
      field: 'Data Science',
      startYear: '2020',
      endYear: '2022',
      location: 'Stanford, CA',
      logo: '/placeholder.svg',
      image: '/placeholder.svg',
      crazyFact: 'Built an AI system that could predict student success with 94% accuracy just from their first week of online activity!',
      gpa: '3.9',
      honors: ['Dean\'s List', 'Outstanding Thesis Award']
    },
    {
      id: 'bachelors',
      school: 'UC Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science & Statistics',
      startYear: '2016',
      endYear: '2020',
      location: 'Berkeley, CA',
      logo: '/placeholder.svg',
      image: '/placeholder.svg',
      crazyFact: 'Led a hackathon team that created a campus food waste tracking app adopted by 12 universities across California!',
      gpa: '3.8',
      honors: ['Phi Beta Kappa', 'CS Department Honors']
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
              <span className="crystal-text">Education</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation in data science, computer science, and statistical analysis
            </p>
          </div>

          <div className="space-y-12">
            {education.map((item) => (
              <div key={item.id} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* School Logo & Photo */}
                <div className="lg:col-span-1">
                  <div className="flex flex-col items-center space-y-6">
                    {/* School Logo */}
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img 
                        src={item.logo} 
                        alt={`${item.school} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* School Photo with Crazy Fact */}
                    <div 
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="w-48 h-32 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                        <img 
                          src={item.image} 
                          alt={`${item.school} campus`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Crazy Fact Overlay */}
                      {hoveredItem === item.id && (
                        <div className="absolute inset-0 bg-black/80 rounded-xl flex items-center justify-center p-4 animate-fade-in">
                          <p className="text-white text-sm text-center font-medium">
                            💡 {item.crazyFact}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Education Details */}
                <div className="lg:col-span-2">
                  <Card className="p-8 hover-lift">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {item.degree}
                        </h3>
                        <p className="text-xl text-primary font-semibold mb-1">
                          {item.field}
                        </p>
                        <p className="text-lg text-muted-foreground font-medium">
                          {item.school}
                        </p>
                      </div>
                      
                      <div className="text-right text-muted-foreground">
                        <div className="flex items-center text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{item.startYear} - {item.endYear}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* GPA */}
                      {item.gpa && (
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Award className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">GPA</p>
                            <p className="text-muted-foreground">{item.gpa}/4.0</p>
                          </div>
                        </div>
                      )}

                      {/* Honors */}
                      {item.honors && item.honors.length > 0 && (
                        <div>
                          <p className="font-semibold mb-2">Honors & Awards</p>
                          <div className="space-y-1">
                            {item.honors.map((honor, index) => (
                              <p key={index} className="text-sm text-muted-foreground flex items-center">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                {honor}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Education;