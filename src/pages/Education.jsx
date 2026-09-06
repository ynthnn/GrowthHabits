import React from 'react';
import { siteData } from '../data/portfolioData';
import { BookOpen, FileText, Download, Play, Calendar } from 'lucide-react';

const Education = () => {
  const { marketOutlook, deepResearch, videos } = siteData.education;

  return (
    <div className="animate-fade-in">
      <section className="section" style={{ paddingBottom: '3rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>Education & Research Center</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Enhance your understanding of financial markets and algorithmic strategies through our exclusive research.
          </p>
        </div>
      </section>

      {/* Market Outlook */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <BookOpen size={28} color="var(--accent-primary)" />
            <h2 style={{ fontSize: '2rem', margin: 0 }}>Market Outlook</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {marketOutlook.map((item) => (
              <div key={item.id} className="glass-panel" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    <Calendar size={14} /> {item.date}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', flex: 1, marginBottom: '1.5rem' }}>{item.summary}</p>
                  <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Research */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <FileText size={28} color="var(--accent-primary)" />
            <h2 style={{ fontSize: '2rem', margin: 0 }}>Deep Research (PDF)</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
            {deepResearch.map((doc, idx) => (
              <div key={idx} className="glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '1rem', background: 'var(--accent-glow)', borderRadius: '12px' }}>
                    <FileText size={24} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{doc.title}</h3>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Size: {doc.size}</span>
                  </div>
                </div>
                <a href={doc.link} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                  <Download size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Videos */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Play size={28} color="var(--accent-primary)" />
            <h2 style={{ fontSize: '2rem', margin: 0 }}>Educational Videos</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {videos.map((video, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '1rem' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginBottom: '1rem' }}>
                  <iframe 
                    src={video.url} 
                    title={video.title}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 style={{ fontSize: '1.1rem', textAlign: 'center' }}>{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
