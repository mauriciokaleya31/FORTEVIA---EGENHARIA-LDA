import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Globe2, ShieldCheck, Check, Anchor, Building2, Cpu } from 'lucide-react';

interface AboutSectionProps {
  setActivePage: (page: PageRoute) => void;
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  setActivePage,
  isStandalonePage = false,
}) => {
  return (
    <section className={`py-16 md:py-24 ${isStandalonePage ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Side Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
              <img
                src="https://visa.onlyvibes.online/wp-content/uploads/2026/08/danalbangola-4.png"
                alt="Fortevia Engenharia no Soyo"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-[320px] sm:h-[450px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B4B]/90 via-transparent to-transparent" />
              
              {/* Overlay Stat Box */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#081B4B]/95 border border-[#BB7636]/40 rounded-xl backdrop-blur-md text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#BB7636] flex items-center justify-center text-white font-bold text-xl">
                    100%
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Empresa 100% Angolana</h4>
                    <p className="text-xs text-amber-300">Sediada no Soyo, Província do Zaire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <h2 className={`font-heading font-extrabold text-2xl sm:text-4xl leading-tight ${isStandalonePage ? 'text-white' : 'text-[#081B4B]'}`}>
                Soluções que geram valor.{' '}
                <span className="text-[#BB7636]">Experiência que faz a diferença.</span>
              </h2>
            </div>

            <p className={`text-base leading-relaxed ${isStandalonePage ? 'text-slate-300' : 'text-slate-600'}`}>
              A <strong className={isStandalonePage ? 'text-white' : 'text-slate-900'}>Fortevia Engenharia</strong> é uma empresa totalmente angolana, comprometida com a satisfação total dos seus clientes. Procuramos compreender profundamente as necessidades e os requisitos de cada cliente, de forma a superar consistentemente as suas expectativas.
            </p>

            <p className={`text-base leading-relaxed ${isStandalonePage ? 'text-slate-300' : 'text-slate-600'}`}>
              A nossa experiência abrange serviços integrados de <strong className="text-[#BB7636]">Engenharia, Procurement e Logística</strong>, permitindo-nos disponibilizar soluções adaptadas às necessidades de diferentes sectores industriais.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-xl border ${isStandalonePage ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-1.5`}>
                <div className="flex items-center gap-2 text-[#BB7636] font-heading font-bold text-sm">
                  <Globe2 className="w-4 h-4" />
                  <span>Acesso Directo a OEMs</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Acesso directo a Original Equipment Manufacturers globais para peças e máquinas genuínas.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${isStandalonePage ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-1.5`}>
                <div className="flex items-center gap-2 text-[#BB7636] font-heading font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Domínio de Incoterms</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Especialização em logística internacional e gestão aduaneira marítima, aérea e terrestre.
                </p>
              </div>
            </div>

            <p className={`text-sm leading-relaxed ${isStandalonePage ? 'text-slate-300' : 'text-slate-600'}`}>
              Esta capacidade permite-nos prestar serviços a nível nacional e internacional, utilizando diferentes modelos de transporte e assegurando <strong className="text-[#BB7636]">eficiência, segurança, qualidade e satisfação do cliente</strong>. A Fortevia Engenharia mantém-se aberta a novas parcerias, oportunidades de negócio e colaborações de longo prazo.
            </p>

            {!isStandalonePage && (
              <div className="pt-2">
                <button
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#081B4B] hover:bg-[#0d2666] text-white px-6 py-3.5 rounded-lg font-heading font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Saiba mais sobre nós</span>
                  <ArrowRight className="w-4 h-4 text-[#BB7636]" />
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
