import React, { useState } from 'react';
import { educationData } from '../data/portfolioData';
import { BookOpen, FileText, Image as ImageIcon, Video, Download, ExternalLink, Eye, X, Play, Calendar, User } from 'lucide-react';

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const { marketOutlooks, deepResearch, infographics, videos } = educationData;

  return (
    <section id="education" className="relative py-24 px-4 lg:px-8 bg-slate-950/60">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-tag badge-gold mb-3">
            <BookOpen size={14} />
            <span>Research & Knowledge Center</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            Edukasi & <span className="text-gradient-gold">Riset Pasar Kuantitatif</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base">
            Akses ke jurnal riset mendalam, proyeksi outlook makroekonomi, infografis strategi, dan pustaka video edukasi.
          </p>
        </div>


        {/* TAB FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full font-heading text-sm font-semibold cursor-pointer border transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/80 text-gray-400 border-white/10 hover:text-white'
            }`}
          >
            Semua Materi
          </button>
          <button
            onClick={() => setActiveTab('outlook')}
            className={`px-5 py-2.5 rounded-full font-heading text-sm font-semibold cursor-pointer border transition-all ${
              activeTab === 'outlook'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/80 text-gray-400 border-white/10 hover:text-white'
            }`}
          >
            Market Outlook
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`px-5 py-2.5 rounded-full font-heading text-sm font-semibold cursor-pointer border transition-all ${
              activeTab === 'research'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/80 text-gray-400 border-white/10 hover:text-white'
            }`}
          >
            Deep Research (PDF)
          </button>
          <button
            onClick={() => setActiveTab('infographic')}
            className={`px-5 py-2.5 rounded-full font-heading text-sm font-semibold cursor-pointer border transition-all ${
              activeTab === 'infographic'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/80 text-gray-400 border-white/10 hover:text-white'
            }`}
          >
            Infografis & Chart
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-5 py-2.5 rounded-full font-heading text-sm font-semibold cursor-pointer border transition-all ${
              activeTab === 'video'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/80 text-gray-400 border-white/10 hover:text-white'
            }`}
          >
            Video Edukasi
          </button>
        </div>


        {/* SUB-SECTION 1: MARKET OUTLOOKS */}
        {(activeTab === 'all' || activeTab === 'outlook') && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Proyeksi Market Outlook</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketOutlooks.map((item) => (
                <div key={item.id} className="glass-panel overflow-hidden group hover:border-amber-500/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="badge-tag badge-gold">{item.category}</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gray-300">
                        {item.date}
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => alert(`Membaca artikel komplit: ${item.title}`)}
                      className="btn-secondary text-xs py-2 px-4 cursor-pointer"
                    >
                      <span>Baca Ulasan Lengkap</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* SUB-SECTION 2: DEEP RESEARCH (PDF) */}
        {(activeTab === 'all' || activeTab === 'research') && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              <span>Deep Research & Whitepaper (PDF Viewer)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deepResearch.map((res) => (
                <div key={res.id} className="glass-panel p-6 border-emerald-500/20 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="badge-tag badge-emerald">
                        <FileText size={12} />
                        {res.pages}
                      </span>
                      <span className="text-xs text-gray-400">{res.date}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 font-heading">
                      {res.title}
                    </h4>

                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                      <User size={14} />
                      <span>{res.author}</span>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                      {res.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <button
                      onClick={() => alert(`Membuka PDF viewer interaktif: ${res.downloadName}`)}
                      className="btn-primary text-xs py-2 px-4 cursor-pointer"
                    >
                      <Eye size={14} />
                      <span>Preview PDF</span>
                    </button>
                    <a
                      href={res.fileUrl}
                      onClick={(e) => { e.preventDefault(); alert(`Mengunduh file: ${res.downloadName}`); }}
                      className="btn-secondary text-xs py-2 px-4 cursor-pointer"
                    >
                      <Download size={14} />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* SUB-SECTION 3: FOTO / GAMBAR OUTLOOK (INFOGRAPHICS LIGHTBOX) */}
        {(activeTab === 'all' || activeTab === 'infographic') && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-cyan-400" />
              <span>Gambar & Infografis Outlook Pasar</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {infographics.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className="glass-panel p-4 group cursor-pointer hover:border-cyan-500/40 transition-all"
                >
                  <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                    <img
                      src={img.imageUrl}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 rounded-full bg-cyan-500 text-slate-950">
                        <Eye size={24} />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="badge-tag badge-cyan">{img.category}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1 font-heading group-hover:text-cyan-400 transition-colors">
                    {img.title}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {img.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* SUB-SECTION 4: VIDEO EDUKASI (YOUTUBE) */}
        {(activeTab === 'all' || activeTab === 'video') && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2">
              <Video className="w-5 h-5 text-rose-500" />
              <span>Video Edukasi Trading & Sistem</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className="glass-panel overflow-hidden group cursor-pointer hover:border-rose-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={vid.thumbnail}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg shadow-rose-600/40 group-hover:scale-110 transition-transform">
                          <Play size={20} className="ml-1 fill-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-slate-950/80 px-2 py-0.5 rounded text-[11px] text-gray-300 font-mono">
                        {vid.duration}
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="text-base font-bold text-white mb-2 font-heading group-hover:text-rose-400 transition-colors line-clamp-2">
                        {vid.title}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-2">
                        {vid.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 text-xs font-semibold text-rose-400 flex items-center gap-1">
                    <span>Putar Video YouTube</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>


      {/* LIGHTBOX MODAL UNTUK FOTO/GAMBAR OUTLOOK */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full glass-panel p-4 bg-slate-900 border-white/20 animate-scaleUp" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
            >
              <X size={20} />
            </button>

            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg mb-4"
            />
            <div className="px-2">
              <span className="badge-tag badge-cyan mb-2">{selectedImage.category}</span>
              <h3 className="text-xl font-bold text-white font-heading">{selectedImage.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}


      {/* MODAL PLAYER UNTUK VIDEO YOUTUBE */}
      {selectedVideo && (
        <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-3xl w-full glass-panel p-4 bg-slate-900 border-white/20 animate-scaleUp" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-white/20 cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden mb-4">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="px-2">
              <h3 className="text-xl font-bold text-white font-heading">{selectedVideo.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
