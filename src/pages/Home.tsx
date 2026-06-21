import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-brand-blue/90 to-brand-blue/70">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/banner.jpg')",
          }}
        />
        <div className="w-full h-full absolute inset-0 bg-brand-blue opacity-20" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Casa D'Italia</h1>
          <p className="text-xl md:text-2xl mb-8 brand-cream">
            Authentic Italian Cuisine in the Heart of Clarksville
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="2xl"
              className="bg-brand-cream text-brand-blue hover:bg-brand-cream/90"
              onClick={() => {
                navigate('/menu');
              }}
            >
              View Menu
            </Button>
            <Button
              size="2xl"
              variant="outline"
              className="border-white text-brand-dark-blue hover:bg-white hover:text-brand-blue"
              onClick={() => {
                window.open('https://www.casaditaliamenu.com/', '_blank');
              }}
            >
              Order Online
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-brand-light-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-brand-blue">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Buki Murati came to the U.S. in 2017 and started his journey in
                a New York City restaurant, learning the craft of authentic
                Italian cooking. After years of hard work, he opened Casa
                D’Italia in Fort Campbell in December 2022, inspired by the
                local military community and their deep appreciation for
                European flavors.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Since then, Casa D’Italia has been named 2024 Best Italian
                Restaurant in Montgomery County and will soon be featured on
                America’s Best Restaurants.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                What started as a dream is now a destination. Welcome to Casa
                D’Italia where tradition meets heart.
              </p>
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/lovable-uploads/our-story.jpeg"
                alt="Restaurant Interior"
                className="rounded-lg shadow-xl max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-blue">Gallery</h2>
            <p className="text-xl text-gray-600">
              A glimpse into our culinary artistry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="space-y-4">
              <img
                src="/gallery/DSC4093.jpg"
                alt="Pizza dish"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img
                src="/gallery/DSC4363.jpg"
                alt="Wine"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="/gallery/DSC4125.jpg"
                alt="Steak dish"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img
                src="/gallery/DSC4059.jpg"
                alt="Chicken dish"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="space-y-4">
              <img
                src="/gallery/DSC4079.jpg"
                alt="Pita Making"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img
                src="/gallery/DSC4282.jpg"
                alt="Drinks"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
              <Link to="/gallery" className="flex items-center space-x-2">
                <span>View Full Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu CTA */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage:
            "url('/lovable-uploads/d1d2dec0-4bef-4d22-b960-8c1da5b30bfe.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top left',
        }}
      >
        <div className="absolute inset-0 bg-brand-blue opacity-85" />
        <div className="relative z-10 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6">Discover Our Menu</h2>
            <p className="text-xl mb-8 brand-cream max-w-2xl mx-auto">
              From traditional pasta dishes to gourmet pizzas, explore our
              authentic Italian menu crafted with the finest ingredients and
              time-honored recipes.
            </p>
            <Button
              size="lg"
              className="bg-brand-cream text-brand-blue hover:bg-brand-cream/90"
            >
              <Link to="/menu" className="flex items-center space-x-2">
                <span>View Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-brand-light-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-blue">
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
                4.8/5 on Google
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4">
                  "Absolutely incredible Italian food! The pasta is fresh and
                  the flavors are authentic. This is our new favorite restaurant
                  in Clarksville!"
                </p>
                <p className="font-semibold">Sarah M.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4">
                  "The atmosphere is warm and welcoming, and the service is
                  outstanding. The chicken parmesan was perfection!"
                </p>
                <p className="font-semibold">Michael R.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4">
                  "Finally, authentic Italian cuisine in Clarksville! The
                  tiramisu alone is worth the visit. Highly recommended!"
                </p>
                <p className="font-semibold">Jennifer L.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
