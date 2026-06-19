import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container" style={{ marginTop: '150px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem' }}>Article Not Found</h2>
        <Link to="/blog" className="btn" style={{ marginTop: '20px' }}>Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="container fade-in">
      <div style={{ marginTop: '120px', maxWidth: '800px', margin: '120px auto 0' }}>
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', textDecoration: 'none', marginBottom: '40px', fontFamily: 'Outfit', fontWeight: 'bold', textTransform: 'uppercase' }}>
          <ArrowLeft size={18} strokeWidth={3} /> Back to Blog
        </Link>
        
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', lineHeight: '1.1' }}>{post.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontFamily: 'Outfit', fontSize: '1rem', marginBottom: '50px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <Calendar size={18} /> {post.date}
        </div>
        
        <div className="markdown-body">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
