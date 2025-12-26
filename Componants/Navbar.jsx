import React from "react";
import { useState } from "react";

const Navbar = () => {

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-around px-6 py-4 max-w-7xl mx-auto gap-95">
        
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-blue-500">
          Sahbaj Khan
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
          </nav>

      </nav>
    </header>
  );
};

export default Navbar;
