import { User, Briefcase, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="container fade-in">
      <div style={{ marginTop: '120px', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>ABOUT <span className="highlight"><span>ME</span></span></h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.8' }}>
          I am a Data Analyst and Automation Engineer dedicated to transforming complex business problems into streamlined, automated workflows and clear, actionable dashboards.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginBottom: '60px' }}>
          
          <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '16px', borderRadius: '4px' }}>
              <Code size={32} color="var(--accent)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>My Approach</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0' }}>
                I believe that no human should have to do repetitive, manual data entry. Whether it's writing Python scripts to scrape data, building n8n workflows to manage emails, or using SQL to analyze millions of rows, my goal is to save time and reduce errors.
              </p>
            </div>
          </div>

          <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '16px', borderRadius: '4px' }}>
              <Briefcase size={32} color="var(--accent)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Technical Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Python', 'SQL', 'Power BI', 'Excel', 'Google Sheets', 'n8n', 'Pabbly', 'Web Scraping', 'HTML/CSS'].map(skill => (
                  <span key={skill} style={{ background: 'var(--text-primary)', color: 'var(--bg-darker)', padding: '4px 12px', fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '0.85rem', borderRadius: '2px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
