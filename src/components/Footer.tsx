import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  PhoneCall,
} from 'lucide-react';
import { RESTAURANT } from '@/lib/restaurant';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 brand-beige">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 brand-beige flex-shrink-0 mt-0.5" />
                <span>{RESTAURANT.address.full}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 brand-beige" />
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="hover:brand-beige transition-colors"
                >
                  {RESTAURANT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 brand-beige">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 brand-beige flex-shrink-0 mt-0.5" />
                <div>
                  <p>{RESTAURANT.hours.summary}</p>
                  <p className="text-sm brand-beige mt-1">
                    {RESTAURANT.hours.lunch}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 brand-beige">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href={RESTAURANT.social.facebook}
                className="text-white hover:brand-beige transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={RESTAURANT.social.instagram}
                className="text-white hover:brand-beige transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={`tel:${RESTAURANT.phone}`}
                className="text-white hover:brand-beige transition-colors"
                aria-label="Phone"
              >
                <PhoneCall className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm">
              ⭐⭐⭐⭐⭐ Rated {RESTAURANT.rating.value}/5 on Google Reviews
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="brand-beige italic mb-2">{RESTAURANT.tagline}</p>
          <p>
            &copy; {new Date().getFullYear()} {RESTAURANT.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
