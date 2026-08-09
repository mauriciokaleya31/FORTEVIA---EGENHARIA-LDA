import React from 'react';
import { Compass, Eye, ShieldAlert, Award, Lightbulb, Users, Handshake, Target } from 'lucide-react';

export const MissionVisionValues: React.FC = () => {
  const valuesList = [
    { name: 'Excelência', desc: 'Rigor técnico e padrões internacionais de execução.', icon: Award },
    { name: 'Integridade', desc: 'Transparência, ética e conduta responsável.', icon: ShieldAlert },
    { name: 'Inovação', desc: 'Adopção de tecnologia e processos de vanguarda.', icon: Lightbulb },
    { name: 'Foco no Cliente', desc: 'Compreensão profunda das necessidades operacionais.', icon: Target },
    { name: 'Parcerias', desc: 'Relações de longo prazo fundadas na confiança mútua.', icon: Handshake },
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        


        {/* 3 Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Missão */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#081B4B]" />
            <div className="w-14 h-14 rounded-xl bg-[#081B4B] text-[#BB7636] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>

            <h3 className="font-heading font-extrabold text-xl text-[#081B4B] mb-3 uppercase tracking-wide">
              MISSÃO
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fornecer soluções inovadoras, fiáveis e orientadas para o cliente nas áreas de <strong className="text-[#081B4B]">Engenharia, Procurement e Logística</strong>, promovendo eficiência e sustentabilidade nos diferentes sectores de actividade.
            </p>
          </div>

          {/* Card 2: Visão */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#BB7636]" />
            <div className="w-14 h-14 rounded-xl bg-[#BB7636] text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Eye className="w-7 h-7" />
            </div>

            <h3 className="font-heading font-extrabold text-xl text-[#081B4B] mb-3 uppercase tracking-wide">
              VISÃO
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ser reconhecida como uma empresa líder em Angola e além-fronteiras, fornecendo serviços de <strong className="text-[#081B4B]">excelência mundial</strong> nas áreas de Engenharia, Procurement e Logística, enquanto construímos parcerias sólidas que criam valor para os nossos clientes e comunidades.
            </p>
          </div>

          {/* Card 3: Valores */}
          <div className="bg-[#081B4B] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:-translate-y-1 border border-slate-800">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#BB7636]" />
            <div className="w-14 h-14 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform border border-white/10">
              <Users className="w-7 h-7" />
            </div>

            <h3 className="font-heading font-extrabold text-xl text-white mb-4 uppercase tracking-wide">
              VALORES
            </h3>

            <div className="space-y-3">
              {valuesList.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <IconComponent className="w-4 h-4 text-[#BB7636] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">{val.name}</h4>
                      <p className="text-[11px] text-slate-300">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
