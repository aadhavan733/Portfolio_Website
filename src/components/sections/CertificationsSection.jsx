import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: "Google Data Analytics Professional Certificate",
    organization: "Coursera",
    year: "2023",
    url: "#"
  },
  {
    id: 2,
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    organization: "Microsoft",
    year: "2023",
    url: "#"
  },
  {
    id: 3,
    name: "n8n Workflow Automation Expert",
    organization: "n8n",
    year: "2022",
    url: "#"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="container" style={{ padding: '100px 24px' }}>
      <motion.h2 
        style={{ fontSize: '3rem', marginBottom: '60px' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="highlight"><span>CERTIFICATIONS</span></span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {certifications.map((cert, index) => (
          <motion.div 
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Award size={32} color="var(--accent)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{cert.name}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '5px' }}>{cert.organization}</p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontWeight: '600' }}>{cert.year}</p>
            
            <a 
              href={cert.url} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline" 
              style={{ marginTop: 'auto', padding: '8px 16px', fontSize: '0.9rem', alignSelf: 'flex-start' }}
            >
              Verify Certificate <ExternalLink size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
