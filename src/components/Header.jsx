import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <div className="header-left">
        <a href="#hero" className="header-brand-link">
          <span className="role-primary">AI TECH FULLSTACK DEVELOPER</span>
          <span className="role-secondary">DIGITAL CREATOR</span>
        </a>
      </div>

      <nav className="header-nav" aria-label="Main Navigation">
        <a href="#projects" className="nav-link">PROJECTS</a>
        <a href="#about" className="nav-link">ABOUT & PROCESS</a>
        <a href="#contact" className="nav-link">CONTACT</a>
      </nav>

      <div className="header-right">
        <a href="#contact" className="available-badge">
          <span className="available-status-dot"></span>
          <span>AVAILABLE FOR PROJECTS</span>
          <span className="sparkle-icon">+</span>
        </a>
      </div>
    </header>
  );
}
