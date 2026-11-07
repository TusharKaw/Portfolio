import React from 'react';
import socials from '../data/socials';

// Column heading with a short underline
const heading = "relative mb-5 text-[1.2rem] font-bold text-ink after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:w-[30px] after:bg-beige after:content-['']";
const link = "text-[0.95rem] text-muted transition-all duration-300 hover:pl-1 hover:text-beige";
const contactRow = "mb-4 flex items-center gap-2.5 text-[0.95rem] text-muted";
const socialBtn = "flex h-10 w-10 items-center justify-center rounded-full bg-beige text-panel transition-all duration-300 hover:-translate-y-[3px]";

const Footer = () => {
  return (
    <footer className="border-t border-beige bg-panel pt-10">
      <div className="mx-auto w-full max-w-[1400px] px-4">
        <div className="mb-2.5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
          <div>
            <h2 className="text-[1.8rem] font-bold text-ink">Tushar<span className="text-beige">Kaw</span></h2>
            <p className="text-muted">Project Manager</p>
          </div>

          <div>
            <h3 className={heading}>Quick Links</h3>
            <ul className="list-none p-0">
              <li className="mb-3"><a href="/" className={link}>Home</a></li>
              <li className="mb-3"><a href="/allprojects" className={link}>Projects</a></li>
              <li className="mb-3"><a href="/blogs" className={link}>Blogs</a></li>
            </ul>
          </div>

          <div>
            <h3 className={heading}>Contact Info</h3>
            <p className={contactRow}><i className="fas fa-envelope text-beige"></i> tusharkaw64@gmail.com</p>
            <p className={contactRow}><i className="fas fa-phone text-beige"></i> +91 8383826599</p>
            <p className={contactRow}><i className="fas fa-map-marker-alt text-beige"></i> Delhi, India</p>
          </div>

          <div>
            <h3 className={heading}>Follow Me</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {socials.map((s) => (
                <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" className={socialBtn} aria-label={s.label} title={s.label}>
                  <i className={s.icon}></i>
                </a>
              ))}
              <a href="mailto:tusharkaw64@gmail.com" className={socialBtn} aria-label="Email" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-beige py-6 text-center">
          <p className="text-[0.9rem] text-muted">&copy; {new Date().getFullYear()} Tushar Kaw. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
