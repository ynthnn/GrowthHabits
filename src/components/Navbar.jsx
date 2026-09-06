import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = ['About', 'Portfolio', 'Social Trade', 'Education', 'Tools'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <div className="logo" onClick={() => handleTabClick('About')}>
          <img src="/logo.svg" alt="Growth Habits" className="logo-icon" />
          <span>Growth<span className="text-muted">Habits</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {tabs.map((tab) => (
            <div 
              key={tab} 
              className={`nav-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
              {activeTab === tab && <div className="active-indicator animate-fade-in" />}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu animate-fade-in">
          {tabs.map((tab) => (
            <div 
              key={tab} 
              className={`mobile-nav-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .navbar.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }
        .logo-icon {
          height: 32px;
          width: 32px;
        }
        .text-muted {
          color: var(--text-muted);
        }
        .desktop-menu {
          display: flex;
          gap: 2rem;
        }
        .nav-item {
          cursor: pointer;
          color: var(--text-primary);
          font-weight: 400;
          position: relative;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
        }
        .nav-item.active {
          color: var(--accent-primary);
          font-weight: 600;
        }
        .nav-item:hover {
          color: var(--accent-primary);
        }
        .active-indicator {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--accent-primary);
          border-radius: 2px;
        }
        .mobile-toggle {
          display: none;
          cursor: pointer;
          color: var(--text-primary);
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          background: var(--bg-secondary);
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: 1rem 2rem;
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }
        .mobile-nav-item {
          padding: 1rem 0;
          border-bottom: 1px solid var(--glass-border);
          cursor: pointer;
          font-weight: 500;
        }
        .mobile-nav-item:last-child {
          border-bottom: none;
        }
        .mobile-nav-item.active {
          color: var(--accent-primary);
        }
        
        @media (max-width: 768px) {
          .desktop-menu { display: none; }
          .mobile-toggle { display: block; }
          .mobile-menu { display: flex; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
