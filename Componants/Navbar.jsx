import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-around px-6 py-4 max-w-7xl mx-auto gap-95">
        
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-blue-500">
          Sahbaj Khan
        </div>

        {/* Links */}
        <ul className="flex gap-8 font-semibold text-gray-700">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Skills</li>
          <li className="cursor-pointer hover:text-blue-500">Projects</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;
