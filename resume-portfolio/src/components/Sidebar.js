import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ contact }) => {
  const { email, phone, github, linkedin } = contact;

  const sidebarVariants = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="sidebar"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="sidebar-profile">
        <motion.div 
          className="profile-image"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* You can add a profile image here if you have one */}
          <div className="profile-placeholder">TK</div>
        </motion.div>
      </div>

      <motion.div 
        className="sidebar-contact"
        variants={itemVariants}
      >
        <h3>Contact</h3>
        <ul className="contact-list">
          <motion.li variants={itemVariants}>
            <a href={`mailto:${email}`} className="contact-item" aria-label="Email">
              <FaEnvelope className="contact-icon" />
              <span>{email}</span>
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href={`tel:${phone}`} className="contact-item" aria-label="Phone">
              <FaPhone className="contact-icon" />
              <span>{phone}</span>
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="GitHub">
              <FaGithub className="contact-icon" />
              <span>{github}</span>
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="LinkedIn">
              <FaLinkedin className="contact-icon" />
              <span>{linkedin}</span>
            </a>
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        className="download-resume"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
      >
        <a href="/resume.pdf" download className="download-btn">
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar; 