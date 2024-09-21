import React from 'react';
import { motion } from 'framer-motion';
import './css/about.css';

const About = () => {
    return (
        <div className="about">
            <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="heading"
                >
                    About Me
                </motion.h1>
            <motion.div
                className="content-container2"
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            >
                
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}  
                >
                    <div className="big__text">
                    I am a student of computer science and a passionate front-end web developer with a knack for creating visually stunning and user-friendly websites. 
                    With a strong foundation in HTML, CSS, and JavaScript, I bring designs to life, ensuring they’re not only beautiful 
                    but also functional across all devices. I thrive on the challenge of turning complex ideas into seamless digital experiences. My expertise extends to modern front-end frameworks like React, allowing me to build dynamic and responsive web applications.
                    I’m also proficient in Git version control, ensuring that projects are well-managed, collaborative, and maintainable over time. I believe in the power of the web to connect people and ideas, and I’m excited to contribute to that in meaningful ways. 
                    Let’s build something amazing together!
                    </div>
                    
                   
                    <div className='phone__text'>
                        I am a student of computer science and a passionate front-end web developer with a knack for creating visually stunning and user-friendly websites.
                        My expertise extends to modern front-end frameworks like React, allowing me to build dynamic and responsive web applications.
                    I’m also proficient in Git version control, ensuring that projects are well-managed, collaborative, and maintainable over time.
                     I believe in the power of the web to connect people and ideas, and I’m excited to contribute to that in meaningful ways. 
                    Let’s build something amazing together!
                    </div>
                    
                </motion.p>
                
                   
                
            </motion.div>
        </div>
    );
};

export default About;
