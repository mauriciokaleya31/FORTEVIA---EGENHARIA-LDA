import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Shield, Award, Globe, Wrench, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  setActivePage: (page: PageRoute) => void;
  onOpenContactModal: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf.png',
    title: 'Engenharia, Procurement e Logística',
    highlight: 'para um mundo em movimento.',
    subtitle: 'Soluções de engenharia especializada, serviços de aperto e torque hidráulico, manutenção e procurement directo com OEMs para operações no Soyo e offshore angolano.',
  },
  {
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf-1.png',
    title: 'Excelência Operacional & Suporte Técnico',
    highlight: 'na Base do Kwanda e Offshore.',
    subtitle: 'Equipa 100% angolana altamente qualificada para manutenções mecânicas, calibrações de instrumentação SCADA, bombas, compressores e tubagens industriais.',
  },
  {
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf-2.png',
    title: 'Fornecimento Global & Soluções LIZANDO',
    highlight: 'com Rigor e Pontualidade.',
    subtitle: 'Gestão completa da cadeia de abastecimento, equipamentos hidráulicos Enerpac e Hi-Force, ferramentas e insumos industriais sob conformidade de Incoterms.',
  },
];

export const Hero: React.FC<HeroProps> = ({ setActivePage, onOpenContactModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section className="relative bg-[#081B4B] text-white overflow-hidden py-16 md:py-24 lg:py-32 min-h-[640px] flex items-center">
      
      {/* Background Image Slider with Overlays */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={`Fortevia Slide ${index + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-1000"
            />
          </div>
        ))}

        {/* Dark Navy & Gold Radial Gradient Overlay for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B] via-[#081B4B]/95 to-[#081B4B]/80" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
      </div>

      {/* Slider Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-[#BB7636] border border-white/20 text-white flex items-center justify-center transition-all shadow-xl hover:scale-110"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-[#BB7636] border border-white/20 text-white flex items-center justify-center transition-all shadow-xl hover:scale-110"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Bullets */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === currentSlide ? 'w-8 bg-[#BB7636]' : 'w-2.5 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6 animate-in fade-in duration-500">
            
            {/* Headline */}
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl leading-[1.1] text-white tracking-tight">
              {activeSlideData.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BB7636] via-amber-400 to-[#BB7636]">
                {activeSlideData.highlight}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              {activeSlideData.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-[#BB7636] to-[#a5652a] hover:from-[#d0833d] hover:to-[#BB7636] text-white px-7 py-4 rounded-lg font-heading font-bold text-sm shadow-xl shadow-[#BB7636]/25 transition-all flex items-center gap-3 border border-[#BB7636]/50 hover:scale-105 active:scale-95"
              >
                <span>Conheça os nossos serviços</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContactModal}
                className="bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-[#BB7636] px-7 py-4 rounded-lg font-heading font-semibold text-sm transition-all flex items-center gap-2 hover:scale-105"
              >
                <span>Fale Connosco</span>
              </button>
            </div>

            {/* Indicators Bar below Hero */}
            <div className="pt-6 border-t border-slate-800/80">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Principais Áreas de Especialidade:
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-heading font-bold text-slate-200">
                <span className="px-3 py-1.5 rounded bg-white/10 border border-white/10 text-white flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#BB7636]" />
                  Engenharia
                </span>
                <span className="text-[#BB7636] font-normal">|</span>
                <span className="px-3 py-1.5 rounded bg-white/10 border border-white/10 text-white flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#BB7636]" />
                  Procurement
                </span>
                <span className="text-[#BB7636] font-normal">|</span>
                <span className="px-3 py-1.5 rounded bg-white/10 border border-white/10 text-white flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#BB7636]" />
                  Logística
                </span>
                <span className="text-[#BB7636] font-normal">|</span>
                <span className="px-3 py-1.5 rounded bg-white/10 border border-white/10 text-white flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#BB7636]" />
                  Serviços Técnicos
                </span>
              </div>
            </div>

          </div>

          {/* Right Hero Feature Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#BB7636]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#BB7636]/20 border border-[#BB7636]/40 flex items-center justify-center text-[#BB7636]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">Fortevia Differentiators</h3>
                  <p className="text-xs text-slate-400">Soyo • Kwanda Base • Global Reach</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#BB7636] flex-shrink-0 mt-0.5" />
                  <span><strong>100% Capital Angolano</strong> com conhecimento profundo do mercado nacional.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#BB7636] flex-shrink-0 mt-0.5" />
                  <span><strong>Acesso Directo a OEMs Internacional</strong> para fornecimento de equipamentos genuínos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#BB7636] flex-shrink-0 mt-0.5" />
                  <span><strong>Domínio dos Incoterms</strong> e coordenação logística multimodal global.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#BB7636] flex-shrink-0 mt-0.5" />
                  <span><strong>Presença no Soyo</strong>, adjacente à Base do Kwanda para resposta rápida.</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Suporte Operacional 24/7</span>
                <span className="text-[#BB7636] font-bold">HSE Excellence</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
