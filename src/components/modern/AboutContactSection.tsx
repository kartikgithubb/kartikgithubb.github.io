import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Phone, MapPin, Calendar, Heart, Send, Twitter } from 'lucide-react';
interface AboutContactSectionProps {
  className?: string;
}
const AboutContactSection = ({
  className
}: AboutContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
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
  return <section className={`py-16 ${className}`}>
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
          

          {/* Contact Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            

            {/* Contact Info & Quick Actions */}
            
          </div>

          {/* Quick Contact Icons */}
          <div>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default AboutContactSection;