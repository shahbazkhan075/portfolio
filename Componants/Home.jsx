import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { useTheme } from "../Context/ThemeContext";

const Home = () => {
  const { darkMode } = useTheme();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/shahbazkhan075",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/sahbaj-khan-24138a338/",
    },
    {
      icon: <MdOutlineMailOutline />,
      href: "mailto:sahbajkhan645ue@gmail.com",
    },
  ];

  return (
    <div
      id="home"
      className={`min-h-screen flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 py-12 transition-colors duration-300
      ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-[#c9d6ff50] to-[#e2e2e277] text-black"
      }`}
    >
      {/* Left */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          Hi, I'm <span className="text-blue-600">Sahbaj Khan</span>
        </h1>

        <p
          className={`text-xl md:text-2xl lg:text-3xl font-medium mb-4 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Full Stack Developer
        </p>

        <p
          className={`text-base md:text-lg leading-relaxed mb-8 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I craft digital experiences that blend creativity with functionality.
          Passionate about building scalable web applications using modern
          technologies.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
          <button
            onClick={scrollToContact}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <MdOutlineMailOutline className="text-xl" />
            Hire Me
          </button>

          <a href="/sahbajkhan.pdf" download>
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <HiDocumentArrowDown className="text-xl" />
              Download Resume
            </button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`h-12 w-12 rounded-full flex items-center justify-center text-xl transition
              ${
                darkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
          <img
            src="/profile.jpeg"
            alt="Sahbaj Khan"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
