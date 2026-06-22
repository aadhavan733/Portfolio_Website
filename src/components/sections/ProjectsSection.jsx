import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Bot, BarChart, FileJson, ExternalLink, Keyboard } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "AI Job Alert System",
    description: "A fully autonomous cloud-based automation pipeline that scrapes remote job boards, filters for specific AI/Data roles, eliminates duplicates, and delivers formatted alerts directly to Telegram.",
    technologies: ["Python", "BeautifulSoup", "GitHub Actions", "Telegram API"],
    category: "Automation",
    status: "Completed",
    githubUrl: "https://github.com/aadhavan733/ai-job-alert-system",
    liveUrl: null,
    icon: <Bot size={32} color="var(--accent)" />
  },
  {
    id: 2,
    title: "Automation Typing Software",
    description: "A Python-based automation script engineered to simulate human-like typing for automated data entry and repetitive text tasks, reducing manual workload and increasing efficiency.",
    technologies: ["Python", "PyAutoGUI", "Automation"],
    category: "Automation",
    status: "Completed",
    githubUrl: null,
    liveUrl: null,
    icon: <Keyboard size={32} color="var(--accent)" />
  },
  {
    id: 3,
    title: "Executive Sales Dashboard",
    description: "An interactive Power BI dashboard extracting data from SQL databases to visualize key performance indicators, revenue growth, and regional sales distribution.",
    technologies: ["Power BI", "SQL Server", "DAX"],
    category: "Data Analytics",
    status: "In Progress",
    githubUrl: null,
    liveUrl: null,
    icon: <BarChart size={32} color="var(--accent)" />
  },
  {
    id: 4,
    title: "Automated Invoicing Pipeline",
    description: "A workflow built with n8n that reads new Stripe transactions, generates PDF invoices, and automatically emails them to clients.",
    technologies: ["n8n", "Stripe API", "Node.js"],
    category: "Automation",
    status: "In Progress",
    githubUrl: null,
    liveUrl: null,
    icon: <FileJson size={32} color="var(--accent)" />
  }
];

const categories = ["All", "Automation", "Data Analytics"];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter(project => filter === "All" || project.category === filter);

  return (
    <section id="projects" className="container" style={{ padding: '100px 24px' }}>
      <motion.h2 
        style={{ fontSize: '3rem', marginBottom: '20px' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="highlight"><span>PROJECTS</span></span>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '12px', borderRadius: '50%' }}>
                  {project.icon}
                </div>
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '700',
                  padding: '4px 10px', 
                  borderRadius: '12px',
                  background: project.status === 'Completed' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)',
                  color: project.status === 'Completed' ? '#4ade80' : '#facc15'
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
    </section>
  );
};

export default ProjectsSection;
