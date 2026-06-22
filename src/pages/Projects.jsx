import { Code, Bot, BarChart, FileJson, Keyboard } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="container fade-in">
      <div style={{ marginTop: '120px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>FEATURED <span className="highlight"><span>PROJECTS</span></span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px' }}>
          Real-world solutions I've engineered to automate workflows, analyze data, and drive efficiency.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
          
          {/* Project 1 - Completed */}
          <div className="glass-card project-card">
            <div className="project-header">
              <Bot size={40} color="var(--accent)" />
              <div className="status-badge completed">Deployed</div>
            </div>
            <h2>AI Job Alert System</h2>
            <p className="project-desc">
              A fully autonomous cloud-based automation pipeline that scrapes remote job boards, filters for specific AI/Data roles, eliminates duplicates, and delivers formatted alerts directly to Telegram. Runs 24/7 via GitHub Actions.
            </p>
            <div className="tech-stack">
              <span>Python</span>
              <span>BeautifulSoup</span>
              <span>GitHub Actions</span>
              <span>Telegram API</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/aadhavan733/ai-job-alert-system" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                <Code size={18} /> View Code
              </a>
            </div>
          </div>

          {/* Project 2 - Completed */}
          <div className="glass-card project-card">
            <div className="project-header">
              <Keyboard size={40} color="var(--accent)" />
              <div className="status-badge completed">Completed</div>
            </div>
            <h2>Automation Typing Software</h2>
            <p className="project-desc">
              A Python-based automation script engineered to simulate human-like typing for automated data entry and repetitive text tasks, reducing manual workload and increasing efficiency.
            </p>
            <div className="tech-stack">
              <span>Python</span>
              <span>PyAutoGUI</span>
              <span>Automation</span>
            </div>
          </div>

          {/* Project 3 - Coming Soon */}
          <div className="glass-card project-card coming-soon">
            <div className="project-header">
              <BarChart size={40} color="var(--text-secondary)" />
              <div className="status-badge pending">Coming Soon</div>
            </div>
            <h2 style={{ color: 'var(--text-secondary)' }}>Executive Sales Dashboard</h2>
            <p className="project-desc" style={{ color: 'var(--text-secondary)' }}>
              An interactive Power BI dashboard extracting data from SQL databases to visualize key performance indicators, revenue growth, and regional sales distribution.
            </p>
            <div className="tech-stack pending-stack">
              <span>Power BI</span>
              <span>SQL Server</span>
              <span>DAX</span>
            </div>
          </div>

          {/* Project 4 - Coming Soon */}
          <div className="glass-card project-card coming-soon">
            <div className="project-header">
              <FileJson size={40} color="var(--text-secondary)" />
              <div className="status-badge pending">Coming Soon</div>
            </div>
            <h2 style={{ color: 'var(--text-secondary)' }}>Automated Invoicing Pipeline</h2>
            <p className="project-desc" style={{ color: 'var(--text-secondary)' }}>
              A workflow built with n8n that reads new Stripe transactions, generates PDF invoices, and automatically emails them to clients.
            </p>
            <div className="tech-stack pending-stack">
              <span>n8n</span>
              <span>Stripe API</span>
              <span>Node.js</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
