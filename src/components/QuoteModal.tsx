import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/forteviaData';
import { Send, X, CheckCircle2, Mail, MessageSquare, FileText, Building2, User, Phone } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItemName?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialItemName = '',
}) => {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [categoria, setCategoria] = useState('Serviços Hidráulicos & Aperto Controlado');
  const [itemEspecifico, setItemEspecifico] = useState(initialItemName);
  const [observacoes, setObservacoes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState<{
    mailtoUrl: string;
    waUrl: string;
  } | null>(null);

  // Update itemEspecifico when initialItemName changes
  useEffect(() => {
    if (initialItemName) {
      setItemEspecifico(initialItemName);
    }
  }, [initialItemName]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subjectStr = `[Solicitação de Cotação] - ${itemEspecifico || categoria} - ${nome}`;
    const subject = encodeURIComponent(subjectStr);
    const bodyStr = 
      `SOLICITAÇÃO DE COTAÇÃO - FORTEVIA ENGENHARIA\n` +
      `----------------------------------------------\n` +
      `Destinatário: geral@forteviaengenharia.com\n\n` +
      `DADOS DO CLIENTE:\n` +
      `• Nome: ${nome}\n` +
      `• Empresa: ${empresa || 'N/A'}\n` +
      `• E-mail: ${email}\n` +
      `• Telefone/WhatsApp: ${telefone}\n\n` +
      `DETALHES DA COTAÇÃO:\n` +
      `• Categoria: ${categoria}\n` +
      `• Produto / Serviço Específico: ${itemEspecifico || 'Não especificado'}\n` +
      `• Especificações Técnicas e Quantidades:\n${observacoes}\n\n` +
      `----------------------------------------------\n` +
      `Enviado via Website Oficial Fortevia Engenharia • Soyo, Angola`;
      
    const body = encodeURIComponent(bodyStr);

    const mailtoUrl = `mailto:geral@forteviaengenharia.com?subject=${subject}&body=${body}`;

    const waText = encodeURIComponent(
      `*SOLICITAÇÃO DE COTAÇÃO - FORTEVIA ENGENHARIA*\n\n` +
      `*Nome:* ${nome}\n` +
      `*Empresa:* ${empresa || 'N/A'}\n` +
      `*E-mail:* ${email}\n` +
      `*Telefone:* ${telefone}\n\n` +
      `*Categoria:* ${categoria}\n` +
      `*Item Específico:* ${itemEspecifico || 'N/A'}\n\n` +
      `*Detalhes e Quantidades:*\n${observacoes}`
    );
    const waUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${waText}`;

    // Send via FormSubmit service directly to geral@forteviaengenharia.com
    try {
      await fetch('https://formsubmit.co/ajax/geral@forteviaengenharia.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: subjectStr,
          _replyto: email,
          _captcha: "false",
          Nome: nome,
          Empresa: empresa || 'N/A',
          Email: email,
          Telefone: telefone,
          Categoria: categoria,
          ItemEspecifico: itemEspecifico || 'Não especificado',
          Especificacoes_e_Quantidades: observacoes,
          Destinatario: "geral@forteviaengenharia.com"
        })
      });
    } catch (err) {
      console.warn("FormSubmit fetch failed, falling back to mailto", err);
    }

    // Automatically trigger mailto link to open client's default email app
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.warn("Could not trigger window.location.href mailtoUrl", err);
    }

    setLoading(false);
    setSubmittedDetails({ mailtoUrl, waUrl });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setNome('');
    setEmpresa('');
    setEmail('');
    setTelefone('');
    setItemEspecifico('');
    setObservacoes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 overflow-hidden relative text-slate-800">
        
        {/* Modal Header */}
        <div className="bg-[#081B4B] text-white p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#BB7636]/20 border border-[#BB7636]/40 flex items-center justify-center text-[#BB7636]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                Solicitar Cotação
              </h3>
              <p className="text-xs text-amber-300/90 flex items-center gap-1.5 mt-0.5">
                <Mail className="w-3 h-3 text-[#BB7636]" />
                <span>Encaminhado para: <strong>geral@forteviaengenharia.com</strong></span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {isSubmitted && submittedDetails ? (
            <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="font-heading font-extrabold text-2xl text-[#081B4B]">
                  Pedido de Cotação Registado!
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mt-2">
                  O seu pedido foi preparado para envio directo ao e-mail comercial da Fortevia Engenharia: <strong className="text-[#081B4B]">geral@forteviaengenharia.com</strong>.
                </p>
              </div>

              {/* Direct email & WhatsApp buttons */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto space-y-3 text-left">
                <p className="text-xs font-heading font-bold text-[#081B4B] uppercase tracking-wider text-center">
                  Escolha o Canal de Envio Directo
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={submittedDetails.mailtoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#081B4B] hover:bg-[#061438] text-white px-4 py-2.5 rounded-lg text-xs font-heading font-bold flex items-center justify-center gap-2 shadow transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#BB7636]" />
                    <span>Abrir no E-mail</span>
                  </a>

                  <a
                    href={submittedDetails.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-xs font-heading font-bold flex items-center justify-center gap-2 shadow transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Enviar via WhatsApp</span>
                  </a>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="bg-[#081B4B] text-white px-8 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-slate-800 transition-colors"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <User className="w-3 h-3 text-[#BB7636]" />
                    <span>Nome Completo *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Eng. António Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-[#BB7636]" />
                    <span>Empresa / Instituição</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Chevron, Sonangol, Total..."
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#BB7636]" />
                    <span>E-mail Profissional *</span>
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
                  <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#BB7636]" />
                    <span>Telefone / WhatsApp *</span>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                    Categoria da Cotação *
                  </label>
                  <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:border-[#BB7636]"
                  >
                    <option value="Serviços Hidráulicos & Aperto Controlado">Serviços Hidráulicos & Aperto (Torquing)</option>
                    <option value="Aluguer de Equipamentos ENERPAC / Hi-Force">Aluguer de Equipamentos ENERPAC / Hi-Force</option>
                    <option value="Manutenção Eléctrica & Switchgear">Manutenção Eléctrica & Switchgear</option>
                    <option value="Válvulas, Tubagens & Spools">Válvulas, Tubagens & Spools</option>
                    <option value="Procurement Internacional & OEMs">Procurement Internacional & OEMs</option>
                    <option value="WBCO / Subsea IRM">Apoio Offshore / Subsea IRM</option>
                    <option value="Outro Serviço / Equipamento">Outro Serviço ou Produto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                    Produto / Serviço Especifico
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Chave dinamométrica 10,000 PSI, Válvula..."
                    value={itemEspecifico}
                    onChange={(e) => setItemEspecifico(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                  Especificações Técnicas, Quantidades e Prazos *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Descreva as especificações do equipamento, quantidade pretendida, prazos de mobilização para Soyo / Kwanda Base / Offshore ou requisitos do projecto..."
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-6 py-2.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md disabled:opacity-50"
                >
                  {loading ? (
                    <span>A processar...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar Cotação (geral@forteviaengenharia.com)</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
