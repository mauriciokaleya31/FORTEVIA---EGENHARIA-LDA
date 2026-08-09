import React from 'react';
import { PageRoute } from '../types';
import { Wrench, Globe2, Truck, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

interface AreasActuacaoProps {
  setActivePage: (page: PageRoute) => void;
}

export const AreasActuacao: React.FC<AreasActuacaoProps> = ({ setActivePage }) => {
  const pillars = [
    {
      title: 'ENGENHARIA',
      subtitle: 'Serviços Técnicos Especializados',
      desc: 'Soluções e serviços técnicos especializados para operações industriais, Oil & Gas, energia e sector marítimo.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      icon: Wrench,
      points: [
        'Aperto e Tensionamento Hidráulico (Bolt Torquing)',
        'Manutenção de Válvulas, Motores & Switchgear',
        'Inspecção Subsea IRM & Wellbore Cleaning (WBCO)',
        'Fabrico de Tubagens, Spools e Testes Hidroestáticos'
      ],
      page: 'services' as PageRoute
    },
    {
      title: 'PROCUREMENT',
      subtitle: 'Fornecimento & Aquisição Internacional',
      desc: 'Fornecimento e aquisição de equipamentos, ferramentas, componentes e materiais através de uma rede de fabricantes e fornecedores internacionais.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      icon: Globe2,
      points: [
        'Acesso directo a OEMs (ENERPAC, Hi-Force, etc.)',
        'Equipamentos de alta pressão, tubagens e conexões',
        'Kits de segurança HSE, derrames e pirotecnia marítima',
        'Garantia de componentes genuínos e recertificados'
      ],
      page: 'products' as PageRoute
    },
    {
      title: 'LOGÍSTICA',
      subtitle: 'Gestão Multimodal & Incoterms',
      desc: 'Gestão e coordenação de operações logísticas nacionais e internacionais, com conhecimento de Incoterms e diferentes modalidades de transporte.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      icon: Truck,
      points: [
        'Mobilização rápida para a Base do Kwanda no Soyo',
        'Fretes Marítimos, Aéreos e Terrestres com suporte aduaneiro',
        'Controlo integral do ciclo de fornecimento EXW a DDP',
        'Armazenamento seguro e gestão de inventários'
      ],
      page: 'about' as PageRoute
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Engenharia, Procurement & Logística
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Soluções completas e integradas projectadas para responder aos requisitos mais exigentes das indústrias extractivas e energéticas.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/90 border border-slate-700 rounded-2xl overflow-hidden shadow-xl hover:border-[#BB7636] transition-all flex flex-col group hover:-translate-y-1.5"
              >
                {/* Image & Overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#081B4B] border border-[#BB7636]/50 flex items-center justify-center text-[#BB7636] shadow-lg">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-2 border-t border-slate-700 pt-4 text-xs text-slate-300">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#BB7636] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setActivePage(pillar.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full mt-4 bg-slate-700/80 hover:bg-[#BB7636] text-white py-3 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-600 hover:border-[#BB7636]"
                  >
                    <span>Explorar {pillar.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
