import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar fade-in">
      <Link to="/" className="nav-brand" onClick={() => setIsMobileMenuOpen(false)}>
        <Terminal size={32} color="var(--accent)" strokeWidth={2.5} />
        Aadhavan<span>_</span>
      </Link>
      
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link to="/#skills" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Skills</Link>
        <Link to="/projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
        <Link to="/services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
        <Link to="/blog" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
        <Link to="/#contact" className="btn btn-outline mobile-only-btn" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</Link>
      </div>
      
      <div className="nav-actions">
        <ThemeToggle />
        <Link to="/#contact" className="btn btn-outline desktop-only-btn">Let's Talk</Link>
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={28} color="var(--text-primary)" /> : <Menu size={28} color="var(--text-primary)" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
