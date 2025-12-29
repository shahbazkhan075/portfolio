import React from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa'
import { MdOutlineMailOutline, MdSend } from 'react-icons/md'
import { useTheme } from '../Context/ThemeContext'

const Contact = () => {
  const { darkMode } = useTheme()

   const socialLinks = [
      {
        icon: <FaGithub />,
        label: 'GitHub',
        href: 'https://github.com/shahbazkhan075',
        hover: 'hover:bg-gray-600 hover:text-white',
      },
      {
        icon: <FaLinkedinIn />,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sahbaj-khan-24138a338/',
        hover: 'hover:bg-blue-600 hover:text-white',
      },
      {
        icon: <MdOutlineMailOutline />,
        label: 'Email',
        href: 'mailto:sahbajkhan645ue@gmail.com',
        hover: 'hover:bg-red-500 hover:text-white',
      },
    ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
  }

  const sectionBg = darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white'
  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600'
  const labelText = darkMode ? 'text-gray-300' : 'text-gray-700'
  const inputBg = darkMode
    ? 'bg-gray-700 border-gray-600 text-white'
    : 'bg-white border-gray-300 text-black'

  return (
    <section
      id="contact"
      className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${sectionBg}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className={`text-base md:text-xl max-w-3xl mx-auto ${mutedText}`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left */}
          <div className="lg:w-1/2">
            <div className={`rounded-xl shadow-xl p-6 h-full ${cardBg}`}>
              {/* Info Cards */}
              <div className="space-y-4 mb-8">
                {/* Email */}
                <div className={`flex items-start gap-4 p-4 rounded-xl ${cardBg}`}>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:sahbajkhan6593@gmail.com"
                      className={`${mutedText} hover:text-blue-500`}
                    >
                      sahbajkhan6593@gmail.com
                    </a>
                    <p className="text-xs text-gray-500 mt-1">
                      Typically replies within 24 hours
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className={`flex items-start gap-4 p-4 rounded-xl ${cardBg}`}>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <FaPhone className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+916265666859"
                      className={`${mutedText} hover:text-green-500`}
                    >
                      +91 6265666859
                    </a>
                    <p className="text-xs text-gray-500 mt-1">
                      Mon–Fri, 9am–6pm
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className={`flex items-start gap-4 p-4 rounded-xl ${cardBg}`}>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FaMapMarkerAlt className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className={mutedText}>Indore, MP, India</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Open to remote work worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
               <div className="flex gap-3 md:gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`h-10 w-10 md:h-12 md:w-12 rounded-full flex justify-center items-center text-lg md:text-xl transition-all duration-300 shadow-md hover:shadow-lg
                ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'}
                ${link.hover}
              `}
            >
              {link.icon}
            </a>
          ))}
        </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:w-1/2">
            <div className={`rounded-xl shadow-xl p-6 h-full ${cardBg}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Send a Message
              </h3>
              <p className={`mb-6 ${mutedText}`}>
                Fill out the form below and I'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm mb-1 ${labelText}`}>
                      Your Name *
                    </label>
                    <input
                      required
                      className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                      placeholder="Sahbaj Khan"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-1 ${labelText}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm mb-1 ${labelText}`}>
                    Subject
                  </label>
                  <input
                    className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className={`block text-sm mb-1 ${labelText}`}>
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none ${inputBg}`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-semibold"
                >
                  Send Message <MdSend />
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
