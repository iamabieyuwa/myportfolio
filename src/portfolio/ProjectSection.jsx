import React, { useState } from 'react';
import './css/projectSection.css';
import { motion } from 'framer-motion';
import Airbnb from './assets/Airbnb.png'
import Amazon from './assets/Amazon.jpg'
import Hulu from './assets/Hulu.png'
import MyPortfolio from './assets/MyPortfolio.png'
import Netflix from './assets/Netflix.png'
import Portfolio from './assets/Portfolio.png'
const ProjectSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            image: Airbnb, // Replace with your project image URLs
            title: 'Airbnb Clone',
            description: 'A clone of Home page of the Airbnb website with a search date function',
            link: 'https://airbnb-cl0ne.web.app', // Replace with your project link
        },
        {
            image: Amazon,
            title: 'Amazon Clone',
            description: 'A clone of the amazon e-commerce store with a sign in and add to cart functionality',
            link: 'https://challenge-8404d.web.app',
        },
        {
            image: Hulu,
            title: 'Hulu Clone',
            description: 'A clone of the movie streaming platform Hulu, with a functional search bar',
            link: 'https://hulu-cl0ne.web.app',
        },
        {
            image: MyPortfolio,
            title: 'This portfolio',
            description: 'A simple responsive and animated portfolio built with ReactJS',
            link: 'https://example.com/project5',
        },
        {
            image: Netflix,
            title: 'Netflix Clone',
            description: 'A clone of the homepage of netflix with trailer watch functionality',
            link: 'https://netflix-clone-2f183.web.app',
      },
      {
        image: Portfolio,
        title: 'A porfolio website',
        description: 'A responsive react portfolio with a floating navbar',
        link: 'https://react-portfolio001.web.app',
    },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
      <div className="project-section">
        <div className="container__container">

        
        <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="heading"
                >
                    My Projects
                </motion.h1>
            <div className="slider">
                <button onClick={prevSlide} className="slider-button prev-button">
                    &#10094;
                </button>
                <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="slide"
                        >
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <a
                                href={project.link}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                            <p className='mobile__p'>Projects are best viewed on desktop :)</p>
                        </div>
                    ))}
                        
                </div>
                <button onClick={nextSlide} className="slider-button next-button">
                    &#10095;
                    </button>
                    
            </div>
        </div>
        </div>
    );
};

export default ProjectSection;
