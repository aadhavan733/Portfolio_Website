import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    // If project doesn't exist or isn't completed, redirect
    if (!project || project.status !== 'Completed') {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project || project.status !== 'Completed') {
    return null; // Will redirect shortly
  }

  return (
    <div className="container fade-in" style={{ position: 'relative', paddingBottom: '100px' }}>
      <div className="glow-orb primary large" style={{ top: '5%', left: '-10%' }}></div>
      <div className="glow-orb secondary medium" style={{ top: '40%', right: '-5%' }}></div>
      
      <div style={{ marginTop: '120px' }}>
        <Link to="/projects" className="back-link">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="project-hero"
        >
          <div className="project-hero-content">
            <span className="project-category">{project.category}</span>
            <h1 className="hero-heading" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
              {project.title.split(' ')[0]} <span className="highlight"><span>{project.title.substring(project.title.indexOf(' ') + 1)}</span></span>
            </h1>
            <p className="hero-subtext" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '30px' }}>
              {project.description}
            </p>
            
            <div className="tech-stack" style={{ marginBottom: '40px', justifyContent: 'flex-start' }}>
              {project.technologies.map(tech => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-links" style={{ gap: '20px' }}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaGithub size={20} /> View Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ExternalLink size={20} /> Live Demo
                </a>
              )}
            </div>
          </div>
          
          <div className="project-icon-large">
            {project.icon}
          </div>
        </motion.div>

        {project.image && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="project-featured-image"
          >
            <img src={project.image} alt={project.title} />
          </motion.div>
        )}

        {project.detailedReport && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="detailed-report"
          >
            <div className="report-section glass-card">
              <h2 className="section-title">The Challenge</h2>
              <p>{project.detailedReport.problem}</p>
            </div>
            
            <div className="report-section glass-card">
              <h2 className="section-title">The Solution</h2>
              <p>{project.detailedReport.solution}</p>
            </div>
            
            <div className="report-section glass-card highlight-border">
              <h2 className="section-title">Key Results</h2>
              <p>{project.detailedReport.results}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
