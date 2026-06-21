const Gallery = () => {
  const galleryImages = [
    '/gallery/DJI_0119.jpg',
    '/gallery/DJI_0122.jpg',
    '/gallery/DJI_0129.jpg',
    '/gallery/DSC3916.jpg',
    '/gallery/DSC3928.jpg',
    '/gallery/DSC3938.jpg',
    '/gallery/DSC3941.jpg',
    '/gallery/DSC3992.jpg',
    '/gallery/DSC3993.jpg',
    '/gallery/DSC3994.jpg',
    '/gallery/DSC3998.jpg',
    '/gallery/DSC4005.jpg',
    '/gallery/DSC4029.jpg',
    '/gallery/DSC4036.jpg',
    '/gallery/DSC4042.jpg',
    '/gallery/DSC4046.jpg',
    '/gallery/DSC4053.jpg',
    '/gallery/DSC4059.jpg',
    '/gallery/DSC4062.jpg',
    '/gallery/DSC4066.jpg',
    '/gallery/DSC4069.jpg',
    '/gallery/DSC4071.jpg',
    '/gallery/DSC4075.jpg',
    '/gallery/DSC4079.jpg',
    '/gallery/DSC4081-2.jpg',
    '/gallery/DSC4084.jpg',
    '/gallery/DSC4086.jpg',
    '/gallery/DSC4092.jpg',
    '/gallery/DSC4093.jpg',
    '/gallery/DSC4097.jpg',
    '/gallery/DSC4104.jpg',
    '/gallery/DSC4109.jpg',
    '/gallery/DSC4111.jpg',
    '/gallery/DSC4117.jpg',
    '/gallery/DSC4125.jpg',
    '/gallery/DSC4153.jpg',
    '/gallery/DSC4160.jpg',
    '/gallery/DSC4162.jpg',
    '/gallery/DSC4168.jpg',
    '/gallery/DSC4219.jpg',
    '/gallery/DSC4228.jpg',
    '/gallery/DSC4234.jpg',
    '/gallery/DSC4266.jpg',
    '/gallery/DSC4273.jpg',
    '/gallery/DSC4282.jpg',
    '/gallery/DSC4305.jpg',
    '/gallery/DSC4317.jpg',
    '/gallery/DSC4330.jpg',
    '/gallery/DSC4353.jpg',
    '/gallery/DSC4363.jpg',
    '/gallery/DSC4366.jpg',
    '/gallery/DSC4371.jpg',
  ];

  // Shuffle images for random display order
  const shuffledImages = [...galleryImages].sort(() => Math.random() - 0.5);

  return (
    <div className="min-h-screen bg-brand-light-cream">
      {/* Header */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl brand-cream">
            A Visual Journey Through Our Culinary Excellence
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shuffledImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Casa D'Italia Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Casa D'Italia</h2>
          <p className="text-xl mb-8 brand-cream">
            Visit us to experience the authentic tastes and warm atmosphere of
            Italy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19313787762"
              className="inline-block bg-brand-cream text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-brand-cream/90 transition-colors"
            >
              Call for Reservations
            </a>
            <a
              href="https://www.casaditaliamenu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
