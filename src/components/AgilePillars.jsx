import React from 'react';
import { Zap, ShieldCheck, Layers, Rocket, Check, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function AgilePillars({ onOpenContact }) {
  const iconMap = {
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Layers: Layers,
    Rocket: Rocket,
  };

  return (
    <section id="metodologia" className="py-24 relative z-10 border-t border-slate-800/80 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Zap className="w-3.5 h-3.5" />
            <span>METODOLOGÍA DE INGENIERÍA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ¿Por qué confiar en el enfoque de{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Lab-CAMPEZ
            </span>
            ?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Eliminamos las complicaciones innecesarias. Ofrecemos rigor de ingeniería con la flexibilidad y cercanía de un equipo dedicado a tu éxito.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Zap;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#0f172a]/60 border border-slate-800/80 hover:border-emerald-500/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-950/40 group-hover:border-emerald-500/40 transition-colors mb-5 shadow">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <Check className="w-3.5 h-3.5" />
                  <span>Compromiso Lab-CAMPEZ</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Callout */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d172e] to-slate-900 border border-slate-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              ¿Tienes un proyecto o proceso que necesita digitalizarse?
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Te asesoramos sin costo inicial para definir la mejor arquitectura y hoja de ruta tecnológica para tu negocio.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 cursor-pointer"
          >
            <span>Iniciar Conversación</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
