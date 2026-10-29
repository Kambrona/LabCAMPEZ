import React from 'react';
import { Users, CheckCircle2, Lock } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function WhyUs() {
  const iconMap = {
    Users: Users,
    CheckCircle2: CheckCircle2,
    Lock: Lock,
  };

  return (
    <section id="metodologia" className="py-20 relative z-10 border-t border-slate-800/80 bg-[#070b14]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nuestra forma de trabajar
          </h2>
          <p className="text-base text-slate-300">
            Transparencia, rapidez y enfoque práctico. Construimos herramientas que resuelven tu día a día sin tecnicismos innecesarios.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyData.values.map((val, idx) => {
            const Icon = iconMap[val.icon] || Users;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0f172a]/65 border border-slate-800 p-7 hover:border-emerald-500/30 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
