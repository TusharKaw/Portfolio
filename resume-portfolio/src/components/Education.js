import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from 'react-icons/fa';
import './Education.css';

const Education = ({ education }) => {
  return (
    <div className="education-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaGraduationCap className="section-icon" />
        Education
      </motion.h2>
      
      <motion.div 
        className="education-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
        }}
      >
        <motion.div 
          className="university-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <FaUniversity className="edu-icon" />
          <h3>{education.university}</h3>
        </motion.div>
        
        <motion.div 
          className="education-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="degree">
            <strong>Degree:</strong> {education.degree}
          </div>
          
          <div className="education-meta">
            <div className="period">
              <FaCalendarAlt className="meta-icon" />
              {education.period}
            </div>
            
            <div className="gpa">
              <FaAward className="meta-icon" />
              GPA: {education.gpa}
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="education-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <blockquote>
          "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
          <cite>- Malcolm X</cite>
        </blockquote>
      </motion.div>
    </div>
  );
};

export default Education; 