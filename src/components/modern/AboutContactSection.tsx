import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Phone, MapPin, Calendar, Heart, Send, Twitter } from 'lucide-react';
import { contactFormSchema, createRateLimiter } from '@/lib/security';
import { useToast } from '@/hooks/use-toast';
interface AboutContactSectionProps {
  className?: string;
}
const AboutContactSection = ({
  className
}: AboutContactSectionProps) => {
  const { toast } = useToast();
  const rateLimiter = createRateLimiter(3, 15 * 60 * 1000); // 3 messages per 15 minutes
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setErrors({});
    
    // Rate limiting check
    if (!rateLimiter('contact_form')) {
      toast({
        title: "Too many messages",
        description: "Please wait before sending another message.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate form data
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const formErrors: Record<string, string> = {};
      validation.error.errors.forEach(err => {
        if (err.path[0]) {
          formErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // TODO: Implement actual form submission
      console.log('Form submitted:', validation.data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <Card className="p-8">
              <h4 className="text-2xl font-bold mb-6">Send a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength={100}
                    required
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength={254}
                    required
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={2000}
                    rows={5}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/2000 characters
                  </p>
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-6">
              <Card className="p-8">
                <h4 className="text-2xl font-bold mb-6">Get in Touch</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always interested in discussing data analytics, AI applications, 
                  or potential collaboration opportunities. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">kartik@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">+1 (234) 567-8900</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8">
                <h4 className="text-xl font-semibold mb-4">Response Time</h4>
                <p className="text-muted-foreground">
                  I typically respond to messages within 24-48 hours during weekdays.
                </p>
              </Card>
            </div>
          </div>

          {/* Quick Contact Icons */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-center">Quick Connect</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {contactItems.map(({
              label,
              icon: Icon,
              href,
              color
            }, index) => <Card key={label} className="group p-6 text-center bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                  <h5 className="font-semibold mb-4 text-muted-foreground text-sm uppercase tracking-wider">
                    {label}
                  </h5>
                  <a href={href} className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 ${color} hover:from-primary/20 hover:to-accent/20 transition-all duration-300 group-hover:scale-110`} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutContactSection;