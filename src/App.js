import './App.css';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      {/* Matrix Rain Background */}
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>

      {/* Mouse Follower */}
      <div 
        className="mouse-follower"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      ></div>

      {/* Main Content */}
      <main className={`hero-section ${isVisible ? 'visible' : ''}`}>
        {/* Profile Image */}
        <div className="profile-container">
          <div className="profile-ring"></div>
          <div className="profile-image">
            <span className="profile-placeholder">BDNCR</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="content">
          <h1 className="title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Bilguun Enkhtaivan</span>
          </h1>
          
          <div className="role-container">
            <p className="role">IT Professional</p>
            <p className="role-subtitle">& Systems Architect</p>
          </div>

          <p className="description">
            Specialized in building robust infrastructure, developing innovative solutions,
            and optimizing systems for peak performance. Passionate about cybersecurity,
            cloud architecture, and emerging technologies.
          </p>

          {/* Action Buttons */}
          <div className="button-group">
            <button className="btn btn-primary">
              View My Work
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary">
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="#" className="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Email">
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
          <h2 className="section-title">Skills & Services</h2>
          
          {/* Hard Skills */}
          <div className="skills-subsection">
            <h3 className="subsection-title">💻 Hard Skills</h3>
            <div className="skills-compact-grid">
              <div className="skill-compact-card">
                <h4>Languages</h4>
                <p>JavaScript, TypeScript, Python, Java, C#, SQL</p>
              </div>
              <div className="skill-compact-card">
                <h4>Frameworks & Libraries</h4>
                <p>React, Node.js, Express, Django, Spring Boot</p>
              </div>
              <div className="skill-compact-card">
                <h4>Cloud & DevOps</h4>
                <p>AWS, Azure, GCP, Docker, Kubernetes, CI/CD</p>
              </div>
              <div className="skill-compact-card">
                <h4>Databases</h4>
                <p>MySQL, PostgreSQL, MongoDB, Redis, DynamoDB</p>
              </div>
              <div className="skill-compact-card">
                <h4>Tools & Technologies</h4>
                <p>Git, Linux, Windows Server, VMware, Terraform</p>
              </div>
              <div className="skill-compact-card">
                <h4>Certifications</h4>
                <p>AWS Solutions Architect, CompTIA Security+, CCNA</p>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-subsection">
            <h3 className="subsection-title">🎯 Soft Skills</h3>
            <div className="soft-skills-grid">
              <div className="soft-skill-item">
                <span className="skill-badge">Team Leadership</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">Project Management</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">Technical Communication</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">Problem Solving</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">Agile Methodologies</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">Client Relations</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">Mentoring & Training</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-badge">Strategic Planning</span>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="skills-subsection">
            <h3 className="subsection-title">🚀 Services I Offer</h3>
            <div className="services-compact-grid">
              <div className="service-compact-card">
                <div className="service-number">01</div>
                <h4>System Architecture & Design</h4>
                <p>Scalable infrastructure planning and implementation</p>
              </div>
              <div className="service-compact-card">
                <div className="service-number">02</div>
                <h4>Custom Software Development</h4>
                <p>Full-stack web and mobile application development</p>
              </div>
              <div className="service-compact-card">
                <div className="service-number">03</div>
                <h4>Cloud Migration & Setup</h4>
                <p>AWS, Azure, and GCP deployment and optimization</p>
              </div>
              <div className="service-compact-card">
                <div className="service-number">04</div>
                <h4>DevOps & Automation</h4>
                <p>CI/CD pipelines and infrastructure as code</p>
              </div>
              <div className="service-compact-card">
                <div className="service-number">05</div>
                <h4>Security Audits & Implementation</h4>
                <p>Penetration testing and security hardening</p>
              </div>
              <div className="service-compact-card">
                <div className="service-number">06</div>
                <h4>IT Consulting & Support</h4>
                <p>Strategic tech advice and ongoing maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="section-content">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "Bilguun transformed our legacy infrastructure into a modern cloud-based 
                system. His technical expertise and ability to explain complex concepts 
                made the entire process smooth and efficient."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Chen</h4>
                  <p>CTO, TechStart Inc.</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "Working with Bilguun was a game-changer. He delivered our application ahead 
                of schedule with exceptional code quality. His attention to security and 
                performance is outstanding."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Rodriguez</h4>
                  <p>Product Manager, InnovateLabs</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "An exceptional professional who combines deep technical knowledge with 
                excellent communication skills. Bilguun's solutions are always forward-thinking 
                and scalable."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Emily Watson</h4>
                  <p>Senior Developer, CloudSystems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>🎓 Education & Certifications</h3>
              <p>
                Bachelor's degree in Information Technology with industry certifications
                including AWS Solutions Architect, CompTIA Security+, and Cisco CCNA.
                Continuously learning and staying updated with the latest tech trends.
              </p>
            </div>
            <div className="about-card">
              <h3>💼 Professional Experience</h3>
              <p>
                5+ years of experience in IT infrastructure, software development, and
                system administration. From managing enterprise networks to developing
                scalable applications, I bring comprehensive technical expertise.
              </p>
            </div>
            <div className="about-card">
              <h3>🚀 What I Do</h3>
              <p>
                Design and implement IT solutions, develop custom software, manage cloud
                infrastructure, ensure system security, and provide technical leadership
                for complex projects. Always focused on efficiency and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
