import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container fade-in" style={{ position: 'relative' }}>
      <div className="glow-orb primary large" style={{ top: '15%', left: '-10%' }}></div>
      <div className="glow-orb secondary medium" style={{ top: '60%', right: '-5%' }}></div>

      <div style={{ marginTop: '120px', marginBottom: '100px' }}>
        <h1 className="hero-heading" style={{ marginBottom: '10px' }}>TECH <span className="highlight"><span>INSIGHTS</span></span></h1>
        <p className="hero-subtext" style={{ color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '700px' }}>
          Articles on automation, data engineering, and building smart systems.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {posts.map(post => (
            <div key={post.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontFamily: 'Outfit', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                <Calendar size={16} /> {post.date}
              </div>
              <h2 style={{ fontSize: '1.8rem', margin: '10px 0 0 0' }}>{post.title}</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.6', flexGrow: 1, margin: '0 0 20px 0' }}>
                {post.summary}
              </p>
              <Link to={`/blog/${post.id}`} className="btn btn-outline" style={{ width: 'fit-content' }}>
                Read Article <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
