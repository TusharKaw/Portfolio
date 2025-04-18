import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ data }) => {
  if (!data) return null;
  
  return (
    <motion.div 
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1 
          className="hero-name"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          {data.name}
        </motion.h1>
        
        <motion.h2 
          className="hero-headline"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          {data.headline}
        </motion.h2>
        
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <motion.a 
            href="#contact" 
            className="cta-button"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a 
            href="#projects" 
            className="cta-button secondary"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p>Scroll Down</p>
        <i className="arrow-down"></i>
      </motion.div>
    </motion.div>
  );
};

export default Hero; 