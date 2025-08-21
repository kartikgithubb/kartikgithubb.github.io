import React from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import HandDrawnArrow from '@/components/effects/HandDrawnArrow';

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className }: ContactSectionProps) => {
  const contactItems = [
    {
      label: 'Phone',
      icon: Phone,
      href: 'tel:+1234567890',
      color: 'text-primary'
    },
    {
      label: 'Email',
      icon: Mail,
      href: 'mailto:kartik@example.com',
      color: 'text-accent'
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/kartik',
      color: 'text-primary'
    },
    {
      label: 'GitHub',
      icon: Github,
      href: 'https://github.com/kartik',
      color: 'text-accent'
    }
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="display-title text-4xl font-bold mb-12 text-center">
            Let's Connect
          </h2>
          
          {/* Contact grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactItems.map(({ label, icon: Icon, href, color }, index) => (
              <Card 
                key={label}
                className="group p-6 text-center bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <h3 className="font-semibold mb-4 text-muted-foreground text-sm uppercase tracking-wider">
                  {label}
                </h3>
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

          {/* Call to action */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 text-center lg:text-left">
            <div className="max-w-md">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Curious about how I bypass rejection and turn data into decisions? 
                Discover my approach by talking to K2 - my digital twin.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HandDrawnArrow className="text-primary" />
              <span className="text-primary font-semibold font-display text-lg">
                Talk to K2!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;