import React from 'react';
import { Target, Cpu, ShieldAlert, Award, ArrowUpRight, CheckCircle2, Zap, Layers, Lock, TrendingUp, Globe } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      iconPath: "/assets/algo-icon-bSiDc13a.png",
      fallbackIcon: <Cpu className="w-8 h-8 text-[#23F7DD]" />,
      title: "Algo Trading",
      subtitle: "Quantitative & Backtested",
      desc: "We trade using algorithms and data driven based on backtesting"
    },
    {
      iconPath: "/assets/liquid-icon-CIuwkApb.png",
      fallbackIcon: <TrendingUp className="w-8 h-8 text-[#23F7DD]" />,
      title: "Liquid Assets",
      subtitle: "Digital & High-Conviction",
      desc: "Active management of liquid digital assets with a long-term horizon. We navigate volatility with high-conviction positions."
    },
    {
      iconPath: "/assets/network-icon-Biwx8ZHr.png",
      fallbackIcon: <Globe className="w-8 h-8 text-[#23F7DD]" />,
      title: "Strategic Incubation",
      subtitle: "Indonesian Equities & Growth",
      desc: "Leveraging our network to accelerate growth, adoption, and strategic partnerships."
    }
  ];

  const valuesList = [
    {
      icon: <Lock className="w-6 h-6 text-[#23F7DD]" />,
      title: "Transparansi 100% & Keamanan Kapital",
      desc: "Dana Anda tetap dalam kendali Anda di akun broker teregulasi Vantage. Tidak ada lock-up period atau penyembunyian data."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#23F7DD]" />,
      title: "Model Kuantitatif Bebas Bias Emosi",
      desc: "Eksekusi berdasarkan algoritma sistematis (EA Hedging V5 & V6) yang teruji secara statistik pada jutaan data pasar."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-amber-400" />,
      title: "Manajemen Risiko Ketat (Controlled Drawdown)",
      desc: "Setiap transaksi dilindungi oleh batasan eksposur ekuitas otomatis untuk menjaga kestabilan portofolio dalam kondisi pasar ekstrem."
    },
    {
      icon: <Award className="w-6 h-6 text-[#23F7DD]" />,
      title: "Hasil Pertumbuhan Konsisten & Compounding",
      desc: "Fokus pada pertumbuhan imbal hasil majemuk jangka panjang yang mengungguli inflasi dan benchmark pasar tradisional."
    }
  ];

  const methodSteps = [
    {
      step: "01",
      title: "Sinyal Breakout & Analisis Algoritma",
      desc: "Algoritma memindai pola Inside Bar D1, zona akumulasi, serta momentum RSI untuk mengidentifikasi peluang entry berprobabilitas tinggi."
    },
    {
      step: "02",
      title: "Dynamic Hedging & Position Sizing",
      desc: "Sistem secara otomatis menyesuaikan ukuran lot berdasarkan volatilitas aktual dan memasang proteksi hedging saat pasar berbalik arah."
    },
    {
      step: "03",
      title: "Eksekusi Ultra-Fast Latency via Vantage ECN",
      desc: "Menggunakan server ECN Vantage dengan latensi <35ms untuk memastikan pergerakan harga tereksekusi tanpa requote atau slippage."
    },
    {
      step: "04",
      title: "Compounding & Re-balancing Bulanan",
      desc: "Keuntungan diakumulasikan secara bertahap untuk memaksimalkan imbal hasil majemuk tanpa mengorbankan parameter keamanan."
    }
  ];

  return (
    <section id="about" className="relative pt-32 pb-24 px-4 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="glow-radial" />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }} className="relative z-10">
        
        {/* HERO HEADER matching growth-capital-seven / GrowthCapital */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="badge-tag badge-mint mb-6">
            <Zap size={14} />
            <span>Private Investment Firm</span>
          </div>

          <h1 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(40px, 4.5vw, 64px)' }} className="text-white leading-tight mb-6">
            Sustainable <span className="text-gradient-mint">Investing Habits</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-normal mb-10 max-w-3xl mx-auto">
            Our thesis focuses on achieving long-term, sustainable capital appreciation through diversified investments across Forex and commodity trading, cryptocurrencies, and Indonesian equities, supported by disciplined risk management and data-driven decision-making.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#portfolio" className="btn-primary text-base py-3.5 px-8">
              <span>Jelajahi Portofolio</span>
              <ArrowUpRight size={18} />
            </a>
            <a href="#social-trade" className="btn-secondary text-base py-3.5 px-8">
              <span>Pelajari Copy Trading</span>
            </a>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10">
            <div className="glass-panel p-5 text-center">
              <div className="text-3xl font-extrabold text-[#23F7DD] font-heading">71.5%</div>
              <div className="text-xs text-gray-400 font-medium uppercase mt-1">Win Rate Project Evergreen</div>
            </div>
            <div className="glass-panel p-5 text-center">
              <div className="text-3xl font-extrabold text-[#23F7DD] font-heading">&lt; 10%</div>
              <div className="text-xs text-gray-400 font-medium uppercase mt-1">Controlled Max Drawdown</div>
            </div>
            <div className="glass-panel p-5 text-center">
              <div className="text-3xl font-extrabold text-[#23F7DD] font-heading">100%</div>
              <div className="text-xs text-gray-400 font-medium uppercase mt-1">Transparansi Broker Vantage</div>
            </div>
            <div className="glass-panel p-5 text-center">
              <div className="text-3xl font-extrabold text-[#23F7DD] font-heading">24/5</div>
              <div className="text-xs text-gray-400 font-medium uppercase mt-1">Algorithmic Execution</div>
            </div>
          </div>
        </div>


        {/* THREE PILLARS OF CAPITAL DEPLOYMENT */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="badge-tag badge-mint mb-3">
              <Layers size={14} />
              <span>Our Focus</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
              Three pillars of <span className="text-gradient-mint">capital deployment.</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              Portofolio investasi kami didistribusikan secara strategis ke dalam 3 instrumen pasar utama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <div key={idx} className="glass-panel p-8 relative group hover:border-[#23F7DD]/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-4 rounded-2xl bg-[#23F7DD]/10 border border-[#23F7DD]/20 w-fit mb-6 group-hover:scale-110 transition-transform flex items-center justify-center min-w-[64px] min-h-[64px]">
                    <img 
                      src={p.iconPath} 
                      alt={p.title} 
                      className="w-10 h-10 object-contain"
                      onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                    />
                    <div style={{ display: 'none' }}>
                      {p.fallbackIcon}
                    </div>
                  </div>
                  <div className="text-xs text-[#23F7DD] font-semibold uppercase tracking-wider mb-1">{p.subtitle}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">{p.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{p.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Pillar {idx + 1}</span>
                  <span className="text-[#23F7DD] font-semibold">Active Strategy</span>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* SEGMENT A: TESIS INVESTASI MENDALAM */}
        <div className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <div className="badge-tag badge-mint mb-4">
                <Target size={14} />
                <span>Tesis Investasi</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                Mengapa Memilih Pendekatan <span className="text-gradient-mint">Kuantitatif Growbits?</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Pasar finansial modern digerakkan oleh volatilitas tinggi dan algoritma institusional. Metode tradisional sering gagal karena dipengaruhi oleh kepanikan emosional (*fear & greed*) serta kurangnya manajemen risiko yang terukur.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23F7DD] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold font-heading">Asimetri Risk-to-Reward</h4>
                    <p className="text-sm text-gray-400">Membatasi potensi kerugian sekecil mungkin dan membiarkan posisi menguntungkan berkembang secara maksimal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23F7DD] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold font-heading">Non-Correlated Growth</h4>
                    <p className="text-sm text-gray-400">Strategi dirancang agar tetap berkinerja positif baik saat pasar saham global naik maupun turun.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23F7DD] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold font-heading">Power of Compounding</h4>
                    <p className="text-sm text-gray-400">Mengakumulasikan imbal hasil secara konsisten setiap bulan untuk pertumbuhan eksponensial jangka panjang.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="glass-panel-glow p-8 relative overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Visi & Core Philosophy
                </h3>
                <blockquote className="text-lg italic text-[#23F7DD] border-l-4 border-[#23F7DD] pl-4 py-2 mb-6 bg-[#23F7DD]/10 rounded-r-lg">
                  "Di pasar finansial, kunci sukses jangka panjang bukan sekadar mencari profit terbesar, melainkan bagaimana bertahan dalam situasi terburuk dan membiarkan matematika compounding bekerja."
                </blockquote>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5">
                    <h4 className="text-[#23F7DD] font-semibold mb-1 font-heading">Project Evergreen</h4>
                    <p className="text-xs text-gray-300">Konservatif - Kestabilan kapital & drawdown minimal.</p>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5">
                    <h4 className="text-[#23F7DD] font-semibold mb-1 font-heading">CompoundX</h4>
                    <p className="text-xs text-gray-300">Agresif - Percepatan kapital majemuk tinggi.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* SEGMENT B: CARA INVESTASI */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="badge-tag badge-mint mb-3">
              <Layers size={14} />
              <span>Cara Kerja Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Metodologi Eksekusi <span className="text-gradient-mint">Growbits</span>
            </h2>
            <p className="text-gray-400 mt-3">
              Empat tahapan otomatisasi kuantitatif dari analisis data hingga akumulasi compounding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodSteps.map((item, idx) => (
              <div key={idx} className="glass-panel p-6 relative group hover:-translate-y-1 transition-all">
                <div className="text-4xl font-extrabold text-[#23F7DD]/20 font-heading mb-4 group-hover:text-[#23F7DD] transition-colors">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* SEGMENT C: VALUE YANG DIHADIRKAN */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="badge-tag badge-gold mb-3">
              <Award size={14} />
              <span>Value Proposition</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Value yang <span className="text-gradient-gold">Dihadirkan</span>
            </h2>
            <p className="text-gray-400 mt-3">
              Nilai utama yang dirasakan oleh setiap investor dalam ekosistem Growbits Capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuesList.map((val, idx) => (
              <div key={idx} className="glass-panel p-8 flex items-start gap-5 hover:border-[#23F7DD]/40 transition-colors">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">
                    {val.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
