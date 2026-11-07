import React, { useEffect, useRef } from 'react';
import ParticleBackground from './ParticleBackground';
import ScrollDown from './ScrollDown';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import profileImg from '../assets/tushar.jpg';
import socials from '../data/socials';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      contentRef.current.querySelectorAll('[data-reveal]'),
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8,
        ease: 'power3.out'
      }
    ).fromTo(
      imageRef.current,
      { 
        scale: 1.05, 
        opacity: 0 
      },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1,
        ease: 'power3.out'
      },
      '-=0.4'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative ml-[calc(50%-50vw)] flex w-screen flex-col items-stretch overflow-hidden bg-black pb-[100px] lg:min-h-[calc(100vh-80px)] lg:flex-row lg:items-center lg:pt-10"
    >
      {/* Image: on top (mobile) / full-height right 2/5 (desktop), fading into the background */}
      <div
        ref={imageRef}
        className="pointer-events-none relative z-[1] h-[50vh] min-h-[300px] w-full sm:h-[60vh] sm:min-h-[360px] lg:absolute lg:top-0 lg:right-0 lg:h-full lg:min-h-0 lg:w-2/5"
      >
        <img src={profileImg} alt="Tushar Kaw" className="block h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#000_0%,rgba(0,0,0,0.75)_22%,rgba(0,0,0,0)_55%)] lg:bg-[linear-gradient(to_right,#000_0%,rgba(0,0,0,0.7)_20%,rgba(0,0,0,0)_55%),linear-gradient(to_top,#000_0%,rgba(0,0,0,0)_22%)]" />
      </div>

      <div className="relative z-[2] mx-auto -mt-20 flex w-full max-w-[1400px] items-center text-center lg:text-left px-5 lg:mt-0 lg:px-[30px]">
        <div ref={contentRef} className="relative z-[2] max-w-full flex-auto lg:max-w-[60%] lg:flex-[0_0_60%] lg:pr-10">
          <h2 data-reveal className="mb-2 text-md sm:text-lg font-bold">Hello, I am Tushar Kaw 👋🏻</h2>
          <h1 data-reveal className="mb-4 text-2xl leading-tight font-black sm:text-3xl lg:text-5xl">
            Project & Operation <span className="text-beige">Manager</span>
          </h1>
          <p data-reveal className="mb-4 text-md text-muted">
            Tech-savvy Project & Operations Manager with a track record of leading cross-functional teams to deliver high-impact Web, Gaming, Apps & Blockchain projects. Skilled in Agile & Scrum, driving efficiency and user engagement.
          </p>

          <div data-reveal className="mb-4 flex flex-wrap justify-center gap-5 lg:justify-start">
            <motion.a
              href="/Tushar_Kaw_Resume.pdf"
              download="Tushar_Kaw_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-beige px-6 py-2 font-semibold text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
            <motion.a
              href="/blogs"
              className="inline-block rounded-lg border-2 border-beige px-6 py-2 font-semibold text-ink transition-colors hover:bg-beige hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read My Blogs
            </motion.a>
          </div>

          <div data-reveal className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3.5 lg:justify-start lg:gap-x-8">
            {socials.map((s) => (
              <motion.a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-2xl text-[#9a9a9a] transition-colors hover:text-beige"
                title={s.label}
                aria-label={s.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={s.icon}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <ParticleBackground />
      <ScrollDown />
    </section>
  );
};

export default Hero;
