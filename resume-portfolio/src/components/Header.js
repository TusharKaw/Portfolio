import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaBriefcase, FaProjectDiagram, FaTools, FaGraduationCap, FaTrophy, FaEnvelope, FaHome, FaUser } from 'react-icons/fa';
import './Header.css';

const Header = ({ name, scrollToSection, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll to update header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick links for navigation
  const navLinks = [
    { id: 'hero', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'projects', label: 'Portfolio', icon: <FaProjectDiagram /> },
    { id: 'skills', label: 'Skills', icon: <FaTools /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  // Handle click on navigation link
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <motion.div 
        className="header-container"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-top">
          <motion.div 
            className="header-logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => scrollToSection('hero')}
          >
            <h1 className="header-name">{name}</h1>
          </motion.div>
          
          {/* Phone number */}
          <div className="header-phone">
            <motion.a 
              href="tel:8383826599"
              whileHover={{ color: '#e8dcc9' }}
            >
              8383826599
            </motion.a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    onClick={() => handleNavClick(link.id)}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    aria-label={`Go to ${link.label} section`}
                  >
                    <span className="nav-text">{link.label}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav 
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button 
                    onClick={() => handleNavClick(link.id)}
                    className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{link.icon}</span>
                    <span>{link.label}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </motion.div>
    </header>
  );
};

export default Header; 