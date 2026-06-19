import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    // Simulate form submission
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="container" style={{ padding: '100px 24px' }}>
      <motion.h2 
        style={{ fontSize: '3rem', marginBottom: '60px' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="highlight"><span>GET IN TOUCH</span></span>
      </motion.h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <motion.div 
          style={{ flex: '1', minWidth: '300px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Let's Build Something Awesome.</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
            Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a href="mailto:aadhavankanmaniraja@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
              <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '12px', borderRadius: '50%' }}>
                <Mail size={24} color="var(--accent)" />
              </div>
              aadhavankanmaniraja@gmail.com
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.2rem' }}>
              <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '12px', borderRadius: '50%' }}>
                <Send size={24} color="var(--accent)" />
              </div>
              +91 7339151538
            </div>
            <a href="https://www.linkedin.com/in/aadhavan-kanmaniraja" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
              <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '12px', borderRadius: '50%' }}>
                <FaLinkedin size={24} color="var(--accent)" />
              </div>
              LinkedIn
            </a>
            <a href="https://github.com/aadhavan733" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
              <div style={{ background: 'rgba(250, 204, 21, 0.1)', padding: '12px', borderRadius: '50%' }}>
                <FaGithub size={24} color="var(--accent)" />
              </div>
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div 
          style={{ flex: '1.5', minWidth: '300px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '4px', color: 'var(--text-primary)', fontFamily: 'Outfit', fontSize: '1rem', outline: 'none' }} 
              />
            </div>
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '4px', color: 'var(--text-primary)', fontFamily: 'Outfit', fontSize: '1rem', outline: 'none' }} 
              />
            </div>
            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '4px', color: 'var(--text-primary)', fontFamily: 'Outfit', fontSize: '1rem', outline: 'none', resize: 'vertical' }} 
              ></textarea>
            </div>
            
            {status && (
              <div style={{ color: status.includes('successfully') ? '#4ade80' : 'var(--accent)', fontSize: '0.9rem' }}>
                {status}
              </div>
            )}

            <button type="submit" className="btn" style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
