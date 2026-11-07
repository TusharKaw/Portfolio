import React from 'react';
import { Link } from 'react-router-dom';
import ProjectMasonry from './ProjectMasonry';
import SectionTitle from './SectionTitle';

const Projects = () => (
  <section id="projects" className="bg-black py-10 text-center">
    <SectionTitle>My Recent <span>Works</span></SectionTitle>
    <ProjectMasonry clipRows={3} />
    <div className="relative z-[3] mt-6 text-center">
      <Link
        to="/allprojects"
        className="inline-flex items-center gap-2.5 rounded-lg bg-beige px-[30px] py-3 font-semibold text-black"
      >
        See All Projects <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  </section>
);

export default Projects;
