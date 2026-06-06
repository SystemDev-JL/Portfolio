import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import jlLogo from '../assets/jl-logo.svg';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return [dark, setDark];
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useDarkMode();
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo('.mobile-link',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.06, ease: 'power2.out' }
      );
    }
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={e => handleNavClick(e, '#hero')}>
          <img src={jlLogo} alt="JL" className="navbar__logo-img" />
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link" onClick={e => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark mode toggle */}
        <button
          className="navbar__theme-toggle"
          onClick={() => setDark(d => !d)}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? <FiSun size={17} /> : <FiMoon size={17} />}
        </button>

        {/* CTA */}
        <a href="#contact" className="navbar__cta btn-primary" onClick={e => handleNavClick(e, '#contact')}>
          Hire Me
        </a>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div ref={mobileMenuRef} className="navbar__mobile">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-link navbar__mobile-link"
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-bottom">
            <button
              className="navbar__theme-toggle"
              onClick={() => setDark(d => !d)}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <FiSun size={17} /> : <FiMoon size={17} />}
              <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <a href="#contact" className="btn-primary mobile-link" style={{ justifyContent: 'center', flex: 1 }} onClick={e => handleNavClick(e, '#contact')}>
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
