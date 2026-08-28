import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import AllProjects from './components/AllProjects'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating page loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
    },
  };

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-content">
          <div className="loader-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h2>Tushar<span>Kaw</span></h2>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  const HomePage = () => {
    useEffect(() => {
      document.title = "Tushar Kaw | Project & Operations Manager";
      
      // Update canonical link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', 'https://tusharkaw.netlify.app/');
      }
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Portfolio of Tushar Kaw, a Project Manager with hands-on experience in Agile, Web Development, Unity game development, and blockchain-based platforms. Projects include MERN stack apps, Web3 games, and Unreal-based simulations.');
      }
    }, []);

    return (
      <>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </>
    );
  };

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route 
            path="/" 
            element={
              <motion.div
                className="app"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <HomePage />
              </motion.div>
            } 
          />
          <Route 
            path="/allprojects" 
            element={
              <motion.div
                className="app"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <AllProjects />
              </motion.div>
            } 
          />
          <Route 
            path="/blogs" 
            element={
              <motion.div
                className="app"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <Blog />
              </motion.div>
            } 
          />
          <Route 
            path="/blog/:slug" 
            element={
              <motion.div
                className="app"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <BlogPost />
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  )
}

export default App
