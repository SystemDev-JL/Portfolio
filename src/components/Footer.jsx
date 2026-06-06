import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiArrowUp } from 'react-icons/fi';
import jlLogo from '../assets/jl-logo.svg';
import './Footer.css';

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#hero" className="footer__logo" onClick={e => { e.preventDefault(); scrollTo('#hero'); }}>
              <img src={jlLogo} alt="JL" className="footer__logo-img" />
            </a>
            <span className="footer__tagline">Full Stack Developer</span>
            <p className="footer__desc">
              Building practical digital systems for businesses, organizations, and communities.
            </p>
            <div className="footer__socials">
              {/* ← Replace href values with your actual social links */}
              <a href="https://github.com/systemdev-jl" target="_blank" rel="noreferrer" className="footer__social"><FiGithub size={16} /></a>
              <a href="https://www.linkedin.com/in/jl-aguirre-2918343a6/" target="_blank" rel="noreferrer" className="footer__social"><FiLinkedin size={16} /></a>
              <a href="https://www.facebook.com/Jl.Aguirre.17" target="_blank" rel="noreferrer" className="footer__social"><FiFacebook size={16} /></a>
              <a href="mailto:jlaguirre2019@gmail.com" className="footer__social"><FiMail size={16} /></a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="footer__link" onClick={e => { e.preventDefault(); scrollTo(l.href); }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__links">
              {['Web Development', 'Mobile Apps', 'Admin Dashboards', 'Management Systems', 'IoT Development'].map(s => (
                <li key={s}><span className="footer__link footer__link--static">{s}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          {/* ← Replace "John Lloyd Aguirre" with your name */}
          <p className="footer__copy">© {new Date().getFullYear()} John Lloyd Aguirre. All rights reserved.</p>
          <p className="footer__built">Built with React &amp; GSAP</p>
          <button className="footer__back-top" onClick={() => scrollTo('#hero')} aria-label="Back to top">
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
