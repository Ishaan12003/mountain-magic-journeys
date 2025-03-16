
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-24 bg-mountain-800 text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Start Your Adventure</h2>
              <p className="text-white/80 max-w-md">
                Ready to experience the majesty of the mountains? Contact us to plan your perfect journey.
              </p>
            </div>
            
            <div className="space-y-4">
              <ContactItem icon={<MapPin size={20} />} title="Our Location">
                123 Alpine Way, Mountain View, CA 94043
              </ContactItem>
              <ContactItem icon={<Mail size={20} />} title="Email Us">
                hello@alpinejourneys.com
              </ContactItem>
              <ContactItem icon={<Phone size={20} />} title="Call Us">
                +1 (800) 123-4567
              </ContactItem>
              <ContactItem icon={<Clock size={20} />} title="Office Hours">
                Monday - Friday: 9am - 6pm
              </ContactItem>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-serif mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {['instagram', 'facebook', 'twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
          >
            <h3 className="text-xl font-serif mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="destination" className="block text-sm font-medium mb-2">
                  Preferred Destination
                </label>
                <Input
                  id="destination"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  placeholder="e.g. Swiss Alps, Canadian Rockies"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[120px]"
                  placeholder="Tell us about your dream mountain experience..."
                />
              </div>
              
              <Button className="w-full bg-white text-mountain-800 hover:bg-white/90">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <div className="flex space-x-4">
      <div className="mt-0.5 text-mountain-400">{icon}</div>
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-sm text-white/70">{children}</p>
      </div>
    </div>
  );
}
