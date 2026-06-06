import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFacebook, FiSend, FiDownload } from 'react-icons/fi';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact__header',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact__header', start: 'top 85%' }
        }
      );
      gsap.fromTo('.contact__form-card',
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact__body', start: 'top 80%' }
        }
      );
      gsap.fromTo('.contact__info-card',
        { x: 40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact__body', start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'bf7ceb24-b087-4574-bf0f-966eda842cef',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="container">
        <div className="contact__header">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's <em>build together</em></h2>
          <p className="section-desc">
            Have a project in mind? Let's build something useful and efficient. I'm open to
            freelance work, contracts, and full-time opportunities.
          </p>
        </div>

        <div className="contact__body">
          {/* Form */}
          <div className="contact__form-card glass-card">
            <h3 className="contact__form-title">Send a Message</h3>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="contact__input"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="contact__input"
                    required
                  />
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, collaboration, etc."
                  className="contact__input"
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="contact__input contact__textarea"
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`btn-primary contact__submit ${status === 'sent' ? 'contact__submit--sent' : ''} ${status === 'error' ? 'contact__submit--error' : ''}`}
              >
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && '✓ Message Sent!'}
                {status === 'error' && '✗ Failed, try again'}
                {status === 'idle' && <><FiSend size={15} /> Send Message</>}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="contact__info-card glass-card">
            <h3 className="contact__form-title">Contact Info</h3>

            <div className="contact__info-items">
              <a
                href="mailto:jlaguirre2019@gmail.com"
                className="contact__info-item"
              >
                <div className="contact__info-icon contact__info-icon--cyan">
                  <FiMail size={18} />
                </div>
                <div>
                  <span className="contact__info-label">Email</span>
                  <span className="contact__info-value">jlaguirre2019@gmail.com</span>
                </div>
              </a>

              <div className="contact__info-item">
                <div className="contact__info-icon contact__info-icon--violet">
                  <FiPhone size={18} />
                </div>
                <div>
                  <span className="contact__info-label">Phone</span>
                  <span className="contact__info-value">+63 928 436 0121</span>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon contact__info-icon--teal">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <span className="contact__info-label">Location</span>
                  {/* ← Replace with your location */}
                  <span className="contact__info-value">Philippines</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="contact__socials">
              <span className="contact__socials-label">Find me on</span>
              <div className="contact__social-links">
                {/* ← Replace href values with your actual social links */}
                <a href="https://github.com/systemdev-jl" target="_blank" rel="noreferrer" className="contact__social-btn">
                  <FiGithub size={18} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/jl-aguirre-2918343a6/" target="_blank" rel="noreferrer" className="contact__social-btn">
                  <FiLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.facebook.com/Jl.Aguirre.17" target="_blank" rel="noreferrer" className="contact__social-btn">
                  <FiFacebook size={18} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Resume */}
            <div className="contact__resume">
              <a
                href="/Resume_.pdf"
                download
                className="btn-outline contact__resume-btn"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
            </div>

            {/* Availability status */}
            <div className="contact__availability">
              <span className="contact__avail-dot" />
              <span className="contact__avail-text">
                Currently available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
