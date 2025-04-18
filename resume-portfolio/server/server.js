const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/resume-portfolio')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error:', err));

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Tushar Kaw\'s Resume API' });
});

app.get('/api/resume-data', (req, res) => {
  const resumeData = {
    name: "TUSHAR KAW",
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
        ]
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
        ]
      },
      {
        company: "Excitel Broadbands",
        position: "Network Engineer Intern",
        period: "Aug 2022 - Sep 2022",
        responsibilities: [
          "Gained hands-on experience in designing and optimizing PAN & LAN infrastructure.",
          "Assisted in planning wireless Adhoc networks and improving router configurations for better coverage.",
          "Supported network topology analysis and optimization initiatives to enhance bandwidth distribution."
        ]
      }
    ],
    projects: [
      {
        title: "Dating Web-App",
        description: "Developed a MERN Stack-based dating app featuring profile matchmaking and real-time private chat.",
        details: "Integrated MongoDB for data persistence and Express.js for RESTful API communication.",
        github: "https://github.com/TusharKaw/FindMeetChat"
      },
      {
        title: "First Person Shooter",
        description: "Developed a VR shooting game with a team of developer & designer to make a real 1st person shooter in a real life environment based in Abu Dhabi, UAE",
        tech: "Unreal Engine 5, Maya",
        github: "https://github.com/TusharKaw/First-Person-Shooter"
      },
      {
        title: "Private Chat Room",
        description: "Created a private chatroom and hosted on the TOR server",
        tech: "HTML, CSS, Javascript",
        github: "https://github.com/TusharKaw/Kings-Chatroom"
      }
    ],
    education: {
      university: "Deenbandhu Chhotu Ram University of Science & Technology",
      degree: "B.TECH | Electronics and Communication Engineering",
      period: "Aug 2019 - Aug 2023",
      gpa: "7.75"
    },
    skills: {
      management: ["Agile", "Scrum Master", "Strategic Planning", "Time Management", "Resource Management", "Stakeholder Communication", "Quality Assurance", "Business Development"],
      programming: ["Node.js", "JavaScript", "HTML5", "CSS3", "C++", "MongoDB", "REST APIs"],
      tools: ["React.js", "Node.js", "Express.js", "Jira", "Trello", "Figma", "Git/GitHub", "Postman", "Swagger", "VS Code", "Excel", "PowerPoint", "Unity", "Unreal Engine 5"]
    },
    achievements: [
      "Led as Management Staff Coordinator at Technova University Fest.",
      "Completed \"Internet & Web Development\" Certification from Udemy.",
      "Solved 200+ Data Structures & Algorithms problems on platforms like LeetCode and GeeksforGeeks."
    ]
  };
  
  res.json(resumeData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 