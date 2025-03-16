
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
        <Link 
          to="/" 
          className="relative z-50 text-xl md:text-2xl font-serif font-medium tracking-tight"
          onClick={closeMenu}
        >
          Alpine<span className="text-mountain-600">Journeys</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="relative z-50 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks className="text-sm" />
          <Button 
            asChild 
            className={cn(
              "hover:bg-mountain-600 transition-all duration-300",
              scrolled ? "bg-mountain-700" : "bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/30"
            )}
            size="sm"
          >
            <Link to="/contact">Book Your Journey</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center space-y-8 py-8">
            <NavLinks className="text-xl" onClick={closeMenu} />
            <Button 
              asChild 
              className="mt-4 bg-mountain-700 hover:bg-mountain-600 transition-all duration-300 w-full"
            >
              <Link to="/contact" onClick={closeMenu}>Book Your Journey</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

function NavLinks({ className, onClick }: NavLinksProps) {
  return (
    <>
      {['destinations', 'experiences', 'about', 'testimonials'].map((item) => (
        <Link 
          key={item}
          to={`/${item === 'home' ? '' : item}`}
          className={cn(
            "link-underline capitalize", 
            className
          )}
          onClick={onClick}
        >
          {item}
        </Link>
      ))}
    </>
  );
}
