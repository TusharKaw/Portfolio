import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="about-title"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ABOUT
        </motion.h2>
        
        <motion.div
          className="about-email"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <a href="mailto:tusharkaw64@gmail.com">tusharkaw64@gmail.com</a>
        </motion.div>
        
        <motion.div 
          className="about-description"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Jr. Project Manager with over 1 year of experience
            specializing in IT Department management for international logistics companies.
          </p>
          <p>
            I can implement effective IT Strategies at local
            and global levels. My greatest strength is
            business awareness, which helps me
            permanently streamline infrastructure
            and applications.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-location"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p> 📍 Delhi, India</p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="about-image-container"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img 
          src="/1711620996707.jpg"
          alt="Tushar Kaw" 
          className="about-image" 
        />
      </motion.div>
    </div>
  );
};

export default About; 