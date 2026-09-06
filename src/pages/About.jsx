import React from 'react';
import { siteData } from '../data/portfolioData';
import { Bot, LineChart, Network } from 'lucide-react';

const About = () => {
  const { heroText, heroHighlight, thesis, focus, pillarsTitle, pillars } = siteData.about;

  return (
    <div className="animate-fade-in about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <h1 className="hero-title">
            {heroText} <br />
            <span className="text-gradient">{heroHighlight}</span>
          </h1>
          <p className="hero-thesis">
            {thesis}
          </p>
        </div>
      </section>

      {/* Focus Section */}
      <section className="section focus-section">
        <div className="container">
          <h2 className="section-title">{focus.title}</h2>
          <div className="focus-grid">
            {focus.items.map((item, index) => (
              <div key={index} className="focus-item glass-panel">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section pillars-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            {pillarsTitle}
          </h2>
          
          <div className="pillars-grid">
            {pillars.map((pillar, index) => {
              const icons = [
                <Bot size={40} color="var(--accent-primary)" />, 
                <LineChart size={40} color="var(--accent-primary)" />, 
                <Network size={40} color="var(--accent-primary)" />
              ];
              return (
                <div key={index} className="glass-panel pillar-card">
                  <div className="pillar-icon">
                    {icons[index]}
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          padding: 8rem 2rem 6rem;
          text-align: center;
          background: radial-gradient(circle at top, rgba(16, 185, 129, 0.15) 0%, transparent 50%);
        }
        .hero-container {
          max-width: 900px;
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .hero-thesis {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          color: var(--text-secondary);
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .focus-section {
          padding-top: 2rem;
        }
        .focus-grid {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .focus-item {
          flex: 1 1 200px;
          max-width: 300px;
          text-align: center;
          padding: 3rem 2rem;
          border-radius: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: linear-gradient(145deg, rgba(18,18,18,0.8) 0%, rgba(16,185,129,0.05) 100%);
        }
        .focus-item h3 {
          font-size: 2rem;
          color: var(--accent-primary);
          margin: 0;
          letter-spacing: 2px;
        }
        .focus-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(16,185,129,0.15);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        .pillar-card {
          text-align: center;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pillar-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--accent-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }
        .pillar-card:hover .pillar-icon {
          transform: scale(1.1);
        }
        .pillar-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .pillar-card p {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 6rem 1.5rem 4rem;
          }
          .focus-grid {
            flex-direction: column;
            align-items: center;
          }
          .focus-item {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
