import React from 'react';
import { Cpu, Terminal, Shield, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function TechStack() {
  return (
    <section id="tecnologias" className="py-20 relative z-10 border-t border-slate-800/80 bg-[#080d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>INFRAESTRUCTURA & LENGUAJES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tecnologías modernas, probadas y de alto rendimiento
          </h2>

          <p className="text-sm text-slate-400">
            Utilizamos las herramientas estándar del ecosistema tech global para garantizar velocidad, seguridad y cero dependencia tecnológica cautiva.
          </p>
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {companyData.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-600 transition-all duration-200 flex items-center justify-between group hover:bg-slate-900"
            >
              <div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                  {tech.name}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {tech.category}
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-500/70 shrink-0" />
            </div>
          ))}
        </div>

        {/* DevOps & Reliability Strip */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950/70 border border-slate-800/70 flex flex-wrap items-center justify-around gap-4 text-center text-xs text-slate-400 font-mono">
          <span>🔒 Cifrado SSL/TLS de extremo a extremo</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>🚀 Despliegues automatizados (CI/CD)</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>🛡️ Copias de seguridad automáticas</span>
        </div>

      </div>
    </section>
  );
}
