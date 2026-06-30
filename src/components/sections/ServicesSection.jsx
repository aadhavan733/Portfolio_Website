import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';

const ServicesSection = () => {
  // Only show top 3 services on the home page
  const featuredServices = servicesData.slice(0, 3);

  return (
    <section id="services" className="container" style={{ padding: '100px 24px', position: 'relative' }}>
      <div className="glow-orb secondary large" style={{ top: '40%', right: '-10%' }}></div>
      
      <motion.h2 
        style={{ fontSize: '3rem', marginBottom: '60px' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        FEATURED <span className="highlight"><span>SERVICES</span></span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {featuredServices.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '40px 30px' }}
            whileHover={{ y: -10 }}
          >
            <div style={{ marginBottom: '20px', background: 'rgba(250, 204, 21, 0.1)', padding: '15px', borderRadius: '50%' }}>
              {service.icon}
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <Link to="/services" className="btn btn-outline">View All Services</Link>
      </div>
    </section>
  );
};

export default ServicesSection;
