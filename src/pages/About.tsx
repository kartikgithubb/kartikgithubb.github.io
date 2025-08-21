import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatButton from '@/components/chat/ChatButton';
import AboutContactSection from '@/components/modern/AboutContactSection';

const About = () => {
  return (
    <div>
      <Header />
      
      {/* Combined About & Contact Content */}
      <div className="pt-24">
        <AboutContactSection />
      </div>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default About;