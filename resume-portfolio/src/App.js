import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  
  // Create refs for each section for smooth scrolling
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Handle scroll to update active section
  const handleScroll = () => {
    // Determine which section is currently in view
    const sections = [
      { id: 'hero', ref: heroRef },
      { id: 'about', ref: aboutRef },
      { id: 'experience', ref: experienceRef },
      { id: 'projects', ref: projectsRef },
      { id: 'skills', ref: skillsRef },
      { id: 'education', ref: educationRef },
      { id: 'achievements', ref: achievementsRef },
      { id: 'contact', ref: contactRef }
    ];
    
    // Find the section that's most in view
    for (const section of sections) {
      if (section.ref.current) {
        const rect = section.ref.current.getBoundingClientRect();
        // If section is in viewport (with some buffer)
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };
  
  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      hero: heroRef,
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      skills: skillsRef,
      education: educationRef,
      achievements: achievementsRef,
      contact: contactRef
    };
    
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // For development, use the hardcoded data
        const mockData = {
          name: "TUSHAR KAW",
          headline: "Jr. Project Manager",
          contact: {
            email: "tusharkaw64@gmail.com",
            phone: "8383826599",
            github: "github.com/TusharKaw",
            linkedin: "linkedin.com/in/tushar-kaw"
          },
          experience: [
            {
              company: "Abhiwan Technology Pvt. Ltd.",
              position: "Jr. Project Manager",
              period: "Mar 2024 - Present",
              responsibilities: [
                "Lead and coordinated a cross-functional team of developers and designers to successfully deliver 10+ projects, including web apps, mobile apps, VR games, and websites using MERN stack, React Native, Unreal Engine, Unity, and 3ds Max.",
                "Oversaw project lifecycles from initiation to delivery, ensuring on-time and on-budget execution while maintaining high UX and performance standards.",
                "Communicated technical requirements effectively with stakeholders and led the creation of detailed API documentation and database schema designs, contributing to a 95% client satisfaction rate and improved cross-team clarity.",
                "Contributed to increasing user engagement by 30% on Cardano blockchain-based apps and games.",
                "Delivered comprehensive client solutions across Risk Management and Quality Assurance domains."
              ],
              gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTVyZG1wamVkaXNhYWgxZDQ1M2N5OWJmeW1maXUzamxtZ25rMjl4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
            },
            {
              company: "Bharti Airtel",
              position: "Project Manager Intern",
              period: "Feb 2023 - Jun 2023",
              responsibilities: [
                "Managed MPLS & SD-WAN deployment for enterprise clients, including IOCL and Maruti Suzuki.",
                "Collaborated cross-departmentally with network planning, cybersecurity, and CX teams to drive timely project delivery.",
                "Reduced service deployment time by 20% through process automation and tool optimization.",
                "Implemented client feedback loops using daily logs and reporting systems, enhancing SLA adherence by 15%.",
                "Integrated productivity tools to streamline project workflows and increase individual output."
              ],
              gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTE3ZWJoeGI0M3BrNHZ6MTlqZHAwaXJyd290NmhmNm85amkxZGlxOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2K5jinAlChzQ2y/giphy.gif"
            },
            {
              company: "Excitel Broadbands",
              position: "Network Engineer Intern",
              period: "Aug 2022 - Sep 2022",
              responsibilities: [
                "Gained hands-on experience in designing and optimizing PAN & LAN infrastructure.",
                "Assisted in planning wireless Adhoc networks and improving router configurations for better coverage.",
                "Supported network topology analysis and optimization initiatives to enhance bandwidth distribution."
              ],
              gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGY5c29qM2h4bmhvbDJ1YmVzcGhqYWY1Y280dGJ1Mmxnc3lkN25obCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif"
            }
          ],
          projects: [
            {
              title: "Dating Web-App",
              description: "Developed a MERN Stack-based dating app featuring profile matchmaking and real-time private chat.",
              details: "Integrated MongoDB for data persistence and Express.js for RESTful API communication.",
              github: "https://github.com/TusharKaw/FindMeetChat",
              gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2J5Y2ViMGN0MWlhYmVmeWdrYTRtaDQxeW81NzhjajM2czFpemJkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pOEbLRT4SwD35IELiQ/giphy.gif"
            },
            {
              title: "First Person Shooter",
              description: "Developed a VR shooting game with a team of developer & designer to make a real 1st person shooter in a real life environment based in Abu Dhabi, UAE",
              tech: "Unreal Engine 5, Maya",
              github: "https://github.com/TusharKaw/First-Person-Shooter",
              gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWg1eTA1MGg3bnp3cHVtaGh4NmQ5Y3MyNDc0Ym9hM2YzcHRqaGEwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BGIqWh2R1fi6JDa/giphy.gif"
            },
            {
              title: "Private Chat Room",
              description: "Created a private chatroom and hosted on the TOR server",
              tech: "HTML, CSS, Javascript",
              github: "https://github.com/TusharKaw/Kings-Chatroom",
              gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmd6ZG5iYnV5Z3ZxNWEwbTMxcDBncGw1cmU1NzVtMWFqbTRuMmJqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPrc2ngFZ6BTyww/giphy.gif"
            }
          ],
          education: {
            university: "Deenbandhu Chhotu Ram University of Science & Technology",
            degree: "B.TECH | Electronics and Communication Engineering",
            period: "Aug 2019 - Aug 2023",
            gpa: "7.75",
            gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnVma3htYW9hZWVoNHR3OHI4bjF3cThreHZhYWV5bWYwY3dkanFzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46CyJmS9KUbID7tK/giphy.gif"
          },
          skills: {
            management: ["Agile", "Scrum Master", "Strategic Planning", "Time Management", "Resource Management", "Stakeholder Communication", "Quality Assurance", "Business Development"],
            programming: ["Node.js", "JavaScript", "HTML5", "CSS3", "C++", "MongoDB", "REST APIs"],
            tools: ["React.js", "Node.js", "Express.js", "Jira", "Trello", "Figma", "Git/GitHub", "Postman", "Swagger", "VS Code", "Excel", "PowerPoint", "Unity", "Unreal Engine 5"],
            gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJhampxdHh4eHM5enoxZ3d1NWI2N3JtMDYzYTE3Mmk0Y3I1cW50OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
          },
          achievements: [
            "Led as Management Staff Coordinator at Technova University Fest.",
            "Completed \"Internet & Web Development\" Certification from Udemy.",
            "Solved 200+ Data Structures & Algorithms problems on platforms like LeetCode and GeeksforGeeks."
          ]
        };

        // Set the data
        setResumeData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch resume data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="app">
      <Header 
        name={resumeData.name}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      
      <main className="main-content">
        <section id="hero" ref={heroRef} className="section hero-section">
          <Hero data={resumeData} />
        </section>
        
        <section id="about" ref={aboutRef} className="section about-section">
          <About />
        </section>
        
        <section id="experience" ref={experienceRef} className="section experience-section">
          <Experience experience={resumeData.experience} />
        </section>
        
        <section id="projects" ref={projectsRef} className="section projects-section">
          <Projects projects={resumeData.projects} />
        </section>
        
        <section id="skills" ref={skillsRef} className="section skills-section">
          <Skills skills={resumeData.skills} />
        </section>
        
        <section id="education" ref={educationRef} className="section education-section">
          <Education education={resumeData.education} />
        </section>
        
        <section id="achievements" ref={achievementsRef} className="section achievements-section">
          <Achievements achievements={resumeData.achievements} />
        </section>
        
        <section id="contact" ref={contactRef} className="section contact-section">
          <Contact contact={resumeData.contact} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
