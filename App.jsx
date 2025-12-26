import React from 'react'
import Home from './Componants/Home'
import About from './Componants/About'
import Contact from './Componants/Contact'
import Project from './Componants/Project'
import Skills from './Componants/Skills'
import Navbar from './Componants/Navbar'
import Footer from './Componants/Footer'

const App = () => {
  return (
    <>
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Project/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App