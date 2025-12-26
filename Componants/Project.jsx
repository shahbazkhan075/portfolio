import React from 'react'

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Student Details",
      description: "Store the basics Informations of Students with basic functionality update,delete the Informations of Students.",
      technologies: ["Node.js", "MongoDB", "Express"],
      codeLink: "https://github.com/yourusername/project1",
      demoLink: "https://studentapp-six-kappa.vercel.app/",
      image: "./src/assets/download.webp"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A responsive e-commerce platform with product filtering, user reviews, and secure checkout process.",
      technologies: ["HTML", "CSS"],
      codeLink: "https://github.com/shahbazkhan075/ecommerce",
      demoLink: "https://ecommerce-62.vercel.app/",
       image: "./src/assets/image.png"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality.",
      technologies: ["React", "Talwind CSS"],
      codeLink: "https://github.com/shahbazkhan075/quizApp",
      demoLink: "https://project3-demo.com",
       image: "./src/assets/quiz-app-design.png"
    },
    {
      id: 4,
      title: "Weather App",
      description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["JavaScript","OpenWeather API","HTML5 & CSS"],
      codeLink: "https://github.com/shahbazkhan075",
      demoLink: "https://somesh-tiw.github.io/Weather-App/",
       image: "./src/assets/image copy 2.png"
    }
  ];

  return (
    <section id='projects' className="py-20 px-4 bg-gray-50">
      <div className='text-center max-w-3xl mx-auto'>
        <h1 className='font-bold text-4xl md:text-5xl text-gray-800'>Featured Projects</h1>
        <p className='text-xl text-gray-600 mt-4'>
          Here are some of my recent projects that showcase my skills and expertise
        </p>
      </div>
  
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid ml-17 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white w-130 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Image Container */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300 font-medium"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border-2 border-blue-800 text-gray-800 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300 font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}

         
        </div>
         <div className='flex justify-center mt-16 '>
            <button className='text-center px-4 py-2 w-40 border-2 border-blue-800 text-gray-800 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300 font-medium'
            onClick={() => window.open("https://github.com/shahbazkhan075", "_blank")}
            >View All Post</button>
          </div>
      </div>
    </section>
  )
}

export default Project