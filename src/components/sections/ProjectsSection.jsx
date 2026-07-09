import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';

const categories = ["All", "Automation", "Data Analytics"];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  // Filter and get top 3
  const filteredProjects = projectsData
    .filter(project => filter === "All" || project.category === filter)
    .slice(0, 3); // Only show top 3 on Home page

  return (
    <section id="projects" className="container" style={{ padding: '100px 24px', position: 'relative' }}>
      <div className="glow-orb primary medium" style={{ top: '20%', left: '-5%' }}></div>
      
      <motion.h2 
        style={{ fontSize: '3rem', marginBottom: '20px' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        FEATURED <span className="highlight"><span>PROJECTS</span></span>
      </motion.h2>

      <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
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

      <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {project.image && (
                <div style={{ width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '12px', borderRadius: '50%' }}>
                  {project.icon}
                </div>
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '700',
                  padding: '4px 10px', 
                  borderRadius: '12px',
                  background: project.status === 'Completed' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: project.status === 'Completed' ? '#4ade80' : 'var(--text-secondary)',
                  border: project.status === 'Completed' ? '1px solid #4ade80' : '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {project.status}
                </span>
              </div>
              
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', flexGrow: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                {project.technologies.map(tech => (
                  <span key={tech} style={{ fontSize: '0.8rem', color: 'var(--accent)', background: 'rgba(250, 204, 21, 0.05)', padding: '4px 8px', borderRadius: '4px' }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
                    <FaGithub size={18} /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
                    <ExternalLink size={18} /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <Link to="/projects" className="btn btn-outline">View All Projects</Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
