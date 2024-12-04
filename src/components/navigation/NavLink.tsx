import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href || location.hash === href;
  const isHashLink = href.startsWith('#');

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (isHashLink) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`text-kaaba-gold hover:text-opacity-80 transition-colors duration-300 
                   text-sm font-medium tracking-wider uppercase font-sans ${className}
                   ${isActive ? 'text-opacity-100' : 'text-opacity-80'}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={`text-kaaba-gold hover:text-opacity-80 transition-colors duration-300 
                 text-sm font-medium tracking-wider uppercase font-sans ${className}
                 ${isActive ? 'text-opacity-100' : 'text-opacity-80'}`}
    >
      {children}
    </Link>
  );
}