import React from 'react';
import SectionTitle from './SectionTitle';
import delhiLogo from '../assets/company/delhi.svg';
import nicLogo from '../assets/company/nic.svg';
import nipponLogo from '../assets/company/nippon.svg';
import abhiwanLogo from '../assets/company/abhiwan.svg';
import airtelLogo from '../assets/company/airtel.svg';
import excitelLogo from '../assets/company/excitel.svg';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Operations Manager',
      company: 'Delhi Legislative Assembly | National Informatics Centre | Nippon Data Systems',
      location: 'Delhi, India',
      period: 'July 2025 - Present',
      responsibilities: [
        'Leading the operational planning & execution of the NeVA (National e-Vidhan Application) project at the Delhi Legislative Assembly, for the digitization of legislative processes in alignment with the Government of India’s Digital India mission.',
        'Coordinating with cross-functional teams including IT developers, legislative staff, and vendor partners to ensure seamless implementation of the e-Vidhan platform.',
        'Facilitating communication between government stakeholders and technical teams, translating complex legislative workflows into user-centric digital interfaces.',
        'Supervised quality assurance and compliance checks to ensure adherence to NIC and MeitY standards for security, accessibility, and data integrity.',
        'Streamlined legislative operations by implementing paperless workflows and real-time document sharing, contributing to a 40% reduction in session preparation time.',
        'Monitoring performance metrics and user feedback to iterate on workflows and platform features, leading to a 90% satisfaction rate among end-users.'
      ],
      logos: [delhiLogo, nicLogo, nipponLogo]
    },
    {
      id: 2,
      position: 'Project Manager',
      company: 'Abhiwan Technology Pvt Ltd',
      location: 'Noida, India',
      period: 'March 2024 - July 2025',
      responsibilities: [
        'Leading and managing teams of developers and designers to successfully deliver 10+ projects, including web apps, games, VR apps, and blockchain-based projects.',
        'Overseeing project lifecycles from planning to deployment, ensuring on-time and on-budget execution.',
        'Communicating technical requirements effectively with stakeholders and leading the creation of detailed API documentation and database schema designs, contributing to a 95% client satisfaction rate.',
        'Contributing to increasing user engagement by 30% on Cardano blockchain based apps and NFT based games.',
        'Collaborated with cross-functional teams to lead project execution, manage timelines, and ensure high-quality deliverables.',
        'Delivering comprehensive client solutions across Risk Management and QA domains, aligning scope, resources, and timelines with Agile/Scrum methodologies.'
      ],
      logos: [abhiwanLogo]
    },
    {
      id: 3,
      position: 'Project Manager Intern',
      company: 'Bharti Airtel',
      location: 'Gurugram, Haryana',
      period: 'February 2023 - June 2023',
      responsibilities: [
        'Deployed MPLS & SD-WAN for B2B enterprise clients, including IOCL and Maruti Suzuki.',
        'Coordinated with network planning, security, and CX teams to ensure seamless deployment accelerating project timelines by 20%.',
        'Implemented client feedback loops using daily logs and reporting systems, enhancing SLA adherence by 15%.',
        'Integrated productivity tools like Jira into project workflows, leading to a 15% increase in team efficiency.'
      ],
      logos: [airtelLogo]
    },
    {
      id: 4,
      position: 'Network Engineer',
      company: 'Excitel Broadbands',
      location: 'Delhi, India',
      period: 'August 2022 - September 2022',
      responsibilities: [
        'Designed and optimized PAN & LAN infrastructures, contributing to a 20% improvement in network stability of internal systems.',
        'Assisted in planning Adhoc networks and enhanced router configurations, resulting in 15% better coverage and reduced latency.',
        'Supported network topology analysis and optimization, helping improve bandwidth distribution efficiency by 25%.',
      ],
      logos: [excitelLogo]
    }
  ];

  return (
    <section id="experience" className="bg-black py-10 text-center">
      <SectionTitle>My <span>Experience</span></SectionTitle>

      <div className="flex flex-col gap-8 text-left">
        {experiences.map((exp, index) => (
          // One full-width row per role: 2/5 logo panel + 3/5 text, alternating sides
          <article
            key={exp.id}
            className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-[#0d0a05] md:min-h-[340px] ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-panel md:h-auto md:flex-[0_0_40%]">
              {/* Blurred, enlarged logo fills the panel edge to edge */}
              <div
                aria-hidden="true"
                className="absolute -inset-10 scale-[1.2] bg-cover bg-center opacity-55 blur-[40px] saturate-[1.3]"
                style={{ backgroundImage: `url(${exp.logos[0]})` }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.55)_100%)]" />
              <div className="relative z-[1] flex flex-wrap items-center justify-center gap-6 p-8">
                {exp.logos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt=""
                    className={`rounded-2xl ${exp.logos.length > 1 ? 'h-[72px] w-[72px] md:h-[88px] md:w-[88px]' : 'h-24 w-24 md:h-[120px] md:w-[120px]'}`}
                  />
                ))}
              </div>
            </div>

            <div className="p-4 md:flex-[0_0_60%] md:p-10">
              <span className="mb-2 inline-block rounded-lg bg-beige px-3.5 py-1 text-xs font-black text-black">{exp.period}</span>
              <h3 className="mb-1 text-3xl font-black text-white md:text-4xl">{exp.position}</h3>
              <h4 className="mb-1 text-sm font-medium text-beige">{exp.company}</h4>
              <h5 className="mb-4 text-sm text-[#9a9a9a]"><i className="fas fa-map-marker-alt mr-1"></i> {exp.location}</h5>
              <ul className="m-0 list-none p-0">
                {exp.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="relative mb-2 pl-4 text-sm text-muted before:absolute before:top-[0.65em] before:left-0 before:h-[7px] before:w-[7px] before:rounded-full before:bg-beige before:content-['']"
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
