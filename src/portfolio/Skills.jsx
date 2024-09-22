import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';
import './css/skills.css';

const Skills = () => {
    const technologies = [
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3Alt />, name: 'CSS3' },
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <FaPython />, name: 'Python'},
        { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
        { icon: <FaGitAlt />, name: ' Version Control' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="products-page">
            <h1 className="products-heading">My Skills</h1>
            <motion.div
                className="products-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="product-box"
                        variants={itemVariants}
                    >
                        <div className="icon">{tech.icon}</div>
                        <p className="product-name">{tech.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
