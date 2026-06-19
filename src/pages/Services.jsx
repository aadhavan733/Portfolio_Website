import { BarChart3, Terminal, Bot, LineChart, Database, FileSpreadsheet } from 'lucide-react';

const services = [
  {
    title: 'Power BI Dashboards',
    desc: 'Transform raw, unstructured data into beautiful, interactive dashboards that provide clear business insights and KPIs.',
    icon: <BarChart3 size={40} color="var(--accent)" />
  },
  {
    title: 'Python Automation',
    desc: 'Custom scripts designed to eliminate manual data entry, automate web scraping, and handle repetitive daily tasks instantly.',
    icon: <Terminal size={40} color="var(--accent)" />
  },
  {
    title: 'AI Workflow Automation',
    desc: 'Integrating ChatGPT, n8n, and custom agents to create smart workflows that reply to emails, qualify leads, and manage CRMs.',
    icon: <Bot size={40} color="var(--accent)" />
  },
  {
    title: 'Data Analysis',
    desc: 'Deep diving into your historical data using Python and Pandas to uncover hidden trends, bottlenecks, and growth opportunities.',
    icon: <LineChart size={40} color="var(--accent)" />
  },
  {
    title: 'SQL Reporting',
    desc: 'Writing highly optimized SQL queries to extract, clean, and organize complex data sets from massive relational databases.',
    icon: <Database size={40} color="var(--accent)" />
  },
  {
    title: 'Google Sheets Automation',
    desc: 'Connecting APIs to Google Sheets to build live trackers, automated reporting, and lightweight CRMs for your team.',
    icon: <FileSpreadsheet size={40} color="var(--accent)" />
  }
];

const Services = () => {
  return (
    <div className="container fade-in">
      <div style={{ marginTop: '120px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>PROFESSIONAL <span className="highlight"><span>SERVICES</span></span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '700px' }}>
          I help businesses scale without hiring more staff by engineering custom automation pipelines and data analytics solutions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {services.map((svc, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'rgba(250, 204, 21, 0.1)', width: 'fit-content', padding: '16px', borderRadius: '4px', borderLeft: '2px solid var(--accent)' }}>
                {svc.icon}
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0' }}>{svc.title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.05rem', margin: '0' }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
