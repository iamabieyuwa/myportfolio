// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './css/home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-page">
      <motion.div
        className="content-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
              >
                  <div className="text">
                  Hello, I am Abieyuwa
                  </div>
         
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
              >
                  <div className="lower__text">
                  A Front End Web Developer with  a passion for creating interactive and  visually stunning web applications.
                  </div>
        </motion.p>
        <div className="logo-container">
          <motion.div
            className="react-logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
