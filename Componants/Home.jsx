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
    <div id='home' className="min-h-screen flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-r from-[#c9d6ff50] to-[#e2e2e277]">

      {/* Left Content */}
      <div className='md:w-1/2 text-center md:text-left mb-10 md:mb-0'>
        <div className='mb-6'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-3'>
            Hi, I'm <span className='text-blue-600'>Sahbaj Khan</span>
          </h1>
          <div className='mb-4'>
            <p className='text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium'>
              Full Stack Developer
            </p>
            <div className='w-24 h-1 bg-blue-500 mx-auto md:mx-0 mt-2'></div>
          </div>
        </div>

        <div className='mb-8'>
          <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
            I craft digital experiences that blend creativity with functionality. Passionate about building scalable web applications using modern technologies and turning ideas into reality through clean, efficient code.
          </p>
        </div>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start'>
          <button
            className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2'
            onClick={scrollToContact}
          >
            <MdOutlineMailOutline className='text-xl' />
            Hire Me
          </button>
          <a
            href="./sahbajkhan.pdf"
            download
            className="inline-block"
          >
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 flex items-center justify-center gap-2">
              <HiDocumentArrowDown className="text-xl" />
              Download Resume
            </button>
          </a>

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
              className={`h-10 w-10 md:h-12 md:w-12 bg-gray-100 rounded-full flex justify-center items-center text-lg md:text-xl transition-all duration-300 ${link.className} shadow-md hover:shadow-lg`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right Content - Image */}
      <div className='md:w-1/2 flex justify-center'>
        <div className='relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl'>
          <img
            src="./src/assets/profile.jpeg"
            alt="Sahbaj Khan"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;