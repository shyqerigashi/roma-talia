import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Casa D'Italia</h1>
          <p className="text-xl brand-cream">
            Bringing Authentic Italian Tradition to Clarksville
          </p>
        </div>
      </section>

      {/* Our Story */}
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
                D’Italia in Fort Campbell in December 2022 inspired by the local
                military community and their deep appreciation for European
                flavors.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since then, Casa D’Italia has been named 2024 Best Italian
                Restaurant in Montgomery County and will soon be featured on
                America’s Best Restaurants.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What started as a dream is now a destination. Welcome to Casa
                D’Italia where tradition meets heart.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/lovable-uploads/our-story.jpeg"
                alt="Casa D'Italia Restaurant Interior"
                className="rounded-lg shadow-xl max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-blue">
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
                <Heart className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-blue">
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
                <Users className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-blue">
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
                <Award className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-blue">
                  Quality
                </h3>
                <p className="text-gray-600">
                  Only the finest, freshest ingredients make it to your plate -
                  no compromises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-blue">
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

      {/* Chef Section */}
      <section className="py-20 bg-brand-light-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/lovable-uploads/our-chef.jpg"
                alt="Our Chef"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-brand-blue">
                Meet Our Chef
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our executive chef brings over 20 years of experience in Italian
                cuisine, having trained in some of Italy's most renowned
                kitchens. With a deep respect for traditional methods and an
                innovative approach to presentation, our chef ensures every dish
                meets the highest standards of authenticity and flavor.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Cooking is not just about following recipes, it's about
                understanding the soul of Italian cuisine and sharing that
                passion with every guest who walks through our doors."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-brand-blue">
            Part of the Community
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're proud to be part of the Clarksville community and are
            committed to supporting local events, charities, and organizations
            that make our city special.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            <div className="relative">
              <img
                src="/lovable-uploads/police-department.jpg"
                alt="Police Department"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/fire-department.jpg"
                alt="Fire Department"
                className="rounded-lg shadow-lg w-full h-[300px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="bg-brand-blue text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 brand-cream">
              Thank You, Clarksville!
            </h3>
            <p className="text-lg">
              Your support and loyalty have made Casa D'Italia a cornerstone of
              the local dining scene. We're honored to serve this wonderful
              community and grateful for every opportunity to share our passion
              for Italian cuisine with you and your families.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
