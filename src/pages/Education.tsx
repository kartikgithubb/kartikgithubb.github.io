import React, { useState } from 'react';
import { MapPin, GraduationCap, School, Award, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';

interface EducationItem {
  id: string;
  school: string;
  period: string;
  subjects: string;
  graduatedGrade: string;
  location: string;
  logo: string;
  memoryPhoto: string;
  crazyFact: string;
  gpa: string;
}

const Education = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const education: EducationItem[] = [
    {
      id: 'masters',
      school: 'University of Connecticut',
      period: 'Jan 2024 - Present',
      subjects: 'Business Analytics and Project Management',
      graduatedGrade: 'Master of Science',
      location: 'Connecticut, USA',
      logo: '/lovable-uploads/838fc5d8-45f6-4091-8a40-b5efbb516124.png',
      memoryPhoto: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=120&fit=crop',
      crazyFact: 'Built an AI system that could predict student success with 94% accuracy just from their first week of online activity!',
      gpa: 'In Progress'
    },
    {
      id: 'bachelors',
      school: 'KL University',
      period: 'Jul 2019 - May 2023',
      subjects: 'Electronics and Computer Engineering',
      graduatedGrade: 'Bachelor of Technology',
      location: 'Andhra Pradesh, India',
      logo: '/lovable-uploads/412635a4-95e3-4d38-9a6d-6caa1242f505.png',
      memoryPhoto: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=120&fit=crop',
      crazyFact: 'Led a hackathon team that created a campus food waste tracking app adopted by 12 universities across California!',
      gpa: '9/10'
    },
    {
      id: 'highschool',
      school: 'Delhi Public School',
      period: 'Jul 2017 - May 2019',
      subjects: 'Sciences',
      graduatedGrade: 'High School',
      location: 'Andhra Pradesh, India',
      logo: '/lovable-uploads/6c4f2361-b520-4274-ac53-8971b7b9afea.png',
      memoryPhoto: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&h=120&fit=crop',
      crazyFact: 'Won the national programming competition by creating a game that taught kids math while they played!',
      gpa: '8.5/10'
    },
    {
      id: 'secondary',
      school: 'V.S.St. Johns Higher Secondary School',
      period: 'Jul 2005 - May 2017',
      subjects: 'Foundational Studies',
      graduatedGrade: 'Secondary School',
      location: 'Andhra Pradesh, India',
      logo: '/lovable-uploads/36e4faaa-a428-4b35-86af-35714e818276.png',
      memoryPhoto: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=200&h=120&fit=crop',
      crazyFact: 'Built my first computer at age 10 using parts from old electronics I found around the house!',
      gpa: '10/10'
    }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold mb-6">
              <span className="crystal-text">Education</span>
            </h1>
            <p className="text-xl text-muted-foreground italic mb-4">
              (Speak to K - my digital twin to learn more about my Academia and Relevant Courseworks)
            </p>
          </div>

          <div className="space-y-8">
            {education.map((item) => (
              <div key={item.id} className="flex items-center gap-8">
                {/* School Logo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-lg overflow-hidden hover-glow transition-all duration-300">
                    <img 
                      src={item.logo} 
                      alt={`${item.school} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* School Information */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  {/* School Details */}
                  <div>
                    <h3 className="font-bold text-lg">{item.school}</h3>
                    <p className="text-sm text-muted-foreground">{item.subjects}</p>
                  </div>

                  {/* Academic Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{item.graduatedGrade}</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground font-medium">{item.period}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2 text-primary/70" />
                          <span className="text-primary font-semibold">GPA: {item.gpa}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Memory Photo */}
                  <div className="flex justify-end">
                    <div 
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="w-40 h-28 rounded-lg overflow-hidden border border-border shadow-sm group-hover:shadow-lg transition-all duration-300">
                        <img 
                          src={item.memoryPhoto} 
                          alt="Photograph of Favorite Memory"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Crazy Fact Overlay */}
                      {hoveredItem === item.id && (
                        <div className="absolute inset-0 bg-black/90 rounded-lg flex items-center justify-center p-3 animate-fade-in z-10">
                          <p className="text-white text-xs text-center font-medium leading-tight">
                            💡 {item.crazyFact}
                          </p>
                        </div>
                      )}
                      
                      {/* Photo Label */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <p className="text-xs text-center text-muted-foreground whitespace-nowrap">
                          Photograph of Favorite Memory
                        </p>
                      </div>
                    </div>
                  </div>
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