import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaTimes, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaTrophy, FaTools } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ contact, isOpen, toggleSidebar }) => {
  const { email, phone, github, linkedin } = contact;

  // Navigation links
  const navLinks = [
    { to: '/', label: 'Experience', icon: <FaBriefcase /> },
    { to: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { to: '/skills', label: 'Skills', icon: <FaTools /> },
    { to: '/education', label: 'Education', icon: <FaGraduationCap /> },
    { to: '/achievements', label: 'Achievements', icon: <FaTrophy /> },
    { to: '/contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  const sidebarVariants = {
    hidden: { 
      x: '100%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className={`sidebar ${isOpen ? 'sidebar-mobile-open' : ''}`}
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="sidebar-header">
        <button className="close-sidebar" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      
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

      {/* Navigation Links */}
      <motion.div className="sidebar-nav" variants={itemVariants}>
        <h3>Navigation</h3>
        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.to}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={link.to} className="nav-link" onClick={isOpen ? toggleSidebar : undefined}>
                <span className="nav-icon">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

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