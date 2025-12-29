import React from 'react'
import student from '../../public/download.webp'
import Ecommerce from '../../public/image.png'
import Quizz from '../../public/quiz-app-design.png'
import weather from '../../public/image copy 2.png'
import { useTheme } from '../Context/ThemeContext'

const Project = () => {
  const { darkMode } = useTheme()

  const projects = [
    {
      id: 1,
      title: "Student Details",
      description:
        "Store basic information of students with update and delete functionality.",
      technologies: ["Node.js", "MongoDB", "Express"],
      codeLink: "https://github.com/yourusername/project1",
      demoLink: "https://studentapp-six-kappa.vercel.app/",
      image: student
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A responsive e-commerce platform with product listing and modern UI.",
      technologies: ["HTML", "CSS"],
      codeLink: "https://github.com/shahbazkhan075/ecommerce",
      demoLink: "https://ecommerce-62.vercel.app/",
      image: Ecommerce
    },
    {
      id: 3,
      title: "Quiz App",
      description:
        "Interactive quiz application with score tracking and clean UI.",
      technologies: ["React", "Tailwind CSS"],
      codeLink: "https://github.com/shahbazkhan075/quizApp",
      demoLink: "#",
      image: Quizz
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "Weather application with real-time data using OpenWeather API.",
      technologies: ["JavaScript", "API", "HTML & CSS"],
      codeLink: "https://github.com/shahbazkhan075",
      demoLink: "https://somesh-tiw.github.io/Weather-App/",
      image: weather
    }
  ]

  const cardBg = darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600'
  const sectionBg = darkMode ? 'bg-gray-900' : 'bg-gray-50'

  return (
    <section
      id="projects"
      className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${sectionBg}`}
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-bold text-3xl md:text-4xl mb-4 text-white">
          Featured Projects
        </h1>
        <p className={`text-base md:text-xl ${mutedText}`}>
          Here are some of my recent projects that showcase my skills and expertise
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${cardBg}`}
            >
              {/* Image */}
              <div className="h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  {project.title}
                </h2>

                <p className={`${mutedText} mb-4`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600/20 text-blue-500 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border-2 border-blue-600 text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() =>
              window.open("https://github.com/shahbazkhan075", "_blank")
            }
            className="px-6 py-3 border-2 border-blue-600 text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Project
