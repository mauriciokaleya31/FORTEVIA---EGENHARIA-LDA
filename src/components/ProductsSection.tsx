import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/forteviaData';
import { ProductItem } from '../types';
import { 
  Wrench, Sliders, Settings, Activity, Layers, Zap, Shield, Cpu, 
  Droplet, ShieldAlert, Anchor, AlertTriangle, Package, Lock, 
  Search, Plus, CheckCircle, Tag, ShoppingBag 
} from 'lucide-react';

interface ProductsSectionProps {
  onAddToQuote: (product: ProductItem) => void;
  onOpenContactModal: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onAddToQuote,
  onOpenContactModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todos os Produtos' },
    { id: 'Ferramentas Hidráulicas', label: 'Ferramentas Hidráulicas' },
    { id: 'Válvulas & Tubagens', label: 'Válvulas & Tubagens' },
    { id: 'Conexões & Terminais', label: 'Conexões & Mangueiras' },
    { id: 'Automação & Instrumentação', label: 'Automação & Instrumentação' },
    { id: 'Segurança & HSE', label: 'Segurança, HSE & Pirotecnia' },
    { id: 'Marítimo & Química', label: 'Marítimo & Lubrificantes' },
    { id: 'Elevação & Carga', label: 'Elevação & Carga' },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.brand && p.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Tool': return Sliders;
      case 'Settings': return Settings;
      case 'Activity': return Activity;
      case 'Layers': return Layers;
      case 'Zap': return Zap;
      case 'Shield': return Shield;
      case 'Cpu': return Cpu;
      case 'Droplet': return Droplet;
      case 'ShieldAlert': return ShieldAlert;
      case 'Anchor': return Anchor;
      case 'AlertTriangle': return AlertTriangle;
      case 'Package': return Package;
      case 'Lock': return Lock;
      default: return Package;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white text-slate-800" id="products-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#BB7636] bg-[#BB7636]/10 px-3 py-1 rounded-full border border-[#BB7636]/20">
            Fornecimento Global & OEMs
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#081B4B]">
            Produtos e Equipamentos Industriais
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Disponibilizamos uma ampla gama de equipamentos, ferramentas, componentes e soluções industriais através de parceiros e fabricantes nacionais e internacionais.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Procurar produto ou marca (ex: Enerpac, Válvula)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636] focus:ring-1 focus:ring-[#BB7636]"
            />
          </div>

          {/* Category Tabs with smooth touch scroll on mobile */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2.5 rounded-xl font-heading text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#081B4B] text-white shadow'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.map((product) => {
            const IconComp = getIcon(product.iconName);
            return (
              <div
                key={product.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#BB7636] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B4B]/80 via-transparent to-transparent" />

                  {/* Brand Tag */}
                  {product.brand && (
                    <span className="absolute top-3 left-3 bg-[#081B4B] text-[#BB7636] border border-[#BB7636]/40 text-[10px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      {product.brand}
                    </span>
                  )}

                  <div className="absolute top-3 right-3 bg-white/90 text-[#081B4B] p-1.5 rounded-lg">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-heading font-semibold uppercase text-slate-400 tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-heading font-bold text-base text-[#081B4B] leading-tight mt-0.5">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Quote CTA Button */}
                  <div className="pt-3 border-t border-slate-200">
                    <button
                      onClick={() => onAddToQuote(product)}
                      className="w-full bg-[#BB7636] hover:bg-[#a5652a] text-white py-2.5 px-3 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Solicitar Cotação</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Sourcing Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-lg text-white">Não encontrou o equipamento específico que procura?</h4>
            <p className="text-xs text-slate-300">Nossa equipa de Procurement Internacional localiza e importa qualquer item sob norma ISO/API/ASME com certificação OEM.</p>
          </div>
          <button
            onClick={onOpenContactModal}
            className="bg-white text-[#081B4B] hover:bg-slate-100 font-heading font-bold px-6 py-3 rounded-lg text-xs whitespace-nowrap shadow-md"
          >
            Consultar Equipa de Procurement
          </button>
        </div>

      </div>
    </section>
  );
};
