import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

const Header = ({ darkMode = false, toggleDarkMode }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link 
            to="/" 
            className="diamond-rock-text"
          >
            Kartik Pedapati
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/skills" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-glow hover:scale-105"
            >
              Skills
            </Link>
            <Link 
              to="/certifications" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-glow hover:scale-105"
            >
              Certifications
            </Link>
            <Link 
              to="/projects" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-glow hover:scale-105"
            >
              Projects
            </Link>
            <Link 
              to="/experience" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-glow hover:scale-105"
            >
              Work
            </Link>
            <Link 
              to="/education" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-glow hover:scale-105"
            >
              Education
            </Link>
            <Link 
              to="/awards" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-glow hover:scale-105"
            >
              Achievements & Awards
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-glow hover:scale-105"
            >
              Contact
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-glow hover:scale-105"
            >
              About
            </Link>
          </div>

          {/* Dark mode toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            className="p-2 hover:bg-accent"
          >
            {darkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;