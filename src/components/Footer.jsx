import React from 'react';
import { TrendingUp, ShieldAlert, ArrowUp, Mail, MessageSquare } from 'lucide-react';

export default function Footer({ setActiveSection }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 px-4 lg:px-8 relative">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 p-0.5 shadow-lg shadow-emerald-500/20 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.25rem' }} className="text-white">
                GROWBITS <span className="text-emerald-400">CAPITAL</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-md">
              Platform pengelolaan modal kuantitatif dan sistem trading otomatis berkinerja tinggi. Fokus pada keamanan kapital, transparansi, dan imbal hasil compounding.
            </p>

            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="badge-tag badge-emerald">Vantage Verified</span>
              <span className="badge-tag badge-cyan">Automated Execution</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 list-none p-0">
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-emerald-400 cursor-pointer bg-transparent border-none p-0 text-gray-400">
                  About (Tesis & Value)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('portfolio')} className="hover:text-emerald-400 cursor-pointer bg-transparent border-none p-0 text-gray-400">
                  Portofolio & Benchmark
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('social-trade')} className="hover:text-emerald-400 cursor-pointer bg-transparent border-none p-0 text-gray-400">
                  Social Trade Vantage
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('education')} className="hover:text-emerald-400 cursor-pointer bg-transparent border-none p-0 text-gray-400">
                  Edukasi & Riset PDF
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('tools')} className="hover:text-emerald-400 cursor-pointer bg-transparent border-none p-0 text-gray-400">
                  Kalkulator & Simulator
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Informasi & Komunitas
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Bergabung bersama komunitas investor Growbits Capital untuk mendapatkan update riset harian dan sinyal strategi.
            </p>
            
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-emerald-400" />
                <span>support@growbitscapital.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="text-cyan-400" />
                <span>Telegram Official Channel & VIP Support</span>
              </div>
            </div>
          </div>

        </div>

        {/* FINANCIAL RISK DISCLAIMER */}
        <div className="py-8 border-b border-white/10">
          <div className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-xl border border-white/5 text-xs text-gray-400 leading-relaxed">
            <ShieldAlert size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-300">Peringatan Risiko Finansial Resmi:</strong> Trading instrumen finansial seperti Forex, Emas (XAU/USD), dan Kontrak Derivatif (CFD) memiliki tingkat risiko tinggi terhadap ekuitas Anda dan tidak cocok untuk semua investor. Penggunaan efek pengungkit (leverage) dapat bekerja secara menguntungkan maupun sebaliknya. Pastikan Anda telah memahami sepenuhnya seluruh risiko yang terlibat dan mempertimbangkan tujuan investasi serta tingkat pengalaman Anda sebelum memulai.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Growbits Capital. All rights reserved. Designed for Quantitative Wealth Growth.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white cursor-pointer border border-white/10 transition-all"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
