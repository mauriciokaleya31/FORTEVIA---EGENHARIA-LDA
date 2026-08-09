import React from 'react';
import { Send, PhoneCall, ArrowRight, MessageSquare } from 'lucide-react';

interface CallToActionProps {
  onOpenQuoteModal: () => void;
  onOpenContactModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onOpenQuoteModal,
  onOpenContactModal,
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#081B4B] via-[#0d2666] to-[#081B4B] text-white relative overflow-hidden border-t-2 border-[#BB7636]">
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#BB7636]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-6">
        
        <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/30 inline-block">
          Atendimento Técnico Imediato • Soyo, Angola
        </span>

        <h2 className="font-heading font-black text-3xl sm:text-5xl text-white leading-tight">
          Tem um projecto ou necessidade específica?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A nossa equipa técnica e de procurement está preparada para encontrar a solução adequada, segura e eficiente para o seu negócio.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuoteModal}
            className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-8 py-4 rounded-xl font-heading font-bold text-sm shadow-xl shadow-[#BB7636]/30 transition-all flex items-center gap-2.5 border border-[#BB7636]/50 hover:scale-105 active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Solicitar Cotação</span>
          </button>

          <button
            onClick={onOpenContactModal}
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-heading font-bold text-sm shadow-lg backdrop-blur-md border border-white/20 transition-all flex items-center gap-2.5 hover:scale-105"
          >
            <PhoneCall className="w-4 h-4 text-[#BB7636]" />
            <span>Contactar a Fortevia</span>
          </button>
        </div>

      </div>
    </section>
  );
};
