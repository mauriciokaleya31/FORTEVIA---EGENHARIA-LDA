import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/forteviaData';
import { ServiceItem } from '../types';
import { 
  Wrench, Sliders, Users, Zap, Cpu, Shield, Droplet, Settings, 
  Layers, Disc, Anchor, Activity, Search, CheckCircle2, 
  ArrowRight, Plus, Eye, X 
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (itemName?: string) => void;
  onOpenContactModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteModal,
  onOpenContactModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'hydraulic', label: 'Hidráulica & Torque' },
    { id: 'maintenance', label: 'Manutenção & Válvulas' },
    { id: 'oilgas', label: 'Oil & Gas e Poços' },
    { id: 'manpower', label: 'Mão de Obra' },
    { id: 'automation', label: 'Automação SCADA' },
    { id: 'marine', label: 'Subsea & Marítimo' },
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Tool': return Sliders;
      case 'Users': return Users;
      case 'Zap': return Zap;
      case 'Cpu': return Cpu;
      case 'Shield': return Shield;
      case 'Droplet': return Droplet;
      case 'Settings': return Settings;
      case 'Layers': return Layers;
      case 'Disc': return Disc;
      case 'Anchor': return Anchor;
      case 'Activity': return Activity;
      default: return Wrench;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 text-slate-800" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#081B4B]">
            Serviços Especializados
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Fornecemos intervenções técnicas de elevada complexidade com padrões internacionais de qualidade e HST para os sectores petrolífero, energético e marinho.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-sm">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Pesquisar serviço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636] focus:ring-1 focus:ring-[#BB7636]"
            />
          </div>

          {/* Category Tabs with horizontal touch scroll */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2.5 rounded-xl font-heading text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#081B4B] text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:border-[#BB7636]/60 hover:-translate-y-1"
              >
                {/* Image & Header */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B4B]/90 via-[#081B4B]/30 to-transparent" />

                  <div className="absolute top-3 left-3 bg-[#081B4B] border border-[#BB7636]/40 text-[#BB7636] p-2.5 rounded-xl shadow-lg">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-heading font-extrabold text-lg text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Highlights preview */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BB7636] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="pt-3 flex items-center gap-2 border-t border-slate-100">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-[#081B4B] py-2.5 rounded-lg font-heading font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detalhes</span>
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-3.5 py-2.5 rounded-lg font-heading font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                      title="Solicitar Cotação para este serviço"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span>Pedir Cotação</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#081B4B] via-[#0d2666] to-[#081B4B] rounded-2xl p-8 sm:p-10 text-white shadow-2xl border border-[#BB7636]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Precisa de um serviço especializado?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Fale com a nossa equipa técnica sediada no Soyo para apoio em intervenções no onshore ou offshore.
            </p>
          </div>

          <button
            onClick={onOpenContactModal}
            className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-8 py-4 rounded-xl font-heading font-bold text-sm shadow-xl flex-shrink-0 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          >
            <span>Fale com a nossa equipa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 overflow-hidden relative text-slate-800">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-60 bg-slate-900">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B4B] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/20 px-2.5 py-0.5 rounded border border-[#BB7636]/30">
                  Fortevia Technical Services
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-heading font-bold text-sm text-[#081B4B] uppercase tracking-wider mb-2">
                  Descrição do Serviço
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeModalService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-[#081B4B] uppercase tracking-wider mb-2">
                  Principais Características & Procedimentos
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeModalService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#BB7636] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeModalService.equipmentList && (
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#081B4B] uppercase tracking-wider mb-2">
                    Equipamentos e Ferramentas Utilizadas
                  </h4>
                  <ul className="flex flex-wrap gap-2 text-xs">
                    {activeModalService.equipmentList.map((eq, idx) => (
                      <span key={idx} className="bg-[#081B4B]/10 text-[#081B4B] font-semibold px-3 py-1 rounded-full border border-[#081B4B]/20">
                        {eq}
                      </span>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onOpenQuoteModal(title);
                  }}
                  className="w-full sm:w-auto bg-[#BB7636] hover:bg-[#a5652a] text-white px-6 py-3 rounded-lg font-heading font-bold text-xs uppercase transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Solicitar Cotação para este Serviço</span>
                </button>

                <button
                  onClick={() => setActiveModalService(null)}
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-lg font-heading font-semibold text-xs text-center"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
