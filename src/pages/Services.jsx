import React, { useEffect } from 'react';
import { servicesData } from '../data/servicesData';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container fade-in" style={{ position: 'relative' }}>
      <div className="glow-orb secondary large" style={{ top: '10%', right: '-5%' }}></div>
      
      <div style={{ marginTop: '120px' }}>
        <h1 className="hero-heading" style={{ marginBottom: '10px' }}>PROFESSIONAL <span className="highlight"><span>SERVICES</span></span></h1>
        <p className="hero-subtext" style={{ color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '700px' }}>
          I help businesses scale without hiring more staff by engineering custom automation pipelines and data analytics solutions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '100px' }}>
          {servicesData.map((svc) => (
            <div key={svc.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px 30px' }}>
              <div style={{ background: 'rgba(250, 204, 21, 0.1)', width: 'fit-content', padding: '16px', borderRadius: '50%' }}>
                {svc.icon}
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0' }}>{svc.title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.05rem', margin: '0' }}>
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
