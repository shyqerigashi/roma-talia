import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Facebook, Instagram, ExternalLink, Menu } from 'lucide-react';
import logo from '../assets/casa-logo.svg';

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className=" shadow-sm sticky top-0 z-50 bg-[#05243e]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Casa D'Italia Ristorante"
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:opacity-70 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-white hover:opacity-70 font-medium transition-colors"
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:opacity-70 font-medium transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="text-white hover:opacity-70 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:opacity-70 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right side - Desktop: Order Now & Social | Mobile: Hamburger Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop - Social Media Links & Order Button */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100087160646680"
                  className="text-white hover:opacity-70 transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/casa_d.italia/"
                  className="text-white hover:opacity-70 transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <Button
                asChild
                className="bg-brand-cream hover:bg-white text-brand-blue"
              >
                <a
                  href="https://www.casaditaliamenu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Order Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Mobile - Hamburger Menu */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="bg-black/30">
                    <Menu className="h-6 w-6 text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <nav className="flex flex-col space-y-6 mt-8">
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-primary font-medium transition-colors text-lg"
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                    <Link
                      to="/menu"
                      className="text-gray-700 hover:text-primary font-medium transition-colors text-lg"
                      onClick={handleLinkClick}
                    >
                      Menu
                    </Link>
                    <Link
                      to="/gallery"
                      className="text-gray-700 hover:text-primary font-medium transition-colors text-lg"
                      onClick={handleLinkClick}
                    >
                      Gallery
                    </Link>
                    <Link
                      to="/about"
                      className="text-gray-700 hover:text-primary font-medium transition-colors text-lg"
                      onClick={handleLinkClick}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="text-gray-700 hover:text-primary font-medium transition-colors text-lg"
                      onClick={handleLinkClick}
                    >
                      Contact
                    </Link>

                    {/* Mobile - Order Button */}
                    <div className="pt-4 border-t">
                      <Button
                        asChild
                        className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full mb-4"
                      >
                        <a
                          href="https://www.casaditaliamenu.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                          onClick={handleLinkClick}
                        >
                          <span>Order Now</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>

                      {/* Mobile - Social Media */}
                      <div className="flex justify-center space-x-4">
                        <a
                          href="https://www.facebook.com/profile.php?id=100087160646680"
                          className="text-gray-600 hover:text-primary transition-colors"
                          aria-label="Facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                        >
                          <Facebook className="w-6 h-6" />
                        </a>
                        <a
                          href="https://www.instagram.com/casa_d.italia/"
                          className="text-gray-600 hover:text-primary transition-colors"
                          aria-label="Instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                        >
                          <Instagram className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
