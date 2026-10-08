import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const wordsRef = useRef([]);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMouseMoving = false;
    let animId;

    const handleMouseMove = (e) => {
      isMouseMoving = true;
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = (e.clientY / innerHeight) * 2 - 1;
      targetX = normX * 9;
      targetY = normY * 7;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const updateParallax = () => {
      if (isMouseMoving || Math.abs(currentX - targetX) > 0.01 || Math.abs(currentY - targetY) > 0.01) {
        currentX += (targetX - currentX) * 0.07;
        currentY += (targetY - currentY) * 0.07;

        wordsRef.current.forEach((wrap, index) => {
          if (!wrap) return;
          const depth = 0.6 + index * 0.22;
          const x = (currentX * depth).toFixed(2);
          const y = (currentY * depth).toFixed(2);
          const rot = (currentX * 0.22 * (index % 2 === 0 ? 1 : -1)).toFixed(2);
          wrap.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg)`;
        });
      }
      animId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* Giant background "PORTFOLIO" display text */}
      <div className="hero-bg-title" aria-hidden="true">
        PORTFOLIO
      </div>

      <div className="hero-content">
        {/* Left Hero Column */}
        <div className="hero-col-left">
          <div className="hero-greeting motion-words-container" aria-label="Hello, I'm">
            <span 
              className="word-wrap word-wrap-1" 
              ref={(el) => (wordsRef.current[0] = el)}
            >
              <span className="motion-word word-hello">Hello,</span>
            </span>
            <span 
              className="word-wrap word-wrap-2" 
              ref={(el) => (wordsRef.current[1] = el)}
            >
              <span className="motion-word word-im">I'm</span>
            </span>
          </div>

          <h1 className="hero-name motion-words-container" aria-label="DEVASURYA M">
            <span 
              className="word-wrap word-wrap-3" 
              ref={(el) => (wordsRef.current[2] = el)}
            >
              <span className="motion-word word-devasurya">DEVASURYA</span>
            </span>
            <span 
              className="word-wrap word-wrap-4" 
              ref={(el) => (wordsRef.current[3] = el)}
            >
              <span className="motion-word word-m">M</span>
            </span>
          </h1>

          <h2 className="hero-title">AI TECH FULLSTACK DEVELOPER</h2>

          <p className="hero-desc">
            I build intelligent digital experiences and scalable fullstack systems that are user-centered, visually engaging and engineered to solve real-world problems. From neural architectures to modern reactive interfaces, I craft software that connects and converts.
          </p>

          <div className="hero-actions-row">
            <a href="#projects" className="hero-primary-btn">
              <span>EXPLORE WORK</span>
              <span className="btn-arrow">↓</span>
            </a>
            <a href="#contact" className="hero-secondary-btn">
              <span>LET'S TALK</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>

          <div className="hero-location">
            <svg 
              className="location-pin" 
              viewBox="0 0 24 24" 
              width="16" 
              height="16" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>BASED IN INDIA</span>
          </div>
        </div>

        {/* Center space is left open for the animated canvas portrait */}
        <div className="hero-col-center"></div>

        {/* Right Hero Column */}
        <div className="hero-col-right">
          <div className="feature-callout">
            <div className="feature-icon-circle">+</div>
            <p className="feature-callout-text">Turning ideas into powerful digital experiences.</p>
          </div>

          <ul className="feature-list">
            <li>
              <span className="plus-bullet">+</span>
              <span>AI & Machine Learning Systems</span>
            </li>
            <li>
              <span className="plus-bullet">+</span>
              <span>Scalable Fullstack Architecture</span>
            </li>
            <li>
              <span className="plus-bullet">+</span>
              <span>Pixel-Perfect Reactive UI</span>
            </li>
            <li>
              <span className="plus-bullet">+</span>
              <span>High-Performance APIs & Cloud</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
