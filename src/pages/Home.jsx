import { ArrowRight, Code, Database, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container fade-in">
      <div className="hero-container" style={{ marginTop: '120px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column' }}>
          <div className="hero-badge" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '24px' }}>
            <div style={{ width: '50px', height: '2px', background: 'var(--accent)' }}></div>
            <span style={{ color: 'var(--accent)', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Outfit' }}>Data & Automation</span>
          </div>
          
          <h1 className="hero-heading" style={{ lineHeight: '1.05', marginBottom: '30px', maxWidth: '900px' }}>
            I ENGINEER <br/>
            <span className="highlight"><span>SMART SYSTEMS</span></span> <br/>
            THAT DRIVE GROWTH.
          </h1>
          
          <p className="hero-subtext" style={{ maxWidth: '650px', marginBottom: '60px', color: 'var(--text-secondary)' }}>
            I'm Aadhavan. I specialize in extracting messy data, building AI-driven workflows, and engineering automated solutions that save you hundreds of hours.
          </p>
          
          <div className="hero-buttons" style={{ display: 'flex', gap: '40px', marginBottom: '60px' }}>
            <Link to="/projects" className="btn">View My Work <ArrowRight size={22} /></Link>
            <Link to="/services" className="btn btn-outline">Explore Services</Link>
          </div>
        </div>

        <div style={{ flex: '0 1 auto', marginBottom: '60px' }}>
          <img src="/profile.jpg" alt="Aadhavan" className="profile-img" />
        </div>
      </div>


        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%' }}>
          <div className="glass-card">
            <Bot size={48} color="#facc15" style={{ marginBottom: '24px' }} />
            <h3>AI Automation</h3>
            <p>Custom Telegram bots, automated email responders, and intelligent workflows using n8n and Python.</p>
          </div>
          <div className="glass-card">
            <Database size={48} color="#facc15" style={{ marginBottom: '24px' }} />
            <h3>Data Analytics</h3>
            <p>Transforming complex datasets into clear, actionable Power BI and Excel dashboards using advanced SQL.</p>
          </div>
          <div className="glass-card">
            <Code size={48} color="#facc15" style={{ marginBottom: '24px' }} />
            <h3>Web Scraping</h3>
            <p>Extracting structured data from the web automatically to keep your business informed and ahead of the curve.</p>
          </div>
        </div>
    </div>
  );
};

export default Home;
