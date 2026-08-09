import React, { useState } from 'react';
import { TrainingCourse } from '../types';
import { GraduationCap, Clock, CheckCircle2, Send, X } from 'lucide-react';

interface CourseInquiryModalProps {
  course: TrainingCourse | null;
  onClose: () => void;
}

export const CourseInquiryModal: React.FC<CourseInquiryModalProps> = ({ course, onClose }) => {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [participantes, setParticipantes] = useState('1');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative text-slate-800">
        
        {/* Header */}
        <div className="bg-[#081B4B] text-white p-6 border-b border-slate-800 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-heading font-extrabold text-amber-400 uppercase tracking-widest">
                Formação Profissional
              </span>
              <h3 className="font-heading font-extrabold text-lg text-white">
                {course.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-xl text-[#081B4B]">
                Inscrição Registada!
              </h4>
              <p className="text-slate-600 text-xs">
                Recebemos o seu pedido de informações para a acção de formação <strong>"{course.title}"</strong>. A nossa equipa pedagógica entrará em contacto para disponibilizar a ficha de inscrição e calendário de sessões no Soyo.
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-[#081B4B] text-white px-5 py-2 rounded-lg font-heading font-bold text-xs uppercase"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                <p className="text-slate-600">{course.description}</p>
                {course.duration && (
                  <p className="text-slate-500 font-medium flex items-center gap-1 pt-1">
                    <Clock className="w-3.5 h-3.5 text-[#BB7636]" />
                    <span>Duração estimada: <strong>{course.duration}</strong></span>
                  </p>
                )}
              </div>

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@empresa.com"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da empresa (opcional)"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">
                    Nº de Formandos
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={participantes}
                    onChange={(e) => setParticipantes(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#BB7636]"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-5 py-2 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-md"
                >
                  {loading ? (
                    <span>A enviar...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Solicitar Informações</span>
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
