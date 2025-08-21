import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import TextWave from '@/components/effects/TextWave';
import LearningStrip from '@/components/LearningStrip';
import ProgressRing from '@/components/progress/ProgressRing';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <Section className="pt-24 pb-12" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Hi, I'm{' '}
              <span className="crystal-text">Kartik</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-muted-foreground mb-8">
              <TextWave className="wave-text">
                Data · Design · Decisions · Deliverables
              </TextWave>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up">
              Turning complex data into clear insights and strategic decisions. 
              I bridge analytics, project management, and AI to deliver measurable business impact.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up">
            <Button size="lg" className="btn-hero px-8 py-6 text-lg">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-up">
            <a href="mailto:kartik@example.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/kartik" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/kartik" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/kartik" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a>
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

      {/* Mission Statement */}
      <Section background="glass" className="text-center">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-medium text-balance mb-6 animate-fade-up">
            "{quotes[currentQuote]}"
          </blockquote>
          <p className="text-muted-foreground">— Daily inspiration that drives my work</p>
        </div>
      </Section>

      {/* Email Capture */}
      <Section>
        <Card className="max-w-md mx-auto p-8 text-center glass">
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-muted-foreground mb-6">
            Get updates on my latest projects and insights
          </p>
          
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Subscribe
            </Button>
          </form>
        </Card>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
