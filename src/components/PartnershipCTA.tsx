import React from 'react';
import { Handshake, ArrowRight, Building2, Globe2 } from 'lucide-react';

interface PartnershipCTAProps {
  onOpenContactModal: () => void;
}

export const PartnershipCTA: React.FC<PartnershipCTAProps> = ({ onOpenContactModal }) => {
  return (
    <section className="py-16 bg-[#081B4B] text-white relative overflow-hidden border-t border-b border-[#BB7636]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-900 via-[#081B4B] to-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-700 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BB7636]/20 border border-[#BB7636]/40 text-amber-300 text-xs font-heading font-semibold">
              <Handshake className="w-4 h-4 text-[#BB7636]" />
              <span>Oportunidades de Negócio & Cooperações</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Construímos Parcerias. Criamos Valor.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Estamos abertos a novas oportunidades de negócio, parcerias estratégicas e colaborações de longo prazo com empresas nacionais e internacionais interessadas em actuar no mercado de Oil & Gas e indústria angolana.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenContactModal}
              className="bg-gradient-to-r from-[#BB7636] to-[#a5652a] hover:from-[#d0833d] hover:to-[#BB7636] text-white px-8 py-4 rounded-xl font-heading font-bold text-sm shadow-xl shadow-[#BB7636]/25 transition-all flex items-center gap-3 border border-[#BB7636]/50 hover:scale-105 active:scale-95"
            >
              <span>Torne-se nosso parceiro</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
