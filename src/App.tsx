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
import { ClientsSection } from './components/ClientsSection';
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
              isHomeView={true}
            />
            <ClientsSection onOpenContactModal={handleOpenContactModal} />
            <PartnershipCTA onOpenContactModal={handleOpenContactModal} />
            <ProjectsShowcase onOpenContactModal={handleOpenContactModal} />
            <CallToAction
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              onOpenContactModal={handleOpenContactModal}
            />
          </>
        )}

        {activePage === 'about' && (
          <>
            <div className="relative bg-[#081B4B] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 border-b border-[#BB7636]/40 text-center overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-80">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1600&q=80"
                  alt="Fortevia Sobre Nós"
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B]/85 via-[#081B4B]/65 to-[#081B4B]/85" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
                  Fortevia Engenharia • Soyo, Angola
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mt-1 drop-shadow-md">
                  Sobre Nós
                </h1>
                <p className="text-slate-100 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed drop-shadow-sm">
                  Conheça a história, visão e compromisso da empresa 100% angolana de referência em Engenharia, Procurement e Logística.
                </p>
              </div>
            </div>
            <AboutSection setActivePage={setActivePage} isStandalonePage />
            <MissionVisionValues />
            <ClientsSection onOpenContactModal={handleOpenContactModal} />
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
              <div className="absolute inset-0 z-0 opacity-80">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
                  alt="Fortevia Serviços"
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B]/85 via-[#081B4B]/65 to-[#081B4B]/85" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
                  Especialidade Técnica Certificada
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mt-1 drop-shadow-md">
                  Serviços Especializados
                </h1>
                <p className="text-slate-100 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed drop-shadow-sm">
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
              <div className="absolute inset-0 z-0 opacity-80">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
                  alt="Fortevia Produtos"
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B]/85 via-[#081B4B]/65 to-[#081B4B]/85" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
                  Catálogo Industrial & OEMs
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mt-1 drop-shadow-md">
                  Produtos e Equipamentos
                </h1>
                <p className="text-slate-100 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed drop-shadow-sm">
                  Fornecimento e aquisição de ferramentas hidráulicas Enerpac, Hi-Force, válvulas, tubagens, componentes e kits de segurança.
                </p>
              </div>
            </div>
            <ProductsSection
              onOpenQuoteModal={handleOpenQuoteModal}
              onOpenContactModal={handleOpenContactModal}
              setActivePage={setActivePage}
              isHomeView={false}
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
              <div className="absolute inset-0 z-0 opacity-80">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
                  alt="Fortevia Formação"
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B]/85 via-[#081B4B]/65 to-[#081B4B]/85" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Desenvolvimento de Competências
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mt-1 drop-shadow-md">
                  Formação Profissional
                </h1>
                <p className="text-slate-100 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed drop-shadow-sm">
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
              <div className="absolute inset-0 z-0 opacity-80">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
                  alt="Fortevia Projectos"
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B]/85 via-[#081B4B]/65 to-[#081B4B]/85" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
                  Operações de Campo
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white mt-1 drop-shadow-md">
                  Projectos & Casos Práticos
                </h1>
                <p className="text-slate-100 text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed drop-shadow-sm">
                  Intervenções e apoio logístico realizados em instalações industriais no Soyo, onshore e plataformas offshore em Angola.
                </p>
              </div>
            </div>
            <ProjectsShowcase onOpenContactModal={handleOpenContactModal} />
            <ClientsSection onOpenContactModal={handleOpenContactModal} />
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
              <div className="absolute inset-0 z-0 opacity-80">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1600&q=80"
                  alt="Fortevia Contactos"
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B4B]/85 via-[#081B4B]/65 to-[#081B4B]/85" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
                  Soyo • Zaire • Angola
                </span>
                <h1 className="font-heading font-black text-3xl sm:text-5xl text-white mt-1 drop-shadow-md">
                  Contactos & Localização
                </h1>
                <p className="text-slate-100 text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed drop-shadow-sm">
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
