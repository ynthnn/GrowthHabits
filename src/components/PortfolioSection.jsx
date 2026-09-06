import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { portfolioStats, monthlyPerformanceHistory, getCumulativeEquityData } from '../data/portfolioData';
import { TrendingUp, Activity, PieChart, Info, ShieldAlert, CheckCircle, BarChart3, Calendar, Filter } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function PortfolioSection() {
  const [selectedYear, setSelectedYear] = useState('ALL');
  const cumulativeData = getCumulativeEquityData();

  // Filtered monthly table data
  const yearsList = ['ALL', ...new Set(monthlyPerformanceHistory.map(item => item.year))];
  const filteredHistory = selectedYear === 'ALL'
    ? monthlyPerformanceHistory
    : monthlyPerformanceHistory.filter(item => item.year === Number(selectedYear));

  // Asset Allocation Donut Chart (Matching original growth-capital-seven)
  const allocationChartData = {
    labels: ['Indonesian Equities', 'Forex & Commodities', 'Cryptocurrencies'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ['#23F7DD', '#06B6D4', '#F59E0B'],
        borderColor: '#0A0A0A',
        borderWidth: 3,
        hoverOffset: 6
      }
    ]
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#FFFFFF',
          font: { family: 'Outfit', size: 13, weight: '600' },
          padding: 20,
          usePointStyle: true
        }
      },
      tooltip: {
        backgroundColor: '#0A0A0A',
        titleColor: '#23F7DD',
        bodyColor: '#FFFFFF',
        borderColor: 'rgba(35, 247, 221, 0.3)',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: (context) => ` Alokasi ${context.label}: ${context.parsed}%`
        }
      }
    },
    cutout: '70%'
  };

  // Chart 1: Project Evergreen Equity Curve
  const evergreenChartData = {
    labels: cumulativeData.labels,
    datasets: [
      {
        label: 'Project Evergreen Equity (Base 100)',
        data: cumulativeData.evergreenIndex,
        borderColor: '#23F7DD',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(35, 247, 221, 0.4)');
          gradient.addColorStop(1, 'rgba(35, 247, 221, 0.0)');
          return gradient;
        },
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#23F7DD',
        pointHoverRadius: 6
      }
    ]
  };

  // Chart 2: CompoundX Equity Curve
  const compoundXChartData = {
    labels: cumulativeData.labels,
    datasets: [
      {
        label: 'CompoundX Equity (Base 100)',
        data: cumulativeData.compoundXIndex,
        borderColor: '#06B6D4',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(6, 182, 212, 0.4)');
          gradient.addColorStop(1, 'rgba(6, 182, 212, 0.0)');
          return gradient;
        },
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#06B6D4',
        pointHoverRadius: 6
      }
    ]
  };

  // Chart 3: Benchmark Chart (Evergreen & CompoundX vs BTC, XAU, S&P 500)
  const benchmarkChartData = {
    labels: cumulativeData.labels,
    datasets: [
      {
        label: 'Project Evergreen',
        data: cumulativeData.evergreenIndex,
        borderColor: '#23F7DD',
        borderWidth: 3,
        pointRadius: 3,
        tension: 0.2
      },
      {
        label: 'CompoundX',
        data: cumulativeData.compoundXIndex,
        borderColor: '#06B6D4',
        borderWidth: 3,
        pointRadius: 3,
        tension: 0.2
      },
      {
        label: 'Bitcoin (BTC)',
        data: cumulativeData.btcIndex,
        borderColor: '#F59E0B',
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 2,
        tension: 0.2
      },
      {
        label: 'Gold (XAU/USD)',
        data: cumulativeData.xauIndex,
        borderColor: '#EAB308',
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.2
      },
      {
        label: 'S&P 500 Index',
        data: cumulativeData.snpIndex,
        borderColor: '#8B5CF6',
        borderWidth: 2,
        borderDash: [2, 2],
        pointRadius: 2,
        tension: 0.2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#FFFFFF',
          font: { family: 'Outfit', size: 12, weight: '600' },
          padding: 16,
          usePointStyle: true
        }
      },
      tooltip: {
        backgroundColor: '#0A0A0A',
        titleColor: '#23F7DD',
        bodyColor: '#D1D5DB',
        borderColor: 'rgba(35, 247, 221, 0.3)',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y} Index`
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.04)' },
        ticks: { color: '#9CA3AF', font: { family: 'Outfit', size: 11 } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.04)' },
        ticks: { color: '#9CA3AF', font: { family: 'Outfit', size: 11 } }
      }
    }
  };

  return (
    <section id="portfolio" className="relative py-24 px-4 lg:px-8 bg-slate-950/80">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-tag badge-mint mb-3">
            <Activity size={14} />
            <span>Asset Allocation & Track Record</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            Portofolio & <span className="text-gradient-mint">Performa Investasi</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base">
            Alokasi modal strategis dan riwayat kinerja transparan dari seluruh strategi Growbits Capital.
          </p>
        </div>


        {/* ASSET ALLOCATION DONUT CHART (FROM ORIGINAL GROWTH CAPITAL WEB) */}
        <div className="glass-panel p-8 mb-16 border-[#23F7DD]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <div className="badge-tag badge-mint mb-3">
                <PieChart size={14} />
                <span>Asset Allocation</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
                Strategic Diversification Across High-Growth Markets
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Kami mengalokasikan ekuitas secara disiplin pada 3 kelas aset utama untuk menyeimbangkan stabilitas, likuiditas, dan percepatan imbal hasil majemuk.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#23F7DD]"></span>
                    <span className="text-white font-semibold font-heading">Indonesian Equities</span>
                  </div>
                  <span className="text-[#23F7DD] font-bold">45%</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#06B6D4]"></span>
                    <span className="text-white font-semibold font-heading">Forex & Commodities</span>
                  </div>
                  <span className="text-[#06B6D4] font-bold">35%</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]"></span>
                    <span className="text-white font-semibold font-heading">Cryptocurrencies</span>
                  </div>
                  <span className="text-[#F59E0B] font-bold">20%</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="h-72 w-full max-w-sm">
                <Doughnut data={allocationChartData} options={donutOptions} />
              </div>
            </div>

          </div>
        </div>


        {/* GRAFIK 1: PROJECT EVERGREEN */}
        <div className="glass-panel p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#23F7DD] uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-[#23F7DD]"></span>
                Grafik 1 - Dynamic Hedging Strategy
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                {portfolioStats.evergreen.name}
              </h3>
              <p className="text-sm text-gray-400">{portfolioStats.evergreen.subtitle}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="badge-tag badge-mint">{portfolioStats.evergreen.riskLevel}</span>
              <span className="bg-[#23F7DD]/10 text-[#23F7DD] px-3 py-1 rounded-full text-xs font-bold border border-[#23F7DD]/30">
                Avg +{portfolioStats.evergreen.avgMonthlyReturn}/mo
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Chart Area */}
            <div className="lg:col-span-8 h-80">
              <Line data={evergreenChartData} options={chartOptions} />
            </div>

            {/* Sidebar Stats Area (Drawdown, Total Trades, Win Rate) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2 font-heading">
                Metrics & Risk Profile
              </h4>

              {/* Drawdown Stat Card */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-rose-500/20 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 font-medium">Max Drawdown</div>
                  <div className="text-2xl font-extrabold text-rose-400 font-heading">
                    {portfolioStats.evergreen.drawdown}
                  </div>
                </div>
                <div className="p-3 bg-rose-500/10 rounded-lg text-rose-400">
                  <ShieldAlert size={24} />
                </div>
              </div>

              {/* Total Trades Stat Card */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 font-medium">Total Trade Executed</div>
                  <div className="text-2xl font-extrabold text-white font-heading">
                    {portfolioStats.evergreen.totalTrades}
                  </div>
                </div>
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <BarChart3 size={24} />
                </div>
              </div>

              {/* Winning Rate Stat Card */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-[#23F7DD]/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 font-medium">Winning Rate (%)</div>
                  <div className="text-2xl font-extrabold text-[#23F7DD] font-heading">
                    {portfolioStats.evergreen.winRate}
                  </div>
                </div>
                <div className="p-3 bg-[#23F7DD]/10 rounded-lg text-[#23F7DD]">
                  <CheckCircle size={24} />
                </div>
              </div>

              {/* Additional Ratios */}
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 pt-2">
                <div className="bg-slate-900/50 p-2.5 rounded-lg border border-white/5">
                  <span className="text-gray-400">Profit Factor:</span> <strong className="text-white">{portfolioStats.evergreen.profitFactor}</strong>
                </div>
                <div className="bg-slate-900/50 p-2.5 rounded-lg border border-white/5">
                  <span className="text-gray-400">Sharpe Ratio:</span> <strong className="text-white">{portfolioStats.evergreen.sharpeRatio}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* GRAFIK 2: PORTFOLIO COMPOUNDX */}
        <div className="glass-panel p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Grafik 2 - High-Yield Compounding Engine
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                {portfolioStats.compoundX.name}
              </h3>
              <p className="text-sm text-gray-400">{portfolioStats.compoundX.subtitle}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="badge-tag badge-cyan">{portfolioStats.compoundX.riskLevel}</span>
              <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/20">
                Avg +{portfolioStats.compoundX.avgMonthlyReturn}/mo
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Chart Area */}
            <div className="lg:col-span-8 h-80">
              <Line data={compoundXChartData} options={chartOptions} />
            </div>

            {/* Sidebar Stats Area (Drawdown, Total Trades, Win Rate) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2 font-heading">
                Metrics & Risk Profile
              </h4>

              {/* Drawdown Stat Card */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-rose-500/20 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 font-medium">Max Drawdown</div>
                  <div className="text-2xl font-extrabold text-rose-400 font-heading">
                    {portfolioStats.compoundX.drawdown}
                  </div>
                </div>
                <div className="p-3 bg-rose-500/10 rounded-lg text-rose-400">
                  <ShieldAlert size={24} />
                </div>
              </div>

              {/* Total Trades Stat Card */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 font-medium">Total Trade Executed</div>
                  <div className="text-2xl font-extrabold text-white font-heading">
                    {portfolioStats.compoundX.totalTrades}
                  </div>
                </div>
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <BarChart3 size={24} />
                </div>
              </div>

              {/* Winning Rate Stat Card */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-[#23F7DD]/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 font-medium">Winning Rate (%)</div>
                  <div className="text-2xl font-extrabold text-[#23F7DD] font-heading">
                    {portfolioStats.compoundX.winRate}
                  </div>
                </div>
                <div className="p-3 bg-[#23F7DD]/10 rounded-lg text-[#23F7DD]">
                  <CheckCircle size={24} />
                </div>
              </div>

              {/* Additional Ratios */}
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 pt-2">
                <div className="bg-slate-900/50 p-2.5 rounded-lg border border-white/5">
                  <span className="text-gray-400">Profit Factor:</span> <strong className="text-white">{portfolioStats.compoundX.profitFactor}</strong>
                </div>
                <div className="bg-slate-900/50 p-2.5 rounded-lg border border-white/5">
                  <span className="text-gray-400">Sharpe Ratio:</span> <strong className="text-white">{portfolioStats.compoundX.sharpeRatio}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* GRAFIK 3: BENCHMARK PORTFOLIO 1 & 2 DENGAN BTC, XAU, SNP SECARA REAL TIME */}
        <div className="glass-panel p-6 md:p-8 mb-12 border-amber-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Grafik 3 - Real-Time Benchmark Comparison Index
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Benchmark Portofolio 1 & 2 vs BTC, XAU (Gold), & S&P 500
              </h3>
              <p className="text-sm text-gray-400">Perbandingan indeks akumulatif (Base 100) terhadap instrumen acuan global.</p>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-white/10 text-xs text-gray-300">
              <Info size={14} className="text-amber-400" />
              <span>Real-time Data Normalized Index</span>
            </div>
          </div>

          {/* Benchmark Line Chart */}
          <div className="h-96 w-full">
            <Line data={benchmarkChartData} options={chartOptions} />
          </div>
        </div>


        {/* TABEL PERBANDINGAN MONTH BY MONTH DIBAWAH GRAFIK 3 */}
        <div className="glass-panel p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#23F7DD]" />
                <span>Tabel Perbandingan Month by Month (% Return)</span>
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Data rincian imbal hasil bulanan untuk setiap aset dalam persentase (%).
              </p>
            </div>

            {/* Year Filter Buttons */}
            <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-white/10 self-start">
              <Filter size={14} className="text-gray-400 ml-2" />
              {yearsList.map(yr => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr.toString())}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer border-none transition-all ${
                    selectedYear === yr.toString()
                      ? 'bg-[#23F7DD] text-[#0A0A0A]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Periode Bulan</th>
                  <th className="text-[#23F7DD]">Project Evergreen</th>
                  <th className="text-cyan-400">CompoundX</th>
                  <th className="text-amber-400">Bitcoin (BTC)</th>
                  <th className="text-yellow-400">Gold (XAU/USD)</th>
                  <th className="text-purple-400">S&P 500 Index</th>
                </tr>
              </thead>
              <tbody>
                {filteredHistory.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-semibold text-white font-heading">
                      {row.monthName}
                    </td>
                    
                    {/* Evergreen */}
                    <td>
                      <span className={`font-bold ${row.evergreen >= 0 ? 'text-[#23F7DD]' : 'text-rose-400'}`}>
                        {row.evergreen >= 0 ? `+${row.evergreen}%` : `${row.evergreen}%`}
                      </span>
                    </td>

                    {/* CompoundX */}
                    <td>
                      <span className={`font-bold ${row.compoundX >= 0 ? 'text-cyan-400' : 'text-rose-400'}`}>
                        {row.compoundX >= 0 ? `+${row.compoundX}%` : `${row.compoundX}%`}
                      </span>
                    </td>

                    {/* BTC */}
                    <td>
                      <span className={`font-semibold ${row.btc >= 0 ? 'text-[#23F7DD]' : 'text-rose-400'}`}>
                        {row.btc >= 0 ? `+${row.btc}%` : `${row.btc}%`}
                      </span>
                    </td>

                    {/* XAU */}
                    <td>
                      <span className={`font-semibold ${row.xau >= 0 ? 'text-[#23F7DD]' : 'text-rose-400'}`}>
                        {row.xau >= 0 ? `+${row.xau}%` : `${row.xau}%`}
                      </span>
                    </td>

                    {/* S&P 500 */}
                    <td>
                      <span className={`font-semibold ${row.snp >= 0 ? 'text-[#23F7DD]' : 'text-rose-400'}`}>
                        {row.snp >= 0 ? `+${row.snp}%` : `${row.snp}%`}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
            <span>* Catatan: Data terupdate secara otomatis berdasarkan konfigurasi `portfolioData.js`.</span>
            <span className="text-[#23F7DD] font-semibold">Growbits Verified Record</span>
          </div>

        </div>

      </div>
    </section>
  );
}
