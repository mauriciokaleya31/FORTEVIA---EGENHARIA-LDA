import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/forteviaData';
import { PageRoute } from '../types';
import { Phone, Mail, MapPin, Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activePage: PageRoute;
  setActivePage: (page: PageRoute) => void;
  quoteCartCount: number;
  onOpenQuoteModal: () => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  quoteCartCount,
  onOpenQuoteModal,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - Contact Quick Info */}
      <div className="bg-[#081B4B] text-slate-300 border-b border-slate-800 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-[#BB7636] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#BB7636]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#BB7636] transition-colors hidden sm:flex"
            >
              <Mail className="w-3.5 h-3.5 text-[#BB7636]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-1.5 hidden md:flex text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#BB7636]" />
              <span>Soyo, Rua Direita da Base do Kwanda, Angola</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden lg:inline text-slate-400">Soyo • Luanda • Offshore</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#081B4B]/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3'
            : 'bg-[#081B4B] border-b border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none group"
            aria-label="Fortevia Engenharia Home"
          >
            <Logo variant="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md font-heading font-medium text-xs xl:text-sm transition-all relative ${
                    isActive
                      ? 'text-white font-bold bg-white/10'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#BB7636] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls & CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quote Request Basket/Cart Button */}
            <button
              onClick={onOpenQuoteModal}
              className="relative p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-[#BB7636] transition-all flex items-center gap-2 group"
              title="Solicitação de Cotações"
            >
              <ShoppingBag className="w-4 h-4 text-[#BB7636] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-heading font-semibold text-white hidden xl:inline">
                Cotações
              </span>
              {quoteCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#BB7636] text-white font-bold text-[10px] rounded-full flex items-center justify-center animate-pulse">
                  {quoteCartCount}
                </span>
              )}
            </button>

            {/* Fale Connosco Primary Action Button */}
            <button
              onClick={onOpenContactModal}
              className="bg-gradient-to-r from-[#BB7636] to-[#a5652a] hover:from-[#d0833d] hover:to-[#BB7636] text-white px-4 py-2.5 rounded-lg font-heading font-bold text-xs xl:text-sm shadow-lg shadow-[#BB7636]/20 transition-all flex items-center gap-2 border border-[#BB7636]/40 hover:shadow-[#BB7636]/40 active:scale-95"
            >
              <span>Fale Connosco</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="relative p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
              aria-label="Cotações"
            >
              <ShoppingBag className="w-5 h-5 text-[#BB7636]" />
              {quoteCartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#BB7636] text-white font-bold text-[9px] rounded-full flex items-center justify-center">
                  {quoteCartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#BB7636]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#081B4B] border-b border-slate-800 px-4 py-6 mt-2 space-y-2 animate-in slide-in-from-top-4 duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-heading text-sm font-semibold transition-colors flex items-center justify-between ${
                  activePage === item.id
                    ? 'bg-[#BB7636] text-white'
                    : 'text-slate-200 hover:bg-slate-800/80'
                }`}
              >
                <span>{item.label}</span>
                {activePage === item.id && <ArrowRight className="w-4 h-4" />}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full bg-[#BB7636] text-white py-3 rounded-lg font-heading font-bold text-sm text-center shadow-lg"
              >
                Fale Connosco
              </button>
              <div className="text-center text-xs text-slate-400 pt-2">
                📍 Soyo, Rua Direita da Base do Kwanda, Angola
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
