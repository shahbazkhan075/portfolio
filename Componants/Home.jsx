import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiDocumentArrowDown } from "react-icons/hi2";

const Home = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/shahbazkhan075",
      className: "hover:bg-gray-800 hover:text-white"
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sahbaj-khan-24138a338/",
      className: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: <MdOutlineMailOutline />,
      label: "Email",
      href: "mailto:sahbajkhan645ue@gmail.com",
      className: "hover:bg-red-500 hover:text-white"
    }
  ];

  return (
    <div id='home' className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-12 lg:px-24 py-12 bg-gradient-to-r from-[#c9d6ff50] to-[#e2e2e277]">

      {/* Left Content */}
      <div className='md:w-1/2 text-center md:text-left'>
        <div className='mb-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-3'>
            Hi, I'm <span className='text-blue-600'>Sahbaj Khan</span>
          </h1>
          <div className='mb-4'>
            <p className='text-2xl md:text-3xl text-gray-700 font-medium'>
              Full Stack Developer
            </p>
            <div className='w-24 h-1 bg-blue-500 mx-auto md:mx-0 mt-2'></div>
          </div>
        </div>

        <div className='mb-8 max-w-2xl'>
          <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
            I craft digital experiences that blend creativity with functionality. Passionate about building scalable web applications using modern technologies and turning ideas into reality through clean, efficient code.
          </p>
        </div>

        {/* Buttons */}
        <div className='flex flex-wrap gap-4 mb-8 justify-center md:justify-start'>
          <button className='px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-2'
          onClick={scrollToContact}
          >
            <MdOutlineMailOutline className='text-xl'/> Hire Me
          </button>
          <button className='px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 flex items-center gap-2 transform hover:-translate-y-1'>
            <HiDocumentArrowDown className='text-xl' />
            Download Resume
          </button>
        </div>

        {/* Social Media */}
        <div className='flex gap-4 justify-center md:justify-start'>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`h-12 w-12 bg-gray-100 rounded-full flex justify-center items-center text-xl transition-all duration-300 ${link.className} cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-1`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right Content - Placeholder for Image/Illustration */}
      <div className='md:w-1/2 mt-12 md:mt-0 flex justify-center'>
        <div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl'>
          {/* Placeholder for profile image */}
          <img src="./src/assets/profile.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;