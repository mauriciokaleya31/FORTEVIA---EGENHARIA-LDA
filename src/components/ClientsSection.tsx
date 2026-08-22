import React from 'react';
import { CLIENTS_DATA } from '../data/forteviaData';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Award } from 'lucide-react';

interface ClientsSectionProps {
  onOpenContactModal: () => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section className="py-16 md:py-24 bg-white text-slate-800 relative overflow-hidden" id="clients-section">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#BB7636] to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#081B4B]/5 border border-[#081B4B]/10 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold text-[#081B4B] uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#BB7636]" />
            <span>Confiança & Solidez Operacional</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#081B4B] tracking-tight">
            Os Nossos Clientes
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Temos o privilégio de prestar serviços e fornecer equipamentos a operadores, projectos estratégicos e empresas líderes no mercado industrial e de Oil & Gas em Angola.
          </p>
        </div>

        {/* Client Logos / Monogram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS_DATA.map((client, idx) => (
            <div
              key={client.id}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#BB7636] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div className="space-y-4">
                {/* Top Badge & Identifier */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#081B4B] text-white flex items-center justify-center font-heading font-black text-sm shadow-md group-hover:bg-[#BB7636] group-hover:text-white transition-colors flex-shrink-0">
                      {client.name.substring(0, 3)}
                    </div>
                    <div>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400">
                        Cliente Fortevia
                      </span>
                      <h3 className="font-heading font-extrabold text-xl text-[#081B4B] group-hover:text-[#BB7636] transition-colors leading-tight">
                        {client.name}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-heading font-bold px-2.5 py-1 rounded-full bg-[#081B4B]/10 text-[#081B4B] uppercase tracking-wide border border-[#081B4B]/10 whitespace-nowrap">
                    {client.tag}
                  </span>
                </div>

                {/* Scope Pill */}
                <div className="inline-flex items-center gap-1.5 text-xs text-[#BB7636] font-heading font-semibold bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-[#BB7636]" />
                  <span className="line-clamp-1">{client.scope}</span>
                </div>

                {/* Category & Description */}
                <div>
                  <h4 className="text-xs font-heading font-bold text-slate-700">
                    {client.category}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-5 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Contrato / Serviços Activos</span>
                </span>
                <span className="text-[11px] font-heading font-bold text-[#081B4B] group-hover:text-[#BB7636] transition-colors">
                  Angola • Soyo
                </span>
              </div>
            </div>
          ))}

          {/* New Partnership Card Slot */}
          <div className="bg-gradient-to-br from-[#081B4B] to-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-800 text-white shadow-lg flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#BB7636]/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#BB7636] text-white flex items-center justify-center font-heading font-bold shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-amber-300">
                Novas Oportunidades
              </span>

              <h3 className="font-heading font-extrabold text-xl text-white">
                Seja Nosso Cliente
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Junte a sua empresa aos nossos parceiros de referência e conte com a capacidade de engenharia, procurement e logística da Fortevia.
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-800 relative z-10">
              <button
                onClick={onOpenContactModal}
                className="w-full bg-[#BB7636] hover:bg-[#a5652a] text-white py-2.5 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Solicitar Reunião / Proposta</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators Bar */}
        <div className="mt-12 p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#BB7636]" />
            <span className="font-medium">100% de Cumprimento de Normas HSE</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#BB7636]" />
            <span className="font-medium">Acesso Directo a Fabricantes (OEMs)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#BB7636]" />
            <span className="font-medium">Equipas Qualificadas no Soyo & Offshore</span>
          </div>
        </div>

      </div>
    </section>
  );
};
