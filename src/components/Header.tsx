import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface HeaderProps {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}
const Header = ({
  darkMode = false,
  toggleDarkMode
}: HeaderProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const getLinkClassName = (path: string) => {
    const baseClasses = "text-sm font-medium transition-all duration-200 hover:drop-shadow-glow hover:scale-105 px-3 py-2 rounded-full";
    const activeClasses = "nav-link-active";
    const inactiveClasses = "text-muted-foreground hover:text-foreground";
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };
  return <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="diamond-rock-text">
            Kartik Pedapati
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/skills" className={getLinkClassName("/skills")}>
              Skills
            </Link>
            <Link to="/certifications" className={getLinkClassName("/certifications")}>
              Certifications
            </Link>
            <Link to="/projects" className={getLinkClassName("/projects")}>
              Projects
            </Link>
            <Link to="/experience" className={getLinkClassName("/experience")}>
              Work
            </Link>
            <Link to="/education" className={getLinkClassName("/education")}>
              Education
            </Link>
            <Link to="/awards" className={getLinkClassName("/awards")}>
              Achievements & Awards
            </Link>
            <Link to="/about" className={getLinkClassName("/about")}>
              About
            </Link>
          </div>

          {/* Dark mode toggle */}
          
        </div>
      </nav>
    </header>;
};
export default Header;