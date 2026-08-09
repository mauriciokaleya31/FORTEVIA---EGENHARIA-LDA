import React from 'react';
import { WHY_CHOOSE_US } from '../data/forteviaData';
import { Wrench, Globe, Truck, ShieldCheck, UserCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [Wrench, Globe, Truck, ShieldCheck, UserCheck];

  return (
    <section className="py-16 md:py-24 bg-slate-50 text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#081B4B]">
            Porque escolher a Fortevia Engenharia?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Combinamos a agilidade e proximidade local no Soyo com capacidades de fornecimento e engenharia à escala internacional.
          </p>
        </div>

        {/* 5 Blocks Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#BB7636] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-[#081B4B] text-[#BB7636] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#BB7636] group-hover:text-white transition-all">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-[#081B4B]">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-heading font-bold text-[#BB7636]">
                  <span>Padrão Fortevia</span>
                  <span className="w-2 h-2 rounded-full bg-[#BB7636]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
