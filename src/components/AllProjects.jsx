import React, { useState, useRef, useEffect } from 'react';
import './AllProjects.css';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import gsap from 'gsap';
import bankopolyImage from '../assets/bankopoly.avif';
import betbyheartImage from '../assets/betbyheart.jpg';
import royalChessImage from '../assets/royalchess.jpg';
import nachosNFTImage from '../assets/nachos.jpg';
import chatroomImage from '../assets/chatroom.png';
import yourcrush from '../assets/yourcrush.svg';
import imagine from '../assets/imagine.png';
import prodevtool from '../assets/prodevtool.svg';
import voxelImage from '../assets/voxel.png';
import ActiveShooter from '../assets/Activeshooter.jpg';
import Shivshiksha from '../assets/shivshiksha.jpg';
import Barrelblast from '../assets/barrelblast.jpg';
import findmeetchat from '../assets/findmeetchat.jpg';
import connect from '../assets/connect.webp';
import aiims from '../assets/aiims.jpeg';
import metaschool from '../assets/metaschool.png';
import videosurf from '../assets/videosurf.png';
import nevacms from '../assets/nevacms.png';
import nevaebook from '../assets/nevaebook.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);

  const projectFilters = [
    { id: 'all', name: 'All' },
    { id: 'websites', name: 'Websites' },
    { id: 'games', name: 'Games' },
    { id: 'apps', name: 'Apps' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'ai', name: 'AI' }
  ];

  const projects = [
    {
      id: 1,
      title: 'National eVidhan Application',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>C# Dotnet</text>,
      description: 'One Nation One Application, an online platform built for Delhi Legislative Assembly for the digitization of Legislative Proceedings and Bills.',
      teamSize: '16',
      category: ['websites', 'apps'],
      image: nevacms,
      url: 'https://cms.neva.gov.in/'
    },
    {
      id: 2,
      title: 'National eVidhan e-book',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>C# Dotnet</text>,
      description: 'One Nation One Application, an online platform built to store and display all the Legislative proceedings and bills, Built for all States & UTs of India.',
      teamSize: '16',
      category: ['websites', 'apps'],
      image: nevaebook,
      url: 'https://ebook.neva.gov.in/'
    },
    {
      id: 3,
      title: 'YourCrush.ai',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Next.js & Node.js</text>,
      description: 'An AI platform where user can create & chat with various AI companions.',
      teamSize: '4',
      category: ['ai', 'websites'],
      image: yourcrush,
      url: 'https://yourcrush.ai/'
    },
    {
      id: 4,
      title: 'Imagine Labs',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Next.js & Node.js</text>,
      description: 'An AI platform where users can create Images and Videos using Prompts.',
      teamSize: '4',
      category: ['ai', 'websites'],
      image: imagine,
      url: 'https://imagine.yourcrush.ai/'
    },
    {
      id: 5,
      title: 'ProDevTool',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Next.js & Node.js</text>,
      description: 'An all-in-one utility tool platform where users can find and use several tools to boost their productivity.',
      teamSize: '4',
      category: ['websites'],
      image: prodevtool,
      url: 'https://prodevtool.com'
    },
    {
      id: 6,
      title: 'Bankopoly.io',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Unity & Node.js</text>,
      description: 'A blockchain-based NFT WebGL Game on the Cardano network, featuring secure wallet connection, NFT skins, and multiplayer/vsBot gameplays.',
      teamSize: '5',
      category: ['games', 'blockchain'],
      image: bankopolyImage,
      url: 'https://bankopoly.io/'
    },
    {
      id: 7,
      title: 'Active Shooter',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Unreal Engine</text>,
      description: 'A VR training simulation developed for Abu Dhabi Police, integrating KAT VR, Forcetube Provolver, and MetaHumans for an immersive training experience.',
      teamSize: '5',
      category: ['games'],
      image: ActiveShooter,
      url: 'https://www.artstation.com/artwork/lGXm4V'
    },
    {
      id: 8,
      title: 'NachosNFT',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>React & Node.js</text>,
      description: 'A unique web-based platform built on the Cardano blockchain, centered around upgradable NFTs and competitive gameplay mechanics.',
      teamSize: '4',
      category: ['websites', 'blockchain'],
      image: nachosNFTImage,
      url: 'https://www.nachoxyz.com/'
    },
    {
      id: 9,
      title: 'Bet By Heart',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>React & Node.js</text>,
      description: 'An interactive online betting platform featuring games like Blackjack, Teen Patti, Chess, Ludo, and Derby. Integrated referral and rewards systems to boost user engagement.',
      teamSize: '5',
      category: ['websites'],
      image: betbyheartImage,
      url: 'https://dev-game.abhiwandemos.com/teenpatti/home'
    },
    {
      id: 10,
      title: 'Video Surfer',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>React & Node.js</text>,
      description: 'A video surfing website, where most popular videos are dropped via Admin panel, using a Bulk videos importer mechanics, allowing the website to attain 100s of videos at once.',
      teamSize: '2',
      category: ['websites'],
      image: videosurf,
      url: 'https://github.com/Mohityadav94161/video_surfing'
    },
    {
      id: 11,
      title: 'Royal Chess',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>MERN & Native</text>,
      description: 'A live interactive online chess game with power-ups, transforming traditional chess into a gamified experience with over 500+ active users within the first month.',
      teamSize: '4',
      category: ['websites', 'games', 'blockchain'],
      image: royalChessImage,
      url: 'https://beta.royalchessclub.io/'
    },
    {
      id: 12,
      title: 'Barrel Blast',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Phaser.js</text>,
      description: 'Barrel Blast, a fast-paced, web-based arcade game built using Phaser.js, designed to offer quick and addictive gameplay.',
      teamSize: '2',
      category: ['websites', 'games'],
      image: Barrelblast,
      url: 'https://barrel-test.vercel.app/'
    },
    {
      id: 13,
      title: 'Unbounded Racing',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Unity & Node.js</text>,
      description: 'A voxel art styled racing game, with PvP and vsBots mechanics, game login based on Cardano blockchain wallets.',
      teamSize: '12',
      category: ['games', 'blockchain'],
      image: voxelImage,
      url: 'https://voxel-game.abhiwandemos.com/'
    },
    {
      id: 14,
      title: 'Shiv Shiksha',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>React & Node.js</text>,
      description: 'A website for a charitable organization focused on supporting underprivileged children through education, healthcare, and community programs.',
      teamSize: '2',
      category: ['websites'],
      image: Shivshiksha,
      url: 'https://shivshiksha.abhiwandemos.com/'
    },
    {
      id: 15,
      title: 'Find Meet Chat',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Next.js & Node.js</text>,
      description: 'A Smash or Pass based cool web-app, where users either Smash or Pass you based on your Images / Portfolio, smashed ones can chat as well.',
      teamSize: '2',
      category: ['websites', 'apps'],
      image: findmeetchat,
      url: 'https://github.com/TusharKaw/Find-Meet-Chat_v2'
    },
    {
      id: 16,
      title: 'Connect',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Next.js & Node.js</text>,
      description: 'A web-app for Artists, Singers, Musicians, Actors, Models, etc, where they can create their profiles and connect with Industries to get opportunities.',
      teamSize: '2',
      category: ['websites', 'apps'],
      image: connect,
      url: 'https://github.com/TusharKaw/Connect'
    },
    {
      id: 17,
      title: 'ADHD Diagnostic Game - AIIMS',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Unreal Engine</text>,
      description: 'A 2D game created for AIIMS Delhi featuring 10 activities designed by doctors for children with ADHD. The game tracks response time, patterns, and behavior.',
      teamSize: '6',
      category: ['games', 'apps'],
      image: aiims,
      url: 'https://googleplay.com/store/apps'
    },
    {
      id: 18,
      title: 'Meta School VR',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>Unreal Engine</text>,
      description: 'A VR based Chemistry lab where users can perform Chemistry activities inside a virtual 3D lab, and see their results before performing in real world.',
      teamSize: '7',
      category: ['apps'],
      image: metaschool,
      url: 'https://googleplay.com/store/apps'
    },
    {
      id: 19,
      title: 'Personal Chatroom',
      techStack: <text style={{ color: 'var(--primary-beige)' }}>React & Node.js</text>,
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
          <h2 className="section-title">My All Time <span>Works</span></h2>
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
      </div>
    </section>
  );
};

export default Projects; 