import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Clock } from 'lucide-react';
import { RESTAURANT } from '@/lib/restaurant';

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About {RESTAURANT.shortName}</h1>
          <p className="text-xl brand-beige italic">{RESTAURANT.tagline}</p>
          <p className="text-lg brand-beige mt-2">{RESTAURANT.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-brand-light-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-brand-primary">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Roma Italian Restaurant brings the timeless flavors of Italy to
                Clarksville — from charred bruschetta and crispy calamari to
                hand-tossed pasta, slow-simmered risotto, and classic dolce.
                Every plate is prepared with care, using fresh ingredients and
                recipes rooted in tradition.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed italic text-brand-primary">
                {RESTAURANT.tagline} — I came, I saw, I tasted.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Located just off Tiny Town Road, Roma is a place to gather with
                family and friends, enjoy attentive service, and savor the kind
                of Italian cooking that keeps you coming back.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/lovable-uploads/our-story.jpeg"
                alt={`${RESTAURANT.name} exterior`}
                className="rounded-lg shadow-xl max-h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-primary">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is built on these core values that
              guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-primary">
                  Authenticity
                </h3>
                <p className="text-gray-600">
                  Traditional Italian recipes and techniques, honored and
                  preserved in every dish we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-primary">
                  Family
                </h3>
                <p className="text-gray-600">
                  Creating a warm, welcoming environment where every guest feels
                  like part of our family.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-primary">
                  Quality
                </h3>
                <p className="text-gray-600">
                  Only the finest, freshest ingredients make it to your plate —
                  no compromises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-primary">
                  Service
                </h3>
                <p className="text-gray-600">
                  Exceptional service that makes every dining experience
                  memorable and special.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-brand-primary">
            Part of the Community
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are proud to serve the Clarksville community and grateful for
            every guest who walks through our doors.
          </p>

          <div className="bg-brand-primary text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 brand-beige">
              Thank You, Clarksville!
            </h3>
            <p className="text-lg">
              Your support means everything to us. We are honored to share our
              passion for Italian cuisine with you and your families — one
              unforgettable meal at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
