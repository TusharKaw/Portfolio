import React from 'react';

// Section heading with the short beige underline.
// Wrap the highlighted word in <span>: <SectionTitle>My <span>Skills</span></SectionTitle>
// Pass `center` to center the underline under the title.
const SectionTitle = ({ children, center = false, className = '' }) => (
  <h2
    className={`relative mb-8 inline-block text-[2rem] font-bold text-ink md:text-[2.5rem] [&_span]:text-beige after:absolute after:-bottom-[15px] after:h-[3px] after:w-[70px] after:bg-beige after:shadow-[0_0_100px_#c2a474] after:content-[''] ${center ? 'after:left-1/2 after:-translate-x-1/2' : 'after:left-0'} ${className}`}
  >
    {children}
  </h2>
);

export default SectionTitle;
