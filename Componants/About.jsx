import React from 'react'
import { HiDocumentArrowDown } from 'react-icons/hi2'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import { GrStorage } from "react-icons/gr"
import resume from '../../public/sahbajkhan.pdf'
import { useTheme } from '../Context/ThemeContext'

const About = () => {
  const { darkMode } = useTheme()

  const skills = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'REACT JS',
    'EXPRESS JS',
    'NODE JS',
    'MONGODB',
  ]

  return (
    <div
      id="about"
      className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300
        ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}
      `}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-2xl md:text-3xl">About Me</h1>
        <p
          className={`mt-2 text-base md:text-xl
            ${darkMode ? 'text-gray-400' : 'text-gray-600'}
          `}
        >
          Get to know more about me, my skills, and my journey as a developer
        </p>
      </div>

      {/* Main */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
        {/* Left */}
        <div className="lg:w-1/2">
          <h1 className="font-bold text-xl md:text-2xl mb-4">My Story</h1>

          <div className="space-y-4">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm a passionate Full Stack Developer with over 1 year of
              experience creating dynamic web applications. My journey began
              with a curiosity about how websites work, which evolved into a
              deep love for coding and problem-solving.
            </p>

            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              I specialize in building scalable applications using modern
              technologies like React, Node.js, and MongoDB. I believe in
              writing clean, efficient code and creating user experiences that
              are both functional and beautiful.
            </p>

            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              with the developer community.
            </p>
          </div>

          {/* Resume Button */}
          <div className="mt-6">
            <a href={resume} download>
              <button
                className={`px-6 py-3 border-2 border-blue-600 font-semibold rounded-lg transition flex items-center gap-2
                  ${
                    darkMode
                      ? 'text-blue-400 hover:bg-gray-800'
                      : 'text-blue-600 hover:bg-blue-50'
                  }
                `}
              >
                <HiDocumentArrowDown className="text-xl" />
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-1/2">
          <h1 className="font-bold text-xl md:text-2xl mb-4">
            Technologies I Use
          </h1>

          {/* Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`h-10 rounded-lg font-semibold flex items-center justify-center text-sm md:text-base
                  ${
                    darkMode
                      ? 'bg-gray-800 text-gray-200'
                      : 'bg-blue-100 text-black'
                  }
                `}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-6">
            <h1 className="font-bold text-lg md:text-xl mb-4">
              Quick Stats
            </h1>

            <div
              className={`flex items-center gap-4 p-4 rounded-lg mb-4
                ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}
              `}
            >
              <div className="flex text-blue-600 font-bold text-xl">
                <SlArrowLeft />
                <SlArrowRight />
              </div>
              <div>
                <p className="font-bold text-lg">20+</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Projects Completed
                </p>
              </div>
            </div>

            <div
              className={`flex items-center gap-4 p-4 rounded-lg
                ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}
              `}
            >
              <GrStorage className="text-2xl font-bold text-blue-600" />
              <div>
                <p className="font-bold text-lg">6+</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Month Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
