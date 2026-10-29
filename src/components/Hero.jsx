import React, { useState } from 'react';
import {
  Calendar,
  Utensils,
  MailCheck,
  MessageCircle,
  Clock,
  UserCheck,
  QrCode,
  Smartphone,
  Flame,
  Sparkles,
  MapPin,
  ArrowRight,
  Phone
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('controlcitas');

  const openWhatsApp = (serviceName) => {
    const text = encodeURIComponent(
      `Hola Lab-CAMPEZ, me interesa conocer más sobre su solución de ${serviceName}.`
    );
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Direct and Clear */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs sm:text-sm font-semibold text-emerald-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-200">Lab-CAMPEZ</span>
              <span className="text-slate-600">·</span>
              <span className="tracking-wider uppercase text-[11px] font-bold text-emerald-300">
                {companyData.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Software ágil y a la medida{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                para impulsar tu negocio
              </span>.
            </h1>

            {/* Subtitle adjusted as requested */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {companyData.subtitle}
            </p>

            {/* Location & Direct Phone Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{companyData.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {companyData.phone}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.defaultWhatsAppMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escribir por WhatsApp ({companyData.phone})</span>
              </a>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 text-slate-200 font-semibold text-sm transition-all duration-200 hover:border-slate-500 cursor-pointer"
              >
                <span>Ver canales de contacto</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Platform Showcase with Clear Icons */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0e1526]/95 border border-slate-700/80 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              
              {/* Header Selector */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Nuestras Plataformas Oficiales
                </span>
                
                {/* Switcher */}
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-900 border border-slate-800">
                  <button
                    onClick={() => setActiveTab('controlcitas')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                      activeTab === 'controlcitas'
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>ControlCitas</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('pdi2s')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                      activeTab === 'pdi2s'
                        ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Utensils className="w-3.5 h-3.5" />
                    <span>Pdi2s</span>
                  </button>
                </div>
              </div>

              {/* ControlCitas Tab */}
              {activeTab === 'controlcitas' ? (
                <div className="pt-5 space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">ControlCitas</h3>
                          <span className="text-xs text-emerald-400 font-medium">Agendamiento y Atención de Citas</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                      En Producción
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Facilita que tus clientes reserven su cita de forma autónoma. Opera con alertas automáticas por correo y brinda la opción de enviar WhatsApp directo si requieres confirmación manual.
                  </p>

                  {/* 4 Feature Cards with Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <MailCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Alertas por Correo</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          Avisos automáticos al cliente y al negocio.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">WhatsApp Opcional</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          Opción para enviar confirmación manual directa.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Gestión de Horarios</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          Control de especialistas, turnos y servicios.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Reserva Autónoma</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          El cliente reserva desde el móvil sin llamadas.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => openWhatsApp('ControlCitas')}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-emerald-200 text-xs font-bold border border-emerald-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cotizar o Consultar sobre ControlCitas</span>
                  </button>
                </div>
              ) : (
                <div className="pt-5 space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                          <Utensils className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Pdi2s</h3>
                          <span className="text-xs text-sky-400 font-medium">Soluciones para Restaurantes y Menú QR</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">
                      En Producción
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Ecosistema digital gastronómico para locales y restaurantes: menú QR interactivo, toma de pedidos en mesa y flujo ágil de comandas para no perder ninguna orden.
                  </p>

                  {/* 4 Feature Cards with Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                        <QrCode className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Menú QR en Mesa</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          Platos, fotos y precios actualizados en vivo.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Recepción Ágil</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          Pedidos en tiempo real sin retrasos ni esperas.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Coordinación de Cocina</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          Sincronización entre salón y cocina en vivo.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Cambios al Instante</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          Modifica ofertas y agotados en un segundo.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => openWhatsApp('Pdi2s')}
                    className="w-full py-2.5 px-4 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 hover:text-sky-200 text-xs font-bold border border-sky-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cotizar o Consultar sobre Pdi2s</span>
                  </button>
                </div>
              )}

              {/* Card Footer Location */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Lab-CAMPEZ · Alajuela, CR</span>
                <span className="text-emerald-400 font-medium">Sistemas 100% Funcionales</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
