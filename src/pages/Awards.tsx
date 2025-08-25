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
      count: 15,
      icon: <Heart className="w-12 h-12" />,
      logo: ''
    },
    {
      id: 'publications',
      category: 'PUBLICATIONS',
      count: 8,
      icon: <Search className="w-12 h-12" />,
      logo: ''
    },
    {
      id: 'leadership',
      category: 'LEADERSHIP',
      count: 12,
      icon: <Users className="w-12 h-12" />,
      logo: ''
    },
    {
      id: 'featured',
      category: 'FEATURED',
      count: 6,
      icon: <Flame className="w-12 h-12" />,
      logo: ''
    }
  ];

  const logoAchievements = [
    {
      id: 'meta',
      category: 'META',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/70a07769-bb89-4f40-9f9c-a2a8b7098ccd.png'
    },
    {
      id: 'travelers',
      category: 'TRAVELERS',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/a83b9372-b0ec-41c4-9daf-336e66e15599.png'
    },
    {
      id: 'ait',
      category: 'AIT',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/034475e7-6138-4f1b-adda-2444763a10a0.png'
    },
    {
      id: 'cbse-volleyball',
      category: 'CBSE VOLLEYBALL',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/ff290da8-5995-4064-9435-fe5876f9da4c.png'
    },
    {
      id: 'cbse-quiz',
      category: 'CBSE QUIZ',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/50a3983a-a956-4895-bfc3-11c49d274175.png'
    },
    {
      id: 'etv',
      category: 'ETV',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/488bcec0-7277-4131-84e7-d9def0115531.png'
    },
    {
      id: 'star',
      category: 'STAR',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/67c49eb8-6eff-41d0-958d-89d151acb37f.png'
    },
    {
      id: 'zee',
      category: 'ZEE',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/867f4e57-07b2-43ed-856d-1f71f22a5c2d.png'
    },
    {
      id: 'ieee',
      category: 'IEEE',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/2145f34e-7fe1-4378-90e6-ea8ded92417a.png'
    },
    {
      id: 'nca',
      category: 'NCA',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/1808d74d-4143-4b79-9026-270b471a5d46.png'
    },
    {
      id: 'aip-publishing',
      category: 'AIP PUBLISHING',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/f41c839b-80be-4c69-b07b-ff4e6075b29b.png'
    },
    {
      id: 'rotary',
      category: 'ROTARY',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/fce4dade-6724-4568-977b-84e54f7d4d4b.png'
    },
    {
      id: 'lions',
      category: 'LIONS',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/974084e2-0782-4157-bbd0-6e79633ed7ea.png'
    },
    {
      id: 'nstse',
      category: 'NSTSE',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/726315e8-0bb4-48c8-a458-8f381c1c0dae.png'
    },
    {
      id: 'uconn',
      category: 'UCONN',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/eaa4ce47-da4b-4ea0-b9b9-87349fc866cc.png'
    },
    {
      id: 'government-ap',
      category: 'GOVERNMENT AP',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/37089c6e-5534-47da-8af5-452c24fcb114.png'
    },
    {
      id: 'hindu-quiz',
      category: 'HINDU QUIZ',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/9224a3d0-84a5-433d-86df-9e97f45dbfa3.png'
    },
    {
      id: 'un',
      category: 'UN',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/e015e259-d7ce-422d-b275-842b8981db2a.png'
    },
    {
      id: 'hindu-young-world',
      category: 'HINDU YOUNG WORLD',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/326c63df-4af4-4496-87ee-285f101aecec.png'
    },
    {
      id: 'telangana-govt',
      category: 'TELANGANA GOVT',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/a36c33d8-35cb-444c-9229-02457f49fd63.png'
    },
    {
      id: 'essence',
      category: 'ESSENCE',
      count: 1,
      icon: <Heart className="w-12 h-12" />,
      logo: '/lovable-uploads/0021839c-722c-495d-b2cc-64db9f98ac03.png'
    },
  ];

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

          {/* Logo Section with Cork Board */}
          <div className="relative -mx-6 py-0 my-16">
            {/* Torn edge top */}
            <div className="relative">
              <div className="h-6 bg-white" 
                   style={{
                     clipPath: 'polygon(0% 100%, 2% 85%, 5% 95%, 8% 75%, 12% 90%, 15% 70%, 18% 85%, 22% 65%, 25% 80%, 28% 60%, 32% 75%, 35% 55%, 38% 70%, 42% 50%, 45% 65%, 48% 45%, 52% 60%, 55% 40%, 58% 55%, 62% 35%, 65% 50%, 68% 30%, 72% 45%, 75% 25%, 78% 40%, 82% 20%, 85% 35%, 88% 15%, 92% 30%, 95% 10%, 98% 25%, 100% 5%, 100% 0%, 0% 0%)'
                   }}>
              </div>
            </div>
            
            {/* White background section with unconventional logo layout */}
            <div className="bg-white py-12 relative">
              <div className="container mx-auto px-6">
                <div className="relative flex flex-wrap justify-center items-center gap-4 min-h-[400px]">
                  {logoAchievements.map((achievement, index) => {
                    // Create varied sizes without rotation
                    const sizes = [
                      'max-w-[120px] max-h-[90px]',
                      'max-w-[100px] max-h-[75px]',
                      'max-w-[110px] max-h-[85px]',
                      'max-w-[115px] max-h-[88px]',
                      'max-w-[105px] max-h-[80px]',
                      'max-w-[125px] max-h-[95px]',
                      'max-w-[108px] max-h-[82px]',
                      'max-w-[118px] max-h-[90px]',
                      'max-w-[112px] max-h-[85px]',
                      'max-w-[122px] max-h-[92px]',
                      'max-w-[116px] max-h-[88px]',
                      'max-w-[102px] max-h-[78px]',
                      'max-w-[120px] max-h-[91px]',
                      'max-w-[114px] max-h-[86px]',
                      'max-w-[107px] max-h-[81px]',
                      'max-w-[119px] max-h-[89px]',
                      'max-w-[111px] max-h-[84px]'
                    ];
                    const size = sizes[index % sizes.length];
                    
                    return (
                      <div
                        key={achievement.id}
                        className="flex items-center justify-center cursor-pointer group transition-all duration-300 hover:scale-110 hover:z-10 relative"
                        onMouseEnter={() => setHoveredItem(achievement.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <img 
                          src={achievement.logo} 
                          alt={`${achievement.category} logo`}
                          className={`${size} object-contain transition-all duration-300 opacity-85 hover:opacity-100 drop-shadow-sm`}
                        />
                      </div>
                    );
                  })}
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