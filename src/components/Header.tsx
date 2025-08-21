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
          <Link to="/" className="crystal-text text-2xl font-semibold">
            Kartik Pedapati
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:drop-shadow-sm"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:drop-shadow-sm"
            >
              Projects
            </Link>
            <Link 
              to="/experience" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:drop-shadow-sm"
            >
              Experience
            </Link>
            <Link 
              to="/skills" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:drop-shadow-sm"
            >
              Skills
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:drop-shadow-sm"
            >
              Contact
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