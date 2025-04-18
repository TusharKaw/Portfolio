import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <motion.div 
          className="footer-section"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>TUSHAR KAW</h3>
          <p>Jr. Project Manager specializing in modern web technologies and effective project management.</p>
        </motion.div>
        
        <motion.div 
          className="footer-section"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Navigation</h3>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="footer-section"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Contact</h3>
          <div className="social-links">
            <a href="mailto:tusharkaw64@gmail.com">
              <FaEnvelope style={{ marginRight: '8px' }} /> tusharkaw64@gmail.com
            </a>
            <a href="tel:8383826599">
              <FaPhoneAlt style={{ marginRight: '8px' }} /> 8383826599
            </a>
            <a href="https://github.com/TusharKaw" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ marginRight: '8px' }} /> GitHub
            </a>
            <a href="https://linkedin.com/in/tushar-kaw" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn style={{ marginRight: '8px' }} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>&copy; {currentYear} Tushar Kaw. All rights reserved.</p>
        <p>Designed and built with React & Framer Motion</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 