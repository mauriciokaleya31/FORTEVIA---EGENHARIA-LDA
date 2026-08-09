import React, { useState } from 'react';
import { QuoteCartItem } from '../types';
import { COMPANY_INFO } from '../data/forteviaData';
import { ShoppingBag, Trash2, Send, X, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface QuoteCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: QuoteCartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const QuoteCartModal: React.FC<QuoteCartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
}) => {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 overflow-hidden relative text-slate-800">
        
        {/* Header */}
        <div className="bg-[#081B4B] text-white p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#BB7636]/20 border border-[#BB7636]/40 flex items-center justify-center text-[#BB7636]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xl text-white">
                Solicitação de Cotação
              </h3>
              <p className="text-xs text-amber-300">
                Fortevia Engenharia • Soyo, Angola
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-extrabold text-2xl text-[#081B4B]">
                Cotação Enviada ao Departamento Comercial!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Recebemos o seu pedido de cotação com <strong className="text-[#081B4B]">{cartItems.length} itens</strong>. A nossa equipa de vendas e engenharia no Soyo entrará em contacto via e-mail ou telefone.
              </p>
              <button
                onClick={() => {
                  onClearCart();
                  setIsSubmitted(false);
                  onClose();
                }}
                className="bg-[#081B4B] text-white px-6 py-3 rounded-lg font-heading font-bold text-xs uppercase"
              >
                Concluir
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Selected Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-sm text-[#081B4B] uppercase tracking-wider">
                    Itens Seleccionados ({cartItems.length})
                  </h4>
                  {cartItems.length > 0 && (
                    <button
                      onClick={onClearCart}
                      className="text-xs text-red-600 hover:text-red-800 font-semibold flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Limpar lista</span>
                    </button>
                  )}
                </div>

                {cartItems.length === 0 ? (
                  <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <ShoppingBag className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="text-xs text-slate-500 font-medium">Nenhum item adicionado à cotação ainda.</p>
                    <p className="text-[11px] text-slate-400">Explore as secções de Serviços e Produtos para escolher equipamentos ou intervenções.</p>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs"
                      >
                        <div>
                          <p className="font-heading font-bold text-[#081B4B]">{item.title}</p>
                          <span className="text-[10px] text-[#BB7636] font-semibold uppercase">
                            {item.type === 'product' ? 'Produto' : item.type === 'service' ? 'Serviço' : 'Formação'}
                          </span>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                          title="Remover"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="font-heading font-bold text-sm text-[#081B4B] uppercase tracking-wider">
                  Seus Dados de Contacto
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                      Empresa / Instituição
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Chevron, Sonangol..."
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                      E-mail Profissional *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nome@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+244 9XX XXX XXX"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                    Observações / Requisitos Específicos
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Especifique prazos de entrega, local de mobilização (Soyo, Kwanda Base, Offshore) ou detalhes técnicos..."
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Continuar a Navegar
                  </button>

                  <button
                    type="submit"
                    disabled={loading || cartItems.length === 0}
                    className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-6 py-2.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md disabled:opacity-50"
                  >
                    {loading ? (
                      <span>A enviar...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar Solicitação ({cartItems.length})</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
