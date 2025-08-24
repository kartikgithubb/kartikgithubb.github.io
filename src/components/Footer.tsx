import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="border-t bg-background/95 backdrop-blur">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="mailto:kartik@example.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/kartik" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/kartik" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/kartik" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="/experience" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </a>
            </div>
          </div>

          {/* Portfolio Facts */}
          <div>
            <h3 className="font-semibold mb-4">Portfolio Facts</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium text-foreground mb-1">99.9% Bug-Free Code</div>
                <div className="text-muted-foreground">The other 0.1% are features</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-foreground mb-1">Coffee-to-Code Ratio</div>
                <div className="text-muted-foreground">1:1 optimal performance achieved</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-foreground mb-1">Documentation Coverage</div>
                <div className="text-muted-foreground">Code is self-documenting (trust me)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Kartik Pedapati. Built with passion and precision.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;