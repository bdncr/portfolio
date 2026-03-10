import './App.css';
import { useEffect, useState } from 'react';
import profileImage from './assets/profile.jpg';
import { translations } from './data/translations';
import { RadarChart, AnimatedCounter } from './components/SkillsComponents';
import { MatrixRain } from './components/MatrixRain';
import { Achievements } from './components/Achievements';

import achievement1 from './assets/achievements/ach1.jpg';
import achievement2 from './assets/achievements/ach2.jpg';
import achievement3 from './assets/achievements/ach3.jpg';
import achievement4 from './assets/achievements/ach4.jpg';


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState('mn'); // Default to Mongolian
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = translations[language];

  const skillsData = [
    { name: language === 'mn' ? 'Хөгжүүлэлт' : 'Development', value: 95 },
    { name: language === 'mn' ? 'Үүлэн технологи' : 'Cloud', value: 90 },
    { name: language === 'mn' ? 'Аюулгүй байдал' : 'Security', value: 85 },
    { name: language === 'mn' ? 'DevOps' : 'DevOps', value: 88 },
    { name: language === 'mn' ? 'Өгөгдөл' : 'Database', value: 92 },
    { name: language === 'mn' ? 'Сүлжээ' : 'Network', value: 80 }
  ];

  const achievementsData = [
    {
      image: achievement1,
      title: t.achievement1Title,
      description: t.achievement1Desc,
      year: t.achievement1Year,
      organization: t.achievement1Org
    },
    {
      image: achievement2,
      title: t.achievement2Title,
      description: t.achievement2Desc,
      year: t.achievement2Year,
      organization: t.achievement2Org
    },
    {
      image: achievement3,
      title: t.achievement3Title,
      description: t.achievement3Desc,
      year: t.achievement3Year,
      organization: t.achievement3Org
    },
    {
      image: achievement4,
      title: t.achievement4Title,
      description: t.achievement4Desc,
      year: t.achievement4Year,
      organization: t.achievement4Org
    },
    
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Scroll to top button visibility
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Language Switcher */}
      <div className="language-switcher">
        <button 
          className={`lang-btn ${language === 'mn' ? 'active' : ''}`}
          onClick={() => setLanguage('mn')}
        >
          МН
        </button>
        <button 
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
      </div>

      {/* Main Content */}
      <main className={`hero-section ${isVisible ? 'visible' : ''}`}>
        {/* Profile Image */}
        <div className="profile-container">
          <div className="profile-ring"></div>
          <div className="profile-image">
            <img src={profileImage} alt="Bilguun Enkhtaivan" className="profile-photo" />
          </div>
        </div>

        {/* Text Content */}
        <div className="content">
          <h1 className="title">
            <span className="greeting">{t.greeting}</span>
            <span className="name">{t.name}</span>
          </h1>
          
          <div className="role-container">
            <p className="role">{t.role}</p>
            <p className="role-subtitle">{t.roleSubtitle}</p>
          </div>

          <p className="description">
            {t.description}
          </p>

          {/* Action Buttons */}
          <div className="button-group">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              {t.getInTouch}
            </button>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://www.facebook.com/enktaivan.bilguun/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/bilikless/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/enkhtaivan-bilguun/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="tel:+80800728" className="social-link" aria-label="Phone">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
              </svg>
            </a>
            <a href="mailto:e.t.bilguun@gmail.com" className="social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Skills & Services Section */}
      <section className="section skills-section">
        <div className="section-content">
          <h2 className="section-title">{t.skillsTitle}</h2>
          
          {/* Radar Chart Visualization */}
          <div className="radar-section">
            <h3 className="subsection-title">{language === 'mn' ? '📊 Чадварын Түвшин' : '📊 Skill Proficiency'}</h3>
            
            {/* Radar and Stats Container */}
            <div className="radar-stats-container">
              {/* Radar Chart */}
              <RadarChart skills={skillsData} />
              
              {/* Stats Grid */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <div className="stat-label">
                    {language === 'mn' ? 'Жилийн туршлага' : 'Years Experience'}
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="stat-label">
                    {language === 'mn' ? 'Төсөл' : 'Projects'}
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">
                    <AnimatedCounter end={30} suffix="+" />
                  </div>
                  <div className="stat-label">
                    {language === 'mn' ? 'Үйлчлүүлэгч' : 'Clients'}
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">
                    <AnimatedCounter end={20} suffix="+" />
                  </div>
                  <div className="stat-label">
                    {language === 'mn' ? 'Технологи' : 'Technologies'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hard Skills */}
          <div className="skills-subsection">
            <h3 className="subsection-title">{t.hardSkills}</h3>
            <div className="skills-compact-grid">
              <div className="skill-compact-card">
                <h4>{t.languages}</h4>
                <p>{t.languagesText}</p>
              </div>
              <div className="skill-compact-card">
                <h4>{t.frameworks}</h4>
                <p>{t.frameworksText}</p>
              </div>
              <div className="skill-compact-card">
                <h4>{t.cloudDevOps}</h4>
                <p>{t.cloudDevOpsText}</p>
              </div>
              <div className="skill-compact-card">
                <h4>{t.databases}</h4>
                <p>{t.databasesText}</p>
              </div>
              <div className="skill-compact-card">
                <h4>{t.tools}</h4>
                <p>{t.toolsText}</p>
              </div>
              <div className="skill-compact-card">
                <h4>{t.certifications}</h4>
                <p>{t.certificationsText}</p>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-subsection">
            <h3 className="subsection-title">{t.softSkills}</h3>
            <div className="soft-skills-grid">
              <div className="soft-skill-item">
                <span className="skill-badge">{t.teamLeadership}</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">{t.projectManagement}</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">{t.technicalCommunication}</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">{t.problemSolving}</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">{t.agileMethods}</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">{t.clientRelations}</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">{t.mentoring}</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">{t.strategicPlanning}</span>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="skills-subsection">
            <h3 className="subsection-title">{t.servicesOffer}</h3>
            <div className="services-compact-grid">
              <div className="service-compact-card">
                <div className="service-number">01</div>
                <h4>{t.service1Title}</h4>
                <p>{t.service1Text}</p>
              </div>
              <div className="service-compact-card">
                <div className="service-number">02</div>
                <h4>{t.service2Title}</h4>
                <p>{t.service2Text}</p>
              </div>
              <div className="service-compact-card">
                <div className="service-number">03</div>
                <h4>{t.service3Title}</h4>
                <p>{t.service3Text}</p>
              </div>
              <div className="service-compact-card">
                <div className="service-number">04</div>
                <h4>{t.service4Title}</h4>
                <p>{t.service4Text}</p>
              </div>
              <div className="service-compact-card">
                <div className="service-number">05</div>
                <h4>{t.service5Title}</h4>
                <p>{t.service5Text}</p>
              </div>
              <div className="service-compact-card">
                <div className="service-number">06</div>
                <h4>{t.service6Title}</h4>
                <p>{t.service6Text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Achievements Section */}
      <section className="section achievements-section">
        <div className="section-content">
          <h2 className="section-title">{t.achievementsTitle}</h2>
          <Achievements achievements={achievementsData} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">{t.contactTitle}</h2>
          <p className="contact-subtitle">{t.contactSubtitle}</p>
          <div className="contact-grid">
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder={t.contactName} required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder={t.contactEmail} required />
                </div>
                <div className="form-group">
                  <textarea placeholder={t.contactMessage} rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  {t.contactSend}
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
            <div className="contact-info-container">
              <h3>{t.contactInfo}</h3>
              <div className="contact-info-item">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:e.t.bilguun@gmail.com">e.t.bilguun@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                </svg>
                <a href="tel:+80800728">+976 8080-0728</a>
              </div>
              <div className="contact-info-item">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <a href="https://www.linkedin.com/in/enkhtaivan-bilguun/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
