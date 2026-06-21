import { RESTAURANT } from '@/lib/restaurant';

const Menu = () => {
  return (
    <div className="min-h-screen bg-brand-light-beige">
      <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl brand-beige italic mb-2">{RESTAURANT.tagline}</p>
          <p className="text-lg brand-beige">{RESTAURANT.hours.summary}</p>
          <p className="text-md brand-beige mt-2">{RESTAURANT.hours.lunch}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/lovable-uploads/menu-page-1.png"
                alt={`${RESTAURANT.name} Menu - Page 1`}
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/lovable-uploads/menu-page-2.png"
                alt={`${RESTAURANT.name} Menu - Page 2`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 brand-beige">
            Place your order online for pickup or delivery
          </p>
          <a
            href={RESTAURANT.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-beige text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-brand-beige/90 transition-colors"
          >
            Order Online Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;
