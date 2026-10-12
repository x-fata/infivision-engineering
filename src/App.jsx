import './App.css'

const images = {
  logo: '/images/infivision-logo.jpeg',
  hero: '/images/hero-engineer.jpg',
  building: '/images/company-building.jpg',
  electrical: '/images/electrical-engineering.jpg',
  mechanical: '/images/mechanical-engineering.jpg',
  civil: '/images/civil-engineering.jpg',
  security: '/images/security-systems.jpg',
  project: '/images/villa-project.jpg',
  team: '/images/engineering-team.jpg',
  maintenance: '/images/maintenance-support.jpg',
  renewable: '/images/renewable-energy.jpg',
  wakfuMosque: '/images/wakfu-office-building.jpg',
}

const contacts = [
  '+255 778 679262',
  '+255 715 844850',
  '+255 772 679262',
]

const services = [
  {
    number: '01',
    title: 'Electrical Engineering',
    description:
      'Electrical system design, installations, wiring, power distribution, backup power systems and maintenance.',
    image: images.electrical,
  },
  {
    number: '02',
    title: 'Mechanical Engineering',
    description:
      'Mechanical installations, air conditioning, pumps, plumbing, drainage systems and servicing.',
    image: images.mechanical,
  },
  {
    number: '03',
    title: 'Civil Engineering & Construction',
    description:
      'Architectural planning, structural engineering, building construction, renovation and site supervision.',
    image: images.civil,
  },
  {
    number: '04',
    title: 'Security Systems & ICT',
    description:
      'CCTV surveillance, access control, electric fences, fire detection and network infrastructure.',
    image: images.security,
  },
  {
    number: '05',
    title: 'Renewable Energy',
    description:
      'Solar PV systems, backup power solutions, energy assessments and efficient power management.',
    image: images.renewable,
  },
  {
    number: '06',
    title: 'Maintenance & Technical Support',
    description:
      'Preventive maintenance, scheduled inspections, troubleshooting and technical consultancy.',
    image: images.maintenance,
  },
]

