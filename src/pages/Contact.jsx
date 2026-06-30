import React, { useEffect } from 'react';
import { Mail, Link, Terminal, Briefcase, Phone } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container fade-in" style={{ position: 'relative' }}>
      <div className="glow-orb primary large" style={{ top: '10%', left: '-5%' }}></div>
      <div className="glow-orb secondary medium" style={{ bottom: '10%', right: '-5%' }}></div>

      <div style={{ marginTop: '120px', maxWidth: '1000px', margin: '120px auto 100px auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="hero-heading" style={{ marginBottom: '20px' }}>LET'S <span className="highlight"><span>CONNECT</span></span></h1>
          <p className="hero-subtext" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '700px' }}>
            Whether you want to discuss data analytics, operations, logistics KPIs, or just want to chat about identifying business trends, I'd love to hear from you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          
          <a href="mailto:aadhavankanmaniraja@gmail.com" className="glass-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform = 'none'}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '20px', borderRadius: '50%' }}>
              <Mail size={40} color="var(--accent)" />
            </div>
            <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.4rem' }}>Email Me</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', wordBreak: 'break-all' }}>aadhavankanmaniraja@gmail.com</p>
          </a>

          <a href="tel:+917339151538" className="glass-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform = 'none'}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '20px', borderRadius: '50%' }}>
              <Phone size={40} color="var(--accent)" />
            </div>
            <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.4rem' }}>Call Me</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', wordBreak: 'break-all' }}>+91 7339151538</p>
          </a>

          <a href="https://www.linkedin.com/in/aadhavan-kanmaniraja" target="_blank" rel="noreferrer" className="glass-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform = 'none'}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '20px', borderRadius: '50%' }}>
              <Briefcase size={40} color="var(--accent)" />
            </div>
            <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.4rem' }}>LinkedIn</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', wordBreak: 'break-all' }}>in/aadhavan-kanmaniraja</p>
          </a>


          <a href="https://github.com/aadhavan733" target="_blank" rel="noreferrer" className="glass-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform = 'none'}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '20px', borderRadius: '50%' }}>
              <Terminal size={40} color="var(--accent)" />
            </div>
            <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.4rem' }}>GitHub</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', wordBreak: 'break-all' }}>github.com/aadhavan733</p>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
