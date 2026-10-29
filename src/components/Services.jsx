import React from 'react';
import { Laptop, Zap, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Services({ onOpenContact }) {
  const iconMap = {
    Laptop: Laptop,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section id="servicios" className="py-20 relative z-10 border-t border-slate-800/80 bg-[#0a0f1c]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUCIONES Y SERVICIOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿A qué nos dedicamos?
          </h2>

          <p className="text-base text-slate-300">
            Además de nuestras plataformas principales, ayudamos a empresas a crear y modernizar sus propios sistemas digitales.
          </p>
        </div>

        {/* 3 Clear Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyData.services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Laptop;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0f172a]/75 border border-slate-800 hover:border-emerald-500/40 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/40 transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <a
                    href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
                      `Hola Lab-CAMPEZ, me interesa cotizar: ${service.title}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <span>Cotizar por WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
