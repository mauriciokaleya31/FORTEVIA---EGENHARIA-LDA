import React from 'react';
import { PROJECTS_DATA } from '../data/forteviaData';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenContactModal: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenContactModal }) => {
  return (
    <section className="py-16 md:py-24 bg-white text-slate-800" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
            Casos Práticos & Operações
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#081B4B]">
            Projectos e Actuação em Campo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Exemplos do nosso compromisso de entrega em ambientes operacionais exigentes no Soyo, Base do Kwanda e offshore angolano.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#BB7636] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B4B] via-[#081B4B]/30 to-transparent" />

                <div className="absolute top-3 left-3 bg-[#081B4B] text-[#BB7636] text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-[#BB7636]/40">
                  {proj.category}
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#BB7636]" />
                  <span>{proj.location}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#081B4B] leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-400">
                    Destaques da Operação:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {proj.highlights.map((high, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BB7636]" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Consultation CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 mb-3">Possui um desafio operacional semelhante no seu bloco ou instalação?</p>
          <button
            onClick={onOpenContactModal}
            className="bg-[#081B4B] hover:bg-[#0d2666] text-white px-6 py-3 rounded-lg font-heading font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
          >
            <span>Consultar Engenharia de Projectos</span>
            <ArrowRight className="w-4 h-4 text-[#BB7636]" />
          </button>
        </div>

      </div>
    </section>
  );
};
