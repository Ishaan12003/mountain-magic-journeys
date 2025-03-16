
import { motion } from 'framer-motion';
import { LazyImage } from './LazyImage';

export function FeatureSection() {
  return (
    <section className="py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <LazyImage
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
                  alt="Mountain forest"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-video rounded-lg overflow-hidden border-4 border-white dark:border-background shadow-xl">
                <LazyImage
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                  alt="Sunlight through trees"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-mountain-100 text-mountain-800 dark:bg-mountain-900 dark:text-mountain-200 mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Connecting People with Nature's Grandeur
            </h2>
            <p className="text-muted-foreground mb-8">
              We believe in the transformative power of mountains. Our expertly crafted journeys are designed to create deep connections with the natural world, while ensuring sustainable practices that preserve these magnificent landscapes for generations to come.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Expert Local Guides', description: 'All our experiences are led by knowledgeable local experts who share authentic insights.' },
                { title: 'Small Group Sizes', description: 'We maintain intimate group sizes to ensure personalized attention and minimal environmental impact.' },
                { title: 'Sustainable Practices', description: 'Every journey adheres to leave-no-trace principles and supports local conservation efforts.' },
                { title: 'Authentic Experiences', description: 'We craft experiences that connect travelers with local cultures and traditions.' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
