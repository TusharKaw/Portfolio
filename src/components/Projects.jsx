import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import gsap from 'gsap';
import bankopolyImage from '../assets/bankopoly.avif';
import betbyheartImage from '../assets/betbyheart.jpg';
import nachosNFTImage from '../assets/nachos.jpg';
import chatroomImage from '../assets/chatroom.png';
import lunaiImage from '../assets/lunai.png';
import ActiveShooter from '../assets/Activeshooter.jpg';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);

  const projectFilters = [
    { id: 'all', name: 'All' },
    { id: 'websites', name: 'Websites' },
    { id: 'games', name: 'Games' },
    { id: 'blockchain', name: 'Blockchain' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Luna AI',
      techStack: <text style={{color:'var(--primary-beige)'}}>React & Node.js</text>,
      description: 'An AI platform where user can create their virtual AI girlfriends / AI influencers, chat with them, create videos with them or advertise their products.',
      teamSize: '3', 
      category: ['websites'],
      image: lunaiImage,
      url: 'https://github.com/TusharKaw/LUNA-AI'
    },
    {
      id: 2,
      title: 'Bankopoly.io',
      techStack: <text style={{color:'var(--primary-beige)'}}>Unity & Node.js</text>, 
      description: 'A blockchain-based NFT WebGL Game on the Cardano network, featuring secure wallet connection, NFT skins, and multiplayer/vsBot gameplays.',
      teamSize: '5', 
      category: ['games','blockchain'],
      image: bankopolyImage,
      url: 'https://bankopoly.io/'
  },
  {
    id: 3,
    title: 'NachosNFT',
    techStack: <text style={{color:'var(--primary-beige)'}}>React & Node.js</text>,
    description: 'A unique web-based platform built on the Cardano blockchain, centered around upgradable NFTs and competitive gameplay mechanics.',
    teamSize: '4', 
    category: ['websites','blockchain'],
    image: nachosNFTImage,
    url: 'https://www.nachoxyz.com/'
},
{
  id: 4,
  title: 'Bet By Heart',
  techStack: <text style={{color:'var(--primary-beige)'}}>React & Node.js</text>,
  description: 'An interactive online betting platform featuring games like Blackjack, Teen Patti, Chess, Ludo, and Derby. Integrated referral and rewards systems to boost user engagement.',
  teamSize: '5', 
  category: ['websites'],
  image: betbyheartImage,
  url: 'https://dev-game.abhiwandemos.com/'
},
{
  id: 5,
  title: 'Active Shooter VR',
  techStack: <text style={{color:'var(--primary-beige)'}}>Unreal Engine</text>,
  description: 'A VR training simulation developed for Abu Dhabi Police, integrating KAT VR, Forcetube Provolver, and MetaHumans for an immersive training experience.',
  teamSize: '5', 
  category: ['games'],
  image: ActiveShooter,
  url: 'https://www.artstation.com/artwork/lGXm4V'
},
    {
      id: 6,
      title: 'Personal Chatroom',
      techStack: <text style={{color:'var(--primary-beige)'}}>React & Node.js</text>, 
      description: 'A private discord like chatroom made by Me, I deploy this time to time on TOR browser with variable .onion links, to chat privately.',
      teamSize: '2', 
      category: ['websites'],
      image: chatroomImage,
      url: 'https://github.com/TusharKaw/Personal-Chatroom'
  }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  useEffect(() => {
    // Animate projects when filter changes
    const projectCards = projectsRef.current.querySelectorAll('.project-card');
    
    gsap.fromTo(
      projectCards,
      { 
        scale: 0.8, 
        opacity: 0 
      },
      { 
        scale: 1, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.5,
        ease: 'power2.out'
      }
    );
  }, [filteredProjects]);

  const handleTilt = (e, cardElement) => {
    if (window.innerWidth <= 768) return;
    
    const card = cardElement;
    const cardBounds = card.getBoundingClientRect();
    const centerX = cardBounds.left + cardBounds.width / 2;
    const centerY = cardBounds.top + cardBounds.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const rotateY = ((mouseX - centerX) / (cardBounds.width / 2)) * 5;
    const rotateX = ((centerY - mouseY) / (cardBounds.height / 2)) * 5;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleTiltExit = (cardElement) => {
    gsap.to(cardElement, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">My Recent <span>Works</span></h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <div className="project-filters">
            {projectFilters.map(filter => (
              <motion.button 
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="projects-grid" ref={projectsRef}>
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id} 
              className="project-card card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              onMouseMove={(e) => handleTilt(e, e.currentTarget)}
              onMouseLeave={(e) => handleTiltExit(e.currentTarget)}
            >
              <div className="project-img">
  <img src={project.image} alt={project.title} />
  <div className="project-overlay">
    <div className="project-tags">
      {project.category.map(cat => (
        <span key={cat} className="project-tag">
          {projectFilters.find(f => f.id === cat)?.name}
        </span>
      ))}
    </div>
    <motion.a 
      href={project.url || "#"} 
      className="project-link"
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fas fa-external-link-alt"></i>
    </motion.a>
  </div>
</div>

              <div className="project-info">
                <h3>
                  {project.title}
                  <span> | </span>
                  <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>{project.techStack || 'No tech stack'}</span>
                </h3>
                <p>{project.description}</p>
                <p className="team-size"><strong>Team size:</strong> {project.teamSize || 'Not specified'}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <AnimatedSection delay={0.1}>
          <div className="see-more-container">
            <Link to="/allprojects" className="see-more-btn">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <text style={{color:'#000'}}>See More Projects</text>
                <i style={{color:'#000'}} className="fas fa-arrow-right"></i>
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects; 