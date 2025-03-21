
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { LazyImage } from './LazyImage';
import { Star } from 'lucide-react';

const testimonials = [
   {
    id: 1,
    name: 'Emily Johnson',
    title: 'Adventure Enthusiast',
    quote: 'The trek through the Western Ghats was absolutely breathtaking. Our guide introduced us to unique wildlife and untouched nature trails that I will never forget.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    destination: 'Western Ghats',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Photographer',
    quote: 'The Himalayan landscapes were a dream come true for a photographer like me. Every corner revealed a new and stunning view, perfect for capturing the essence of nature.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    destination: 'Himalayan Ranges',
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    title: 'Yoga Instructor',
    quote: 'The yoga retreat in the Aravalli Range was the perfect mix of peace and exploration. I came back feeling balanced, connected with nature, and full of energy.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    destination: 'Aravalli Range',
  },
  {
    id: 4,
    name: 'James Wilson',
    title: 'Executive',
    quote: 'From the tea plantations to the serene hill stations, my journey through the Nilgiri Hills was seamless and unforgettable. The cultural experiences were deeply enriching.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    destination: 'Nilgiri Hills',
  },
]; 
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const handleApiChange = (newApi: CarouselApi) => {
    setApi(newApi);
    newApi?.on('select', () => {
      setCurrentIndex(newApi.selectedScrollSnap());
    });
  };

  return (
    <section className="py-24">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">What Our Travelers Say</h2>
          <p className="text-muted-foreground">
            Discover why adventurers choose us for their mountain experiences.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={handleApiChange}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="glass-card rounded-lg overflow-hidden h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4 space-x-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <LazyImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{testimonial.name}</h3>
                        <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-sm flex-grow italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="text-xs font-medium text-mountain-600 dark:text-mountain-400">
                      {testimonial.destination}
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 space-x-2">
            <CarouselPrevious className="relative static transform-none translate-y-0 rounded-full" />
            <CarouselNext className="relative static transform-none translate-y-0 rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
