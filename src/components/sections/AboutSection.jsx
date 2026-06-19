import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="container" style={{ padding: '100px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>
          <span className="highlight"><span>ABOUT ME</span></span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
          <p>
            I am an MBA student with a B.E. in Computer Science Engineering, combining technical proficiency in SQL, Python, and data analysis with hands-on experience in logistics KPI analysis and cost forecasting.
          </p>
          <p>
            I am skilled in identifying trends and translating data into actionable business insights. I am eager to contribute to a data analyst role focused on operations, analytics, and performance monitoring.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
