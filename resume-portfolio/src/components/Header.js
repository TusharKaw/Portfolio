import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBriefcase, FaProjectDiagram, FaGraduationCap, FaTrophy, FaTools, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = ({ name }) => {
  const links = [
    { to: '/', label: 'Experience', icon: <FaBriefcase /> },
    { to: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { to: '/skills', label: 'Skills', icon: <FaTools /> },
    { to: '/education', label: 'Education', icon: <FaGraduationCap /> },
    { to: '/achievements', label: 'Achievements', icon: <FaTrophy /> },
    { to: '/contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  return (
    <header className="header">
      <motion.div 
        className="header-container"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="header-name"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {name}
        </motion.h1>
        
        <motion.nav 
          className="header-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ul className="nav-list">
            {links.map((link, index) => (
              <motion.li 
                key={link.to}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Link to={link.to} className="nav-link">
                  <span className="icon">{link.icon}</span>
                  <span className="label">{link.label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>
    </header>
  );
};

export default Header; 