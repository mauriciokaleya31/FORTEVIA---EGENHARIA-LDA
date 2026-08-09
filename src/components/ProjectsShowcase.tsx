import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/forteviaData';
import { MapPin, CheckCircle2, ArrowRight, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenContactModal: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenContactModal }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev === 0 ? PROJECTS_DATA.length - 1 : (prev as number) - 1));
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev === PROJECTS_DATA.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white text-slate-800" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#081B4B]">
            Galeria de Projectos Fortevia
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Registo fotográfico das nossas intervenções operacionais, fornecimentos técnicos e actuação em campo no Soyo, Base do Kwanda e plataformas offshore em Angola.
          </p>
        </div>

        {/* Gallery Grid - Photos Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5 border border-slate-200 hover:border-[#BB7636] bg-slate-900"
            >
              {/* Photo */}
              <img
                src={proj.image}
                alt={`Galeria Fortevia ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Subtle hover overlay with expand icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B4B]/80 via-[#081B4B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#BB7636] text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Consultation CTA */}
        <div className="mt-14 text-center p-8 bg-slate-900 rounded-2xl border border-slate-800 text-white shadow-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-heading font-extrabold text-lg text-white">
              Necessita de Serviços e Engenharia para o seu Projecto?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              Solicite a nossa equipa para mobilizações no Soyo, Base do Kwanda ou offshore.
            </p>
          </div>

          <button
            onClick={onOpenContactModal}
            className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-6 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg transition-colors shrink-0"
          >
            <span>Consultar Engenharia</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox / Fullscreen Image Gallery Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-600 transition-colors"
            title="Fechar (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrevImage}
            className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-slate-800/80 hover:bg-[#BB7636] text-white border border-slate-600 transition-colors"
            title="Foto Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNextImage}
            className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-slate-800/80 hover:bg-[#BB7636] text-white border border-slate-600 transition-colors"
            title="Próxima Foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal Image Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <div className="w-full flex-1 min-h-[350px] max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={PROJECTS_DATA[activeImageIndex].image}
                alt={PROJECTS_DATA[activeImageIndex].title}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="w-full p-5 bg-[#081B4B] text-white border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-heading font-bold text-[#BB7636] bg-[#BB7636]/20 px-2 py-0.5 rounded border border-[#BB7636]/30 uppercase">
                    {PROJECTS_DATA[activeImageIndex].category}
                  </span>
                  <span className="text-xs text-amber-300 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#BB7636]" />
                    {PROJECTS_DATA[activeImageIndex].location}
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  {PROJECTS_DATA[activeImageIndex].title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                  {PROJECTS_DATA[activeImageIndex].description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs text-slate-400 font-heading">
                  {activeImageIndex + 1} de {PROJECTS_DATA.length}
                </span>
                <button
                  onClick={onOpenContactModal}
                  className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase transition-colors"
                >
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