const projects = [
  {
    title: 'Residential Building',
    client: 'Haji Mohammed Haji',
    location: 'Fumba, Zanzibar',
    status: 'Ongoing',
    image: images.project,
  },
  {
    title: 'Residential Building',
    client: 'Juma Seif',
    location: 'Nyamanzi, Zanzibar',
    status: 'Ongoing',
    image: images.building,
  },
  {
    title: 'Wakfu na Mali ya Amanda Mosque',
    client: 'Wakfu na Mali ya Amanda',
    location: 'Zanzibar',
    status: 'Completed',
    image: images.wakfuMosque,
  },
]

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  return (
    <main className="homepage" id="home">
      {/* CONTACT BAR */}
      <div className="topbar">
        <div className="topbar-contacts">
          {contacts.map((phone) => (
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              key={phone}
            >
              <span className="topbar-icon">☎</span>
              {phone}
            </a>
          ))}

          <a href="mailto:info@infivisionengineering.com">
            <span className="topbar-icon">✉</span>
            info@infivisionengineering.com
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/search/results/companies/?keywords=infivisionengineering"
            target="_blank"
            rel="noreferrer"
            aria-label="Find InfiVision Engineering on LinkedIn"
          >
            <span className="social-icon linkedin">in</span>
            LinkedIn
          </a>

          <a
            href="https://www.youtube.com/@nfivisionengineering"
            target="_blank"
            rel="noreferrer"
            aria-label="InfiVision Engineering on YouTube"
          >
            <span className="social-icon youtube">▶</span>
            YouTube
          </a>

          <a
            href="https://www.instagram.com/nfivisionengineering_/"
            target="_blank"
            rel="noreferrer"
            aria-label="InfiVision Engineering on Instagram"
          >
            <span className="social-icon instagram">◎</span>
            Instagram
          </a>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-logo">
            <img
              src={images.logo}
              alt="InfiVision Engineering Company Limited logo"
            />
          </span>

          <span className="brand-text">
            <strong>INFIVISION</strong>
            <small>ENGINEERING COMPANY LIMITED</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#mission">Mission & Vision</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Get a Quote <span>→</span>
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src={images.hero}
            alt="Engineering professional working on a construction project"
          />
        </div>

        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-label">
            INFIVISION ENGINEERING COMPANY LIMITED
          </span>

          <h1>
            Engineering a Better
            <span> and Secured Living.</span>
          </h1>

          <p>
            Delivering professional engineering solutions across electrical,
            mechanical, civil construction, security systems, ICT and
            renewable energy for a safer, smarter and more sustainable future.
          </p>

          <div className="hero-actions">
            <a href="#services" className="primary-button">
              Explore Our Services <span>→</span>
            </a>

            <a href="#contact" className="secondary-button">
              ☎ Contact Us
            </a>
          </div>
        </div>

        <div className="hero-highlight">
          <strong>Engineering</strong>
          <span>Quality · Innovation · Safety · Reliability</span>
        </div>
      </section>

      {/* COMPANY HIGHLIGHTS */}
      <section className="highlights-bar">
        <div className="highlight-item">
          <span className="highlight-symbol">✓</span>
          <div>
            <strong>Quality First</strong>
            <small>Professional standards</small>
          </div>
        </div>

        <div className="highlight-item">
          <span className="highlight-symbol">⚙</span>
          <div>
            <strong>Integrated Solutions</strong>
            <small>Multiple engineering disciplines</small>
          </div>
        </div>

        <div className="highlight-item">
          <span className="highlight-symbol">⌂</span>
          <div>
            <strong>Client Focus</strong>
            <small>Solutions tailored to your needs</small>
          </div>
        </div>

        <div className="highlight-item">
          <span className="highlight-symbol">♧</span>
          <div>
            <strong>Sustainability</strong>
            <small>Building for the future</small>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="about-section section-container" id="about">
        <div className="about-image">
          <img
            src={images.building}
            alt="Building project representing engineering and construction"
            loading="lazy"
          />

          <div className="image-caption">
            <span>INFIVISION ENGINEERING</span>
            <strong>Building a Better Future</strong>
          </div>
        </div>

        <div className="about-content">
          <SectionHeading
            label="ABOUT INFIVISION"
            title="Your Trusted Engineering Partner"
          />

          <p>
            InfiVision Engineering Company Limited is an engineering company
            operating in Zanzibar, providing services across civil
            construction, electrical systems, mechanical works, security
            systems, ICT and renewable energy.
          </p>

          <p>
            Our approach emphasizes professional expertise, attention to
            quality, safety, reliable service and practical solutions designed
            around the requirements of each project.
          </p>

          <p>
            From planning and installation to construction, maintenance and
            technical support, we aim to help clients develop dependable
            infrastructure and functional spaces.
          </p>

          <a href="#mission" className="primary-button">
            Discover Our Company <span>→</span>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section section-container" id="services">
        <SectionHeading
          label="WHAT WE DO"
          title="Comprehensive Engineering Solutions"
          description="Explore our engineering services for residential, commercial and infrastructure requirements."
        />

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
                <span className="service-number">{service.number}</span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a
                  href="#contact"
                  className="service-link"
                  aria-label={`Enquire about ${service.title}`}
                >
                  Enquire about this service <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="mission-section" id="mission">
        <div className="mission-image">
          <img
            src={images.team}
            alt="Engineering team working together"
            loading="lazy"
          />
        </div>

        <div className="mission-content">
          <span className="section-label">OUR PURPOSE</span>
          <h2>Engineering with Purpose. Building with Confidence.</h2>

          <div className="mission-card">
            <span className="mission-icon">◎</span>
            <div>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional engineering services that improve
                lives, safeguard property and promote sustainable growth
                through professional, reliable and customized solutions.
              </p>
            </div>
          </div>

          <div className="mission-card">
            <span className="mission-icon">◉</span>
            <div>
              <h3>Our Vision</h3>
              <p>
                To become Zanzibar's most innovative, trusted and
                forward-thinking engineering firm, recognized for sustainable
                infrastructure, intelligent systems and high-quality
                workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT PORTFOLIO */}
      <section className="projects-section section-container" id="projects">
        <SectionHeading
          label="OUR EXPERIENCE"
          title="Selected Engineering Projects"
          description="Explore selected projects presented in the InfiVision Engineering Company profile."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={`${project.client}-${index}`}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} in ${project.location}`}
                  loading="lazy"
                />

                <span
                  className={`project-status ${project.status === 'Completed' ? 'completed' : ''
                    }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="project-content">
                <span className="project-location">
                  {project.location}
                </span>
                <h3>{project.title}</h3>
                <p>Client: {project.client}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-note">
          <p>
            For information about additional projects, services and
            specifications, contact our team.
          </p>

          <a href="#contact" className="primary-button">
            Discuss Your Project <span>→</span>
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us-section" id="why-us">
        <div className="section-container">
          <SectionHeading
            label="WHY INFIVISION"
            title="A Partner You Can Rely On"
            description="We focus on the values that matter when delivering engineering services."
          />

          <div className="values-grid">
            <article className="value-card">
              <span>01</span>
              <h3>Integrity</h3>
              <p>
                Transparency, ethical conduct and professional responsibility
                guide our work.
              </p>
            </article>

            <article className="value-card">
              <span>02</span>
              <h3>Excellence</h3>
              <p>
                We emphasize quality in technical execution and customer
                service.
              </p>
            </article>

            <article className="value-card">
              <span>03</span>
              <h3>Innovation</h3>
              <p>
                We embrace modern engineering tools and practical
                problem-solving.
              </p>
            </article>

            <article className="value-card">
              <span>04</span>
              <h3>Teamwork</h3>
              <p>
                Collaboration and coordination help us address project
                requirements.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <span className="section-label">LET'S WORK TOGETHER</span>

          <h2>Have an Engineering Project in Mind?</h2>

          <p>
            Tell us about your requirements. Contact InfiVision Engineering
            Company Limited to discuss the services and technical support
            your project needs.
          </p>

          <div className="contact-actions">
            <a
              href="https://wa.me/255778679262"
              className="primary-button"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <span>→</span>
            </a>

            <a
              href="mailto:info@infivisionengineering.com"
              className="secondary-button"
            >
              Send Us an Email
            </a>
          </div>

          <div className="contact-details">
            <div>
              <strong>Email</strong>
              <a href="mailto:info@infivisionengineering.com">
                info@infivisionengineering.com
              </a>
            </div>

            <div>
              <strong>Telephone</strong>
              {contacts.map((phone) => (
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  key={phone}
                >
                  {phone}
                </a>
              ))}
            </div>

            <div>
              <strong>Location</strong>
              <span>Zanzibar, Tanzania</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="footer-brand">
            <span className="brand-logo">
              <img
                src={images.logo}
                alt="InfiVision Engineering logo"
                loading="lazy"
              />
            </span>

            <span className="brand-text">
              <strong>INFIVISION</strong>
              <small>ENGINEERING COMPANY LIMITED</small>
            </span>
          </a>

          <p>
            A Vision to Better and Secured Living.
            <br />
            Professional engineering solutions for a safer and more
            sustainable future.
          </p>

          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} InfiVision Engineering Company
            Limited. All rights reserved.
          </span>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/255778679262"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with InfiVision Engineering on WhatsApp"
      >
        <span className="whatsapp-symbol">☎</span>
        <span>
          <strong>Chat with us</strong>
          <small>WhatsApp support</small>
        </span>
      </a>
    </main>
  )
}

export default App