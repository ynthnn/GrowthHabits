import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Percent, Clock, RefreshCw, BarChart2, ShieldCheck } from 'lucide-react';
import { Line } from 'react-chartjs-2';

export default function ToolsSection() {
  // TOOL 1: FOREX MARGIN CALCULATOR STATE
  const [marginPair, setMarginPair] = useState('XAU/USD');
  const [accountCurrency, setAccountCurrency] = useState('USD');
  const [leverage, setLeverage] = useState(500); // 1:500
  const [lotSize, setLotSize] = useState(1.0);
  const [customPrice, setCustomPrice] = useState(2850.0);

  // Price dictionary for calculation
  const pairPrices = {
    'EUR/USD': 1.0500,
    'GBP/USD': 1.2650,
    'XAU/USD': 2850.0,
    'USD/JPY': 152.00,
    'AUD/USD': 0.6450,
    'USD/CAD': 1.4100
  };

  const currentPrice = pairPrices[marginPair] || customPrice;
  const contractSize = marginPair === 'XAU/USD' ? 100 : 100000;
  const positionValue = lotSize * contractSize * currentPrice;
  const requiredMargin = positionValue / leverage;
  const pipValue = marginPair === 'XAU/USD' ? (lotSize * 10) : (marginPair.endsWith('JPY') ? (lotSize * 1000 / currentPrice) : (lotSize * 10));

  // TOOL 2: INVESTMENT SIMULATOR COMPOUNDING STATE
  const [initialInvestment, setInitialInvestment] = useState(5000);
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [monthlyReturnRate, setMonthlyReturnRate] = useState(3.5); // % per month
  const [durationMonths, setDurationMonths] = useState(36); // 3 years

  // Calculate Compounding Trajectory
  const compoundingSchedule = [];
  let currentBalance = Number(initialInvestment);
  let totalDeposited = Number(initialInvestment);
  let totalProfit = 0;

  const chartLabels = ['Start'];
  const balanceData = [Number(initialInvestment)];
  const depositData = [Number(initialInvestment)];

  for (let m = 1; m <= durationMonths; m++) {
    const profitThisMonth = currentBalance * (monthlyReturnRate / 100);
    currentBalance = currentBalance + profitThisMonth + Number(monthlyContribution);
    totalDeposited += Number(monthlyContribution);
    totalProfit += profitThisMonth;

    if (m % 3 === 0 || m === durationMonths) {
      chartLabels.push(`Bln ${m}`);
      balanceData.push(Math.round(currentBalance));
      depositData.push(Math.round(totalDeposited));
    }

    compoundingSchedule.push({
      month: m,
      balance: Math.round(currentBalance),
      deposited: Math.round(totalDeposited),
      profit: Math.round(totalProfit)
    });
  }

  // Chart config for compounding simulator
  const compoundChartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Total Saldo Compounding ($)',
        data: balanceData,
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 4
      },
      {
        label: 'Total Modal Diinvestasikan ($)',
        data: depositData,
        borderColor: '#06B6D4',
        borderDash: [4, 4],
        pointRadius: 2,
        tension: 0.1
      }
    ]
  };

  const chartOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#D1D5DB', font: { family: 'Outfit', size: 12 } }
      },
      tooltip: {
        backgroundColor: '#0D111A',
        titleColor: '#FFFFFF',
        bodyColor: '#D1D5DB',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: $${ctx.parsed.y.toLocaleString()}`
        }
      }
    },
    scales: {
      x: { grid: { color: 'rgba(255, 255, 255, 0.04)' }, ticks: { color: '#9CA3AF' } },
      y: { grid: { color: 'rgba(255, 255, 255, 0.04)' }, ticks: { color: '#9CA3AF' } }
    }
  };

  return (
    <section id="tools" className="relative py-24 px-4 lg:px-8">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-tag badge-emerald mb-3">
            <Calculator size={14} />
            <span>Interactive Financial Utilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            Tools & <span className="text-gradient-emerald">Kalkulator Finansial</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base">
            Gunakan kalkulator margin forex dan simulator imbal hasil majemuk interaktif kami untuk merencanakan strategi kapital Anda.
          </p>
        </div>


        {/* TOOL 1: KALKULATOR MARGIN FOREX */}
        <div className="glass-panel p-6 md:p-8 mb-16 border-emerald-500/20">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-heading">
                1. Kalkulator Margin & Pip Forex / Gold
              </h3>
              <p className="text-xs text-gray-400">Hitung margin yang dibutuhkan dan estimasi nilai pip secara presisi.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Form Controls */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Currency Pair</label>
                <select
                  value={marginPair}
                  onChange={(e) => setMarginPair(e.target.value)}
                  className="input-field"
                >
                  <option value="XAU/USD">XAU/USD (Gold)</option>
                  <option value="EUR/USD">EUR/USD</option>
                  <option value="GBP/USD">GBP/USD</option>
                  <option value="USD/JPY">USD/JPY</option>
                  <option value="AUD/USD">AUD/USD</option>
                  <option value="USD/CAD">USD/CAD</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Account Currency</label>
                <select
                  value={accountCurrency}
                  onChange={(e) => setAccountCurrency(e.target.value)}
                  className="input-field"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Leverage Broker</label>
                <select
                  value={leverage}
                  onChange={(e) => setLeverage(Number(e.target.value))}
                  className="input-field"
                >
                  <option value={100}>1:100</option>
                  <option value={200}>1:200</option>
                  <option value={500}>1:500 (Vantage Standard)</option>
                  <option value={1000}>1:1000</option>
                  <option value={2000}>1:2000</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Ukuran Lot (Lot Size)</label>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  max="100"
                  value={lotSize}
                  onChange={(e) => setLotSize(Number(e.target.value))}
                  className="input-field"
                />
              </div>

            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel-glow p-6 bg-slate-900">
                <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>Kalkulasi Real-Time</span>
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/5">
                    <div className="text-xs text-gray-400">Margin Dibutuhkan (Required Margin)</div>
                    <div className="text-3xl font-extrabold text-emerald-400 font-heading mt-1">
                      ${requiredMargin.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1">Modal minimum terkunci untuk posisi ini</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                      <div className="text-xs text-gray-400">Nilai Per Pip</div>
                      <div className="text-lg font-bold text-cyan-400 font-heading">
                        ${pipValue.toFixed(2)}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                      <div className="text-xs text-gray-400">Total Notional Value</div>
                      <div className="text-lg font-bold text-white font-heading">
                        ${positionValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>


        {/* TOOL 2: INVESTMENT SIMULATOR COMPOUNDING */}
        <div className="glass-panel p-6 md:p-8 border-cyan-500/20">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-heading">
                2. Investment Simulator Compounding
              </h3>
              <p className="text-xs text-gray-400">Simulasikan daya majemuk pertambahan kapital Anda dari waktu ke waktu.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
            {/* Controls Side */}
            <div className="lg:col-span-5 space-y-5 bg-slate-900/60 p-6 rounded-2xl border border-white/5">
              
              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-300 uppercase mb-2">
                  <span>Modal Awal Investasi</span>
                  <span className="text-emerald-400 font-bold">${initialInvestment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-300 uppercase mb-2">
                  <span>Top-Up / Kontribusi Bulanan</span>
                  <span className="text-cyan-400 font-bold">${monthlyContribution.toLocaleString()} / bln</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="50"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-300 uppercase mb-2">
                  <span>Estimasi Return Bulanan (%)</span>
                  <span className="text-amber-400 font-bold">+{monthlyReturnRate}% / bln</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.1"
                  value={monthlyReturnRate}
                  onChange={(e) => setMonthlyReturnRate(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="text-[11px] text-gray-500 mt-1">* Evergreen: ~3.85%, CompoundX: ~6.90%</div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-300 uppercase mb-2">
                  <span>Durasi Investasi (Bulan)</span>
                  <span className="text-purple-400 font-bold">{durationMonths} Bulan ({Math.floor(durationMonths/12)} Thn)</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="60"
                  step="6"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              {/* Quick Summary Box */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total Modal Masuk:</span>
                  <span className="text-white font-bold">${totalDeposited.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Estimasi Bunga Majemuk:</span>
                  <span className="text-emerald-400 font-bold">+${Math.round(totalProfit).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base pt-2 border-t border-white/10 font-heading">
                  <span className="text-gray-200 font-bold">Proyeksi Total Akumulasi:</span>
                  <span className="text-2xl font-black text-emerald-400">${Math.round(currentBalance).toLocaleString()}</span>
                </div>
              </div>

            </div>

            {/* Projection Chart */}
            <div className="lg:col-span-7 h-96">
              <Line data={compoundChartData} options={chartOpts} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
