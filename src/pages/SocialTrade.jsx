import React from 'react';
import { siteData } from '../data/portfolioData';
import { ShieldAlert, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';

const SocialTrade = () => {
  const { education, broker, comparison, risks } = siteData.socialTrade;

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="section" style={{ paddingBottom: '3rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>Social Trading & Education</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            {education.content}
          </p>
        </div>
      </section>

      {/* Broker Partner Section */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="glass-panel" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            background: 'linear-gradient(145deg, rgba(18,18,18,0.9) 0%, rgba(16, 185, 129, 0.1) 100%)'
          }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                Main Broker Partner: {broker.name}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                {broker.description}
              </p>
              <a href={broker.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
                Open Vantage Account <ExternalLink size={18} />
              </a>
            </div>
            <div style={{ flex: '0 0 auto' }}>
              {/* Dummy Broker Logo/Graphic */}
              <div style={{ 
                width: '120px', height: '120px', borderRadius: '20px',
                background: 'var(--bg-primary)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 30px var(--accent-glow)'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Vantage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Trading Methods Comparison</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {comparison.map((method, idx) => (
              <div key={idx} className="glass-panel" style={{
                borderColor: method.type === 'Copy Trading' ? 'var(--accent-primary)' : 'var(--glass-border)',
                boxShadow: method.type === 'Copy Trading' ? '0 0 20px rgba(16, 185, 129, 0.2)' : 'none',
                position: 'relative'
              }}>
                {method.type === 'Copy Trading' && (
                  <div style={{
                    position: 'absolute', top: '-12px', right: '20px',
                    background: 'var(--accent-primary)', color: '#000',
                    padding: '2px 10px', borderRadius: '12px', fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>Recommended</div>
                )}
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                  {method.type}
                </h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#34d399', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={18} /> Pros
                  </h4>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    {method.pros.map((pro, i) => (
                      <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', listStyleType: 'disc' }}>{pro}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 style={{ color: '#f87171', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertTriangle size={18} /> Cons
                  </h4>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    {method.cons.map((con, i) => (
                      <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', listStyleType: 'disc' }}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ borderLeft: '4px solid #f59e0b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <ShieldAlert size={28} color="#f59e0b" />
              <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Open Risk Warning</h2>
            </div>
            <ul style={{ paddingLeft: '2.5rem' }}>
              {risks.map((risk, idx) => (
                <li key={idx} style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', listStyleType: 'disc' }}>{risk}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialTrade;
