
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LazyImage } from './LazyImage';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    title: 'Adventure Enthusiast',
    quote: 'The guided trek through the Alps was life-changing. Our guide knew all the hidden spots and shared incredible stories about the region.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    destination: 'Swiss Alps',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Photographer',
    quote: 'As a landscape photographer, I was blown away by the locations we visited. The guides understood exactly what lighting and compositions I was looking for.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    destination: 'Canadian Rockies',
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    title: 'Yoga Instructor',
    quote: 'The mountain retreat was the perfect balance of adventure and tranquility. I returned home feeling completely rejuvenated and inspired.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    destination: 'Patagonia',
  },
  {
    id: 4,
    name: 'James Wilson',
    title: 'Executive',
    quote: 'Everything was seamlessly organized from start to finish. The accommodations were luxurious and the experiences were authentic and memorable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    destination: 'Japanese Alps',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          onSelect={(index) => setCurrentIndex(index)}
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
