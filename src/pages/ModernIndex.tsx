import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatButton from '@/components/chat/ChatButton';
import Hero from '@/components/modern/Hero';
import StatsSection from '@/components/modern/StatsSection';
import NewsletterSection from '@/components/modern/NewsletterSection';
import K2Section from '@/components/modern/K2Section';
import LearningStrip from '@/components/LearningStrip';
import Section from '@/components/Section';
const ModernIndex = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for the Framer aesthetic

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  return <div className={darkMode ? 'dark' : ''}>
      {/* Modern Navigation */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section with Framer-style design */}
      <Hero className="pt-16" />
      
      {/* Learning Section with subtle background */}
      <Section background="subtle" padding="lg">
        <div className="text-center mb-12">
          <h2 className="display-title text-4xl font-bold mb-4">
            Continuous Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Latest insights from my reading and research across Technology, Product, Businessand Management</p>
        </div>
        <LearningStrip />
      </Section>
      
      {/* Stats Section */}
      <StatsSection />

      {/* K2 Digital Twin Section */}
      <K2Section />
      
      {/* Newsletter Section */}
      <NewsletterSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Chat Button */}
      <ChatButton />
    </div>;
};
export default ModernIndex;