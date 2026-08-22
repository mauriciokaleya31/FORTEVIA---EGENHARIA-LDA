import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/forteviaData';
import { PageRoute } from '../types';
import { Phone, Mail, MapPin, Globe, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageRoute) => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenContactModal }) => {
  const handleNav = (page: PageRoute) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081B4B] text-slate-300 pt-16 pb-8 border-t-4 border-[#BB7636] relative overflow-hidden">
      {/* Background Subtle Industrial Lines */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1 & 2: Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="footer" showTagline />
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              A <strong className="text-white">Fortevia Engenharia</strong> é uma empresa 100% angolana especializada em soluções de <strong className="text-[#BB7636]">Engenharia, Procurement, Logística</strong>, fornecimento de equipamentos e serviços técnicos industriais sediada no Soyo.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#BB7636]" />
              <span>Acesso directo a OEMs internacionais & Conformidade com Incoterms</span>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider text-[#BB7636] border-b border-slate-800 pb-2">
              Navegação Rápida
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Início' },
                { id: 'about', label: 'Sobre Nós' },
                { id: 'services', label: 'Serviços Especializados' },
                { id: 'products', label: 'Catálogo de Produtos' },
                { id: 'training', label: 'Formação Profissional' },
                { id: 'projects', label: 'Projectos & Casos' },
                { id: 'contact', label: 'Contactos & Localização' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id as PageRoute)}
                    className="hover:text-[#BB7636] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#BB7636] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Key Sectors */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider text-[#BB7636] border-b border-slate-800 pb-2">
              Sectores de Actuação
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#BB7636] rounded-full" />
                Oil & Gas (Offshore & Onshore)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#BB7636] rounded-full" />
                Energia & Automação Industrial
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#BB7636] rounded-full" />
                Sector Marítimo & Portuário
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#BB7636] rounded-full" />
                Refinação e Petroquímica
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#BB7636] rounded-full" />
                Infraestruturas e Manutenção
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider text-[#BB7636] border-b border-slate-800 pb-2">
              Sede e Contactos
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BB7636] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Soyo, Angola</p>
                  <p className="text-slate-400">Província do Zaire, Soyo</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BB7636] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-amber-400 transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BB7636] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#BB7636] flex-shrink-0" />
                <a href={`http://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>{COMPANY_INFO.website}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#BB7636]" />
                </a>
              </div>

              <button
                onClick={onOpenContactModal}
                className="w-full mt-2 bg-[#BB7636] hover:bg-[#a5652a] text-white py-2 rounded text-xs font-heading font-bold transition-colors text-center"
              >
                Solicitar Cotação / Contacto
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Fortevia Engenharia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 text-slate-400 text-[11px]">
            <span>Empresa 100% Angolana</span>
            <span>•</span>
            <span>Soyo, Angola</span>
            <span>•</span>
            <span className="text-[#BB7636]">Engenharia • Procurement • Logística</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
