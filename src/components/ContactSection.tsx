import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/forteviaData';
import { ContactFormData } from '../types';
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2, Clock, Building2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    assunto: 'Cotação de Serviços / Produtos',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedMailUrl, setSubmittedMailUrl] = useState('');
  const [submittedWaUrl, setSubmittedWaUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subjectStr = `[Contacto Website] - ${formData.assunto} - ${formData.nome}`;
    const subject = encodeURIComponent(subjectStr);
    const bodyStr = 
      `MENSAGEM DE CONTACTO - WEBSITE FORTEVIA ENGENHARIA\n` +
      `----------------------------------------------\n` +
      `Destinatário: geral@forteviaengenharia.com\n\n` +
      `Nome: ${formData.nome}\n` +
      `Empresa: ${formData.empresa || 'N/A'}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone/WhatsApp: ${formData.telefone}\n` +
      `Assunto: ${formData.assunto}\n\n` +
      `MENSAGEM:\n${formData.mensagem}\n\n` +
      `----------------------------------------------\n` +
      `Fortevia Engenharia • Soyo, Angola`;
      
    const body = encodeURIComponent(bodyStr);

    const mailUrl = `mailto:geral@forteviaengenharia.com?subject=${subject}&body=${body}`;
    const waText = encodeURIComponent(
      `*MENSAGEM VIA WEBSITE FORTEVIA ENGENHARIA*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Empresa:* ${formData.empresa || 'N/A'}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Assunto:* ${formData.assunto}\n\n` +
      `*Mensagem:*\n${formData.mensagem}`
    );
    const waUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${waText}`;

    setSubmittedMailUrl(mailUrl);
    setSubmittedWaUrl(waUrl);

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
          _replyto: formData.email,
          _captcha: "false",
          Nome: formData.nome,
          Empresa: formData.empresa || 'N/A',
          Email: formData.email,
          Telefone: formData.telefone,
          Assunto: formData.assunto,
          Mensagem: formData.mensagem,
          Destinatario: "geral@forteviaengenharia.com"
        })
      });
    } catch (err) {
      console.warn("FormSubmit fetch failed, falling back to mailto", err);
    }

    // Automatically trigger mailto link to open client's default email app
    try {
      window.location.href = mailUrl;
    } catch (err) {
      console.warn("Could not trigger window.location.href mailUrl", err);
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 text-slate-800" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#081B4B]">
            Contacte a Fortevia Engenharia
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Estamos sediados no Soyo, província do Zaire, prontos para responder com celeridade aos seus pedidos de cotação e esclarecimentos técnicos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#081B4B] text-white p-8 rounded-2xl shadow-xl border border-slate-800 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#BB7636]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-heading font-extrabold text-2xl text-white border-b border-slate-800 pb-4">
                Informações de Contacto
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#BB7636]/20 border border-[#BB7636]/40 flex items-center justify-center text-[#BB7636] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-amber-300 text-xs uppercase tracking-wider">
                      Sede Principal
                    </h4>
                    <p className="text-white font-semibold text-base mt-0.5">Soyo, Angola</p>
                    <p className="text-slate-300 text-xs mt-0.5">Polo Industrial do Soyo, Província do Zaire</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#BB7636]/20 border border-[#BB7636]/40 flex items-center justify-center text-[#BB7636] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-amber-300 text-xs uppercase tracking-wider">
                      Telefone Directo
                    </h4>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-white font-bold text-base hover:text-amber-400 transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-slate-400 text-xs">Atendimento 24/7 para emergências industriais</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#BB7636]/20 border border-[#BB7636]/40 flex items-center justify-center text-[#BB7636] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-amber-300 text-xs uppercase tracking-wider">
                      Correio Electrónico
                    </h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-medium text-sm hover:text-amber-400 transition-colors break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#BB7636]/20 border border-[#BB7636]/40 flex items-center justify-center text-[#BB7636] flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-amber-300 text-xs uppercase tracking-wider">
                      Website Oficial
                    </h4>
                    <a href={`http://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="text-white font-medium text-sm hover:text-amber-400 transition-colors">
                      {COMPANY_INFO.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#BB7636]" />
                  <span>Segunda a Sexta: 07:30 - 18:00</span>
                </span>
                <span className="text-[#BB7636] font-bold">Soyo • Angola</span>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="py-10 text-center space-y-5 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#081B4B]">
                    Mensagem Registada com Sucesso!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed mt-1">
                    A sua mensagem foi dirigida para o e-mail oficial: <strong className="text-[#081B4B]">geral@forteviaengenharia.com</strong>. A nossa equipa no Soyo responderá brevemente.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto space-y-2.5 text-left">
                  <p className="text-xs font-heading font-bold text-[#081B4B] text-center uppercase tracking-wider">
                    Opções de Envio Directo
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href={submittedMailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#081B4B] hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-xs font-heading font-bold flex items-center justify-center gap-1.5 shadow"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#BB7636]" />
                      <span>Abrir no E-mail</span>
                    </a>
                    <a
                      href={submittedWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-lg text-xs font-heading font-bold flex items-center justify-center gap-1.5 shadow"
                    >
                      <span>Enviar no WhatsApp</span>
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      nome: '',
                      empresa: '',
                      email: '',
                      telefone: '',
                      assunto: 'Cotação de Serviços / Produtos',
                      mensagem: '',
                    });
                  }}
                  className="bg-[#081B4B] text-white px-6 py-2.5 rounded-lg font-heading font-bold text-xs uppercase"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#081B4B]">
                    Envie-nos uma Mensagem
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Preencha os campos abaixo para obter proposta comercial ou esclarecimento técnico.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Manuel Silva"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636] focus:ring-1 focus:ring-[#BB7636]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 mb-1">
                      Nome da Empresa / Organização
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Sonangol, Chevron, Eni, Total..."
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636] focus:ring-1 focus:ring-[#BB7636]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 mb-1">
                      E-mail Profissional *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nome@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636] focus:ring-1 focus:ring-[#BB7636]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+244 9XX XXX XXX"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636] focus:ring-1 focus:ring-[#BB7636]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-slate-700 mb-1">
                    Assunto
                  </label>
                  <select
                    value={formData.assunto}
                    onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636] focus:ring-1 focus:ring-[#BB7636] bg-white"
                  >
                    <option value="Cotação de Serviços / Produtos">Cotação de Serviços / Produtos</option>
                    <option value="Aluguer de Equipamentos Hidráulicos">Aluguer de Equipamentos Hidráulicos</option>
                    <option value="Procurement Internacional & OEMs">Procurement Internacional & OEMs</option>
                    <option value="Informações sobre Formação Profissional">Informações sobre Formação Profissional</option>
                    <option value="Proposta de Parceria Estratégica">Proposta de Parceria Estratégica</option>
                    <option value="Outros Assuntos">Outros Assuntos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-slate-700 mb-1">
                    Mensagem / Detalhes da Solicitação *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Especifique os equipamentos, serviços técnicos, quantidades ou requisitos operacionais..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636] focus:ring-1 focus:ring-[#BB7636]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#BB7636] hover:bg-[#a5652a] text-white py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#BB7636]/20 disabled:opacity-50"
                >
                  {loading ? (
                    <span>A enviar mensagem...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
