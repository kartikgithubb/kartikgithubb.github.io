import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, ArrowUpRight, Brain, Zap } from 'lucide-react';

interface K2SectionProps {
  className?: string;
}

const K2Section = ({ className }: K2SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('k2-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="k2-section" 
      className={`relative py-24 lg:py-32 ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Digital Intelligence</span>
            </div>
            <h2 className="display-title text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet K2, My Digital Twin
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              An AI-powered representation of my professional expertise, ready to answer questions about my background, skills, and experience.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - K2 Visual */}
            <div className="flex justify-center lg:justify-start animate-fade-up delay-200">
              <div className="relative">
                <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 group">
                  <div className="text-center">
                    {/* Animated bot icon */}
                    <div className="relative mb-8">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mx-auto animate-pulse-glow">
                        <Bot 
                          className={`w-16 h-16 text-primary transition-all duration-700 ${
                            isVisible ? 'animate-bounce-gentle' : ''
                          }`} 
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      K2 Digital Assistant
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Your intelligent guide to understanding my professional journey
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right side - Features */}
            <div className="space-y-6 animate-fade-up delay-400">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6 font-display text-white">
                  Learn About My:
                </h3>
                
                {/* Feature list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Zap, label: 'Skillset & Expertise' },
                    { icon: Brain, label: 'Job Compatibility' },
                    { icon: Bot, label: 'Certifications' },
                    { icon: ArrowUpRight, label: 'Project Portfolio' },
                    { icon: Zap, label: 'Work Experience' },
                    { icon: Brain, label: 'Education Background' },
                    { icon: Bot, label: 'Awards & Recognition' },
                    { icon: ArrowUpRight, label: 'Professional Journey' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:bg-card/50 group"
                    >
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Bot className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Chat with K2 Now
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="mt-16 text-center animate-fade-up delay-600">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span>Available 24/7 • Powered by AI • Always Up-to-Date</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default K2Section;