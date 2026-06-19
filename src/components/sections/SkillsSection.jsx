import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Data & Analytics",
    skills: ["SQL", "Python", "Excel", "Power BI", "Tableau"]
  },
  {
    category: "Programming & Dev",
    skills: ["C", "C++", "Java", "Python", "SQL", "HTML", "CSS"]
  },
  {
    category: "Core Interests",
    skills: ["Logistics Management", "Business Analytics", "KPI Monitoring", "Software Testing"]
  },
  {
    category: "Tools",
    skills: ["Blender", "DaVinci Resolve"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="container" style={{ padding: '100px 24px' }}>
      <motion.h2 
        style={{ fontSize: '3rem', marginBottom: '60px' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="highlight"><span>SKILLS</span></span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        {skillsData.map((group, index) => (
          <motion.div 
            key={group.category}
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '15px', marginBottom: '20px' }}>
              {group.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {group.skills.map((skill) => (
                <span 
                  key={skill} 
                  style={{ 
                    padding: '8px 16px', 
                    background: 'rgba(250, 204, 21, 0.1)', 
                    color: 'var(--accent)', 
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--bg-darker)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(250, 204, 21, 0.1)';
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
