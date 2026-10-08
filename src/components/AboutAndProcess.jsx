import React from 'react';

const SKILLS_LIST = [
  'AI & ML',
  'PYTHON',
  'PYTORCH',
  'TYPESCRIPT',
  'REACT JS',
  'NEXT.JS',
  'NODE.JS',
  'FASTAPI',
  'DOCKER',
  'POSTGRESQL',
  'MONGODB',
  'SYSTEM DESIGN',
  'REST & GRAPHQL',
  'TAILWIND CSS',
  'WEB ANIMATION',
  'GIT & CI/CD'
];

const PROCESS_STEPS = [
  {
    name: 'Discover',
    desc: 'Research & Analysis',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  },
  {
    name: 'Plan',
    desc: 'Architecture & System Flow',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    )
  },
  {
    name: 'Design',
    desc: 'High-Fidelity Interface',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    name: 'Build',
    desc: 'Fullstack & AI Integration',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    name: 'Refine',
    desc: 'Testing & Optimization',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    )
  },
  {
    name: 'Deliver',
    desc: 'Cloud Deployment & Scale',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }
];

export default function AboutAndProcess() {
  return (
    <section className="section-container info-section" id="about">
      <div className="info-grid">
        
        {/* Column 1: Education & Skills */}
        <div className="info-col education-col">
          <h2 className="col-main-title">EDUCATION & SKILLS</h2>

          {/* Education block */}
          <div className="sub-block">
            <h3 className="sub-heading-red">EDUCATION</h3>
            
            <div className="edu-item">
              <div className="edu-header">
                <span className="edu-degree">B.Tech in Artificial Intelligence & Data Science</span>
                <span className="edu-year">2022-26</span>
              </div>
            </div>

            <div className="edu-item">
              <div className="edu-header">
                <span className="edu-degree">AI & Fullstack Development Certificate</span>
                <span className="edu-year">2023-25</span>
              </div>
              <p className="edu-details">
                Deep Learning Architecture | Fullstack Engineering | Scalable Microservices | Responsive Web
              </p>
            </div>
          </div>

          {/* Skills block */}
          <div className="sub-block">
            <h3 className="sub-heading-red">TECHNICAL EXPERTISE</h3>
            
            <div className="skills-cloud">
              {SKILLS_LIST.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Work Process */}
        <div className="info-col process-col">
          <h2 className="col-main-title">WORK PROCESS</h2>

          <div className="process-timeline">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.name} className="process-step">
                <div className="step-icon-wrapper">
                  {step.icon}
                </div>
                <div className="step-info">
                  <div className="step-header-tag">
                    <span className="step-index">0{idx + 1}</span>
                    <h4 className="step-name">{step.name}</h4>
                  </div>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Quote & Callout */}
        <div className="info-col quote-col">
          <div className="quote-card">
            <div className="quote-top">
              <div className="quote-symbol">“</div>
              <p className="quote-body">
                Good code is not just how it functions, but how it scales.
              </p>
            </div>
            
            <div className="quote-middle">
              <div className="quote-author-signature">Devasurya M</div>
              <span className="quote-author-role">AI Fullstack Engineer & Architect</span>
            </div>
            
            <a href="#contact" className="quote-footer-cta">
              <h4 className="cta-title">LET'S CREATE SOMETHING GREAT TOGETHER.</h4>
              <span className="cta-sparkle">+</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
