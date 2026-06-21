
const Menu = () => {
  return (
    <div className="min-h-screen bg-brand-light-cream">
      {/* Header */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl brand-cream">Authentic Italian Cuisine Made Fresh Daily</p>
        </div>
      </section>

      {/* Menu Images */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* First Menu Page */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/lovable-uploads/f5302bb7-01dd-4e5e-ba60-d9f62103dec8.png"
                alt="Casa D'Italia Menu - Page 1"
                className="w-full h-auto"
              />
            </div>

            {/* Second Menu Page */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/lovable-uploads/d1d2dec0-4bef-4d22-b960-8c1da5b30bfe.png"
                alt="Casa D'Italia Menu - Page 2"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Online CTA */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 brand-cream">
            Place your order online for pickup or delivery
          </p>
          <a
            href="https://www.casaditaliamenu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-cream text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-brand-cream/90 transition-colors"
          >
            Order Online Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;
