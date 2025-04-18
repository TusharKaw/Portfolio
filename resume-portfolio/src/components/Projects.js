import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = ({ projects }) => {
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
    <div className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaProjectDiagram className="section-icon" />
        Projects
      </motion.h2>
      
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            {project.details && (
              <p className="project-details">{project.details}</p>
            )}
            
            {project.tech && (
              <div className="project-tech">
                <strong>Tech Stack:</strong> {project.tech}
              </div>
            )}
            
            <div className="project-links">
              {project.github && (
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> GitHub
                </motion.a>
              )}
              
              {project.liveDemo && (
                <motion.a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt /> Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="other-projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a 
          href="https://github.com/TusharKaw?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="all-projects-link"
        >
          View All Projects on GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default Projects; 