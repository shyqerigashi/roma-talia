import { RESTAURANT } from '@/lib/restaurant';

const GALLERY_IMAGES = [
  { src: '/gallery/italian-sampler.png', alt: 'Italian sampler with lasagna, chicken parmigiana, and fettuccine alfredo' },
  { src: '/gallery/mushroom-risotto.png', alt: 'Mushroom risotto with fresh herbs' },
  { src: '/gallery/handmade-gnocchi.png', alt: 'Handmade gnocchi on parchment' },
  { src: '/gallery/gnocchi-plated.png', alt: 'Gnocchi in creamy mushroom sauce' },
  { src: '/gallery/bruschetta-patio.png', alt: 'Bruschetta and Italian dishes on patio' },
  { src: '/gallery/shrimp-scampi.png', alt: 'Shrimp scampi with risotto' },
  { src: '/gallery/creme-brulee.png', alt: 'Crème brûlée with fresh berries' },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-brand-light-beige">
      <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl brand-beige">
            A Visual Journey Through Our Culinary Excellence
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((image) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience {RESTAURANT.shortName}
          </h2>
          <p className="text-xl mb-8 brand-beige">
            Visit us to experience the authentic tastes and warm atmosphere of
            Italy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${RESTAURANT.phone}`}
              className="inline-block bg-brand-beige text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-brand-beige/90 transition-colors"
            >
              Call for Reservations
            </a>
            <a
              href={RESTAURANT.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors"
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
