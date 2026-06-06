import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TechStack.css';

gsap.registerPlugin(ScrollTrigger);

const stackCategories = [
  {
    label: 'Frontend & Mobile',
    items: ['React JS', 'React Native', 'Flutter', 'WordPress', 'Shopify'],
  },
  {
    label: 'Backend',
    items: ['Laravel', 'Node.js', 'C# / .NET', 'Java', 'Python', 'PHP'],
  },
  {
    label: 'Databases & Cloud',
    items: ['MySQL', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    label: 'IoT & Hardware',
    items: ['Arduino'],
  },
];

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stack__header',
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.stack__header', start: 'top 85%' } }
      );
      gsap.fromTo('.stack__category',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.stack__grid', start: 'top 82%' } }
      );
      gsap.fromTo('.stack__badge',
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.03, ease: 'power2.out',
          scrollTrigger: { trigger: '.stack__grid', start: 'top 78%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stack" ref={sectionRef} className="stack">
      <div className="container">
        <div className="stack__header">
          <span className="eyebrow">Tech Stack</span>
          <h2 className="section-title">Tools I <em>work with</em></h2>
          <p className="section-desc">
            A focused set of technologies I use to design, build, and ship practical solutions.
          </p>
        </div>

        <div className="stack__grid">
          {stackCategories.map(cat => (
            <div key={cat.label} className="stack__category">
              <span className="stack__cat-label">{cat.label}</span>
              <div className="stack__badges">
                {cat.items.map(item => (
                  <div key={item} className="stack__badge">
                    <span className="stack__badge-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
