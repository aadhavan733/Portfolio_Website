import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="hero-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '60px', flexWrap: 'wrap', width: '100%' }}>
        <motion.div 
          style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '24px' }}>
            <div style={{ width: '50px', height: '2px', background: 'var(--accent)' }}></div>
            <span style={{ color: 'var(--accent)', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Outfit' }}>
              Data Analytics Enthusiast
            </span>
          </div>
          
          <h1 className="hero-heading" style={{ lineHeight: '1.05', marginBottom: '30px', maxWidth: '900px' }}>
            I TRANSLATE <br/>
            <span className="highlight"><span>DATA</span></span> <br/>
            INTO STRATEGIC INSIGHTS.
          </h1>
          
          <p className="hero-subtext" style={{ maxWidth: '650px', marginBottom: '60px', color: 'var(--text-secondary)' }}>
            I'm Aadhavan. An MBA student and Computer Science graduate specializing in SQL, Python, and business analytics. I focus on logistics KPI analysis, operations, and helping businesses make data-driven decisions.
          </p>
          
          <div className="hero-buttons" style={{ display: 'flex', gap: '40px', marginBottom: '60px' }}>
            <Link to="/#projects" className="btn">View My Work <ArrowRight size={22} /></Link>
            <a href="/Aadhavan_K_Resume_Updated.docx" download className="btn btn-outline">Download Resume</a>
          </div>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* Social Icons will be added here or in Footer, keeping it simple for Hero for now */}
          </div>
        </motion.div>

        <motion.div 
          style={{ flex: '0 1 auto', marginBottom: '60px' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/profile.jpg" alt="Aadhavan" className="profile-img" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
