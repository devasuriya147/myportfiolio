import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-content-inner">
        <div className="footer-left">
          <p>© 2026 Devasurya M. All rights reserved.</p>
          <span className="footer-tagline">AI Tech Fullstack Developer & Digital Creator</span>
        </div>

        <div className="footer-center">
          <span className="footer-tech-badge">BUILT WITH REACT & CANVAS ENGINE</span>
        </div>

        <div className="footer-right">
          <button 
            type="button" 
            onClick={scrollToTop} 
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
