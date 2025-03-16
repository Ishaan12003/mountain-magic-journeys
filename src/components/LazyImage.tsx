
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  blurSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  onLoad?: () => void;
}

export function LazyImage({ 
  src, 
  blurSrc, 
  alt, 
  className, 
  imgClassName,
  priority = false,
  onLoad 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const blurStyle = blurSrc ? {
    backgroundImage: `url(${blurSrc})`,
  } : {};

  return (
    <div 
      ref={imgRef}
      className={cn(
        'blur-load overflow-hidden bg-gray-100',
        isLoaded && 'loaded',
        className
      )}
      style={blurStyle}
    >
      {isInView && (
        <img 
          src={src} 
          alt={alt} 
          className={cn('w-full h-full object-cover', imgClassName)}
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
}
