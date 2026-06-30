import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, BarChart2 } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: <GraduationCap size={24} />, title: 'Education', desc: 'MBA & B.E. Computer Science' },
    { icon: <Briefcase size={24} />, title: 'Focus', desc: 'Operations & Analytics' },
    { icon: <Code size={24} />, title: 'Technical', desc: 'SQL, Python, Power BI' },
    { icon: <BarChart2 size={24} />, title: 'Domain', desc: 'Logistics KPI Analysis' }
  ];

  return (
    <section id="about" className="container" style={{ padding: '120px 24px', position: 'relative' }}>
      <div className="glow-orb secondary medium" style={{ top: '30%', right: '-10%' }}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '3.5rem', marginBottom: '60px' }}>
          DISCOVER <span className="highlight"><span>MY BACKGROUND</span></span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          
          {/* Left Column: Text Summary */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', margin: 0 }}>
              I am an MBA student with a B.E. in Computer Science Engineering, combining technical proficiency in SQL, Python, and data analysis with hands-on experience in logistics KPI analysis and cost forecasting.
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', margin: 0 }}>
              I am skilled in identifying trends and translating data into actionable business insights. I am eager to contribute to a data analyst role focused on operations, analytics, and performance monitoring.
            </p>
          </div>

          {/* Right Column: Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-card" 
                style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '15px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div style={{ color: 'var(--accent)', background: 'rgba(234, 179, 8, 0.1)', width: '50px', height: '50px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', textTransform: 'none' }}>{stat.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
