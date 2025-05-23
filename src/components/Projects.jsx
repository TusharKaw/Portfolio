"use client"

import { useState, useRef, useEffect } from "react"
import "./Projects.css"
import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"
import gsap from "gsap"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const projectsRef = useRef(null)

  const projectFilters = [
    { id: "all", name: "All" },
    { id: "web", name: "Web" },
    { id: "games", name: "Games" },
    { id: "blockchain", name: "Blockchain" },
  ]

  const projects = [
    {
      id: 1,
      title: "Bet By Heart",
      description:
        "An interactive online betting platform featuring games like Blackjack, Teen Patti, Chess, Ludo, and Derby. Integrated referral and rewards systems to boost user engagement.",
      category: ["web", "games"],
      image: "/images/project-placeholder-1.jpg",
      url: "http://beta.betbyheart.in/",
    },
    {
      id: 2,
      title: "Royal Chess",
      description:
        "A live interactive online chess game with power-ups, transforming traditional chess into a gamified experience with over 500+ active users within the first month.",
      category: ["web", "games"],
      image: "/images/project-placeholder-2.jpg",
      url: "https://beta.royalchessclub.io/",
    },
    {
      id: 3,
      title: "Private Chat Room",
      description:
        "A personal Discord-like chatroom using the MERN stack, achieving 100% encrypted communication on TOR network with Socket.IO for real-time messaging.",
      category: ["web"],
      image: "/images/project-placeholder-3.jpg",
      url: "https://github.com/TusharKaw/Personal-Chatroom",
    },
    {
      id: 4,
      title: "Find Meet Chat",
      description:
        "A MERN-based dating platform with real-time chat, matchmaking logic, and robust user profiles. Managed sprints and API documentation for faster development.",
      category: ["web"],
      image: "/images/project-placeholder-4.jpg",
      url: "https://github.com/TusharKaw/Find-Meet-Chat_v2",
    },
    {
      id: 5,
      title: "Cardano NFT Marketplace",
      description:
        "A blockchain-based NFT marketplace on the Cardano network, featuring secure wallet integration, NFT minting capabilities, and auction functionality.",
      category: ["blockchain", "web"],
      image: "/images/project-placeholder-5.jpg",
    },
    {
      id: 6,
      title: "Enterprise Network Management",
      description:
        "Deployed MPLS & SD-WAN solutions for major enterprise clients, coordinating with network planning, security, and CX teams for seamless implementation.",
      category: ["web"],
      image: "/images/project-placeholder-6.jpg",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category.includes(activeFilter))

  useEffect(() => {
    // Animate projects when filter changes
    const projectCards = projectsRef.current.querySelectorAll(".project-card")

    gsap.fromTo(
      projectCards,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
    )
  }, [filteredProjects])

  const handleTilt = (e, cardElement) => {
    if (window.innerWidth <= 768) return

    const card = cardElement
    const cardBounds = card.getBoundingClientRect()
    const centerX = cardBounds.left + cardBounds.width / 2
    const centerY = cardBounds.top + cardBounds.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateY = ((mouseX - centerX) / (cardBounds.width / 2)) * 5
    const rotateX = ((centerY - mouseY) / (cardBounds.height / 2)) * 5

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleTiltExit = (cardElement) => {
    gsap.to(cardElement, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    })
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">
            My Recent <span>Works</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="project-filters">
            {projectFilters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
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
          {filteredProjects.map((project) => (
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
                <div className="project-img-placeholder">
                  {project.category.includes("blockchain") && <i className="fas fa-cubes project-icon"></i>}
                  {project.category.includes("games") && !project.category.includes("blockchain") && (
                    <i className="fas fa-gamepad project-icon"></i>
                  )}
                  {project.category.includes("web") &&
                    !project.category.includes("games") &&
                    !project.category.includes("blockchain") && <i className="fas fa-laptop-code project-icon"></i>}
                </div>
                <div className="project-overlay">
                  <div className="project-tags">
                    {project.category.map((cat) => (
                      <span key={cat} className="project-tag">
                        {projectFilters.find((f) => f.id === cat)?.name}
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
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
