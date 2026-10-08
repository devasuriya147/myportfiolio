import React, { useState } from 'react';

const PROJECTS_DATA = [
  {
    id: '01',
    name: 'SAFEGATE',
    subtitle: 'Society Management App',
    category: 'AI & Fullstack System',
    tags: ['Next.js', 'FastAPI', 'YOLOv8', 'PostgreSQL'],
    previewClass: 'preview-safegate',
    badge: 'SECURITY SUITE',
    title: 'SAFEGATE OS',
    mockupType: 'safegate'
  },
  {
    id: '02',
    name: 'Event Ticket Booking',
    subtitle: 'Event Ticket Booking App',
    category: 'Fullstack Platform',
    tags: ['React', 'Node.js', 'Stripe', 'Redis'],
    previewClass: 'preview-event',
    badge: 'TICKETING',
    title: 'NEBULA PASS',
    mockupType: 'event'
  },
  {
    id: '03',
    name: 'LOOPIN',
    subtitle: 'Music Streaming App',
    category: 'AI Audio & Web',
    tags: ['React', 'Web Audio API', 'Python', 'Tailwind'],
    previewClass: 'preview-loopin',
    badge: 'INSIGHT TO INTERFACE',
    title: 'LOOPIN AUDIO',
    mockupType: 'loopin'
  },
  {
    id: '04',
    name: 'Website Landing Page',
    subtitle: 'Website Landing Page',
    category: 'Modern Frontend',
    tags: ['React', 'Three.js / Canvas', 'Vite', 'CSS Architecture'],
    previewClass: 'preview-landing',
    badge: 'SAAS PLATFORM',
    title: 'SYNAPSE AI',
    mockupType: 'landing'
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'AI & FULLSTACK', 'FRONTEND & DESIGN'];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'AI & FULLSTACK') return p.category.includes('AI') || p.category.includes('Fullstack');
    if (activeFilter === 'FRONTEND & DESIGN') return p.category.includes('Frontend') || p.category.includes('Web');
    return true;
  });

  return (
    <section className="section-container projects-section" id="projects">
      <div className="section-header">
        <div className="section-title-wrap">
          <h2 className="section-title">SELECTED PROJECTS</h2>
          <span className="section-subtitle-tag">CRAFTED WITH PRECISION</span>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className={`project-preview ${project.previewClass}`}>
              <div className="mockup-screen">
                <div className="mockup-header-bar">
                  <span className="mock-dot"></span>
                  <span className="mock-dot"></span>
                  <span className="mock-dot"></span>
                </div>

                <div className="mockup-inner-ui">
                  <span className="mockup-badge">{project.badge}</span>
                  <h4 className="mockup-title">{project.title}</h4>

                  {project.mockupType === 'safegate' && (
                    <div className="mockup-visual-card">
                      <div className="mockup-icon-shield">🛡️</div>
                      <div className="mockup-graph-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  )}

                  {project.mockupType === 'event' && (
                    <div className="mockup-ticket-pass">
                      <div className="ticket-barcode">||| | |||| | ||</div>
                      <div className="ticket-status">CONFIRMED</div>
                    </div>
                  )}

                  {project.mockupType === 'loopin' && (
                    <div className="mockup-audio-wave">
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                    </div>
                  )}

                  {project.mockupType === 'landing' && (
                    <div className="mockup-dashboard-grid">
                      <div className="dash-tile"></div>
                      <div className="dash-tile"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="project-info">
              <div className="project-text">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-sub">{project.subtitle}</p>
                <span className="project-category">{project.category}</span>
                <div className="project-tech-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
              <a href="#projects" className="project-link" aria-label={`View ${project.name} project`}>
                {project.id} <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
