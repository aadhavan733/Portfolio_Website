import { Mail, Link, Terminal, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container fade-in">
      <div style={{ marginTop: '120px', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>LET'S <span className="highlight"><span>CONNECT</span></span></h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '60px', lineHeight: '1.8' }}>
          Whether you need a custom Power BI dashboard, a fully automated Python workflow, or just want to chat about data, I'd love to hear from you.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          
          <a href="mailto:aadhavankanmaniraja@gmail.com" className="glass-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px' }}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '20px', borderRadius: '50%' }}>
              <Mail size={40} color="var(--accent)" />
            </div>
            <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>Email Me</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem', wordBreak: 'break-all' }}>aadhavankanmaniraja@gmail.com</p>
          </a>

          <a href="https://www.linkedin.com/in/aadhavan-kanmaniraja" target="_blank" rel="noreferrer" className="glass-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px' }}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '20px', borderRadius: '50%' }}>
              <Briefcase size={40} color="var(--accent)" />
            </div>
            <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>LinkedIn</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem', wordBreak: 'break-all' }}>in/aadhavan-kanmaniraja</p>
          </a>


          <a href="https://github.com/aadhavan733" target="_blank" rel="noreferrer" className="glass-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px' }}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '20px', borderRadius: '50%' }}>
              <Terminal size={40} color="var(--accent)" />
            </div>
            <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>GitHub</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem', wordBreak: 'break-all' }}>github.com/aadhavan733</p>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
