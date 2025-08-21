import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Linkedin, Github, Twitter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="crystal-text">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to discuss data analytics, AI projects, or collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project, question, or how I can help..."
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href="mailto:kartik@example.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      kartik@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">San Francisco Bay Area, CA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Availability</h3>
                    <p className="text-muted-foreground">Open for new opportunities</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Connect Online</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://linkedin.com/in/kartik"
                  className="flex items-center p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors group"
                >
                  <Linkedin className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-sm">LinkedIn</h3>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground">Professional updates</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/kartik"
                  className="flex items-center p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors group"
                >
                  <Github className="h-5 w-5 text-gray-800 mr-3" />
                  <div>
                    <h3 className="font-semibold text-sm">GitHub</h3>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground">Code & projects</p>
                  </div>
                </a>

                <a 
                  href="https://twitter.com/kartik"
                  className="flex items-center p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors group"
                >
                  <Twitter className="h-5 w-5 text-blue-400 mr-3" />
                  <div>
                    <h3 className="font-semibold text-sm">Twitter</h3>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground">Thoughts & insights</p>
                  </div>
                </a>

                <Button variant="outline" className="h-auto p-4 flex-col">
                  <Calendar className="h-5 w-5 mb-2" />
                  <div>
                    <h3 className="font-semibold text-sm">Schedule Call</h3>
                    <p className="text-xs text-muted-foreground">Book a time</p>
                  </div>
                </Button>
              </div>
            </Card>

            {/* Quick CTA */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Looking for Data Analytics Expertise?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you need insights from your data, AI implementation guidance, 
                or project management support, I'm here to help turn your data into actionable business value.
              </p>
              <Button className="w-full">
                Let's Discuss Your Project
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Contact;