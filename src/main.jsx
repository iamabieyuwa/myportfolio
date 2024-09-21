import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './portfolio/Home';
import About from './portfolio/About';
import Skills from './portfolio/Skills'
import ProjectSection from './portfolio/ProjectSection'
import ContactForm from './portfolio/ContactForm';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App> 
        <Home />
    </App>
        <About />
        <Skills />
        <ProjectSection />
        <ContactForm />
  </React.StrictMode>,
)
