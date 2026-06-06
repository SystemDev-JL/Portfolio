import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiX, FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi';
import { projects, filterCategories } from '../data/projects';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

// Placeholder backgrounds for projects without photos
const placeholderGradients = [
  null, null, null,
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    gsap.fromTo('.modal__overlay', { opacity: 0 }, { opacity: 1, duration: 0.25 });
    gsap.fromTo('.modal__panel',
      { y: 60, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' }
    );
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClose = () => {
    gsap.to('.modal__overlay', { opacity: 0, duration: 0.2, onComplete: onClose });
  };

  return (
    <div className="modal__overlay" onClick={handleClose}>
      <div className="modal__panel glass-card" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={handleClose}><FiX size={20} /></button>

        {/* Image */}
        <div className="modal__image-wrap">
          {project.image ? (
            <img src={project.image} alt={project.title} className="modal__image" />
          ) : (
            <div className="modal__image-placeholder">
              <span className="modal__placeholder-label">{project.title.charAt(0)}</span>
            </div>
          )}
          <div className="modal__image-overlay" />
          <div className="modal__image-meta">
            <span className="modal__category">{project.category}</span>
          </div>
        </div>

        <div className="modal__body">
          <h3 className="modal__title">{project.title}</h3>
          <p className="modal__subtitle">{project.subtitle}</p>
          <p className="modal__desc">{project.description}</p>

          {/* Features */}
          <div className="modal__section">
            <h4 className="modal__section-title">Key Features</h4>
            <ul className="modal__features">
              {project.features.map((f, i) => (
                <li key={i} className="modal__feature">
                  <FiCheck size={14} className="modal__feature-icon" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div className="modal__section">
            <h4 className="modal__section-title">Tech Stack</h4>
            <div className="modal__tech">
              {project.tech.map(t => (
                <span key={t} className="modal__tech-badge">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="modal__actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '14px', padding: '10px 20px' }}>
                <FiGithub size={16} /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
                <FiExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen, index }) {
  return (
    <div className="project-card glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Thumbnail */}
      <div className="project-card__thumb">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-card__img" />
        ) : (
          <div className="project-card__placeholder" style={{ background: placeholderGradients[project.id % 3] }}>
            <span className="project-card__placeholder-letter">{project.title.charAt(0)}</span>
          </div>
        )}
        <div className="project-card__overlay">
          <button className="project-card__view-btn" onClick={() => onOpen(project)}>
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="project-card__body">
        <div className="project-card__tags">
          {project.tags.slice(0, 2).map(t => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description.substring(0, 110)}...</p>
        <div className="project-card__tech">
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className="project-card__tech-badge">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="project-card__tech-badge project-card__tech-more">+{project.tech.length - 4}</span>
          )}
        </div>
        <div className="project-card__footer">
          <button className="project-card__details-btn" onClick={() => onOpen(project)}>
            View Details
          </button>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-card__icon-btn" aria-label="GitHub">
              <FiGithub size={16} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__icon-btn" aria-label="Live Demo">
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects__header',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects__header', start: 'top 85%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo('.project-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [activeFilter]);

  return (
    <section id="projects" ref={sectionRef} className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="eyebrow">Featured Projects</span>
          <h2 className="section-title">Things I've <em>built</em></h2>
          <p className="section-desc">
            A selection of projects across web, mobile, management systems, and IoT.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="projects__filters">
          {filterCategories.map(cat => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeFilter === cat ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="projects__grid">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
