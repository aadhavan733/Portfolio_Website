import React from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart2, TrendingUp, Table, LineChart } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "AI Workflow Automation",
    description: "Connect apps and automate repetitive tasks using n8n, Python, and OpenAI.",
    icon: <Settings size={36} color="var(--accent)" />
  },
  {
    id: 2,
    title: "Data Analysis",
    description: "Extracting insights from messy data using Python (Pandas/NumPy) and SQL.",
    icon: <BarChart2 size={36} color="var(--accent)" />
  },
  {
    id: 3,
    title: "Power BI Dashboards",
    description: "Building interactive, real-time dashboards to track KPIs and metrics.",
    icon: <TrendingUp size={36} color="var(--accent)" />
  },
  {
    id: 4,
    title: "Excel & SQL Reporting",
    description: "Advanced Excel modeling and complex SQL queries for business reporting.",
    icon: <Table size={36} color="var(--accent)" />
  },
  {
    id: 5,
    title: "Business Analysis",
    description: "Translating business needs into technical solutions and process improvements.",
    icon: <LineChart size={36} color="var(--accent)" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="container" style={{ padding: '100px 24px' }}>
      <motion.h2 
        style={{ fontSize: '3rem', marginBottom: '60px' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="highlight"><span>SERVICES</span></span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {services.map((service, index) => (
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
    </section>
  );
};

export default ServicesSection;
