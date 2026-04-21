import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Download } from 'lucide-react';
import FallingLetters from '@/components/effects/FallingLetters';
import ProfileCard from '@/components/modern/ProfileCard';

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
            <FallingLetters
              text="data · decisions · deliverables"
              className="display-title text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">


          </div>
        </div>

        {/* Featured content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Card */}
          <div className="flex justify-center lg:justify-start">
            <ProfileCard />
          </div>

          {/* Right side - Mission Statement */}
          <div className="animate-fade-up delay-300">
            <div className="py-[100px] px-[70px]">
              <h2 className="text-3xl font-bold mb-6 font-display text-white">Mission Statement</h2>
              <blockquote className="text-xl font-medium text-balance mb-6 leading-relaxed">
                "{quotes[currentQuote]}"
              </blockquote>
              <p className="text-muted-foreground">— Daily inspiration that drives my work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default Hero;