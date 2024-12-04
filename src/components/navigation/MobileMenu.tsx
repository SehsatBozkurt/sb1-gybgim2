import React from 'react';
import { X } from 'lucide-react';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 z-50
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-kaaba-gold hover:text-opacity-80 transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="flex flex-col items-center justify-center h-[80vh] gap-8">
        <div className="w-16 h-[1px] bg-kaaba-gold mb-8" />
        <NavLink href="/" className="text-2xl" onClick={onClose}>Home</NavLink>
        <NavLink href="/quran" className="text-2xl" onClick={onClose}>Quran</NavLink>
        <NavLink href="/hadith" className="text-2xl" onClick={onClose}>Hadith</NavLink>
        <NavLink href="/prayer" className="text-2xl" onClick={onClose}>Prayer Times</NavLink>
        <NavLink href="/figures" className="text-2xl" onClick={onClose}>Important Figures</NavLink>
        <NavLink href="/fundamentals" className="text-2xl" onClick={onClose}>Fundamentals</NavLink>
        <NavLink href="#architecture" className="text-2xl" onClick={onClose}>Architecture</NavLink>
        <NavLink href="#history" className="text-2xl" onClick={onClose}>History</NavLink>
        <NavLink href="#gallery" className="text-2xl" onClick={onClose}>Gallery</NavLink>
        <NavLink href="#contact" className="text-2xl" onClick={onClose}>Contact</NavLink>
        <div className="w-16 h-[1px] bg-kaaba-gold mt-8" />
      </nav>
    </div>
  );
}