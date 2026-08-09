import React from 'react';
import { COMPANY_INFO } from '../data/forteviaData';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group border-2 border-white/40"
      title="Fale connosco pelo WhatsApp"
      aria-label="Atendimento via WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 bg-[#081B4B] text-white text-xs font-heading font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#BB7636]/40">
        WhatsApp Fortevia ({COMPANY_INFO.phone})
      </span>
    </a>
  );
};
