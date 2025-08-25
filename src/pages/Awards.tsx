import React, { useState } from 'react';
import { Heart, Search, Flame, ThumbsUp, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import RecommendationBoard from '@/components/RecommendationBoard';

interface Achievement {
  id: string;
  category: string;
  count: number;
  icon: React.ReactNode;
  logo: string;
}

const Awards = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const achievements: Achievement[] = [
    {
      id: 'awards',
      category: 'AWARDS',
      count: 30,
      icon: <Heart className="w-12 h-12" />,
      logo: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 'publications',
      category: 'PUBLICATIONS',
      count: 2,
      icon: <Search className="w-12 h-12" />,
      logo: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 'recognitions',
      category: 'FEATURED',
      count: 5,
      icon: <Flame className="w-12 h-12" />,
      logo: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 'leadership',
      category: 'LEADERSHIP',
      count: 4,
      icon: <Users className="w-12 h-12" />,
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 'hackathons',
      category: 'HACKATHONS',
      count: 8,
      icon: <ThumbsUp className="w-12 h-12" />,
      logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 'certifications',
      category: 'CERTIFICATIONS',
      count: 12,
      icon: <Heart className="w-12 h-12" />,
      logo: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 'meta',
      category: 'META',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/3916ad84-c483-42ec-93ab-8f1b7d75e7f2.png'
    }
  ];

  // Create enough duplicates for seamless scrolling
  const scrollingAchievements = [...achievements, ...achievements, ...achievements];

  return (
    <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="crystal-text">Awards</span> & Achievements
            </h1>
            <p className="text-lg text-muted-foreground italic mb-16">
              "Speak to K - my digital twin to know about my Achievements in detail"
            </p>
          </div>

          {/* Achievements Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.slice(0, 4).map((achievement) => (
              <div 
                key={achievement.id}
                className="text-center group cursor-pointer"
                onMouseEnter={() => setHoveredItem(achievement.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={`
                  mb-4 mx-auto w-20 h-20 flex items-center justify-center rounded-full 
                  transition-all duration-300 ease-out
                  ${hoveredItem === achievement.id 
                    ? 'scale-125 bg-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.5)] text-primary' 
                    : 'bg-muted text-muted-foreground hover:bg-primary/10'
                  }
                `}>
                  {achievement.icon}
                </div>
                <div className={`
                  text-3xl font-bold mb-2 transition-colors duration-300
                  ${hoveredItem === achievement.id ? 'text-primary' : 'text-foreground'}
                `}>
                  {achievement.count}
                </div>
                <div className={`
                  text-sm font-medium transition-colors duration-300
                  ${hoveredItem === achievement.id ? 'text-primary' : 'text-muted-foreground'}
                `}>
                  {achievement.category}
                </div>
              </div>
            ))}
          </div>

          {/* Scrolling Competition Logos */}
          <div className="mb-16 overflow-hidden relative bg-gradient-to-r from-background via-muted/30 to-background rounded-2xl py-8">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex animate-marquee space-x-12 py-4">
              {scrollingAchievements.map((achievement, index) => (
                <div
                  key={`${achievement.id}-${index}`}
                  className="flex-shrink-0 w-24 h-24 relative cursor-pointer group"
                  onMouseEnter={() => setHoveredItem(`${achievement.id}-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className={`
                    w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ease-out
                    ${hoveredItem === `${achievement.id}-${index}` 
                      ? 'scale-150 z-20 shadow-[0_0_40px_rgba(var(--primary),0.6)]' 
                      : 'shadow-md hover:shadow-lg scale-100'
                    }
                  `}>
                    <img 
                      src={achievement.logo} 
                      alt={`${achievement.category} logo`}
                      className="w-full h-full object-cover"
                    />
                    {achievement.id === 'meta' && (
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px] rounded-2xl" />
                    )}
                  </div>
                  
                  {/* Enhanced Glow effect */}
                  {hoveredItem === `${achievement.id}-${index}` && (
                    <>
                      <div className="absolute inset-0 rounded-2xl bg-primary/30 animate-pulse -z-10 scale-[2] blur-xl" />
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-pulse -z-5 scale-[1.5] blur-lg" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recommendation Board */}
          <RecommendationBoard />
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Awards;