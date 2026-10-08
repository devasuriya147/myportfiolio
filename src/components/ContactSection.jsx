import React, { useState } from 'react';
import { 
  Mail, 
  Globe, 
  Send, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  ArrowRight,
  Code2,
  Terminal,
  Cpu
} from 'lucide-react';

function GithubIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
    </svg>
  );
}

const DOMAINS = [
  { id: 'ai', label: 'AI & Machine Learning Systems', icon: '🤖' },
  { id: 'fullstack', label: 'Fullstack Web Platform', icon: '💻' },
  { id: 'mobile', label: 'Mobile App Development', icon: '📱' },
  { id: 'uiux', label: 'UI/UX & Interactive Design', icon: '🎨' },
  { id: 'cloud', label: 'Cloud Architecture & APIs', icon: '⚡' },
  { id: 'consult', label: 'System Audit & Consultation', icon: '💡' }
];

const BUDGETS = [
  'Flexible / Discussion',
  '< $1,000 (Sprint)',
  '$1,000 - $3,000 (MVP)',
  '$3,000 - $8,000 (Full Platform)',
  '$8,000+ (Enterprise)'
];

const TIMELINES = [
  'Immediate (< 2 weeks)',
  'Within 1 month',
  '1 - 3 months',
  'Flexible'
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: DOMAINS[0].label,
    budget: BUDGETS[0],
    timeline: TIMELINES[0],
    details: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('terminal');

  const emailAddress = 'devasurya.m@gmail.com';
  // Configured WhatsApp phone number for direct client inquiries
  const whatsappNumber = '917338765965'; 
  const whatsappDisplay = '+91 73387 65965';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2500);
      } else if (type === 'brief') {
        setCopiedBrief(true);
        setTimeout(() => setCopiedBrief(false), 2500);
      }
    });
  };

  const generateBriefText = () => {
    return `*NEW PROJECT INQUIRY FOR DEVASURYA M*
---------------------------------------
• Client Name: ${formData.name.trim() || 'Not specified'}
• Client Email: ${formData.email.trim() || 'Not specified'}
• Client Phone: ${formData.phone.trim() || 'Not specified'}
• Selected Domain: ${formData.domain}
• Estimated Budget: ${formData.budget}
• Target Timeline: ${formData.timeline}

*Project Objectives & Brief:*
${formData.details.trim() || 'To be discussed.'}
---------------------------------------
(Sent via Portfolio WhatsApp Console to ${whatsappDisplay})`;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.details.trim()) {
      setSubmittedStatus({
        type: 'error',
        message: 'Please provide at least your name and brief project details.'
      });
      return;
    }

    const message = generateBriefText();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    setSubmittedStatus({
      type: 'success',
      message: `Opening WhatsApp chat with ${whatsappDisplay} to send your project inquiry...`
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailFallback = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.details.trim()) {
      setSubmittedStatus({
        type: 'error',
        message: 'Please provide your name and project details before sending.'
      });
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${formData.domain} - ${formData.name}`);
    const body = encodeURIComponent(generateBriefText());
    const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSubmittedStatus({
      type: 'success',
      message: 'Opening your email client with pre-filled project details.'
    });
  };

  return (
    <section className="section-container contact-section" id="contact">
      {/* Background ambient decorative light */}
      <div className="contact-ambient-glow" aria-hidden="true"></div>

      {/* Top Header & High-Level Availability Banner */}
      <div className="contact-top-banner">
        <div className="status-pill-group">
          <span className="live-status-pill">
            <span className="pulse-indicator-dot"></span>
            AVAILABLE FOR Q3/Q4 COLLABORATIONS
          </span>
          <span className="info-meta-pill">
            <Clock size={13} className="pill-icon" />
            TYPICAL RESPONSE: UNDER 3 HOURS
          </span>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Devasurya! I visited your portfolio and would like to discuss a project.")}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="info-meta-pill whatsapp-pill-link"
          >
            <WhatsAppIcon size={14} className="text-green" />
            WHATSAPP: {whatsappDisplay}
          </a>
        </div>

        <h2 className="contact-main-heading">
          LET'S WORK <span className="text-crimson">TOGETHER</span>
          <span className="contact-sparkle">✦</span>
        </h2>
        <p className="contact-lead-text">
          Have an ambitious AI model to deploy, a high-performance web app to architect, or an intuitive digital product to craft? Let’s bring your vision to life with engineering excellence and refined design.
        </p>
      </div>

      {/* Main 2-Column Console Layout */}
      <div className="contact-elevated-grid">
        
        {/* Left Column: Interactive Project Inquiry Console */}
        <div className="contact-card-glass inquiry-console-card">
          <div className="console-card-header">
            <div className="console-title-wrap">
              <Sparkles size={18} className="text-crimson" />
              <h3 className="console-card-title">PROJECT INQUIRY CONSOLE</h3>
            </div>
            <span className="console-badge">DIRECT WHATSAPP DISPATCH</span>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="inquiry-modern-form" noValidate>
            
            {/* Step 1: Select Domain */}
            <div className="form-group-block">
              <label className="field-meta-label">
                <span>01. SELECT DOMAIN / SERVICE</span>
                <span className="label-required">*</span>
              </label>
              <div className="domain-chips-grid">
                {DOMAINS.map((dom) => (
                  <button
                    type="button"
                    key={dom.id}
                    className={`domain-chip-btn ${formData.domain === dom.label ? 'active' : ''}`}
                    onClick={() => setFormData((prev) => ({ ...prev, domain: dom.label }))}
                  >
                    <span className="chip-icon">{dom.icon}</span>
                    <span className="chip-text">{dom.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Name & Contact Info */}
            <div className="form-row-dual">
              <div className="form-group-block">
                <label htmlFor="inquiry-name" className="field-meta-label">
                  <span>YOUR NAME</span>
                  <span className="label-required">*</span>
                </label>
                <div className="input-glass-wrap">
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alexander Vance"
                    required
                    className="glass-input-field"
                    autoComplete="name"
                  />
                  <div className="input-glow-line"></div>
                </div>
              </div>

              <div className="form-group-block">
                <label htmlFor="inquiry-email" className="field-meta-label">
                  <span>EMAIL ADDRESS</span>
                  <span className="label-required">*</span>
                </label>
                <div className="input-glass-wrap">
                  <input
                    type="email"
                    id="inquiry-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alex@enterprise.com"
                    required
                    className="glass-input-field"
                    autoComplete="email"
                  />
                  <div className="input-glow-line"></div>
                </div>
              </div>
            </div>

            {/* Phone & Timeline */}
            <div className="form-row-dual">
              <div className="form-group-block">
                <label htmlFor="inquiry-phone" className="field-meta-label">
                  <span>YOUR PHONE / WHATSAPP NUMBER</span>
                </label>
                <div className="input-glass-wrap">
                  <input
                    type="tel"
                    id="inquiry-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="glass-input-field"
                    autoComplete="tel"
                  />
                  <div className="input-glow-line"></div>
                </div>
              </div>

              <div className="form-group-block">
                <label htmlFor="inquiry-timeline" className="field-meta-label">
                  <span>ESTIMATED TIMELINE</span>
                </label>
                <div className="input-glass-wrap select-wrap">
                  <select
                    id="inquiry-timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="glass-select-field"
                  >
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <div className="input-glow-line"></div>
                </div>
              </div>
            </div>

            {/* Budget Range Selection */}
            <div className="form-group-block">
              <label htmlFor="inquiry-budget" className="field-meta-label">
                <span>ESTIMATED BUDGET / SCOPE</span>
              </label>
              <div className="input-glass-wrap select-wrap">
                <select
                  id="inquiry-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="glass-select-field"
                >
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                <div className="input-glow-line"></div>
              </div>
            </div>

            {/* Project Details */}
            <div className="form-group-block">
              <label htmlFor="inquiry-details" className="field-meta-label">
                <span>PROJECT BRIEF & REQUIREMENTS</span>
                <span className="label-required">*</span>
              </label>
              <div className="input-glass-wrap textarea-wrap">
                <textarea
                  id="inquiry-details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Describe your goals, key deliverables, target features, or project scope..."
                  required
                  className="glass-textarea-field"
                ></textarea>
                <div className="input-glow-line"></div>
              </div>
            </div>

            {/* Feedback Alert Toast */}
            {submittedStatus && (
              <div className={`form-feedback-card ${submittedStatus.type}`}>
                {submittedStatus.type === 'success' ? (
                  <CheckCircle2 size={18} className="feedback-icon" />
                ) : (
                  <ShieldCheck size={18} className="feedback-icon" />
                )}
                <span>{submittedStatus.message}</span>
              </div>
            )}

            {/* Action Buttons Row */}
            <div className="console-actions-cluster">
              <button 
                type="submit" 
                className="primary-cta-btn whatsapp-cta"
                title={`Send direct inquiry to ${whatsappDisplay}`}
              >
                <WhatsAppIcon size={20} className="btn-icon" />
                <span>CONNECT VIA WHATSAPP</span>
                <ArrowRight size={16} className="btn-arrow" />
              </button>

              <button
                type="button"
                onClick={handleEmailFallback}
                className="secondary-cta-btn email-cta"
                title="Send as Email via Mail Client"
              >
                <Mail size={16} className="btn-icon" />
                <span>EMAIL INQUIRY</span>
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard(generateBriefText(), 'brief')}
                className="secondary-cta-btn copy-brief-cta"
                title="Copy structured brief to clipboard"
              >
                {copiedBrief ? <CheckCircle2 size={16} className="text-crimson" /> : <Copy size={16} />}
                <span>{copiedBrief ? 'BRIEF COPIED!' : 'COPY BRIEF'}</span>
              </button>
            </div>

            <div className="console-privacy-note">
              <ShieldCheck size={14} className="privacy-icon" />
              <span>Direct WhatsApp connection to <strong>{whatsappDisplay}</strong>. Instant notification.</span>
            </div>

          </form>
        </div>

        {/* Right Column: Direct Channels & Interactive Developer Terminal */}
        <div className="contact-details-col">
          
          {/* Quick Connect Channels Grid */}
          <div className="channels-card-stack">
            
            {/* Direct WhatsApp Channel Card */}
            <div className="channel-box-glass channel-box-interactive-whatsapp">
              <div className="channel-box-left">
                <div className="channel-icon-avatar whatsapp-avatar">
                  <WhatsAppIcon size={20} />
                </div>
                <div className="channel-meta">
                  <span className="channel-tag whatsapp-tag">DIRECT WHATSAPP (PRIMARY)</span>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Devasurya! I visited your portfolio and would like to connect.")}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="channel-link"
                  >
                    {whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="channel-actions-inline">
                <button
                  type="button"
                  onClick={() => copyToClipboard(whatsappDisplay, 'phone')}
                  className="channel-copy-btn"
                  aria-label="Copy WhatsApp number"
                >
                  {copiedPhone ? (
                    <>
                      <CheckCircle2 size={14} className="text-crimson" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Devasurya! I visited your portfolio and would like to connect.")}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="channel-chat-btn"
                  title="Open direct WhatsApp chat"
                >
                  <span>CHAT</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Email Card with Copy button */}
            <div className="channel-box-glass">
              <div className="channel-box-left">
                <div className="channel-icon-avatar">
                  <Mail size={18} />
                </div>
                <div className="channel-meta">
                  <span className="channel-tag">DIRECT EMAIL</span>
                  <a href={`mailto:${emailAddress}`} className="channel-link">
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(emailAddress, 'email')}
                className="channel-copy-btn"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 size={14} className="text-crimson" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub Card */}
            <a 
              href="https://github.com/devasurya-m" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-box-glass channel-box-interactive"
            >
              <div className="channel-box-left">
                <div className="channel-icon-avatar">
                  <GithubIcon size={18} />
                </div>
                <div className="channel-meta">
                  <span className="channel-tag">GITHUB REPOSITORIES</span>
                  <span className="channel-val">github.com/devasurya-m</span>
                </div>
              </div>
              <ArrowRight size={16} className="channel-forward-arrow" />
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com/in/devasurya-m" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-box-glass channel-box-interactive"
            >
              <div className="channel-box-left">
                <div className="channel-icon-avatar">
                  <LinkedInIcon size={18} />
                </div>
                <div className="channel-meta">
                  <span className="channel-tag">PROFESSIONAL NETWORK</span>
                  <span className="channel-val">linkedin.com/in/devasurya-m</span>
                </div>
              </div>
              <ArrowRight size={16} className="channel-forward-arrow" />
            </a>

            {/* Website Portfolio */}
            <a 
              href="https://devasurya.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-box-glass channel-box-interactive"
            >
              <div className="channel-box-left">
                <div className="channel-icon-avatar">
                  <Globe size={18} />
                </div>
                <div className="channel-meta">
                  <span className="channel-tag">PORTFOLIO & SYSTEM LOGS</span>
                  <span className="channel-val">https://devasurya.dev</span>
                </div>
              </div>
              <ArrowRight size={16} className="channel-forward-arrow" />
            </a>

          </div>

          {/* Interactive 3D Device / Developer Station Showcase */}
          <div className="laptop-showcase-wrapper">
            <div className="laptop-showcase">
              <div className="laptop-screen">
                <div className="terminal-header-strip">
                  <div className="terminal-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="terminal-tab-nav">
                    <button 
                      className={`terminal-tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
                      onClick={() => setActiveTab('terminal')}
                    >
                      <Terminal size={12} />
                      <span>live-status.sh</span>
                    </button>
                    <button 
                      className={`terminal-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                      onClick={() => setActiveTab('specs')}
                    >
                      <Cpu size={12} />
                      <span>stack.json</span>
                    </button>
                  </div>
                </div>

                <div className="laptop-screen-content terminal-screen-body">
                  {activeTab === 'terminal' ? (
                    <div className="terminal-lines">
                      <div className="t-line">
                        <span className="t-prompt">$</span> 
                        <span className="t-cmd">devasurya --status</span>
                      </div>
                      <div className="t-line t-response">
                        <span className="t-badge-green">● ONLINE</span> AI Tech Fullstack Developer
                      </div>
                      <div className="t-line">
                        <span className="t-dim">Location:</span> India (IST / UTC+5:30)
                      </div>
                      <div className="t-line">
                        <span className="t-dim">WhatsApp:</span> {whatsappDisplay}
                      </div>
                      <div className="t-line">
                        <span className="t-dim">Open for:</span> Freelance, Contracts, AI Systems
                      </div>
                      <div className="t-line">
                        <span className="t-prompt">$</span> 
                        <span className="t-cmd">echo "Ready to build"</span>
                      </div>
                      <div className="t-line t-highlight">
                        &gt; "Turning ideas into powerful digital experiences."
                      </div>
                    </div>
                  ) : (
                    <div className="terminal-lines json-lines">
                      <span className="json-bracket">&#123;</span>
                      <div className="json-indent">
                        <span className="json-key">"ai_core"</span>: [<span className="json-val">"PyTorch"</span>, <span className="json-val">"LangChain"</span>],
                      </div>
                      <div className="json-indent">
                        <span className="json-key">"web"</span>: [<span className="json-val">"React"</span>, <span className="json-val">"Next.js"</span>, <span className="json-val">"Node"</span>],
                      </div>
                      <div className="json-indent">
                        <span className="json-key">"cloud"</span>: [<span className="json-val">"Docker"</span>, <span className="json-val">"FastAPI"</span>, <span className="json-val">"Postgres"</span>],
                      </div>
                      <div className="json-indent">
                        <span className="json-key">"contact"</span>: <span className="json-green">"{whatsappDisplay}"</span>
                      </div>
                      <span className="json-bracket">&#125;</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="laptop-base">
                <div className="laptop-notch"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
