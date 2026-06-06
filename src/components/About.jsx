import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCode, FiSettings, FiDatabase } from 'react-icons/fi';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: <FiCode size={20} />,
    title: 'Web & Mobile Development',
    desc: 'Building responsive web platforms and cross-platform mobile apps using React, Flutter, and React Native.',
  },
  {
    icon: <FiSettings size={20} />,
    title: 'Business System Automation',
    desc: 'Turning manual business workflows into efficient digital systems — payroll, loans, bookings, and operations.',
  },
  {
    icon: <FiDatabase size={20} />,
    title: 'Database & Backend Solutions',
    desc: 'Designing robust backend architectures with Laravel, Node.js, MySQL, Firebase, and Supabase.',
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about__header',
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.about__header', start: 'top 85%' } }
      );
      gsap.fromTo('.about__text-block',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.about__text-block', start: 'top 85%' } }
      );
      gsap.fromTo('.about__highlight',
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.about__highlights', start: 'top 82%' } }
      );
      gsap.fromTo('.about__tag',
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.04, ease: 'power2.out',
          scrollTrigger: { trigger: '.about__tags', start: 'top 88%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="container">
        <div className="about__header">
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">Building systems that<br /><em>actually work</em></h2>
        </div>

        <div className="about__body">
          <div className="about__text-block">
            <p className="about__paragraph">
              I am a <strong>Full Stack Developer</strong> focused on building practical digital
              systems for businesses, organizations, and communities. My work includes web platforms,
              mobile applications, admin dashboards, booking systems, payroll tools, loan systems,
              and IoT-based solutions.
            </p>
            <p className="about__paragraph">
              I enjoy turning real-world processes into clean, efficient, and user-friendly
              applications — from the database layer all the way up to the user interface.
            </p>

            <div className="about__tags">
              {[
                'Web Applications', 'Mobile Applications', 'Management Systems',
                'Booking Systems', 'Payroll Systems', 'Loan Systems',
                'IoT / Arduino', 'Admin Dashboards', 'Business Automation', 'Database Platforms',
              ].map(tag => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </div>

            <div className="about__quick-info">
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                {/* ← Replace with your city/country */}
                <span className="about__info-value">Philippines</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Status</span>
                <span className="about__info-value about__info-value--available">
                  <span className="about__dot" /> Available for Projects
                </span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Focus</span>
                <span className="about__info-value">Full Stack Development</span>
              </div>
            </div>
          </div>

          <div className="about__highlights">
            {highlights.map(h => (
              <div key={h.title} className="about__highlight">
                <div className="about__highlight-icon">{h.icon}</div>
                <h3 className="about__highlight-title">{h.title}</h3>
                <p className="about__highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
