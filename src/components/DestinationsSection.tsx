
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageReveal } from './ImageReveal';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Swiss Alps',
    description: 'Majestic peaks and pristine valleys in the heart of Europe.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    location: 'Switzerland',
  },
  {
    id: 2,
    name: 'Canadian Rockies',
    description: 'Wild, rugged landscapes with turquoise glacial lakes.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    location: 'Canada',
  },
  {
    id: 3,
    name: 'Patagonia',
    description: 'Dramatic mountain peaks at the end of the world.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    location: 'Argentina/Chile',
  },
  {
    id: 4,
    name: 'Japanese Alps',
    description: 'Ancient volcanic ranges with hot springs and traditional culture.',
    image: 'https://images.unsplash.com/photo-1545571576-1dc25e5abd68',
    location: 'Japan',
  },
];

export function DestinationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="py-24">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Breathtaking Destinations</h2>
          <p className="text-muted-foreground">
            Explore our carefully selected mountain ranges, each offering unique experiences and natural beauty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <ImageReveal
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  delay={index * 100}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/80 text-sm mb-1">{destination.location}</p>
                  <h3 className="text-white text-xl font-medium mb-2">{destination.name}</h3>
                  <p className={`text-white/80 text-sm transform transition-all duration-300 ${
                    hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {destination.description}
                  </p>
                  <Button
                    variant="link"
                    className={`text-white mt-2 p-0 h-auto transform transition-all duration-300 ${
                      hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <span>Explore</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
