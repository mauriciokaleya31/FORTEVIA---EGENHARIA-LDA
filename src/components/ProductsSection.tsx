import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/forteviaData';
import { ProductItem, PageRoute } from '../types';
import { 
  Wrench, Sliders, Settings, Activity, Layers, Zap, Shield, Cpu, 
  Droplet, ShieldAlert, Anchor, AlertTriangle, Package, Lock, 
  Search, CheckCircle, Tag, ShoppingBag, Eye, X, Mail, Phone, ExternalLink,
  Info, Sparkles, Filter, Check, ChevronLeft, ChevronRight, ArrowRight, Layers as LayersIcon
} from 'lucide-react';

interface ProductsSectionProps {
  onOpenQuoteModal: (itemName?: string) => void;
  onOpenContactModal: () => void;
  setActivePage?: (page: PageRoute) => void;
  isHomeView?: boolean;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onOpenQuoteModal,
  onOpenContactModal,
  setActivePage,
  isHomeView = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeProductModal, setActiveProductModal] = useState<ProductItem | null>(null);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

  // For slider mode (Home View), calculate chunk of products
  const itemsPerSlide = 4;
  const maxSlideIndex = Math.max(0, Math.ceil(filteredProducts.length / itemsPerSlide) - 1);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : maxSlideIndex));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev < maxSlideIndex ? prev + 1 : 0));
  };

  const displayedHomeProducts = isHomeView 
    ? filteredProducts.slice(currentSlideIndex * itemsPerSlide, (currentSlideIndex + 1) * itemsPerSlide)
    : filteredProducts;

  const toggleCartItem = (productName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (cartItems.includes(productName)) {
      setCartItems(cartItems.filter(item => item !== productName));
    } else {
      setCartItems([...cartItems, productName]);
    }
  };

  const handleBatchQuote = () => {
    if (cartItems.length === 0) return;
    const combinedNames = `Cotação Múltipla (${cartItems.length} itens): ` + cartItems.join(', ');
    onOpenQuoteModal(combinedNames);
  };

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
    <section className="py-16 md:py-24 bg-slate-50 text-slate-800 relative overflow-hidden" id="products-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#081B4B]/5 border border-[#081B4B]/10 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold text-[#081B4B] uppercase tracking-wider">
            <Package className="w-3.5 h-3.5 text-[#BB7636]" />
            <span>Fornecimento & Procurement Internacional</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#081B4B] tracking-tight">
            Nossos Produtos
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Equipamentos industriais certificados, sistemas hidráulicos de alta pressão e insumos especializados com garantia de procedência e suporte técnico no Soyo.
          </p>
        </div>

        {/* Filter / Category Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-sm">
          {/* Search Bar (Shown in full page view or on search focus) */}
          {!isHomeView && (
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Procurar por nome, marca ou categoria..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636] focus:ring-1 focus:ring-[#BB7636]"
              />
            </div>
          )}

          {/* Category Tabs & Slider Controls */}
          <div className={`flex items-center gap-2 w-full ${isHomeView ? 'justify-between' : 'md:w-auto'} overflow-x-auto pb-1 md:pb-0 scrollbar-none`}>
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentSlideIndex(0);
                  }}
                  className={`px-3.5 py-2 rounded-xl font-heading text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-[#081B4B] text-white shadow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {cartItems.length > 0 && (
              <button
                onClick={handleBatchQuote}
                className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-4 py-2 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md flex-shrink-0 ml-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Cotação ({cartItems.length})</span>
              </button>
            )}
          </div>

          {/* Slider Arrows when in Home view */}
          {isHomeView && maxSlideIndex > 0 && (
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0 pl-2">
              <button
                onClick={handlePrevSlide}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#081B4B] text-slate-700 hover:text-white border border-slate-200 transition-colors shadow-sm"
                aria-label="Slide Anterior"
                title="Slide Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                className="p-2.5 rounded-xl bg-[#081B4B] hover:bg-[#BB7636] text-white border border-[#081B4B] transition-colors shadow-sm"
                aria-label="Próximo Slide"
                title="Próximo Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Products Grid or Slider View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayedHomeProducts.map((product) => {
            const IconComp = getIcon(product.iconName);
            const isInCart = cartItems.includes(product.name);

            return (
              <div
                key={product.id}
                onClick={() => setActiveProductModal(product)}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#BB7636] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 cursor-pointer relative"
              >
                {/* Product Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-900 group">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B4B]/90 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    {product.brand ? (
                      <span className="bg-[#081B4B] text-[#BB7636] border border-[#BB7636]/40 text-[10px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                        {product.brand}
                      </span>
                    ) : <span />}
                  </div>

                  {/* Quick view button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="bg-white/90 hover:bg-white text-[#081B4B] font-heading font-bold text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-[#BB7636]" />
                      <span>Ver Detalhes</span>
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-heading">
                    <span className="text-amber-300 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>Sob Cotação</span>
                    </span>
                    <span className="text-slate-200 text-[10px]">
                      ISO / API Certified
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-heading font-semibold uppercase text-slate-400 tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-heading font-bold text-base text-[#081B4B] leading-tight mt-0.5 group-hover:text-[#BB7636] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuoteModal(product.name);
                      }}
                      className="w-full bg-[#BB7636] hover:bg-[#a5652a] text-white py-2.5 px-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
                    >
                      <Tag className="w-3.5 h-3.5" />
                      <span>Solicitar Cotação</span>
                    </button>

                    <button
                      onClick={(e) => toggleCartItem(product.name, e)}
                      className={`w-full py-1.5 px-3 rounded-lg text-[11px] font-heading font-semibold transition-all flex items-center justify-center gap-1.5 border ${
                        isInCart 
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-700' 
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
                      }`}
                    >
                      {isInCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Adicionado à Lista</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-slate-400" />
                          <span>+ Adicionar à Lista</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slider Controls for Mobile & Slide Dots if in Home View */}
        {isHomeView && maxSlideIndex > 0 && (
          <div className="flex sm:hidden items-center justify-between mt-6 px-2">
            <button
              onClick={handlePrevSlide}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-bold flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>
            <span className="text-xs text-slate-500 font-heading">
              {currentSlideIndex + 1} de {maxSlideIndex + 1}
            </span>
            <button
              onClick={handleNextSlide}
              className="px-4 py-2 rounded-lg bg-[#081B4B] text-white text-xs font-bold flex items-center gap-1"
            >
              Próximo <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom CTA Button: "Ver Mais Produtos" */}
        {isHomeView && (
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                if (setActivePage) {
                  setActivePage('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-3 bg-[#081B4B] hover:bg-[#BB7636] text-white px-8 py-4 rounded-xl font-heading font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#081B4B]/20 hover:shadow-[#BB7636]/30 transition-all border border-slate-700 hover:border-[#BB7636] hover:scale-105 active:scale-95"
            >
              <span>Ver Mais Produtos & Catálogo Completo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Product Quick View Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 overflow-hidden relative text-slate-800">
            
            {/* Modal Header */}
            <div className="bg-[#081B4B] text-white p-4 sm:p-5 flex items-center justify-between sticky top-0 z-10 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="bg-[#BB7636] text-white text-[10px] font-heading font-extrabold uppercase px-2.5 py-1 rounded">
                  {activeProductModal.brand || 'Fortevia Supplier'}
                </span>
                <span className="text-xs text-slate-300 font-heading">
                  {activeProductModal.category}
                </span>
              </div>
              <button
                onClick={() => setActiveProductModal(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 space-y-5">
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src={activeProductModal.image}
                  alt={activeProductModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Garantia de Qualidade & Certificação</span>
                </div>
              </div>

              {/* Text Info */}
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-[#081B4B]">
                  {activeProductModal.name}
                </h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {activeProductModal.description}
                </p>
              </div>

              {/* Technical Specifications list */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                <p className="font-heading font-bold text-[#081B4B] uppercase tracking-wider">
                  Especificações & Garantia
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#BB7636]" />
                    <span>Fabricante: <strong>{activeProductModal.brand || 'OEM Internacional'}</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#BB7636]" />
                    <span>Certificação: <strong>ISO / API / SOLAS</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#BB7636]" />
                    <span>Disponibilidade: <strong>Pronta Entrega / Encomenda</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#BB7636]" />
                    <span>Entrega: <strong>Soyo, Luanda, Cabinda & Offshore</strong></span>
                  </li>
                </ul>
              </div>

              {/* Direct email callout */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between gap-3 text-xs text-amber-900">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#BB7636]" />
                  <span>Todas as solicitações enviadas directamente para: <strong>geral@forteviaengenharia.com</strong></span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    const prodName = activeProductModal.name;
                    setActiveProductModal(null);
                    onOpenQuoteModal(prodName);
                  }}
                  className="w-full bg-[#BB7636] hover:bg-[#a5652a] text-white py-3.5 px-6 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Tag className="w-4 h-4" />
                  <span>Solicitar Cotação por E-mail</span>
                </button>

                <button
                  onClick={() => setActiveProductModal(null)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
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
