import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { siteData } from '../data/portfolioData';
import { Activity, Target, Percent } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Helper component for stat cards
const StatCard = ({ title, value, icon }) => (
  <div style={{ 
    background: 'rgba(255,255,255,0.03)', 
    padding: '1rem', 
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
    <div style={{ 
      background: 'var(--glass-bg)', 
      padding: '0.5rem', 
      borderRadius: '8px',
      color: 'var(--accent-primary)'
    }}>
      {icon}
    </div>
    <div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{title}</div>
      <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{value}</div>
    </div>
  </div>
);

const Portfolio = () => {
  const { evergreen, compoundX, benchmarks } = siteData.portfolio;

  // Common chart options
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#e5e5e5' }
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#a3a3a3' }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#a3a3a3' }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  // Evergreen Chart Data
  const evergreenData = {
    labels: evergreen.monthlyReturns.map(m => m.month),
    datasets: [{
      label: 'Evergreen Equity Curve',
      data: evergreen.equityCurve,
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  // CompoundX Chart Data
  const compoundXData = {
    labels: compoundX.monthlyReturns.map(m => m.month),
    datasets: [{
      label: 'CompoundX Equity Curve',
      data: compoundX.equityCurve,
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  // Benchmark Comparison Chart Data
  const benchmarkData = {
    labels: benchmarks.labels,
    datasets: [
      {
        label: 'Project Evergreen',
        data: evergreen.equityCurve.slice(0, benchmarks.labels.length),
        borderColor: '#10B981',
        tension: 0.4
      },
      {
        label: 'CompoundX',
        data: compoundX.equityCurve.slice(0, benchmarks.labels.length),
        borderColor: '#3b82f6',
        tension: 0.4
      },
      {
        label: 'BTC (Bitcoin)',
        data: benchmarks.btc,
        borderColor: '#f59e0b',
        borderDash: [5, 5],
        tension: 0.4
      },
      {
        label: 'XAU (Gold)',
        data: benchmarks.xau,
        borderColor: '#fbbf24',
        borderDash: [5, 5],
        tension: 0.4
      },
      {
        label: 'S&P 500',
        data: benchmarks.snp,
        borderColor: '#ef4444',
        borderDash: [5, 5],
        tension: 0.4
      }
    ]
  };

  return (
    <div className="animate-fade-in">
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h1 className="section-title">Real-Time Portfolio Performance</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Chart 1: Evergreen */}
            <div className="glass-panel">
              <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
                Project Evergreen
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <StatCard title="Drawdown" value={evergreen.metrics.drawdown} icon={<Activity size={20} />} />
                <StatCard title="Total Trades" value={evergreen.metrics.totalTrades} icon={<Target size={20} />} />
                <StatCard title="Win Rate" value={evergreen.metrics.winRate} icon={<Percent size={20} />} />
              </div>
              
              <div style={{ height: '350px' }}>
                <Line options={commonOptions} data={evergreenData} />
              </div>
            </div>

            {/* Chart 2: CompoundX */}
            <div className="glass-panel">
              <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }}></span>
                CompoundX
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <StatCard title="Drawdown" value={compoundX.metrics.drawdown} icon={<Activity size={20} />} />
                <StatCard title="Total Trades" value={compoundX.metrics.totalTrades} icon={<Target size={20} />} />
                <StatCard title="Win Rate" value={compoundX.metrics.winRate} icon={<Percent size={20} />} />
              </div>
              
              <div style={{ height: '350px' }}>
                <Line options={commonOptions} data={compoundXData} />
              </div>
            </div>

            {/* Chart 3: Benchmark Comparison */}
            <div className="glass-panel" style={{ border: '1px solid var(--accent-glow)' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Benchmark Comparison (Growth Habits vs Market)</h2>
              <div style={{ height: '450px', marginBottom: '2rem' }}>
                <Line options={commonOptions} data={benchmarkData} />
              </div>
              
              {/* Monthly Comparison Table */}
              <div style={{ overflowX: 'auto' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Month-by-Month Returns (%)</h3>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse', 
                  textAlign: 'center',
                  fontSize: '0.9rem'
                }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
                      <th style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>Asset / Portofolio</th>
                      {benchmarks.labels.map(label => (
                        <th key={label} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>{label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'left', fontWeight: 'bold', color: '#10B981' }}>Evergreen</td>
                      {evergreen.monthlyReturns.slice(0, benchmarks.labels.length).map((m, i) => (
                        <td key={i} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', color: m.return >= 0 ? '#10B981' : '#ef4444' }}>
                          {m.return > 0 ? '+' : ''}{m.return}%
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'left', fontWeight: 'bold', color: '#3b82f6' }}>CompoundX</td>
                      {compoundX.monthlyReturns.slice(0, benchmarks.labels.length).map((m, i) => (
                        <td key={i} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', color: m.return >= 0 ? '#10B981' : '#ef4444' }}>
                          {m.return > 0 ? '+' : ''}{m.return}%
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
