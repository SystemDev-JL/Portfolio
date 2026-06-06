import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiCode, FiSmartphone, FiLayout, FiCalendar,
  FiSettings, FiDatabase, FiGlobe, FiShoppingCart,
  FiCpu, FiZap
} from 'react-icons/fi';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: <FiCode size={20} />, title: 'Full Stack Web Development', desc: 'End-to-end web applications from UI to server, built with React, Laravel, and modern frameworks.' },
  { icon: <FiSmartphone size={20} />, title: 'Mobile App Development', desc: 'Cross-platform mobile apps for Android and iOS using Flutter and React Native.' },
  { icon: <FiLayout size={20} />, title: 'Admin Dashboard Development', desc: 'Feature-rich admin panels with data visualization, user management, and analytics.' },
  { icon: <FiCalendar size={20} />, title: 'Booking System Development', desc: 'Online reservation and scheduling systems for resorts, services, and businesses.' },
  { icon: <FiSettings size={20} />, title: 'Management System Development', desc: 'Payroll, loan, inventory, and operations management systems tailored to your workflows.' },
  { icon: <FiDatabase size={20} />, title: 'Database Design', desc: 'Efficient relational and NoSQL database architecture using MySQL, Firebase, and Supabase.' },
  { icon: <FiGlobe size={20} />, title: 'WordPress Development', desc: 'Custom WordPress websites, themes, and plugins for business and content platforms.' },
  { icon: <FiShoppingCart size={20} />, title: 'Shopify Store Setup', desc: 'Shopify store configuration, theme customization, and e-commerce optimization.' },
  { icon: <FiCpu size={20} />, title: 'IoT / Arduino Development', desc: 'Hardware-software integration for IoT projects including sensors, automation, and monitoring.' },
  { icon: <FiZap size={20} />, title: 'Business Process Automation', desc: 'Digitize and automate manual workflows to increase efficiency and reduce human error.' },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services__header',
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.services__header', start: 'top 85%' } }
      );
      gsap.fromTo('.service-card',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power3.out',
          scrollTrigger: { trigger: '.services__grid', start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="services">
      <div className="container">
        <div className="services__header">
          <span className="eyebrow">What I Offer</span>
          <h2 className="section-title">Services &amp; <em>expertise</em></h2>
          <p className="section-desc">
            Practical digital solutions for businesses, organizations, and communities — built to last.
          </p>
        </div>

        <div className="services__grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
