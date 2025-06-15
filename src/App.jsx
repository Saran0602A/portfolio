import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Aboutme from './sections/Aboutme.jsx'
import Cursor from './components/Cursor.jsx'
import Metorids from './components/Metorids.jsx'
import Projects from './sections/Projects.jsx'
import Internships from './sections/Internships.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <div className="relative container mx-auto p-4 overflow-hidden">
      <Metorids />
      <Cursor />
      <Navbar />
      <Hero />
      <Aboutme />
      <Projects />
      <Internships />
      <Contact />
      <Footer />

      
    </div>
  )
}
