import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoHeartOutline } from "react-icons/io5";

const Footer = () => {
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
        <footer className='py-8 px-4 md:px-8 lg:px-16 border-t'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                <div className="text-center md:text-left">
                    <p className="flex items-center justify-center md:justify-start gap-1 text-sm md:text-base">
                        Made with <IoHeartOutline className="text-red-500" /> by Sahbaj Khan
                    </p>
                    <p className="text-gray-600 text-sm md:text-base mt-1">© 2024 All rights reserved.</p>
                </div>

                <div>
                    <div className='flex gap-3 md:gap-4'>
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
            </div>
        </footer>
    )
}

export default Footer