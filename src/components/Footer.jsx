import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '40px 24px', background: 'var(--bg-darker)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
          <Terminal size={28} color="var(--accent)" strokeWidth={2.5} />
          Aadhavan<span style={{ color: 'var(--accent)' }}>_</span>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '0.95rem' }}>
          &copy; {new Date().getFullYear()} Aadhavan. All rights reserved.
        </p>
        
        <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Engineered with <Heart size={14} color="var(--accent)" /> and modern web technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
