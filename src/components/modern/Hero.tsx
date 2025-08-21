import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Download } from 'lucide-react';
interface HeroProps {
  className?: string;
}
const Hero = ({
  className
}: HeroProps) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const quotes = ["Data tells stories, design makes them beautiful, decisions turn them into impact.", "The best analytics bridge the gap between what happened and what should happen next.", "In every dataset lies a story waiting to transform business strategy.", "Great products emerge when data science meets human empathy."];

  // Rotate quotes daily based on date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    setCurrentQuote(dayOfYear % quotes.length);
  }, []);
  return <section className={`relative overflow-hidden ${className}`}>
      {/* Hero background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      <div className="absolute inset-0" style={{
      background: 'var(--gradient-mesh)'
    }}></div>
      
      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Main hero content */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="mb-8">
              <h1 className="display-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
                data · design · decisions · deliverables
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              
            </div>
          </div>

          {/* Featured content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Visual placeholder */}
            <div className="flex justify-center lg:justify-start">
              <Card className="p-8 w-full max-w-md h-96 flex flex-col items-center justify-center border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 group">
                <div className="text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mb-4 mx-auto">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 font-display">Professional Photo</h3>
                  <p className="text-lg">Coming Soon</p>
                </div>
              </Card>
            </div>

            {/* Right side - Mission Statement */}
            <div className="animate-fade-up delay-300">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg mx-0 py-[100px] px-[70px]">
                <h2 className="text-3xl font-bold mb-6 font-display">Mission Statement</h2>
                <blockquote className="text-xl font-medium text-balance mb-6 leading-relaxed">
                  "{quotes[currentQuote]}"
                </blockquote>
                <p className="text-muted-foreground">— Daily inspiration that drives my work</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;