import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
const Skills = () => {
  // skills array would be:
  const frontend = [
    { name: "HTML / CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "BootStrap", level: 95 },
    { name: "JavaScript", level: 80 },
    { name: "React JS", level: 95 },
    { name: "Context Api", level: 85 },
  ];

  const backend=[
    {name:'Node js',level:'80'},
    {name:'Express js',level:'95'},
    {name:'MongoDB',level:'80'},
    {name:'Middleware & Bcrypt',level:'85'},
    {name:'REST APIs',level:'90'},
    {name:'Authentications',level:'93'},
  ]

  const tools=[
    {name:'VS Code',level:'100'},
    {name:'Git & GitHub',level:'70'},
    {name:'Postman',level:'95'},
    {name:'Thunder Client',level:'75'},
    {name:'Vercel & Netlify',level:'80'},
  ]
  return (
    <div className='bg-gradient-to-r from-[#c9d6ff50] to-[#e2e2e277] mt-25 pb-15'>
      {/* skills head */}
      <div className='text-center pt-20'>
        <h1 className='font-bold text-3xl'>Skills & Expertise</h1>
        <p className=' text-xl'>Here are the technologies and tools I work with to bring ideas to life</p>
      </div>

      {/* skils set */}
      <div className='mt-25 flex justify-evenly'>

        {/* frontend */}
        <div className="w-[280px] bg-white p-5 shadow-2xl rounded-xl">
          {/* Heading */}
          <h1 className="flex items-center gap-2 mb-6">
            <span className="flex items-center text-blue-600">
              <MdArrowBackIosNew size={22} />
              <MdArrowForwardIos size={22} />
            </span>
            <span className="text-xl font-bold">Frontend</span>
          </h1>

          {/* Skills with progress */}
          <ul className="space-y-4">
            {frontend.map((skill, index) => (
              <li key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
       {/* backend */}
         <div className="w-[280px] bg-white p-5 shadow-2xl rounded-xl">
          {/* Heading */}
          <h1 className="flex items-center gap-2 mb-6">
            <span className="flex items-center text-blue-600">
              <GrStorage size={22} />
            </span>
            <span className="text-xl font-bold">Backend</span>
          </h1>

          {/* Skills with progress */}
          <ul className="space-y-4">
            {backend.map((skill, index) => (
              <li key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* tools & others */}
         <div className="w-[280px] bg-white p-5 shadow-2xl rounded-xl">
          {/* Heading */}
          <h1 className="flex items-center gap-2 mb-6">
            <span className="flex items-center text-blue-600">
              <FaTools size={22} />
            </span>
            <span className="text-xl font-bold">Tools & Others</span>
          </h1>

          {/* Skills with progress */}
          <ul className="space-y-4">
            {tools.map((skill, index) => (
              <li key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Skills