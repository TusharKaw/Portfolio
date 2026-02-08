import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname === '/allprojects';
  const isBlogsPage = location.pathname === '/blogs' || location.pathname.startsWith('/blog/');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <h2>Tushar<span>Kaw</span></h2>
          </Link>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            {isHomePage ? (
              <>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="/allprojects">Projects</a></li>
                <li><a href="/blogs">Blogs</a></li>
              </>
            ) : (isProjectsPage || isBlogsPage) ? (
              <>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><a href="/allprojects">Projects</a></li>
                <li><a href="/blogs">Blogs</a></li>
              </>
            ) : (
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            )}
          </ul>
        </div>

        <div className="navbar-contact">
          {isHomePage ? (
            <a href="#contact" className="btn" onClick={closeMenu}><text style={{ color: "#000000" }}>Contact</text></a>
          ) : (
            <Link to="/#contact" className="btn" onClick={closeMenu}><text style={{ color: "#000000" }}>Contact</text></Link>
          )}
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 