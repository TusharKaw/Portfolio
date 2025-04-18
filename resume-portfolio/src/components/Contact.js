import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null });
    
    try {
      // In a real application, you'd send this to your backend API
      // await axios.post('http://localhost:5000/api/contact', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, success: false, error: null });
      }, 5000);
    } catch (error) {
      setFormStatus({ 
        submitting: false, 
        success: false, 
        error: "Failed to send message. Please try again later."
      });
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, text: contact.email, href: `mailto:${contact.email}` },
    { icon: <FaPhone />, text: contact.phone, href: `tel:${contact.phone}` },
    { icon: <FaGithub />, text: contact.github, href: `https://${contact.github}` },
    { icon: <FaLinkedin />, text: contact.linkedin, href: `https://${contact.linkedin}` }
  ];

  return (
    <div className="contact-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaEnvelope className="section-icon" />
        Contact Me
      </motion.h2>
      
      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Get In Touch</h3>
          <p>Feel free to reach out to me for any questions or opportunities!</p>
          
          <ul className="contact-list">
            {contactInfo.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.3 }}
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-text">{item.text}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Send a Message</h3>
          
          {formStatus.success && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Your message has been sent successfully!
            </motion.div>
          )}
          
          {formStatus.error && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {formStatus.error}
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <motion.input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <motion.input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <motion.input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <motion.textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            
            <motion.button 
              type="submit" 
              className="submit-btn"
              disabled={formStatus.submitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {formStatus.submitting ? 'Sending...' : (
                <>
                  <FaPaperPlane className="btn-icon" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 