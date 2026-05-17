const { useState, useEffect, useRef } = React;

/* ─── DATA ─── */
const SKILLS = [
  {
    icon: "💻",
    title: "Frontend Forge",
    desc: "Crafting immersive digital experiences through precision engineering.",
    tags: ["HTML5", "CSS3", "React.js", "JavaScript", "Bootstrap"],
    proficiency: "85%"
  },
  {
    icon: "🗄️",
    title: "Core Systems",
    desc: "Building resilient backends and data pipelines.",
    tags: ["Node.js", "Express.js", "MySQL", "MongoDB", "Python", "Java"],
    proficiency: "80%"
  },
  {
    icon: "⚙️",
    title: "Workflow & Tools",
    desc: "Optimizing deployment and analytical processes.",
    tags: ["Git", "AWS", "Jupyter", "Postman", "Excel"],
    proficiency: "75%"
  }
];

const TIMELINE = [
  {
    title: "Java (Core) & Python (Core)",
    org: "Data Pro",
    date: "Long Term Internship",
    desc: "Built a Python mini-project applying OOP, data handling, and problem-solving; gained core Java and Python application development skills.",
    type: "internship"
  },
  {
    title: "Cloud Computing & Data Engineering",
    org: "AICTE AWS Virtual Internship",
    date: "Internship",
    desc: "Gained hands-on exposure to AWS services (EC2, S3, IAM) and learned ETL pipelines using AWS Glue and Redshift.",
    type: "internship"
  },
  {
    title: "B.Tech Information Technology",
    org: "Vignan's Institute of IT",
    date: "2024 — 2027",
    desc: "Currently pursuing B.Tech with a CGPA of 8.7. Active in technical events and hackathons.",
    type: "education"
  },
  {
    title: "Diploma in Computer Engineering",
    org: "Sankethika Polytechnic College",
    date: "2021 — 2023",
    desc: "Graduated with 83% overall score, building a strong foundation in computer science principles.",
    type: "education"
  }
];

const PROJECTS = [
  {
    title: "Clean City Rewards",
    icon: "🌍",
    desc: "Smart waste management system; users deposit waste, earn coins, and redeem for vouchers. Built in a 8-hour national hackathon.",
    tags: ["JavaScript", "MySQL", "HTML/CSS"]
  },
  {
    title: "Medicine Monitoring Platform",
    icon: "💊",
    desc: "Online platform for real-time drug safety, efficacy, and quality monitoring. Structured MySQL schema for medicine records.",
    tags: ["MySQL", "Web Tech"]
  }
];


/* ─── HOOK: scroll fade-in ─── */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── NAVBAR ─── */
function Navbar() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "Projects", "Skills", "Experience", "Contact"];
  
  return (
    <nav>
      <div className="nav-logo">CyberPortfolio</div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}>
            <a 
              href={`#${l.toLowerCase()}`}
              className={active === l ? "active" : ""}
              onClick={() => setActive(l)}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">Hire Me</a>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-badge">
        <span className="dot"></span> Available for Innovation
      </div>
      <h1 className="fade-in visible">Bindhu Madhavi</h1>
      <h2 className="fade-in visible" style={{transitionDelay:"0.1s"}}>
        Full-Stack Engineer <br/>& Data Analyst
      </h2>
      <p className="hero-desc fade-in visible" style={{transitionDelay:"0.2s"}}>
        Crafting immersive digital experiences through precision engineering and data-driven insights. B.Tech IT student at Vignan's Institute.
      </p>
      <div className="hero-actions fade-in visible" style={{transitionDelay:"0.3s"}}>
        <a href="#projects" className="hero-btn-primary">View Projects →</a>
        <a href="#contact" className="hero-btn-secondary">Contact Me</a>
      </div>
    </section>
  );
}

