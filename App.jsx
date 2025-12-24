import React from 'react'
import Home from './Componants/Home'
import About from './Componants/About'
import Contact from './Componants/Contact'
import Project from './Componants/Project'
import Skills from './Componants/Skills'
import Navbar from './Componants/Navbar'

const App = () => {
  return (
    <>
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Project/>
       <Contact/>
    </>
  )
}

export default App