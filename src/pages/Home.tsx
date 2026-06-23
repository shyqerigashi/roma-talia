import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';
import { RESTAURANT } from '@/lib/restaurant';
import HeroSection from '@/components/HeroSection';

const GALLERY_PREVIEW = [
  { src: '/gallery/italian-sampler.png', alt: 'Italian sampler platter' },
  { src: '/gallery/mushroom-risotto.png', alt: 'Mushroom risotto' },
  { src: '/gallery/bruschetta-patio.png', alt: 'Bruschetta on patio' },
  { src: '/gallery/shrimp-scampi.png', alt: 'Shrimp scampi' },
  { src: '/gallery/creme-brulee.png', alt: 'Crème brûlée' },
  { src: '/gallery/handmade-gnocchi.png', alt: 'Handmade gnocchi' },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section id="our-story" className="py-20 bg-brand-light-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-brand-primary">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Buki Murati came to the U.S. in 2017 and started his journey in
                a New York City restaurant, learning the craft of authentic
                Italian cooking. After years of hard work, he opened Roma
                Italian Restaurant in Clarksville, inspired by the local
                military community and their deep appreciation for European
                flavors.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since then, Roma Italian Restaurant has been named 2024 Best
                Italian Restaurant in Montgomery County and will soon be
                featured on America&apos;s Best Restaurants.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                What started as a dream is now a destination. Welcome to Roma
                Italian Restaurant where tradition meets heart.
              </p>
              <Button
                asChild
                className="bg-brand-primary hover:bg-brand-primary/90"
              >
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/lovable-uploads/our-story.jpeg"
                alt={`${RESTAURANT.name} interior`}
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
              Gallery
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into our culinary artistry.
            </p>
          </div>

          {/* Mobile: horizontal swipe gallery */}
          <div className="md:hidden -mx-4 mb-12">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {GALLERY_PREVIEW.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className="flex-shrink-0 w-[82vw] max-w-xs snap-center rounded-xl shadow-md aspect-[4/3] object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tablet & desktop: even grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {GALLERY_PREVIEW.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`rounded-lg shadow-md hover:shadow-lg transition-shadow w-full aspect-[4/3] object-cover ${
                  index % 3 === 1 ? 'lg:mt-8' : ''
                }`}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
              <Link to="/gallery" className="flex items-center space-x-2">
                <span>View Full Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        className="py-32 relative"
        style={{
          backgroundImage: "url('/gallery/italian-sampler.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brand-primary opacity-85" />
        <div className="relative z-10 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6">Discover Our Menu</h2>
            <p className="text-xl mb-4 brand-beige max-w-2xl mx-auto">
              Antipasti, pasta, risotto, and dolce — crafted with the finest
              ingredients and time-honored recipes from the heart of Italy.
            </p>
            <p className="text-lg mb-8 brand-beige">{RESTAURANT.hours.lunch}</p>
            <Button
              size="lg"
              className="bg-brand-beige text-brand-primary hover:bg-brand-beige/90"
            >
              <Link to="/menu" className="flex items-center space-x-2">
                <span>View Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-primary">
              What Our Guests Say
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-xl font-semibold ml-2">
                {RESTAURANT.rating.value}/5 on Google
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESTAURANT.reviews.map((review) => (
              <Card key={review.author}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4">&ldquo;{review.text}&rdquo;</p>
                  <p className="font-semibold">{review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-brand-primary">
              <a
                href={RESTAURANT.rating.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read All {RESTAURANT.rating.count} Google Reviews
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
