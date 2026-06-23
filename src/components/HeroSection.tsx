import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { RESTAURANT } from '@/lib/restaurant';
import logo from '@/assets/roma-logo.png';

const TAGLINE_WORDS = RESTAURANT.tagline.replace(/\.$/, '').split('. ');

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToStory = () => {
    document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[calc(100vh-188px)] md:h-[calc(100vh-88px)] md:min-h-[580px] overflow-hidden">
      {/* Ken Burns background */}
      <div className="absolute inset-0 scale-110">
        <div
          className="absolute inset-0 bg-cover bg-center animate-hero-ken-burns"
          style={{ backgroundImage: "url('/lovable-uploads/banner.jpg')" }}
        />
      </div>

      {/* Cinematic vignette — localized, not flat wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,45,35,0.55)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#003328] via-transparent to-[#003328]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#003328]/50 via-transparent to-[#003328]/50" />

      {/* Ambient light orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-brand-secondary/20 blur-3xl animate-hero-float" />
      <div
        className="absolute bottom-1/3 -right-16 w-96 h-96 rounded-full bg-brand-beige/10 blur-3xl animate-hero-float"
        style={{ animationDelay: '2s' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pb-16">
        <div className="max-w-2xl w-full animate-hero-scale-in">
          <div className="animate-hero-border-glow rounded-2xl">
          <div className="relative bg-[#004a38]/90 backdrop-blur-xl rounded-2xl px-8 py-10 md:px-14 md:py-12 text-center shadow-2xl border border-white/10">
            {/* Corner accents */}
            <span className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-brand-beige/60 animate-hero-corner-in" />
            <span
              className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-brand-beige/60 animate-hero-corner-in"
              style={{ animationDelay: '0.1s' }}
            />
            <span
              className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-brand-beige/60 animate-hero-corner-in"
              style={{ animationDelay: '0.2s' }}
            />
            <span
              className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-brand-beige/60 animate-hero-corner-in"
              style={{ animationDelay: '0.3s' }}
            />

            <img
              src={logo}
              alt={RESTAURANT.name}
              className="h-24 md:h-32 w-auto mx-auto mb-6 animate-hero-fade-up drop-shadow-lg"
            />

            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-0 bg-brand-secondary animate-hero-line-expand" />
              <span className="w-2 h-2 rounded-full bg-brand-secondary animate-hero-pulse" />
              <span
                className="h-px w-0 bg-brand-secondary animate-hero-line-expand"
                style={{ animationDelay: '0.15s' }}
              />
            </div>

            <p className="font-serif text-2xl md:text-4xl text-brand-beige italic mb-3 leading-snug drop-shadow-sm">
              {TAGLINE_WORDS.map((phrase, i) => (
                <span key={phrase} className="inline-block overflow-hidden text-brand-beige">
                  <span
                    className="inline-block animate-hero-fade-up opacity-0 text-brand-beige"
                    style={{
                      animationDelay: `${600 + i * 350}ms`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    {phrase}
                    {i < TAGLINE_WORDS.length - 1 ? '.' : '.'}
                    {i < TAGLINE_WORDS.length - 1 && (
                      <span className="inline-block w-3 md:w-4" />
                    )}
                  </span>
                </span>
              ))}
            </p>

            <p
              className="text-white/90 text-base md:text-lg tracking-wide uppercase animate-hero-fade-up opacity-0 mb-8"
              style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
            >
              {RESTAURANT.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-hero-fade-up opacity-0"
              style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}
            >
              <Button
                size="2xl"
                className="bg-brand-beige text-brand-primary font-semibold hover:bg-white hover:scale-105 transition-transform shadow-lg"
                onClick={() => navigate('/menu')}
              >
                View Menu
              </Button>
              <Button
                size="2xl"
                variant="ghost"
                className="!bg-transparent border-2 border-brand-beige !text-brand-beige hover:!bg-brand-beige hover:!text-brand-primary hover:scale-105 transition-transform font-semibold"
                onClick={() => window.open(RESTAURANT.orderUrl, '_blank')}
              >
                Order Online
              </Button>
            </div>
          </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToStory}
        aria-label="Scroll to content"
        className="absolute bottom-8 inset-x-0 z-20 flex flex-col items-center gap-1 text-brand-beige/90 hover:text-white transition-colors animate-hero-fade-up opacity-0 cursor-pointer"
        style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}
      >
        <span className="text-xs tracking-[0.3em] uppercase">Discover</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
