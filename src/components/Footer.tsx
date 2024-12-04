import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black/80 backdrop-blur-lg border-t border-kaaba-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="block mb-4">
              <img 
                src="/Design_ohne_Titel__7_-removebg-preview.png" 
                alt="Logo" 
                className="h-12 w-auto object-contain"
                style={{ filter: 'brightness(1.2)' }}
              />
            </Link>
            <p className="text-kaaba-gold/60 text-sm leading-relaxed">
              Exploring the rich tapestry of Islamic architecture and wisdom through sacred spaces and timeless teachings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-kaaba-gold font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hadith" className="text-kaaba-gold/60 hover:text-kaaba-gold text-sm transition-colors">
                  Hadith Collections
                </Link>
              </li>
              <li>
                <Link to="#architecture" className="text-kaaba-gold/60 hover:text-kaaba-gold text-sm transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link to="#history" className="text-kaaba-gold/60 hover:text-kaaba-gold text-sm transition-colors">
                  History
                </Link>
              </li>
              <li>
                <Link to="#gallery" className="text-kaaba-gold/60 hover:text-kaaba-gold text-sm transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-kaaba-gold font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@example.com" className="text-kaaba-gold/60 hover:text-kaaba-gold text-sm transition-colors inline-flex items-center">
                  <Mail size={16} className="mr-2" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-kaaba-gold/60 hover:text-kaaba-gold text-sm transition-colors inline-flex items-center">
                  <Github size={16} className="mr-2" />
                  GitHub
                  <ExternalLink size={12} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-kaaba-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-kaaba-gold/60 text-sm">
              © {currentYear} Dār al-Islām. All rights reserved.
            </p>
            <div className="flex items-center text-kaaba-gold/60 text-sm">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-kaaba-gold" />
              <span>for the Ummah</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}