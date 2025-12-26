import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
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
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#c9d6ff50] to-[#e2e2e277]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Contact Info & Social */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-xl p-6 h-full">
              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaEnvelope className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <a
                      href="mailto:sahbajkhan6593@gmail.com"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      sahbajkhan6593@gmail.com
                    </a>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">Typically replies within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <FaPhone className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <a
                      href="tel:+916265666859"
                      className="text-sm md:text-base text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +91 6265666859
                    </a>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FaMapMarkerAlt className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-sm md:text-base text-gray-600">Nanak Nagar Indore, MP, India</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">Open to remote work worldwide</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className='flex gap-4 justify-center'>
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

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-xl p-6 h-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Send a Message</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">Fill out the form below and I'll get back to you soon.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="sahbaj khan"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="sahbajkhan6593@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 md:py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-sm md:text-base"
                >
                  <span>Send Message</span>
                  <MdSend className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact