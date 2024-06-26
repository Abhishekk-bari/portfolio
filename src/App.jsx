import React from 'react'
import Navbar from './components/Navbar'  /* import */
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <div>

      <Navbar /> 
      <SocialLinks />
      <Home />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      </div>
      
  )
}

export default App
