import React from 'react';
import SectionTitle from './SectionTitle';

// Card colour themes: solid background (80% on hover), text colour, and icon/description colours
const themes = {
  gold:  { card: 'bg-amber-500 hover:bg-amber-400 text-white', icon: 'text-white', desc: 'text-white/85' },
  green: { card: 'bg-emerald-500 hover:bg-emerald-400 text-white',     icon: 'text-white',     desc: 'text-white/85' },
  blue:  { card: 'bg-blue-500 hover:bg-blue-400 text-white',     icon: 'text-white',     desc: 'text-white/85' },
  rose:  { card: 'bg-red-500 hover:bg-red-400 text-white',     icon: 'text-white',     desc: 'text-white/85' },
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Project Lifecycle Management',
      theme: 'gold',
      description: 'End-to-end project lifecycle management using Agile/Scrum methodologies, ensuring on-time and on-budget project delivery with clear documentation and tracking.',
      icon: 'tasks'
    },
    {
      id: 2,
      title: 'Team Leadership',
      theme: 'green',
      description: 'Leading cross-functional teams of developers, designers, and QA specialists to execute complex projects with clear communication and goal alignment.',
      icon: 'users'
    },
    {
      id: 3,
      title: 'Technical Planning',
      theme: 'blue',
      description: 'Creating detailed API documentation, database schema designs, and technical specifications that align business requirements with technical implementation.',
      icon: 'clipboard-list'
    },
    {
      id: 4,
      title: 'Stakeholder Management',
      theme: 'rose',
      description: 'Effective communication with clients and stakeholders to gather requirements, provide updates, and ensure project success with high satisfaction rates.',
      icon: 'comments'
    }
  ];

  return (
    <section id="services" className="bg-black pb-10 sm:py-10 text-center">
      <SectionTitle>My <span>Expertise</span></SectionTitle>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {services.map(service => (
          <div
            key={service.id}
            className={`flex h-full flex-col gap-4 rounded-2xl p-6 text-left transition-colors duration-300 ${themes[service.theme].card}`}
          >
            <div className="flex">
              <i className={`fas fa-${service.icon} text-4xl ${themes[service.theme].icon}`}></i>  
            </div>
            <h3 className="text-3xl font-black">{service.title}</h3>
            <p className={`text-md leading-tight ${themes[service.theme].desc}`}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
