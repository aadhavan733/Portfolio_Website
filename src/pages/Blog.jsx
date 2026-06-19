import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="container fade-in">
      <div style={{ marginTop: '120px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>TECH <span className="highlight"><span>INSIGHTS</span></span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px' }}>
          Articles on automation, data engineering, and building smart systems.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
          {posts.map(post => (
            <div key={post.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '0' }}>{post.title}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontFamily: 'Outfit', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                <Calendar size={16} /> {post.date}
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '10px', marginBottom: '20px' }}>
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
