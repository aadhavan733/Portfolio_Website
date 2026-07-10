import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const categories = ["All", "Automation", "Data Analytics"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projectsData.filter(project => filter === "All" || project.category === filter);

  return (
    <div className="container fade-in" style={{ position: 'relative' }}>
      <div className="glow-orb primary large" style={{ top: '10%', left: '-5%' }}></div>
      <div className="glow-orb secondary medium" style={{ top: '60%', right: '-5%' }}></div>
      
      <div style={{ marginTop: '120px' }}>
        <h1 className="hero-heading" style={{ marginBottom: '10px' }}>MY <span className="highlight"><span>PROJECTS</span></span></h1>
        <p className="hero-subtext" style={{ color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '700px' }}>
          A showcase of my recent work in workflow automation, custom scripting, and data analytics.
        </p>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '60px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 16px',
                background: filter === cat ? 'var(--accent)' : 'transparent',
                color: filter === cat ? 'var(--bg-darker)' : 'var(--text-primary)',
                border: '1px solid var(--accent)',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px', marginBottom: '100px' }}>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`glass-card project-card ${project.status !== 'Completed' ? 'coming-soon' : ''}`}
                style={{ position: 'relative' }}
              >
                <div className="project-header">
                  <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '15px', borderRadius: '50%' }}>
                    {project.icon}
                  </div>
                  <span className={`status-badge ${project.status === 'Completed' ? 'completed' : 'pending'}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.6rem', margin: '10px 0' }}>{project.title}</h3>
                <p className="project-desc" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                
                <div className={`tech-stack ${project.status !== 'Completed' ? 'pending-stack' : ''}`}>
                  {project.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
                      <FaGithub size={20} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
                      <ExternalLink size={20} /> Demo
                    </a>
                  )}
                  {!project.githubUrl && !project.liveUrl && project.status !== 'Completed' && (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>Deployment in progress...</span>
                  )}
                  {!project.githubUrl && !project.liveUrl && project.status === 'Completed' && (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>Private Repository</span>
                  )}
                  {project.status === 'Completed' && (
                    <Link to={`/projects/${project.id}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold', marginLeft: 'auto' }}>
                      View Full Report →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
