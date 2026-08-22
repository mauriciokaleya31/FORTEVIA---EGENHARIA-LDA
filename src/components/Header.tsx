import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/forteviaData';
import { PageRoute } from '../types';
import { Phone, Mail, MapPin, Menu, X, FileText, ArrowRight } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  activePage: PageRoute;
  setActivePage: (page: PageRoute) => void;
  onOpenQuoteModal: (itemName?: string) => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenQuoteModal,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre Nós' },
    { id: 'services', label: 'Serviços' },
    { id: 'products', label: 'Produtos' },
    { id: 'training', label: 'Formação' },
    { id: 'projects', label: 'Projectos' },
    { id: 'contact', label: 'Contactos' },
  ];

  const handleNavClick = (page: PageRoute) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 shadow-sm">
      {/* Top Bar - Quick Contact & Language */}
      <div className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-6">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-[#BB7636] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#BB7636]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-[#BB7636] transition-colors hidden sm:flex"
            >
              <Mail className="w-3.5 h-3.5 text-[#BB7636]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-1.5 hidden lg:flex text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#BB7636]" />
              <span>Soyo, Província do Zaire, Angola</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[11px]">
            <span className="text-slate-500 font-medium hidden md:inline">Soyo • Luanda • Cabinda • Offshore</span>
            <LanguageSelector theme="light" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Pure White Background */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2 sm:py-3'
            : 'bg-white border-b border-slate-200 py-3 sm:py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo - Fully Responsive & Prominent */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none group flex items-center py-0.5 flex-shrink min-w-0"
            aria-label="Fortevia Engenharia Início"
          >
            <Logo variant="light" showTagline={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 xl:px-4 py-2.5 rounded-xl font-heading text-xs xl:text-sm font-semibold transition-all relative whitespace-nowrap ${
                    isActive
                      ? 'text-[#081B4B] bg-[#081B4B]/5 font-extrabold shadow-sm'
                      : 'text-slate-600 hover:text-[#081B4B] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#BB7636] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons for Tablet / Desktop */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-slate-100 hover:bg-slate-200 text-[#081B4B] border border-slate-300 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl font-heading font-bold text-xs xl:text-sm transition-all flex items-center gap-1.5 shadow-sm active:scale-95 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-[#BB7636]" />
              <span>Pedir Cotação</span>
            </button>

            <button
              onClick={onOpenContactModal}
              className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-3.5 sm:px-4 xl:px-5 py-2 sm:py-2.5 rounded-xl font-heading font-bold text-xs xl:text-sm shadow-md shadow-[#BB7636]/20 transition-all flex items-center gap-2 border border-[#BB7636] hover:shadow-lg active:scale-95 whitespace-nowrap"
            >
              <span>Fale Connosco</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Controls (< 1024px) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden flex-shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#081B4B] border border-slate-300 transition-colors shadow-sm"
              aria-label="Pedir Cotação"
              title="Pedir Cotação"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#BB7636]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#081B4B] border border-slate-300 focus:outline-none transition-colors shadow-sm"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#BB7636]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#081B4B]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Smooth Scrolling */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 mt-2 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-2xl max-h-[calc(100vh-100px)] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-heading text-sm font-semibold transition-colors flex items-center justify-between ${
                  activePage === item.id
                    ? 'bg-[#081B4B] text-white'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {activePage === item.id && <ArrowRight className="w-4 h-4 text-[#BB7636]" />}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-600 font-heading font-semibold">Idioma / Translation:</span>
                <LanguageSelector theme="light" />
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-[#081B4B] py-3 rounded-xl font-heading font-bold text-xs flex items-center justify-center gap-2 border border-slate-300 shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#BB7636]" />
                <span>Pedir Cotação</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full bg-[#BB7636] hover:bg-[#a5652a] text-white py-3.5 rounded-xl font-heading font-bold text-sm text-center shadow-lg transition-all"
              >
                Fale Connosco
              </button>
              <div className="text-center text-xs text-slate-500 pt-1">
                📍 Soyo, Província do Zaire, Angola
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
