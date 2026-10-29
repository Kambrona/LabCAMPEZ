import React from 'react';
import { Calendar, Utensils, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function PlatformsSection({ onOpenContact }) {
  return (
    <section id="plataformas" className="py-20 relative z-10 border-t border-slate-800/80 bg-[#090e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOFTWARE EN ACCIÓN</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nuestras plataformas desarrolladas
          </h2>

          <p className="text-base text-slate-300">
            Sistemas reales construidos para negocios que necesitan agilizar su atención y aumentar sus ventas sin fricción.
          </p>
        </div>

        {/* 2 Flagship Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: ControlCitas */}
          <div className="rounded-2xl bg-[#0f172a]/90 border border-slate-700/80 p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-700/60 flex items-center justify-center text-emerald-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  En Producción
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  ControlCitas
                </h3>
                <p className="text-sm font-medium text-emerald-400 mt-1">
                  Agendamiento y Atención de Citas con WhatsApp
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Permite a tus pacientes o clientes reservar su cita desde cualquier celular las 24 horas. Incluye confirmación automática y recordatorios que eliminan las inasistencias.
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Portal público de reservas sin necesidad de registro tedioso</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Avisos directos al WhatsApp del cliente y del profesional</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Panel para administrar doctores, salones, sucursales y horarios</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Ideal para clínicas, consultorios y salones</span>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <span>Solicitar demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Pdi2s */}
          <div className="rounded-2xl bg-[#0f172a]/90 border border-slate-700/80 p-8 flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-sky-950/60 border border-sky-700/60 flex items-center justify-center text-sky-400">
                  <Utensils className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30">
                  En Producción
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  Pdi2s
                </h3>
                <p className="text-sm font-medium text-sky-400 mt-1">
                  Ecosistema para Restaurantes & Menú Digital QR
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Diseñado para locales gastronómicos que buscan agilizar la toma de pedidos, modernizar la carta en mesas con código QR y coordinar cocina y sala en tiempo real.
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Menú interactivo con código QR en mesa, fotos y precios en vivo</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Pedidos directos a pantalla de cocina sin pérdidas de comandas</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Gestión de platillos agotados y cambios de precio al instante</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Ideal para restaurantes, cafeterías y bares</span>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
              >
                <span>Solicitar demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
