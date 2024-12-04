import React from 'react';
import { NavLink } from './NavLink';

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/quran">Quran</NavLink>
      <NavLink href="/hadith">Hadith</NavLink>
      <NavLink href="/prayer">Prayer Times</NavLink>
      <NavLink href="/figures">Important Figures</NavLink>
      <NavLink href="/fundamentals">Fundamentals</NavLink>
      <NavLink href="#architecture">Architecture</NavLink>
      <NavLink href="#history">History</NavLink>
      <NavLink href="#gallery">Gallery</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </nav>
  );
}