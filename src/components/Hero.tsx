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
    fallback: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=2000&q=85',
    title: 'Engenharia, Procurement e Logística',
    highlight: 'para um mundo em movimento.',
    subtitle: 'Soluções de engenharia especializada, serviços de aperto e torque hidráulico, manutenção e procurement directo com OEMs para operações no Soyo e offshore angolano.',
  },
  {
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf-1.png',
    fallback: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85',
    title: 'Excelência Operacional & Suporte Técnico',
    highlight: 'na Base do Kwanda e Offshore.',
    subtitle: 'Equipa 100% angolana altamente qualificada para manutenções mecânicas, calibrações de instrumentação SCADA, bombas, compressores e tubagens industriais.',
  },
  {
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf-2.png',
    fallback: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85',
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
    <section className="relative bg-[#081B4B] text-white overflow-hidden py-10 sm:py-20 lg:py-28 min-h-[500px] sm:min-h-[620px] flex items-center">
      
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
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== slide.fallback) {
                  target.src = slide.fallback;
                }
              }}
              className="w-full h-full object-cover object-center transition-transform duration-1000"
            />
          </div>
        ))}

        {/* Dark Navy & Gold Radial Gradient Overlay for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B] via-[#081B4B]/95 to-[#081B4B]/80" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
      </div>

      {/* Slider Navigation Arrows - Desktop & Mobile Friendly */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 hover:bg-[#BB7636] border border-white/20 text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 hover:bg-[#BB7636] border border-white/20 text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slider Bullets */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 sm:h-2.5 rounded-full transition-all ${
              idx === currentSlide ? 'w-6 sm:w-8 bg-[#BB7636]' : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10 w-full py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-12 max-w-4xl space-y-4 sm:space-y-6 animate-in fade-in duration-500">
            
            {/* Headline */}
            <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-6xl leading-tight text-white tracking-tight">
              {activeSlideData.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BB7636] via-amber-400 to-[#BB7636]">
                {activeSlideData.highlight}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              {activeSlideData.subtitle}
            </p>

            {/* Action Buttons - Stacked on Mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-[#BB7636] to-[#a5652a] hover:from-[#d0833d] hover:to-[#BB7636] text-white px-6 py-3.5 sm:py-4 rounded-xl font-heading font-bold text-xs sm:text-sm shadow-xl shadow-[#BB7636]/25 transition-all flex items-center justify-center gap-2.5 border border-[#BB7636]/50 active:scale-95"
              >
                <span>Conheça os nossos serviços</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={onOpenContactModal}
                className="bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-[#BB7636] px-6 py-3.5 sm:py-4 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Fale Connosco</span>
              </button>
            </div>

            {/* Indicators Bar below Hero */}
            <div className="pt-4 sm:pt-6 border-t border-slate-800/80">
              <p className="text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-widest text-slate-400 mb-2">
                Principais Áreas de Especialidade:
              </p>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-heading font-bold text-slate-200">
                <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 text-white flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <Wrench className="w-3.5 h-3.5 text-[#BB7636]" />
                  Engenharia
                </span>
                <span className="text-[#BB7636] font-normal hidden sm:inline">|</span>
                <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 text-white flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <Globe className="w-3.5 h-3.5 text-[#BB7636]" />
                  Procurement
                </span>
                <span className="text-[#BB7636] font-normal hidden sm:inline">|</span>
                <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 text-white flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <Shield className="w-3.5 h-3.5 text-[#BB7636]" />
                  Logística
                </span>
                <span className="text-[#BB7636] font-normal hidden sm:inline">|</span>
                <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 text-white flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <Award className="w-3.5 h-3.5 text-[#BB7636]" />
                  Serviços Técnicos
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
