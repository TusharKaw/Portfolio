import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = ({ experience }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="experience-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaBriefcase className="section-icon" />
        Professional Experience
      </motion.h2>
      
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experience.map((job, index) => (
          <motion.div 
            key={index} 
            className="experience-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="experience-header">
              <h3 className="company-name">{job.company}</h3>
              <div className="job-meta">
                <span className="job-title">{job.position}</span>
                <span className="job-period">{job.period}</span>
              </div>
            </div>
            
            <ul className="responsibility-list">
              {job.responsibilities.map((responsibility, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * idx, duration: 0.3 }}
                >
                  {responsibility}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience; 