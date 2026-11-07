import React from 'react';
import SectionTitle from './SectionTitle';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Deenbandhu Chhotu Ram University of Science and Technology',
      location: 'Haryana, India',
      period: '2019 - 2023'
    },
    {
      id: 2,
      degree: '12th CBSE (Science - Non Medical)',
      institution: 'Oxford Senior Secondary School',
      location: 'Delhi, India',
      period: '2017 - 2019'
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'State level Project Management | NeVA',
      institution: 'Ministry of Parliamentary Affairs | National Informatics Centre',
      period: '2025',
      certificate: 'https://alison.com/certification/check/64fd7dc8e0'
    },
    {
      id: 2,
      title: 'Agile Project Management',
      institution: 'Alison',
      period: '2025',
      certificate: 'https://alison.com/certification/check/64fd7dc8e0'
    },
    {
      id: 3,
      title: 'Internet & Web Development',
      institution: 'Udemy',
      period: '2022'
    },
  ];

  // Shared class strings, edit here to restyle every card
  const card = "rounded-xl border border-beige bg-panel p-6 text-left";
  const subtitle = "relative mb-[30px] inline-block text-[1.8rem] font-bold text-ink after:absolute after:-bottom-2.5 after:left-1/2 after:h-[3px] after:w-[50px] after:-translate-x-1/2 after:bg-beige after:content-['']";
  const year = "mb-2 inline-block rounded-lg bg-beige px-3 py-1 text-xs font-black whitespace-nowrap text-black";
  const degree = "text-2xl font-bold text-ink";

  return (
    <section id="education" className="bg-black py-10 text-center">
      <SectionTitle>My <span>Education</span></SectionTitle>

      <div className="mt-4 flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start">
        <div className="w-full max-w-[550px] flex-1">
          <h3 className={subtitle}>Academic Education</h3>
          <div className="flex flex-col gap-6">
            {educations.map(edu => (
              <div key={edu.id} className={card}>
                <div className="mb-2 items-start justify-between gap-4">
                  <span className={year}>{edu.period}</span>
                  <h4 className={degree}>{edu.degree}</h4>
                </div>
                <p className="mb-1 text-sm text-beige">{edu.institution}</p>
                <p className="text-xs text-muted">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[550px] flex-1">
          <h3 className={subtitle}>Professional Courses</h3>
          <div className="flex flex-col gap-6">
            {courses.map(course => (
              <div key={course.id} className={card}>
                <div className="mb-2 items-start justify-between gap-4">
                  <span className={year}>{course.period}</span>
                  <h4 className={degree}>{course.title}</h4>
                </div>
                <p className="mb-1 text-sm text-beige">{course.institution}</p>
                {course.certificate && (
                  <a href={course.certificate} target="_blank" rel="noopener noreferrer" className="text-xs font-medium hover:underline">
                    View Certificate &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
