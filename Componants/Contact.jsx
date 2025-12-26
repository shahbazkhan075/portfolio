import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheckCircle, FaLinkedinIn } from 'react-icons/fa'

import { MdOutlineMailOutline, MdSend } from 'react-icons/md'

const Contact = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-[#c9d6ff50] to-[#e2e2e277] ">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:flex sm:justify-around">

          {/* Left Column - Contact Info & Social */}
          <div className="bg-white rounded-2xl shadow-xl w-120 p-6">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                  <a
                    href="mailto:hello@example.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    sahbajkhan6593@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Typically replies within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FaPhone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    +91 6265666859
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaMapMarkerAlt className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Location</h3>
                  <p className="text-gray-600">Nanak Nagar Indore Madhya Pradesh India</p>
                  <p className="text-sm text-gray-500 mt-2">Open to remote work worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='flex gap-4 mt-8 justify-center md:justify-start'>
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

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl  w-120 p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Send a Message</h3>
            <p className="text-gray-600 mb-8">Fill out the form below and I'll get back to you soon.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="sahbaj khan"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="sahbajkhan6593@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] font-semibold"
              >
                <span>Send Message</span>
                <MdSend className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Optional: Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600 bg-white px-6 py-3 rounded-full shadow-lg">
            <FaCheckCircle className="w-5 h-5 text-green-500" />
            <span>Available for freelance work</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact