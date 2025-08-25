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
      id: 'meta',
      category: 'META',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/3916ad84-c483-42ec-93ab-8f1b7d75e7f2.png'
    },
    {
      id: 'zee',
      category: 'ZEE',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/c75d7101-84d7-4b9d-ab26-e1363b287403.png'
    },
    {
      id: 'cbse',
      category: 'CBSE QUIZ',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/cbf34bca-acc0-4615-9e18-80a91cd8af83.png'
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
            {achievements.map((achievement) => (
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

          {/* Logo Section with Realistic Tear Effect */}
          <div className="relative -mx-6 py-0 my-16">
            {/* Torn edge top */}
            <div className="relative">
              <div className="h-6 bg-white" 
                   style={{
                     clipPath: 'polygon(0% 100%, 2% 85%, 5% 95%, 8% 75%, 12% 90%, 15% 70%, 18% 85%, 22% 65%, 25% 80%, 28% 60%, 32% 75%, 35% 55%, 38% 70%, 42% 50%, 45% 65%, 48% 45%, 52% 60%, 55% 40%, 58% 55%, 62% 35%, 65% 50%, 68% 30%, 72% 45%, 75% 25%, 78% 40%, 82% 20%, 85% 35%, 88% 15%, 92% 30%, 95% 10%, 98% 25%, 100% 5%, 100% 0%, 0% 0%)'
                   }}>
              </div>
            </div>
            
            {/* White background section with content */}
            <div className="bg-white py-12 relative">
              <div className="overflow-hidden relative">
                <div className="flex animate-marquee space-x-16 py-4">
                  {scrollingAchievements.map((achievement, index) => (
                    <div
                      key={`${achievement.id}-${index}`}
                      className="flex-shrink-0 w-48 h-32 relative cursor-pointer group"
                      onMouseEnter={() => setHoveredItem(`${achievement.id}-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className={`
                        w-full h-full transition-all duration-300 ease-out flex items-center justify-center
                        ${hoveredItem === `${achievement.id}-${index}` 
                          ? 'scale-110' 
                          : 'scale-100 opacity-70 hover:opacity-100'
                        }
                      `}>
                        <img 
                          src={achievement.logo} 
                          alt={`${achievement.category} logo`}
                          className="max-w-full max-h-full object-contain transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Torn edge bottom */}
            <div className="relative">
              <div className="h-6 bg-white" 
                   style={{
                     clipPath: 'polygon(0% 0%, 2% 15%, 5% 5%, 8% 25%, 12% 10%, 15% 30%, 18% 15%, 22% 35%, 25% 20%, 28% 40%, 32% 25%, 35% 45%, 38% 30%, 42% 50%, 45% 35%, 48% 55%, 52% 40%, 55% 60%, 58% 45%, 62% 65%, 65% 50%, 68% 70%, 72% 55%, 75% 75%, 78% 60%, 82% 80%, 85% 65%, 88% 85%, 92% 70%, 95% 90%, 98% 75%, 100% 95%, 100% 100%, 0% 100%)'
                   }}>
              </div>
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