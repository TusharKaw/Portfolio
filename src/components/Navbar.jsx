import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const linkClass = 'text-lg font-medium text-ink transition-colors hover:text-beige lg:text-base';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname === '/allprojects';
  const isBlogsPage = location.pathname === '/blogs' || location.pathname.startsWith('/blog/');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Hamburger bar: the three bars morph into an X when open
  const bar = 'h-[3px] w-full rounded-full bg-ink transition-all duration-300';

  return (
    <nav className="sticky top-0 left-0 z-[1000] w-full bg-panel py-4 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4">
        <Link to="/">
          <h2 className="m-0 text-lg sm:text-2xl font-bold">Tushar<span className="text-beige">Kaw</span></h2>
        </Link>

        {/* Mobile: drops down from under the bar and is only as tall as the links. Desktop: inline. */}
        <div
          className={`absolute inset-x-0 top-full -z-10 border-b border-beige/30 bg-panel shadow-[0_12px_24px_rgba(0,0,0,0.5)] transition-all duration-300 lg:static lg:z-auto lg:translate-y-0 lg:border-0 lg:bg-transparent lg:opacity-100 lg:shadow-none lg:pointer-events-auto ${isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'}`}
        >
          <ul className="m-0 flex w-full list-none flex-col py-4 text-center lg:w-auto lg:flex-row lg:items-center lg:p-0">
            {isHomePage ? (
              <>
                <li className="my-4 lg:my-0 lg:ml-8"><a href="#home" onClick={closeMenu} className={linkClass}>Home</a></li>
                <li className="my-4 lg:my-0 lg:ml-8"><a href="/allprojects" className={linkClass}>Projects</a></li>
                <li className="my-4 lg:my-0 lg:ml-8"><a href="/blogs" className={linkClass}>Blogs</a></li>
                <li className="my-4 lg:my-0 lg:ml-8"><a href="#contact" onClick={closeMenu} className={linkClass}>Contact</a></li>
              </>
            ) : (isProjectsPage || isBlogsPage) ? (
              <>
                <li className="my-4 lg:my-0 lg:ml-8"><Link to="/" onClick={closeMenu} className={linkClass}>Home</Link></li>
                <li className="my-4 lg:my-0 lg:ml-8"><a href="/allprojects" className={linkClass}>Projects</a></li>
                <li className="my-4 lg:my-0 lg:ml-8"><a href="/blogs" className={linkClass}>Blogs</a></li>
                <li className="my-4 lg:my-0 lg:ml-8"><a href="/#contact" onClick={closeMenu} className={linkClass}>Contact</a></li>
              </>
            ) : (
              <>
                <li className="my-4 lg:my-0 lg:ml-8"><Link to="/" onClick={closeMenu} className={linkClass}>Home</Link></li>
                <li className="my-4 lg:my-0 lg:ml-8"><a href="/#contact" onClick={closeMenu} className={linkClass}>Contact</a></li>
              </>
            )}
          </ul>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="flex h-[18px] w-[30px] cursor-pointer flex-col justify-between lg:hidden"
          onClick={toggleMenu}
        >
          <span className={`${bar} ${isMenuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`}></span>
          <span className={`${bar} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`${bar} ${isMenuOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
