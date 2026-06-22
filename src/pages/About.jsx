import { User, Briefcase, Code, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="container fade-in">
      <div style={{ marginTop: '120px', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>ABOUT <span className="highlight"><span>ME</span></span></h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.8' }}>
          I am an MBA student with a B.E. in Computer Science Engineering, combining technical proficiency in SQL, Python, and data analysis with hands-on experience in logistics KPI analysis and cost forecasting. I am skilled in identifying trends and translating data into actionable business insights.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginBottom: '60px' }}>
          
          <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '16px', borderRadius: '4px' }}>
              <GraduationCap size={32} color="var(--accent)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Education & Leadership</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ fontSize: '1.1rem', margin: '0', color: 'var(--text-primary)' }}>MBA Student</h4>
                    <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 'bold' }}>Current</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', margin: '5px 0 0 0', fontSize: '0.95rem' }}>Management Business Administration - Focusing on operations, analytics, and performance monitoring.</p>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ fontSize: '1.1rem', margin: '0', color: 'var(--text-primary)' }}>B.E. Computer Science Engineering</h4>
                    <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 'bold' }}>Graduated</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', margin: '5px 0 0 0', fontSize: '0.95rem' }}>Sri Ramakrishna Engineering College (SREC) - Combined technical proficiency in SQL, Python, and data analysis.</p>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ fontSize: '1.1rem', margin: '0', color: 'var(--text-primary)' }}>Joint Secretary, Nature Club</h4>
                    <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 'bold' }}>Leadership</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', margin: '5px 0 0 0', fontSize: '0.95rem' }}>Sri Ramakrishna Engineering College (SREC) - Organized events and managed club operations. Active member of the Quiz Club.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '16px', borderRadius: '4px' }}>
              <Code size={32} color="var(--accent)" />
            </div>
            <div style={{ width: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Skills & Expertise</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '10px' }}>Data & Analytics</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['SQL', 'Python', 'Excel', 'Power BI', 'Tableau'].map(skill => (
                      <span key={skill} style={{ background: 'var(--text-primary)', color: 'var(--bg-darker)', padding: '4px 12px', fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '0.85rem', borderRadius: '2px' }}>{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '10px' }}>Programming & Dev</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['C', 'C++', 'Java', 'HTML', 'CSS'].map(skill => (
                      <span key={skill} style={{ background: 'var(--text-primary)', color: 'var(--bg-darker)', padding: '4px 12px', fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '0.85rem', borderRadius: '2px' }}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '10px' }}>Core Interests</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['Logistics Management', 'Business Analytics', 'KPI Monitoring', 'Software Testing'].map(skill => (
                      <span key={skill} style={{ background: 'var(--text-primary)', color: 'var(--bg-darker)', padding: '4px 12px', fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '0.85rem', borderRadius: '2px' }}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '10px' }}>Tools</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['Blender', 'DaVinci Resolve'].map(skill => (
                      <span key={skill} style={{ background: 'var(--text-primary)', color: 'var(--bg-darker)', padding: '4px 12px', fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '0.85rem', borderRadius: '2px' }}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
