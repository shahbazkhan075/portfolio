import React from 'react'
import { RxPinBottom } from "react-icons/rx";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { GrStorage } from "react-icons/gr";
const About = () => {
    const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT JS', 'EXPRESS JS', 'NODE JS', 'MONGODB']
    return (
        <div className='mt-15 '>
            {/* header for about */}
            <div className='text-center'>
                <h1 className='font-bold text-3xl'>About Me</h1>
                <p className='mt-2 text-xl'>Get to know more about me, my skills, and my journey as a developer</p>
            </div>

            {/* main part for about */}
            <div className='flex justify-around mt-6 gap-13'>
                <div>
                    <h1 className='font-bold text-2xl'>My Story</h1>
                    <div className='w-120 mt-3'>
                        <p>I'm a passionate Full Stack Developer with over 1 years of experience creating dynamic web applications. My journey began with a curiosity about how websites work, which evolved into a deep love for coding and problem-solving. </p>

                        <p className='mt-2'>I specialize in building scalable applications using modern technologies like React, Node.js, and MongoDB. I believe in writing clean, efficient code and creating user experiences that are both functional and beautiful. </p>

                        <p className='mt-2'>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.</p>
                    </div>

                    <div className='mt-6'>
                        <button className='flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 flex items-center gap-2 transform hover:-translate-y-1'><RxPinBottom />Download Resume</button>
                    </div>

                </div>
                <div >
                    <h1 className='font-bold text-2xl'>Technologies I Use</h1>
                    <div className='grid grid-cols-2 gap-4 mt-3'>
                        {
                            skills.map((skill) =>
                                <p className='h-10 bg-blue-100 w-40 rounded font-semibold text-center pt-2'>{skill}</p>
                            )
                        }

                    </div>
                    <div className='mt-3'>
                        <h1 className='font-bold text-xl'>Quick Stats</h1>
                        <div className='flex items-center gap-3 bg-blue-100 p-2 rounded mt-5'>
                            <div className='flex text-blue-600 font-bold'><SlArrowLeft /><SlArrowRight /></div>
                            <div>
                                <p className='font-bold'>50+ </p>
                                <p>Projects Completed </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 bg-blue-100 p-2 rounded mt-5'>
                            <div><GrStorage className='text-xl font-bold text-blue-600'/></div>
                            <div>
                                <p className='font-bold'>6+ </p>
                                <p>Month Experince </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About