import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaTasks, FaCode, FaLaptopCode } from 'react-icons/fa';
import './Skills.css';

const Skills = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, backgroundColor: '#f8f9fa' }
  };

  const skillSections = [
    { title: 'Management Skills', icon: <FaTasks />, data: skills.management },
    { title: 'Programming & Development', icon: <FaCode />, data: skills.programming },
    { title: 'Frameworks & Tools', icon: <FaLaptopCode />, data: skills.tools }
  ];

  return (
    <div className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaTools className="section-icon" />
        Skills
      </motion.h2>
      
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillSections.map((section, index) => (
          <motion.div 
            key={index} 
            className="skill-category"
            variants={itemVariants}
          >
            <motion.h3 
              className="category-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <span className="category-icon">{section.icon}</span>
              {section.title}
            </motion.h3>
            
            <motion.div 
              className="skill-items"
              variants={containerVariants}
            >
              {section.data.map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  className="skill-item"
                  variants={skillItemVariants}
                  whileHover="hover"
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300,
                    delay: 0.03 * idx 
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills; 