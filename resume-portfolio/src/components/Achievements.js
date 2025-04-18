import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import './Achievements.css';

const Achievements = ({ achievements }) => {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="achievements-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaTrophy className="section-icon" />
        Achievements
      </motion.h2>
      
      <motion.div
        className="achievements-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {achievements.map((achievement, index) => (
          <motion.div 
            key={index} 
            className="achievement-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              backgroundColor: '#f8f9fa' 
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 300 
            }}
          >
            <FaMedal className="achievement-icon" />
            <p>{achievement}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="achievement-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <blockquote>
          "The only limit to your achievement is the strength of your desire and willingness to work for it."
          <cite>- Anonymous</cite>
        </blockquote>
      </motion.div>
    </div>
  );
};

export default Achievements; 