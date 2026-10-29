import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowUpRight, ShieldCheck, Terminal, Smartphone } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function SolutionsShowcase({ onOpenContact }) {
  const [selectedSolution, setSelectedSolution] = useState(companyData.solutions[0].id);
  const current = companyData.solutions.find((s) => s.id === selectedSolution) || companyData.solutions[0];

  return (
    <section id="soluciones" className="py-24 relative z-10 border-t border-slate-800/80 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <Layers className="w-3.5 h-3.5" />
              <span>ECOSISTEMA DE SOFTWARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Plataformas desarrolladas con el estándar Lab-CAMPEZ
            </h2>
            <p className="text-base text-slate-300">
              Casos reales de ingeniería aplicada. Sistemas diseñados para resolver operaciones críticas con alta disponibilidad y usabilidad intuitiva.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 text-sm font-semibold text-slate-200 hover:text-white transition-all cursor-pointer shadow-md"
          >
            <span>Consultar por una plataforma similar</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex flex-wrap gap-3 mb-10 pb-2 border-b border-slate-800">
          {companyData.solutions.map((item) => {
            const isSelected = item.id === selectedSolution;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedSolution(item.id)}
                className={`px-5 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white border border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                    : 'bg-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border border-transparent'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isSelected ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'
                  }`}
                />
                <span className="font-semibold">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Showcase Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-[#0d162b] border border-slate-700/80 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle ambient gradient */}
          <div
            className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: current.accent }}
          />

          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ID: #{current.id.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {current.name}
              </h3>
              <p className="text-base font-medium text-slate-300">
                {current.subtitle}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {current.summary}
              </p>

              {/* Key Features */}
              <div className="pt-4 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Capacidades Principales
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies used & CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
                {current.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <span>Solicitar demo o presupuesto</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visual / System Blueprint */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-2xl bg-[#090e1c] border border-slate-700 p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-300 font-mono">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>system_manifest.json</span>
                </div>
                <span className="text-emerald-400 font-mono text-[11px] font-bold">100% OPERATIVO</span>
              </div>

              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Objetivo de Arquitectura</div>
                  <div className="text-white font-semibold text-xs mt-0.5 font-sans">
                    Cero fricción para el usuario final y máxima estabilidad operativa.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Integración de Canales</div>
                  <div className="text-emerald-300 font-semibold text-xs mt-0.5 font-sans">
                    Notificaciones en tiempo real, webhooks y respaldo cloud continuo.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Garantía de Código</div>
                  <div className="text-sky-300 font-semibold text-xs mt-0.5 font-sans">
                    Desarrollado bajo principios Clean Code, modular y transferible.
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-slate-400 font-mono">
                  Desarrollado por Lab-CAMPEZ · San José, CR
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
