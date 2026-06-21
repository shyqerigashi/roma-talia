import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';
import { RESTAURANT } from '@/lib/restaurant';

const GALLERY_PREVIEW = [
  '/gallery/italian-sampler.png',
  '/gallery/mushroom-risotto.png',
  '/gallery/bruschetta-patio.png',
  '/gallery/shrimp-scampi.png',
  '/gallery/creme-brulee.png',
  '/gallery/handmade-gnocchi.png',
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-brand-primary/90 to-brand-primary/70">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/banner.jpg')",
          }}
        />
        <div className="w-full h-full absolute inset-0 bg-brand-primary opacity-40" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {RESTAURANT.shortName}
          </h1>
          <p className="text-2xl md:text-3xl mb-2 brand-beige italic">
            {RESTAURANT.tagline}
          </p>
          <p className="text-xl md:text-2xl mb-8 brand-beige">
            {RESTAURANT.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="2xl"
              className="bg-brand-beige text-brand-primary hover:bg-brand-beige/90"
              onClick={() => navigate('/menu')}
            >
              View Menu
            </Button>
            <Button
              size="2xl"
              variant="outline"
              className="border-white text-brand-dark-green hover:bg-white hover:text-brand-primary"
              onClick={() => window.open(RESTAURANT.orderUrl, '_blank')}
            >
              Order Online
            </Button>
          </div>
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
                At Roma Italian Restaurant, every dish begins with fresh
                ingredients, time-honored recipes, and a passion for bringing
                the flavors of Italy to Clarksville. From hand-tossed pasta to
                slow-simmered sauces, we cook from the heart.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed italic text-brand-primary">
                {RESTAURANT.tagline} — I came, I saw, I tasted.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you are joining us for a weekday lunch, a family dinner,
                or a special celebration, we invite you to slow down, savor
                each bite, and experience the warmth of Italian hospitality.
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
              Gallery
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into our culinary artistry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="space-y-4">
              <img
                src={GALLERY_PREVIEW[0]}
                alt="Italian sampler platter"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-48 object-cover"
              />
              <img
                src={GALLERY_PREVIEW[1]}
                alt="Mushroom risotto"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src={GALLERY_PREVIEW[2]}
                alt="Bruschetta on patio"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-48 object-cover"
              />
              <img
                src={GALLERY_PREVIEW[3]}
                alt="Shrimp scampi"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4">
              <img
                src={GALLERY_PREVIEW[4]}
                alt="Crème brûlée"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-48 object-cover"
              />
              <img
                src={GALLERY_PREVIEW[5]}
                alt="Handmade gnocchi"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-48 object-cover"
              />
            </div>
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
