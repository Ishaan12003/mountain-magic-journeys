
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { LazyImage } from './LazyImage';

interface ImageRevealProps {
  src: string;
  blurSrc?: string;
  alt: string;
  className?: string;
  delay?: number;
}

export function ImageReveal({ 
  src, 
  blurSrc, 
  alt, 
  className,
  delay = 0
}: ImageRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay, isLoaded]);

  return (
    <div 
      ref={ref} 
      className={cn(
        'overflow-hidden',
        className
      )}
    >
      <div className={cn(
        'img-reveal w-full h-full transition-all',
        isRevealed && 'revealed'
      )}>
        <LazyImage 
          src={src} 
          blurSrc={blurSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
