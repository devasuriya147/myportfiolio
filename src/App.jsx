import React from 'react';
import CanvasBackground from './components/CanvasBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutAndProcess from './components/AboutAndProcess';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app-root">
      {/* Background Canvas & Preloader */}
      <CanvasBackground />

      {/* Main Page Content Overlaying Canvas */}
      <div id="page-wrapper">
        <Header />
        <main>
          <Hero />
          <Projects />
          <AboutAndProcess />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
