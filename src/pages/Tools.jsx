import React, { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Tools = () => {
  // Margin Calculator State
  const [marginData, setMarginData] = useState({
    accountCurrency: 'USD',
    pair: 'EUR/USD',
    leverage: 500,
    lotSize: 1,
    currentPrice: 1.1000 // Mock price
  });

  const calculateMargin = () => {
    // Basic margin formula: (Lot Size * Contract Size * Market Price) / Leverage
    const contractSize = 100000; 
    let margin = (marginData.lotSize * contractSize * marginData.currentPrice) / marginData.leverage;
    return margin.toFixed(2);
  };

  // Compounding Simulator State
  const [compoundData, setCompoundData] = useState({
    initialCapital: 1000,
    monthlyContribution: 100,
    growthRate: 3, // 3% per month
    duration: 12 // 12 months
  });

  const [simulationResult, setSimulationResult] = useState(null);

  const calculateCompound = () => {
    let balance = Number(compoundData.initialCapital);
    const months = [];
    const balances = [];
    const contributions = [];

    let totalContributed = Number(compoundData.initialCapital);

    for (let i = 1; i <= compoundData.duration; i++) {
      balance += Number(compoundData.monthlyContribution);
      balance *= (1 + (Number(compoundData.growthRate) / 100));
      
      totalContributed += Number(compoundData.monthlyContribution);

      months.push(`Month ${i}`);
      balances.push(balance.toFixed(2));
      contributions.push(totalContributed.toFixed(2));
    }

    setSimulationResult({
      labels: months,
      datasets: [
        {
          label: 'Total Contributed Capital',
          data: contributions,
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          borderColor: 'rgba(16, 185, 129, 0.5)',
          borderWidth: 1,
        },
        {
          label: 'Total Portfolio Value',
          data: balances,
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1,
        }
      ]
    });
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { color: '#e5e5e5' } }
    },
    scales: {
      x: { stacked: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#a3a3a3' } },
      y: { stacked: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#a3a3a3' } }
    }
  };

  return (
    <div className="animate-fade-in">
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>Trading Tools & Simulator</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Tools for risk management calculations and projecting your portfolio growth.
          </p>
        </div>
      </section>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', paddingBottom: '6rem' }}>
          
          {/* Margin Calculator */}
          <div className="glass-panel">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
              <Calculator size={24} />
              Forex Margin Calculator
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Currency Pair</label>
                <select 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'var(--font-sans)' }}
                  value={marginData.pair}
                  onChange={(e) => setMarginData({...marginData, pair: e.target.value})}
                >
                  <option value="EUR/USD">EUR/USD</option>
                  <option value="GBP/USD">GBP/USD</option>
                  <option value="XAU/USD">XAU/USD (Gold)</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Leverage (1:X)</label>
                <input 
                  type="number" 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'var(--font-sans)' }}
                  value={marginData.leverage}
                  onChange={(e) => setMarginData({...marginData, leverage: e.target.value})}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Lot Size</label>
                <input 
                  type="number" step="0.01"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'var(--font-sans)' }}
                  value={marginData.lotSize}
                  onChange={(e) => setMarginData({...marginData, lotSize: e.target.value})}
                />
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Required Margin</span>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', margin: '0.5rem 0' }}>
                  ${calculateMargin()}
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Assuming current price: {marginData.currentPrice}</span>
              </div>
            </div>
          </div>

          {/* Compounding Simulator */}
          <div className="glass-panel">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#3b82f6' }}>
              <TrendingUp size={24} />
              Investment Compounding
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Initial Capital ($)</label>
                <input 
                  type="number" 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'var(--font-sans)' }}
                  value={compoundData.initialCapital}
                  onChange={(e) => setCompoundData({...compoundData, initialCapital: e.target.value})}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Monthly Top-up ($)</label>
                <input 
                  type="number" 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'var(--font-sans)' }}
                  value={compoundData.monthlyContribution}
                  onChange={(e) => setCompoundData({...compoundData, monthlyContribution: e.target.value})}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Target Monthly Growth (%)</label>
                <input 
                  type="number" step="0.1"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'var(--font-sans)' }}
                  value={compoundData.growthRate}
                  onChange={(e) => setCompoundData({...compoundData, growthRate: e.target.value})}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Duration (Months)</label>
                <input 
                  type="number" 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'var(--font-sans)' }}
                  value={compoundData.duration}
                  onChange={(e) => setCompoundData({...compoundData, duration: e.target.value})}
                />
              </div>
            </div>

            <button className="btn btn-primary" style={{ width: '100%', marginBottom: '1.5rem', background: '#3b82f6' }} onClick={calculateCompound}>
              Calculate Projection
            </button>

            {simulationResult && (
              <div style={{ height: '250px', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px' }}>
                <Bar options={chartOptions} data={simulationResult} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
