import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo('.hero__eyebrow',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      )
      .fromTo('.hero__name',
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo('.hero__role',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('.hero__desc',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo('.hero__actions',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo('.hero__stat',
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo('.hero__panel',
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0.5
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = id => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" ref={heroRef} className="hero">
      {/* Subtle background texture lines */}
      <div className="hero__lines" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="hero__line" />
        ))}
      </div>

      <div className="container hero__container">
        {/* ── Left content ── */}
        <div className="hero__content">
          <span className="hero__eyebrow eyebrow">
            Full Stack Developer
          </span>

          {/* ← Replace with your name */}
          <h1 className="hero__name">
            John Lloyd<br />
            <em>Aguirre</em>
          </h1>

          <p className="hero__role">
            Building web, mobile & system-based<br />
            solutions that actually work.
          </p>

          <p className="hero__desc">
            I design and develop full-stack applications — from admin dashboards
            and booking systems to payroll tools, mobile apps, and IoT solutions.
            Clean code, practical systems, real results.
          </p>

          <div className="hero__actions">
            <button className="btn-primary" onClick={() => scrollTo('#projects')}>
              View Projects <FiArrowRight size={15} />
            </button>
            <button className="btn-outline" onClick={() => scrollTo('#contact')}>
              Get in Touch
            </button>
          </div>

          {/* Social row */}
          <div className="hero__social-row">
            {/* ← Replace href with your actual links */}
            <a href="https://github.com/systemdev-jl" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
              <FiGithub size={16} /> GitHub
            </a>
            <span className="hero__social-sep" />
            <a href="https://www.linkedin.com/in/jl-aguirre-2918343a6/" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FiLinkedin size={16} /> LinkedIn
            </a>
            <span className="hero__social-sep" />
            <a href="mailto:jlaguirre2019@gmail.com" className="hero__social-link" aria-label="Email">
              <FiMail size={16} /> Email
            </a>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="hero__panel card">
          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">7+</span>
              <span className="hero__stat-label">Projects Built</span>
            </div>
            <div className="hero__stat-rule" />
            <div className="hero__stat">
              <span className="hero__stat-num">10+</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
            <div className="hero__stat-rule" />
            <div className="hero__stat">
              <span className="hero__stat-num">3+</span>
              <span className="hero__stat-label">Years Exp.</span>
            </div>
          </div>

          {/* Capability list */}
          <div className="hero__capabilities">
            <span className="hero__cap-label">Specializations</span>
            <ul className="hero__cap-list">
              {[
                'Web Application Development',
                'Mobile App Development',
                'Management & Booking Systems',
                'Admin Dashboard Design',
                'Database Architecture',
                'IoT & Arduino Systems',
                'Business Process Automation',
              ].map(item => (
                <li key={item} className="hero__cap-item">
                  <span className="hero__cap-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div className="hero__availability">
            <span className="hero__avail-dot" />
            <span>Open to new projects</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll">
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
