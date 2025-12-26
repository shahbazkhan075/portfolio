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
        <div className='flex justify-around items-center mt-9 pb-5'>
            <div className="space-y-1">
                <p className="flex items-center justify-center gap-1">
                    Made with <IoHeartOutline className="text-red-500" /> by Sahbaj Khan
                </p>
                <p>© 2024 All rights reserved.</p>
            </div>

            <div>
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
        </div>
    )
}

export default Footer