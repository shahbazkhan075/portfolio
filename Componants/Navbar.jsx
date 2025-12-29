import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {

  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 shadow-sm ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <nav className="flex items-center justify-around gap-20 px-4 md:px-6 py-4 max-w-7xl mx-auto">
        
        <div className="text-xl md:text-2xl font-bold text-blue-500">
          Sahbaj Khan
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="hover:text-blue-600"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="text-xl">
          {darkMode ? <CiLight className="text-3xl" /> : <BsFillCloudMoonFill className="text-3xl" />}
        </button>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left"
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
