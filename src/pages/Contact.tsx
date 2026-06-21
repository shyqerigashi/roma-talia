import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Instagram,
  PhoneCall,
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl brand-cream">We'd Love to Hear From You</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-brand-light-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-blue">
                  Visit Us
                </h3>
                <p className="text-gray-600">
                  1345 Fort Campbell Blvd
                  <br />
                  Clarksville, TN 37042
                </p>
                <Button
                  asChild
                  className="mt-4 bg-brand-blue hover:bg-brand-blue/90"
                >
                  <a
                    href="https://maps.app.goo.gl/83Vt6cJ5xqiggHS68"
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
                <Phone className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-blue">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-4">(931) 378-7762</p>
                <Button
                  asChild
                  className="bg-brand-blue hover:bg-brand-blue/90"
                >
                  <a href="tel:+19313787762">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-blue">
                  Hours
                </h3>
                <div className="text-gray-600">
                  <p>Mon-Sun: 11 AM - 9:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto max-w-full px-4">
          <div className="grid gap-12">
            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-blue">
                Find Us
              </h2>

              {/* Embedded Map Placeholder */}
              <div className="bg-gray-200 w-full rounded-lg h-96 mb-6 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.1333065109843!2d-87.4054642235191!3d36.56628407231466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864d71317d3f719%3A0xd9916ed0625a1055!2zQ0FTQSBE4oCZSVRBTElB!5e1!3m2!1sen!2s!4v1754583693788!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="max-w-full w-full"
                ></iframe>
              </div>

              <div className="flex justify-between gap-4 flex-col md:flex-row">
                {/* Social Media */}
                <div className="w-full md:w-1/2 bg-brand-light-cream rounded-lg p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-brand-blue">
                    Follow Us
                  </h3>
                  <div className="flex gap-4 md:space-x-4 mb-4 flex-col md:flex-row">
                    <a
                      href="https://www.facebook.com/profile.php?id=100087160646680"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-brand-blue hover:text-brand-blue/80 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href="https://www.instagram.com/casa_d.italia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-brand-blue hover:text-brand-blue/80 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="tel:+19313787762"
                      className="flex items-center space-x-2 text-brand-blue hover:text-brand-blue/80 transition-colors"
                    >
                      <PhoneCall className="w-5 h-5" />
                      <span>(931) 378-7762</span>
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Stay updated with our latest dishes, events, and special
                    offers!
                  </p>
                </div>

                {/* Reviews */}
                <div className="w-full md:w-1/2 bg-brand-blue text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2 brand-cream">
                    ⭐⭐⭐⭐⭐
                  </h3>
                  <p className="mb-2">Rated 4.8/5 on Google Reviews</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-brand-cream hover:text-primary"
                  >
                    <a
                      href="https://maps.app.goo.gl/83Vt6cJ5xqiggHS68"
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

      {/* Order Online CTA */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Order Online?</h2>
          <p className="text-xl mb-8 brand-cream">
            Skip the wait and order your favorite Italian dishes for pickup or
            delivery
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-cream text-brand-blue hover:bg-brand-cream/90"
          >
            <a
              href="https://www.casaditaliamenu.com/"
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
