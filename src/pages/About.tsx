import React from 'react';
import { MapPin, Calendar, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="crystal-text">Kartik</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A data-driven professional passionate about turning complex analytics 
              into actionable business strategies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Bio */}
            <div className="lg:col-span-2">
              <Card className="p-8 h-full">
                <h2 className="text-2xl font-semibold mb-6">My Story</h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a data analytics professional with a passion for transforming complex datasets 
                    into clear, actionable insights that drive business decisions. My journey spans 
                    data science, project management, and emerging AI technologies.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    With experience in Python, SQL, Power BI, and modern ML frameworks, I bridge 
                    the gap between technical analysis and strategic business outcomes. I believe 
                    the best analytics don't just answer what happened, but illuminate what should 
                    happen next.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Currently exploring the intersection of traditional data analytics with AI agents 
                    and retrieval-augmented generation (RAG) systems, always looking for ways to make 
                    data more accessible and actionable for decision-makers.
                  </p>
                </div>
              </Card>
            </div>

            {/* Quick Facts */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">San Francisco Bay Area</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Experience</h3>
                </div>
                <p className="text-muted-foreground">5+ years in data analytics</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Interests</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>• AI & Machine Learning</p>
                  <p>• Data Visualization</p>
                  <p>• Product Strategy</p>
                  <p>• Photography</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-semibold mb-3">Clarity</h3>
                <p className="text-muted-foreground">
                  Making complex data accessible and understandable for everyone
                </p>
              </Card>
              
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p className="text-muted-foreground">
                  Focusing on insights that drive real business outcomes
                </p>
              </Card>
              
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously exploring new technologies and methodologies
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default About;