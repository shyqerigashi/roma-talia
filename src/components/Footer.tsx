import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  PhoneCall,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 brand-cream">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 brand-cream flex-shrink-0 mt-0.5" />
                <span>1345 Fort Campbell Blvd, Clarksville, TN 37042</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 brand-cream" />
                <a
                  href="tel:+19313787762"
                  className="hover:brand-cream transition-colors"
                >
                  (931) 378-7762
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 brand-cream">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 brand-cream" />
                <div>
                  <p>Mon-Sun: 11 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Reviews */}
          <div>
            <h3 className="text-xl font-bold mb-4 brand-cream">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=100087160646680"
                className="text-white hover:brand-cream transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/casa_d.italia/"
                className="text-white hover:brand-cream transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="tel:+19313787762"
                className="text-white hover:brand-cream transition-colors"
                aria-label="Phone"
              >
                <PhoneCall className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm">⭐⭐⭐⭐⭐ Rated 4.8/5 on Google Reviews</p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Casa D'Italia Ristorante. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
