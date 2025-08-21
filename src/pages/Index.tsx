import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import TextWave from '@/components/effects/TextWave';
import RetroFallingText from '@/components/effects/RetroFallingText';
import HandDrawnArrow from '@/components/effects/HandDrawnArrow';
import LearningStrip from '@/components/LearningStrip';
import ProgressRing from '@/components/progress/ProgressRing';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);
  const [missionVisible, setMissionVisible] = useState(false);
  const missionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const quotes = [
    "Data tells stories, design makes them beautiful, decisions turn them into impact.",
    "The best analytics bridge the gap between what happened and what should happen next.",
    "In every dataset lies a story waiting to transform business strategy.",
    "Great products emerge when data science meets human empathy."
  ];

  // Rotate quotes daily based on date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    setCurrentQuote(dayOfYear % quotes.length);
  }, []);

  // Mission statement scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMissionVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Store email (you can implement actual storage later)
      localStorage.setItem('subscriber_email', email);
      
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to updates.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <Section className="pt-24 pb-12" padding="xl">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-16">
            <div className="mb-16">
              <RetroFallingText className="retro-falling-text">
                data · design · decisions · deliverables
              </RetroFallingText>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Photograph */}
            <div className="flex justify-center lg:justify-start">
              <Card className="p-8 w-80 h-96 flex flex-col items-center justify-center border-2 border-dashed border-border">
                <div className="text-center text-muted-foreground">
                  <h3 className="text-2xl font-semibold mb-2">Photograph</h3>
                  <p className="text-lg">by me</p>
                </div>
              </Card>
            </div>

            {/* Right side - Mission Statement */}
            <div 
              ref={missionRef}
              className={`transition-all duration-1000 ${
                missionVisible 
                  ? 'opacity-100 translate-y-0 blur-0' 
                  : 'opacity-0 translate-y-8 blur-sm'
              }`}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Mission Statement</h2>
                <blockquote className="text-xl font-medium text-balance mb-6">
                  "{quotes[currentQuote]}"
                </blockquote>
                <p className="text-muted-foreground">— Daily inspiration that drives my work</p>
              </Card>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Contact</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-muted-foreground">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-white hover:text-white transition-all duration-200 p-3 hover:bg-white/10 rounded-lg hover:scale-110 hover:drop-shadow-glow inline-block"
                >
                  📞
                </a>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-muted-foreground">Email</h3>
                <a 
                  href="mailto:kartik@example.com" 
                  className="text-white hover:text-white transition-all duration-200 p-3 hover:bg-white/10 rounded-lg hover:scale-110 hover:drop-shadow-glow inline-block"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-muted-foreground">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/kartik" 
                  className="text-white hover:text-white transition-all duration-200 p-3 hover:bg-white/10 rounded-lg hover:scale-110 hover:drop-shadow-glow inline-block"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-muted-foreground">GitHub</h3>
                <a 
                  href="https://github.com/kartik" 
                  className="text-white hover:text-white transition-all duration-200 p-3 hover:bg-white/10 rounded-lg hover:scale-110 hover:drop-shadow-glow inline-block"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Bypass rejection section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-left">
              <p className="text-lg text-muted-foreground">
                Why I bypass rejection? Find out by talking to K2 - my digital twin
              </p>
              <div className="flex items-center">
                <HandDrawnArrow className="text-primary" />
                <span className="ml-2 text-primary font-semibold">HERE!</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Learning Strip */}
      <Section background="subtle" padding="md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Continuous Learning</h2>
          <p className="text-muted-foreground">Latest insights from my reading and research</p>
        </div>
        <LearningStrip />
      </Section>

      {/* Progress & Stats */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Learning Progress</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tracking my continuous growth across key areas that matter for modern data and AI roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <ProgressRing 
            progress={85} 
            label="Weekly Reading"
            value="12h"
            size="lg"
          />
          <ProgressRing 
            progress={67} 
            label="Skill Coverage"
            value="67%"
            size="lg"
          />
          <ProgressRing 
            progress={92} 
            label="Learning Streak"
            value="23d"
            size="lg"
          />
          <ProgressRing 
            progress={78} 
            label="AI/ML Focus"
            value="78%"
            size="lg"
          />
        </div>
      </Section>

      {/* Dynamic Positive Quotes */}
      <Section background="glass" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Dynamic Positive Quotes</h2>
          <blockquote className="text-2xl md:text-3xl font-medium text-balance mb-6">
            "{quotes[currentQuote]}"
          </blockquote>
          <p className="text-muted-foreground">— Updated daily for inspiration</p>
        </div>
      </Section>

      {/* Email Subscription */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Want to track me and learn more about my updates?</h3>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
