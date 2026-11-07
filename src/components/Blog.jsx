import React from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import blog1 from '../assets/blogs/blog1.png';
import blog2 from '../assets/blogs/blog2.avif';
import blog3 from '../assets/blogs/blog3.jpg';
import blog4 from '../assets/blogs/blog4.jpg';
import blog5 from '../assets/blogs/blog5.png';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Create a High-Performance Team',
      date: 'June 22, 2025',
      excerpt: 'Learn how to build a motivated, aligned, and results-driven project team that consistently delivers.',
      imageUrl: blog4,
      tags: ['Team Building', 'Leadership', 'Collaboration'],
      url: '/blog/high-performance-project-teams'
    },
    {
      id: 2,
      title: 'Agile vs. Waterfall',
      date: 'June 25, 2025',
      excerpt: 'Explore the differences b/w Agile & Waterfall project management methodologies & when to use each.',
      imageUrl: blog5,
      tags: ['Agile', 'Waterfall', 'Methodologies'],
      url: '/blog/agile-vs-waterfall'
    },
    {
      id: 3,
      title: 'The Guide to Risk Management',
      date: 'June 20, 2025',
      excerpt: 'Identify, analyze & mitigate risks with this complete guide to risk management in project execution.',
      imageUrl: blog3,
      tags: ['Risk Management', 'Project Planning', 'Execution'],
      url: '/blog/project-risk-management-guide'
    },
    {
      id: 4,
      title: 'Best Project Management Tools',
      date: 'June 16, 2025',
      excerpt: 'Best project management tools for workflows, improving collaboration, and boost productivity.',
      imageUrl: blog2,
      tags: ['Jira', 'Productivity'],
      url: '/blog/advanced-css-techniques'
    },
    {
      id: 5,
      title: 'Manage Remote Teams Effectively',
      date: 'June 15, 2024',
      excerpt: 'Remote work is here to stay. Learn best practices for managing distributed teams successfully.',
      imageUrl: blog1,
      tags: ['Team Management', 'Co-ordination', 'Productivity'],
      url: '/blog/manage-remote-project-teams-effectively'
    },
    
  ];

  React.useEffect(() => {
    document.title = "Blogs | Tushar Kaw - Project & Operations Manager";
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://tusharkaw.netlify.app/blogs');
    }
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Read insights and articles on Project Management, Agile methodologies, remote team leadership, and risk mitigation strategies by Tushar Kaw.');
    }
  }, []);

  return (
    <section id="blog" className="bg-black py-10 text-center">
      <AnimatedSection>
        <SectionTitle>Blogs</SectionTitle>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {blogPosts.map((post) => (
          <AnimatedSection key={post.id}>
            <motion.div
              className="group overflow-hidden rounded-[15px] border border-beige bg-panel text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[250px] w-full overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.2]"
                />
                <a
                  href={post.url}
                  aria-label={post.title}
                  className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <div className="flex flex-wrap gap-2.5">
                    {post.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-beige px-3 py-1 text-[0.8rem] text-ink">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
              <div className="p-6">
                <span className="mb-2.5 block text-[0.9rem] text-muted">{post.date}</span>
                <h3 className="mb-4 text-[1.2rem] font-semibold text-ink sm:text-[1.4rem]">{post.title}</h3>
                <p className="mb-5 text-[0.95rem] leading-relaxed text-muted">{post.excerpt}</p>
                <a
                  href={post.url}
                  className="relative inline-block font-medium text-muted after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-beige after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Blog;
