import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';
import './DevFocus.css';

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  { num: '01', title: 'Practical Business Systems', desc: 'Building tools that solve real problems — not just demos.' },
  { num: '02', title: 'Responsive Web & Mobile UI', desc: 'Clean interfaces that work beautifully on any screen size.' },
  { num: '03', title: 'Database-Driven Applications', desc: 'Designing efficient data models for complex workflows.' },
  { num: '04', title: 'Admin Dashboard Development', desc: 'Powerful management panels with actionable insights.' },
  { num: '05', title: 'Workflow Automation', desc: 'Turning repetitive manual processes into automated digital flows.' },
  { num: '06', title: 'Mobile-Cloud Integration', desc: 'Connecting mobile apps with Firebase, Supabase, and cloud backends.' },
  { num: '07', title: 'Multi-Stack Proficiency', desc: 'Laravel, React, Flutter, Firebase, MySQL — full ownership of the stack.' },
  { num: '08', title: 'Digitizing Manual Processes', desc: 'Transforming paper-based operations into digital business systems.' },
];

export default function DevFocus() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.devfocus__header',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.devfocus__header', start: 'top 85%' }
        }
      );

      gsap.fromTo('.devfocus__item',
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.devfocus__list', start: 'top 80%' }
        }
      );

      gsap.fromTo('.devfocus__cta-box',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.devfocus__cta-box', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="focus" ref={sectionRef} className="devfocus">
      <div className="container">
        <div className="devfocus__header">
          <span className="eyebrow">Development Focus</span>
          <h2 className="section-title">What I'm <em>good at</em></h2>
          <p className="section-desc">
            Core strengths I bring to every project — from architecture to delivery.
          </p>
        </div>

        <div className="devfocus__body">
          <div className="devfocus__list">
            {strengths.map((s) => (
              <div key={s.num} className="devfocus__item">
                <span className="devfocus__item-num">{s.num}</span>
                <div className="devfocus__item-content">
                  <h3 className="devfocus__item-title">{s.title}</h3>
                  <p className="devfocus__item-desc">{s.desc}</p>
                </div>
                <FiArrowRight className="devfocus__item-arrow" size={16} />
              </div>
            ))}
          </div>

          {/* CTA box */}
          <div className="devfocus__cta-box glass-card">
            <div className="devfocus__cta-orb" />
            <span className="eyebrow" style={{ marginBottom: '16px' }}>Let's Work</span>
            <h3 className="devfocus__cta-title">Have a project in mind?</h3>
            <p className="devfocus__cta-desc">
              Let's build something useful, efficient, and built to last. I'm available for freelance
              projects, contracts, and full-time roles.
            </p>
            <button className="btn-primary" onClick={() => scrollTo('#contact')}>
              Get In Touch <FiArrowRight />
            </button>

            <div className="devfocus__cta-stats">
              <div className="devfocus__cta-stat">
                <span className="devfocus__cta-stat-num">7+</span>
                <span className="devfocus__cta-stat-label">Projects Delivered</span>
              </div>
              <div className="devfocus__cta-stat">
                <span className="devfocus__cta-stat-num">10+</span>
                <span className="devfocus__cta-stat-label">Technologies</span>
              </div>
              <div className="devfocus__cta-stat">
                <span className="devfocus__cta-stat-num">3+</span>
                <span className="devfocus__cta-stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
