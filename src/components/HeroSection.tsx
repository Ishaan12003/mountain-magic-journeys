import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern z-10"></div>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Mountain landscape" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6">
        <div className={cn("transition-all duration-700 ease-out transform", scrolled ? "opacity-0 translate-y-[-30px]" : "opacity-100 translate-y-0")}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif hero-text-shadow text-center max-w-4xl mx-auto leading-tight">
            Discover the Majesty of the Mountains
          </h1>
          <p className="mt-6 text-lg md:text-xl text-center max-w-2xl mx-auto text-white/90 hero-text-shadow">
            Expertly curated mountain experiences in the world's most breathtaking ranges
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-mountain-900 hover:bg-white/90 transition-all">
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all">
              <Link to="/experiences" className="Make this font similar to explore destination button">View Experiences</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={cn("absolute bottom-12 left-1/2 transform -translate-x-1/2 h-24 transition-opacity duration-500", scrolled ? "opacity-0" : "opacity-100")}>
          <div className="scroll-indicator-line">
            <div className="scroll-indicator-dot"></div>
          </div>
          <p className="text-xs font-light text-center mt-28 uppercase tracking-widest">Scroll to explore</p>
        </div>
      </div>
    </section>;
}