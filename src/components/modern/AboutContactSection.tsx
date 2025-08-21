import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, Github, Linkedin, Phone, MapPin, Calendar, Heart, 
  Send, Twitter 
} from 'lucide-react';

interface AboutContactSectionProps {
  className?: string;
}

const AboutContactSection = ({ className }: AboutContactSectionProps) => {
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

  const contactItems = [{
    label: 'Phone',
    icon: Phone,
    href: 'tel:+1234567890',
    color: 'text-primary'
  }, {
    label: 'Email',
    icon: Mail,
    href: 'mailto:kartik@example.com',
    color: 'text-accent'
  }, {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/kartik',
    color: 'text-primary'
  }, {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/kartik',
    color: 'text-accent'
  }];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="display-title text-4xl font-bold mb-12 text-center">
            About Me & Let's Connect
          </h2>
          
          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Bio */}
            <div className="lg:col-span-2">
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6">My Story</h3>
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
                  <h4 className="font-semibold">Location</h4>
                </div>
                <p className="text-muted-foreground">San Francisco Bay Area</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Experience</h4>
                </div>
                <p className="text-muted-foreground">5+ years in data analytics</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Interests</h4>
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
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-8">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover-lift">
                <h4 className="text-xl font-semibold mb-3">Clarity</h4>
                <p className="text-muted-foreground">
                  Making complex data accessible and understandable for everyone
                </p>
              </Card>
              
              <Card className="p-6 hover-lift">
                <h4 className="text-xl font-semibold mb-3">Impact</h4>
                <p className="text-muted-foreground">
                  Focusing on insights that drive real business outcomes
                </p>
              </Card>
              
              <Card className="p-6 hover-lift">
                <h4 className="text-xl font-semibold mb-3">Innovation</h4>
                <p className="text-muted-foreground">
                  Continuously exploring new technologies and methodologies
                </p>
              </Card>
            </div>
          </div>

          {/* Contact Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="text-xl text-muted-foreground">
              Ready to discuss data analytics, AI projects, or collaboration opportunities? 
              I'd love to hear from you.
            </p>
          </div>

          {/* Contact Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="p-8">
              <h4 className="text-2xl font-bold mb-6">Send a Message</h4>
              
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
                <h4 className="text-2xl font-bold mb-6">Contact Details</h4>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold">Email</h5>
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
                      <h5 className="font-semibold">Location</h5>
                      <p className="text-muted-foreground">San Francisco Bay Area, CA</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold">Availability</h5>
                      <p className="text-muted-foreground">Open for new opportunities</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8">
                <h4 className="text-2xl font-bold mb-6">Connect Online</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://linkedin.com/in/kartik"
                    className="flex items-center p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <h5 className="font-semibold text-sm">LinkedIn</h5>
                      <p className="text-xs text-muted-foreground group-hover:text-foreground">Professional updates</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/kartik"
                    className="flex items-center p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 text-gray-800 mr-3" />
                    <div>
                      <h5 className="font-semibold text-sm">GitHub</h5>
                      <p className="text-xs text-muted-foreground group-hover:text-foreground">Code & projects</p>
                    </div>
                  </a>

                  <a 
                    href="https://twitter.com/kartik"
                    className="flex items-center p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5 text-blue-400 mr-3" />
                    <div>
                      <h5 className="font-semibold text-sm">Twitter</h5>
                      <p className="text-xs text-muted-foreground group-hover:text-foreground">Thoughts & insights</p>
                    </div>
                  </a>

                  <Button variant="outline" className="h-auto p-4 flex-col">
                    <Calendar className="h-5 w-5 mb-2" />
                    <div>
                      <h5 className="font-semibold text-sm">Schedule Call</h5>
                      <p className="text-xs text-muted-foreground">Book a time</p>
                    </div>
                  </Button>
                </div>
              </Card>

              {/* Quick CTA */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <h4 className="text-xl font-bold mb-4">Looking for Data Analytics Expertise?</h4>
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

          {/* Quick Contact Icons */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-center">Quick Connect</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {contactItems.map(({ label, icon: Icon, href, color }, index) => (
                <Card key={label} className="group p-6 text-center bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                  <h5 className="font-semibold mb-4 text-muted-foreground text-sm uppercase tracking-wider">
                    {label}
                  </h5>
                  <a 
                    href={href} 
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 ${color} hover:from-primary/20 hover:to-accent/20 transition-all duration-300 group-hover:scale-110`}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContactSection;