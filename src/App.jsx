import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './portfolio/Navbar';
import Home from './portfolio/Home';
import About from './portfolio/About';
import Skills from './portfolio/Skills'
import ProjectSection from './portfolio/ProjectSection'
import ContactForm from './portfolio/ContactForm';
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Router>
        
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path='/projects' element={<ProjectSection />} />
            <Route path="/contact" element={<ContactForm />} />
        </Routes>
        
        </Router> 
      </div>

    
  )
}

export default App
