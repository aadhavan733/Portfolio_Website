import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "MBA Student",
    company: "Management Business Administration",
    date: "Current",
    description: "Focusing on operations, analytics, and performance monitoring.",
    icon: <GraduationCap size={20} color="var(--bg-darker)" />
  },
  {
    id: 2,
    title: "B.E. Computer Science Engineering",
    company: "Sri Ramakrishna Engineering College (SREC)",
    date: "Graduated",
    description: "Combined technical proficiency in SQL, Python, and data analysis.",
    icon: <GraduationCap size={20} color="var(--bg-darker)" />
  },
  {
    id: 3,
    title: "Joint Secretary, Nature Club",
    company: "Sri Ramakrishna Engineering College (SREC)",
    date: "Leadership",
    description: "Organized events and managed club operations. Also an active member of the Quiz Club.",
    icon: <Briefcase size={20} color="var(--bg-darker)" />
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="container" style={{ padding: '100px 24px' }}>
      <motion.h2 
        style={{ fontSize: '3rem', marginBottom: '60px' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="highlight"><span>EDUCATION & LEADERSHIP</span></span>
      </motion.h2>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Timeline line */}
        <div style={{ 
          position: 'absolute', 
          left: '20px', 
          top: '0', 
          bottom: '0', 
          width: '2px', 
          background: 'var(--glass-border)',
          zIndex: 0
        }}></div>

        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            style={{ 
              display: 'flex', 
              gap: '30px', 
              marginBottom: '40px',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              background: 'var(--accent)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {exp.icon}
            </div>
            <div className="glass-card" style={{ padding: '24px', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>{exp.title}</h3>
                  <span style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '1rem' }}>{exp.company}</span>
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', background: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: '20px' }}>
                  {exp.date}
                </span>
              </div>
              <p style={{ marginTop: '15px', color: 'var(--text-secondary)' }}>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
