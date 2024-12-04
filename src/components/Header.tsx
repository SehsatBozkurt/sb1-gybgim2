import React, { useState, useEffect } from 'react';
import { Menu, Moon } from 'lucide-react';
import { MobileMenu } from './navigation/MobileMenu';
import { DesktopNav } from './navigation/DesktopNav';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 
                      ${isScrolled ? 'bg-gradient-header py-4' : 'py-6'}`}>
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <a href="/" className="flex items-center relative z-50">
              <img 
                src="/Design_ohne_Titel__7_-removebg-preview.png" 
                alt="Logo" 
                className="h-16 w-auto object-contain"
                style={{ filter: 'brightness(1.2)' }}
              />
            </a>

            <DesktopNav />

            <div className="flex items-center gap-4">
              <button 
                className="text-kaaba-gold hover:text-opacity-80 transition-colors p-2 rounded-full
                         hover:bg-kaaba-gold/10"
              >
                <Moon size={20} />
              </button>
              
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden text-kaaba-gold hover:text-opacity-80 transition-colors p-2 
                         rounded-full hover:bg-kaaba-gold/10"
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}