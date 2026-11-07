import React, { useEffect } from 'react';
import ProjectMasonry from './ProjectMasonry';
import SectionTitle from './SectionTitle';

const AllProjects = () => {
  useEffect(() => {
    document.title = "All Projects | Tushar Kaw - Project & Operations Manager";

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://tusharkaw.netlify.app/allprojects');
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore all projects managed and delivered by Tushar Kaw, ranging from Web development (MERN/Next.js) to VR simulations, Unity, and blockchain-based games.');
    }
  }, []);

  return (
    <section id="projects" className="bg-black py-10 text-center">
      <SectionTitle>My All Time <span>Works</span></SectionTitle>
      <ProjectMasonry />
    </section>
  );
};

export default AllProjects;
