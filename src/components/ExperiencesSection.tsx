
import { motion } from 'framer-motion';
import { LazyImage } from './LazyImage';
import { 
  Mountain, MountainSnow, Tent, Compass, 
  TreePine, Camera, Bike, Snowflake 
} from 'lucide-react';

const experiences = [
  {
    title: 'Alpine Hiking',
    description: 'Trek through pristine mountain trails with expert guides.',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306',
  },
  {
    title: 'Mountain Climbing',
    description: 'Scale challenging peaks with professional mountaineers.',
    icon: MountainSnow,
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851',
  },
  {
    title: 'Camping Retreats',
    description: 'Immerse yourself in nature with premium camping experiences.',
    icon: Tent,
    image: 'https://images.unsplash.com/photo-1601058571499-b02253d23b42',
  },
  {
    title: 'Nature Photography',
    description: 'Capture spectacular landscapes with professional guidance.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1476611317561-60117649dd94',
  },
  {
    title: 'Mountain Biking',
    description: 'Ride exhilarating trails through forests and mountainsides.',
    icon: Bike,
    image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0',
  },
  {
    title: 'Forest Exploration',
    description: 'Discover the rich flora and fauna of mountain woodlands.',
    icon: TreePine,
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8',
  },
  {
    title: 'Winter Sports',
    description: 'Enjoy skiing, snowboarding, and other winter activities.',
    icon: Snowflake,
    image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103',
  },
  {
    title: 'Guided Expeditions',
    description: 'Embark on multi-day journeys into remote mountain regions.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b',
  },
];

export function ExperiencesSection() {
  return (
    <section className="py-24 bg-mountain-50 dark:bg-mountain-950">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Unforgettable Experiences</h2>
          <p className="text-muted-foreground">
            From thrilling adventures to peaceful retreats, our experiences connect you with the mountains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="group glass-card rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="aspect-video relative overflow-hidden">
                <LazyImage 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-mountain-700 dark:text-mountain-400">
                  <experience.icon size={20} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">{experience.title}</h3>
                <p className="text-sm text-muted-foreground">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
