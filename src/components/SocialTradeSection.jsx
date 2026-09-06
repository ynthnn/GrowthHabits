import React from 'react';
import { socialTradeData } from '../data/portfolioData';
import { Users, Shield, ExternalLink, CheckCircle2, AlertTriangle, HelpCircle, Layers, Zap, Scale } from 'lucide-react';

export default function SocialTradeSection() {
  const { broker, comparisonMatrix, advantages, risks } = socialTradeData;

  return (
    <section id="social-trade" className="relative py-24 px-4 lg:px-8">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-tag badge-cyan mb-3">
            <Users size={14} />
            <span>Automated Copy Trading</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            Social Trade & <span className="text-gradient-cyan">Copy Trading Ecosystem</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base">
            Solusi otomatisasi trading tanpa perlu menganalisis grafik teknikal secara mandiri. Terhubung langsung dengan akun master Growbits Capital.
          </p>
        </div>


        {/* EDUKASI: APA ITU COPY TRADING? */}
        <div className="glass-panel p-8 mb-16 border-cyan-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                <HelpCircle size={14} />
                Edukasi Dasar Social Trading
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
                Apa itu Copy Trading & Bagaimana Cara Kerjanya?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Copy Trading</strong> adalah teknologi finansial yang memungkinkan investor (Follower) untuk menghubungkan akun brokernya secara langsung dengan akun pengelola dana profesional (Master Trader).
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Setiap kali sistem kuantitatif Growbits membuka, merubah, atau menutup posisi transaksi di pasar, seluruh aksi tersebut akan <strong>direplikasi secara otomatis dan real-time</strong> ke dalam akun Anda secara proporsional sesuai saldo yang Anda miliki.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                  <div className="text-emerald-400 font-bold font-heading text-lg">1. Connect</div>
                  <div className="text-xs text-gray-400">Hubungkan akun broker Vantage Anda ke Master Growbits.</div>
                </div>
                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                  <div className="text-cyan-400 font-bold font-heading text-lg">2. Auto Mirror</div>
                  <div className="text-xs text-gray-400">Sistem mereplikasi setiap transaksi instan & otomatis.</div>
                </div>
                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                  <div className="text-amber-400 font-bold font-heading text-lg">3. Full Control</div>
                  <div className="text-xs text-gray-400">Kendali 100% deposito & penarikan di tangan Anda.</div>
                </div>
              </div>
            </div>

            {/* BROKER VANTAGE CARD */}
            <div className="lg:col-span-5">
              <div className="glass-panel-glow p-6 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                <div className="flex items-center justify-between mb-4">
                  <div className="badge-tag badge-gold">Official Broker Partner</div>
                  <Shield className="w-5 h-5 text-amber-400" />
                </div>

                <div className="text-3xl font-black text-white tracking-wider font-heading mb-1 text-gradient-gold">
                  {broker.logoText}
                </div>
                <div className="text-xs text-gray-400 font-medium mb-4">{broker.name} ({broker.type})</div>

                <div className="space-y-2.5 mb-6 text-xs text-gray-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Regulasi Global:</span>
                    <span className="text-white font-semibold">{broker.regulations}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Kecepatan Eksekusi:</span>
                    <span className="text-emerald-400 font-semibold">{broker.executionSpeed}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Maksimum Leverage:</span>
                    <span className="text-white font-semibold">{broker.leverage}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Platform Copy Trading:</span>
                    <span className="text-cyan-400 font-semibold">{broker.copyTradingPlatform}</span>
                  </div>
                </div>

                <div className="mb-6 space-y-1.5">
                  {broker.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={broker.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary justify-center text-sm py-3"
                >
                  <span>Buka Akun Copy Trade Vantage</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>


        {/* MATRIKS KOMPARASI: TRADING MANDIRI VS IKUT SIGNAL VS COPY TRADING */}
        <div className="glass-panel p-6 md:p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Scale size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Matriks Perbandingan Metode Trading
              </h3>
              <p className="text-sm text-gray-400">Bandingan kelebihan Trading Mandiri vs Ikut Sinyal vs Copy Trading.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="custom-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Parameter Evaluasi</th>
                  <th style={{ width: '26%' }} className="text-rose-400">Trading Mandiri</th>
                  <th style={{ width: '26%' }} className="text-amber-400">Ikut Sinyal (Signal Follower)</th>
                  <th style={{ width: '26%' }} className="text-emerald-400 bg-emerald-500/10">Copy Trading (Growbits)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((item, idx) => (
                  <tr key={idx}>
                    <td className="font-bold text-white font-heading">
                      {item.feature}
                    </td>
                    <td className="text-gray-300 text-xs">
                      {item.manual}
                    </td>
                    <td className="text-gray-300 text-xs">
                      {item.signal}
                    </td>
                    <td className="text-emerald-300 text-xs font-medium bg-emerald-500/5">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{item.copyTrade}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        {/* ADVANTAGES & RISKS OF COPY TRADING */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* ADVANTAGES / KEUNTUNGAN */}
          <div className="glass-panel p-8 border-emerald-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  Keuntungan Copy Trading
                </h3>
                <p className="text-xs text-gray-400">Mengapa Copy Trading Growbits menjadi pilihan cerdas.</p>
              </div>
            </div>

            <div className="space-y-4">
              {advantages.map((adv, idx) => (
                <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold font-heading text-base">{adv.title}</h4>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RISKS / RISIKO COPY TRADING */}
          <div className="glass-panel p-8 border-rose-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  Risiko & Mitigasi Copy Trading
                </h3>
                <p className="text-xs text-gray-400">Prinsip keterbukaan atas risiko investasi pasar finansial.</p>
              </div>
            </div>

            <div className="space-y-4">
              {risks.map((risk, idx) => (
                <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-rose-500/20 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold font-heading text-base">{risk.title}</h4>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">{risk.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 leading-relaxed">
              <strong>Himbauan Risiko:</strong> Kinerja masa lalu tidak menjamin hasil masa depan secara absolut. Selalu gunakan modal dingin (capital you can afford to risk) saat berinvestasi di pasar derivatif.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
