import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  PhoneCall,
} from 'lucide-react';
import { RESTAURANT } from '@/lib/restaurant';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl brand-beige">We&apos;d Love to Hear From You</p>
        </div>
      </section>

      <section className="py-20 bg-brand-light-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-primary">
                  Visit Us
                </h3>
                <p className="text-gray-600">
                  {RESTAURANT.address.street}
                  <br />
                  {RESTAURANT.address.city}, {RESTAURANT.address.state}{' '}
                  {RESTAURANT.address.zip}
                </p>
                <Button
                  asChild
                  className="mt-4 bg-brand-primary hover:bg-brand-primary/90"
                >
                  <a
                    href={RESTAURANT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-primary">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-4">{RESTAURANT.phoneDisplay}</p>
                <Button
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary/90"
                >
                  <a href={`tel:${RESTAURANT.phone}`}>Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-primary">
                  Hours
                </h3>
                <div className="text-gray-600">
                  <p>{RESTAURANT.hours.summary}</p>
                  <p className="text-sm mt-2">{RESTAURANT.hours.lunch}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-full px-4">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-primary">
                Find Us
              </h2>

              <div className="bg-gray-200 w-full rounded-lg h-96 mb-6 flex items-center justify-center">
                <iframe
                  src={RESTAURANT.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="max-w-full w-full rounded-lg"
                  title={`${RESTAURANT.name} location map`}
                />
              </div>

              <div className="flex justify-between gap-4 flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-brand-light-beige rounded-lg p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-brand-primary">
                    Follow Us
                  </h3>
                  <div className="flex gap-4 md:space-x-4 mb-4 flex-col md:flex-row">
                    <a
                      href={RESTAURANT.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href={RESTAURANT.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={`tel:${RESTAURANT.phone}`}
                      className="flex items-center space-x-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
                    >
                      <PhoneCall className="w-5 h-5" />
                      <span>{RESTAURANT.phoneDisplay}</span>
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Stay updated with our latest dishes, events, and special
                    offers!
                  </p>
                </div>

                <div className="w-full md:w-1/2 bg-brand-primary text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2 brand-beige">
                    ⭐⭐⭐⭐⭐
                  </h3>
                  <p className="mb-2">
                    Rated {RESTAURANT.rating.value}/5 on Google Reviews (
                    {RESTAURANT.rating.count} reviews)
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-brand-beige text-brand-beige hover:bg-brand-beige hover:text-brand-primary"
                  >
                    <a
                      href={RESTAURANT.rating.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Our Reviews
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Order Online?</h2>
          <p className="text-xl mb-8 brand-beige">
            Skip the wait and order your favorite Italian dishes for pickup or
            delivery
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-beige text-brand-primary hover:bg-brand-beige/90"
          >
            <a
              href={RESTAURANT.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
