
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mountain-50 dark:bg-mountain-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-medium tracking-tight">
              Alpine<span className="text-mountain-600">Journeys</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Discover breathtaking mountain experiences curated by local experts. From alpine treks to cozy mountain retreats.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink href="#" Icon={Facebook} label="Facebook" />
              <SocialLink href="#" Icon={Instagram} label="Instagram" />
              <SocialLink href="#" Icon={Twitter} label="Twitter" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Destinations
            </h3>
            <ul className="space-y-2">
              {['Alps', 'Rockies', 'Himalayas', 'Andes', 'Dolomites'].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-mountain-600 dark:hover:text-mountain-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Company
            </h3>
            <ul className="space-y-2">
              {['About', 'Experiences', 'Sustainability', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-mountain-600 dark:hover:text-mountain-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Subscribe to receive updates on new destinations and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="max-w-[220px] bg-white dark:bg-gray-800"
              />
              <Button size="sm" className="bg-mountain-700 hover:bg-mountain-600">
                Subscribe
              </Button>
            </div>
            <div className="space-y-2 pt-4">
              <ContactItem Icon={Mail} text="hello@alpinejourneys.com" />
              <ContactItem Icon={Phone} text="+1 (800) 123-4567" />
              <ContactItem Icon={MapPin} text="123 Alpine Way, Mountain View" />
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} AlpineJourneys. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="#" className="hover:text-mountain-600 dark:hover:text-mountain-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-mountain-600 dark:hover:text-mountain-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-mountain-600 dark:hover:text-mountain-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  Icon: React.FC<any>;
  label: string;
}

function SocialLink({ href, Icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-mountain-600 hover:text-white dark:hover:bg-mountain-600 transition-colors"
    >
      <Icon size={16} />
    </a>
  );
}

interface ContactItemProps {
  Icon: React.FC<any>;
  text: string;
}

function ContactItem({ Icon, text }: ContactItemProps) {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
      <Icon size={14} className="text-mountain-600 dark:text-mountain-400" />
      <span>{text}</span>
    </div>
  );
}
