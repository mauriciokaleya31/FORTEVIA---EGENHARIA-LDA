import React, { useState } from 'react';
import { PageRoute, TrainingCourse } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MissionVisionValues } from './components/MissionVisionValues';
import { AreasActuacao } from './components/AreasActuacao';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { TrainingSection } from './components/TrainingSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PartnershipCTA } from './components/PartnershipCTA';
import { CallToAction } from './components/CallToAction';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ContactSection } from './components/ContactSection';
import { QuoteModal } from './components/QuoteModal';
import { CourseInquiryModal } from './components/CourseInquiryModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteItemName, setQuoteItemName] = useState('');
  const [activeCourseInquiry, setActiveCourseInquiry] = useState<TrainingCourse | null>(null);

  const handleOpenQuoteModal = (itemName?: string) => {
    setQuoteItemName(itemName || '');
    setIsQuoteModalOpen(true);
  };

  const handleOpenContactModal = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#BB7636] selection:text-white">
      {/* Sticky Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero
              setActivePage={setActivePage}
              onOpenContactModal={handleOpenContactModal}
            />
            <AboutSection setActivePage={setActivePage} />
            <MissionVisionValues />
            <ServicesSection
              onOpenQuoteModal={handleOpenQuoteModal}
              onOpenContactModal={handleOpenContactModal}
            />
            <ProductsSection
              onOpenQuoteModal={handleOpenQuoteModal}
              onOpenContactModal={handleOpenContactModal}
              setActivePage={setActivePage}
            />
            <PartnershipCTA onOpenContactModal={handleOpenContactModal} />
            <ProjectsShowcase onOpenContactModal={handleOpenContactModal} />
          </>
        )}

        {activePage === 'about' && (
          <>
            <div className="relative bg-[#081B4B] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 border-b border-[#BB7636]/40 text-center overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-30">
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf.png"
                  alt="Fortevia Sobre Nós"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1600&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B] via-[#081B4B]/90 to-[#081B4B]" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
                  Fortevia Engenharia • Soyo, Angola
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mt-1">
                  Sobre Nós
                </h1>
                <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed">
                  Conheça a história, visão e compromisso da empresa 100% angolana de referência em Engenharia, Procurement e Logística.
                </p>
              </div>
            </div>
            <AboutSection setActivePage={setActivePage} isStandalonePage />
            <MissionVisionValues />
            <WhyChooseUs />
            <PartnershipCTA onOpenContactModal={handleOpenContactModal} />
            <CallToAction
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              onOpenContactModal={handleOpenContactModal}
            />
          </>
        )}

        {activePage === 'services' && (
          <>
            <div className="relative bg-[#081B4B] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 border-b border-[#BB7636]/40 text-center overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-30">
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf-1.png"
                  alt="Fortevia Serviços"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B] via-[#081B4B]/90 to-[#081B4B]" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
                  Especialidade Técnica Certificada
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mt-1">
                  Serviços Especializados
                </h1>
                <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed">
                  Operações de aperto, manutenção hidráulica, motores, válvulas, tubagens, WBCO, IRM Subsea e controlo SCADA no Soyo.
                </p>
              </div>
            </div>
            <ServicesSection
              onOpenQuoteModal={handleOpenQuoteModal}
              onOpenContactModal={handleOpenContactModal}
            />
            <CallToAction
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              onOpenContactModal={handleOpenContactModal}
            />
          </>
        )}

        {activePage === 'products' && (
          <>
            <div className="relative bg-[#081B4B] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 border-b border-[#BB7636]/40 text-center overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-30">
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf-2.png"
                  alt="Fortevia Produtos"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B] via-[#081B4B]/90 to-[#081B4B]" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
                  Catálogo Industrial & OEMs
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mt-1">
                  Produtos e Equipamentos
                </h1>
                <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed">
                  Fornecimento e aquisição de ferramentas hidráulicas Enerpac, Hi-Force, válvulas, tubagens, componentes e kits de segurança.
                </p>
              </div>
            </div>
            <ProductsSection
              onOpenQuoteModal={handleOpenQuoteModal}
              onOpenContactModal={handleOpenContactModal}
            />
            <CallToAction
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              onOpenContactModal={handleOpenContactModal}
            />
          </>
        )}

        {activePage === 'training' && (
          <>
            <div className="relative bg-[#081B4B] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 border-b border-[#BB7636]/40 text-center overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-30">
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf.png"
                  alt="Fortevia Formação"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B] via-[#081B4B]/90 to-[#081B4B]" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Desenvolvimento de Competências
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mt-1">
                  Formação Profissional
                </h1>
                <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed">
                  Capacitação técnica e comportamental para os sectores de Oil & Gas, Logística, Segurança HSE e Gestão Industrial.
                </p>
              </div>
            </div>
            <TrainingSection
              onOpenContactModal={handleOpenContactModal}
              onOpenCourseInquiry={(course) => setActiveCourseInquiry(course)}
            />
            <CallToAction
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              onOpenContactModal={handleOpenContactModal}
            />
          </>
        )}

        {activePage === 'projects' && (
          <>
            <div className="relative bg-[#081B4B] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 border-b border-[#BB7636]/40 text-center overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-30">
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf-1.png"
                  alt="Fortevia Projectos"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-[#504917595217-d4dc5ebe6122]?auto=format&fit=crop&w=1600&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B] via-[#081B4B]/90 to-[#081B4B]" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
                  Operações de Campo
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mt-1">
                  Projectos & Casos Práticos
                </h1>
                <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
                  Intervenções e apoio logístico realizados na Base do Kwanda no Soyo, onshore e plataformas offshore em Angola.
                </p>
              </div>
            </div>
            <ProjectsShowcase onOpenContactModal={handleOpenContactModal} />
            <PartnershipCTA onOpenContactModal={handleOpenContactModal} />
            <CallToAction
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              onOpenContactModal={handleOpenContactModal}
            />
          </>
        )}

        {activePage === 'contact' && (
          <>
            <div className="relative bg-[#081B4B] text-white py-16 px-4 sm:px-8 border-b border-[#BB7636]/40 text-center overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-30">
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/08/Apresentacao_Brochura_LIZANDO_SHIP_CHANDLING_Small-1.pdf-2.png"
                  alt="Fortevia Contactos"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B] via-[#081B4B]/90 to-[#081B4B]" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
                  Soyo • Zaire • Angola
                </span>
                <h1 className="font-heading font-black text-3xl sm:text-5xl text-white mt-1">
                  Contactos & Localização
                </h1>
                <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
                  Fale directamente com a nossa equipa para pedidos de cotação, parcerias e suporte operacional.
                </p>
              </div>
            </div>
            <ContactSection />
          </>
        )}
      </main>

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppButton />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialItemName={quoteItemName}
      />

      {/* Course Inquiry Modal */}
      <CourseInquiryModal
        course={activeCourseInquiry}
        onClose={() => setActiveCourseInquiry(null)}
      />

      {/* Global Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenContactModal={handleOpenContactModal}
      />
    </div>
  );
}
