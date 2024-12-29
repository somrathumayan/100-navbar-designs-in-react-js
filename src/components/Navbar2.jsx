import React, { useState } from 'react';
import './Navbar2.css';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? '' : menu));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Navbar 2</h1>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li className="dropdown">
            <a href="#!" onClick={() => toggleMenu('blogs')}>
              Blogs ▼
            </a>
            <ul className={`submenu ${activeMenu === 'blogs' ? 'open' : ''}`}>
              <li>
                <a href="/blogs/latest">Latest</a>
              </li>
              <li>
                <a href="/blogs/popular">Popular</a>
              </li>
              <li>
                <a href="/blogs/categories">Categories</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#!" onClick={() => toggleMenu('projects')}>
              Projects ▼
            </a>
            <ul className={`submenu ${activeMenu === 'projects' ? 'open' : ''}`}>
              <li>
                <a href="/projects/web">Web Development</a>
              </li>
              <li>
                <a href="/projects/mobile">Mobile Apps</a>
              </li>
              <li>
                <a href="/projects/design">UI/UX Design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