/* ─── FEATURED PROJECTS (Below Hero) ─── */
function Featured() {
  const ref = useFadeIn();
  return (
    <section id="projects">
      <div className="features-grid">
        {PROJECTS.map((p, i) => (
          <div className="glass-card feature-card fade-in" ref={useFadeIn()} key={i} style={{transitionDelay:`${i*0.1}s`}}>
            <div>
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{p.icon}</div>
              </div>
              <h3 className="feature-title">{p.title}</h3>
              <p className="feature-desc">{p.desc}</p>
            </div>
            <div className="feature-tags">
              {p.tags.map(t => <span className="feature-tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── TECHNICAL ARSENAL (Skills) ─── */
function TechnicalArsenal() {
  const ref = useFadeIn();
  return (
    <section id="skills">
      <div className="section-header fade-in" ref={ref}>
        <h2 className="section-title">Technical Arsenal</h2>
        <p className="section-desc">Forging digital excellence through a multi-disciplinary stack of advanced technologies and architectural patterns.</p>
      </div>
      <div className="skills-grid">
        {SKILLS.map((skill, i) => (
          <div className="glass-card fade-in" ref={useFadeIn()} key={i} style={{transitionDelay:`${i*0.1}s`}}>
            <div className="skill-card-header">
              <span className="skill-icon">{skill.icon}</span>
              <h3 className="skill-title">{skill.title}</h3>
            </div>
            <p className="feature-desc" style={{marginBottom:"1rem"}}>{skill.desc}</p>
            <div className="skill-tag-container">
              {skill.tags.map(t => <span className="skill-item" key={t}>{t}</span>)}
            </div>
            <div className="skill-bar-label">
              <span>Proficiency</span>
              <span>{skill.proficiency}</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{width: skill.proficiency}}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── DIGITAL ARCHITECT (Objective) ─── */
function DigitalArchitect() {
  const ref = useFadeIn();
  return (
    <section>
      <div className="glass-card bio-grid fade-in" ref={ref}>
        <div>
          <span className="bio-label">— THE IDENTITY</span>
          <h2 className="bio-title">Digital Architect & <br/><span>Data Explorer</span></h2>
          <p className="bio-text">
            I specialize in building robust web applications and analyzing data where clarity meets complexity. My work bridges the gap between raw technical performance and intuitive user experiences.
          </p>
          <p className="bio-text">
            With a strong foundation in the MERN stack, Python, and Java, I focus on creating tools that solve real-world problems efficiently.
          </p>
          <a href="https://drive.google.com/file/d/15_BzR4bLitCYUUl72jFTsJyJk3H3rGO9/view?usp=drive_link" target="_blank" rel="noreferrer" className="hero-btn-secondary" style={{display:"inline-block", marginTop:"1rem"}}>↓ Download Resume</a>
        </div>
        <div className="bio-visual">
          <div className="abstract-shape"></div>
        </div>
      </div>
    </section>
  );
}

/* ─── CAREER PATH (Timeline) ─── */
function CareerPath() {
  const ref = useFadeIn();
  return (
    <section id="experience">
      <div className="section-header fade-in" ref={ref}>
        <span className="bio-label">— PROFESSIONAL ODYSSEY</span>
        <h2 className="section-title">Career Path</h2>
      </div>
      <div className="timeline-container">
        {TIMELINE.map((item, i) => (
          <div className={`timeline-item ${item.type === 'education' ? 'empty-dot' : ''} fade-in`} ref={useFadeIn()} key={i}>
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-card">
              <div className="timeline-header">
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-date">{item.date}</span>
              </div>
              <p className="timeline-org">{item.org}</p>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function InitiateContact() {
  const ref = useFadeIn();
  return (
    <section id="contact">
      <div className="glass-card contact-grid fade-in" ref={ref}>
        <div className="contact-info">
          <h2 className="contact-title">Initiate<br/>Contact</h2>
          <p className="contact-desc">Ready to build the next generation of digital infrastructure? Reach out and let's manifest your vision.</p>
          
          <div className="contact-method">
            <div className="contact-icon">✉️</div>
            <div>
              <p>Email Address</p>
              <p>bindhumadhavigokivada@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon">📍</div>
            <div>
              <p>Current Orbit</p>
              <p>Visakhapatnam, AP</p>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); window.location.href="mailto:bindhumadhavigokivada@gmail.com"; }}>
          <div className="form-group">
            <label>Identification</label>
            <input type="text" className="form-input" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <label>Transmission Channel</label>
            <input type="email" className="form-input" placeholder="Email@service.com" />
          </div>
          <div className="form-group">
            <label>The Payload</label>
            <textarea className="form-input" placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Signal</button>
        </form>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer>
      <div className="footer-logo">CyberPortfolio</div>
      <div className="footer-copy">© {new Date().getFullYear()} High-End Dev Portfolio. Built by Bindhu Madhavi.</div>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/bindhumadhavi-gokivada-0a2218355" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/BindhumadhaviGokivada" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}

/* ─── APP ─── */
function App() {
  return (
    <>
      <div className="global-blobs">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
      </div>
      <Navbar />
      <Hero />
      <Featured />
      <TechnicalArsenal />
      <DigitalArchitect />
      <CareerPath />
      <InitiateContact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
