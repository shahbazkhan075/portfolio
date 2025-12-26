import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(false); // Close mobile menu after click
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
        {/* Logo / Name */}
        <div className="text-xl md:text-2xl font-bold text-blue-500">
          Sahbaj Khan
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-blue-600 py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;