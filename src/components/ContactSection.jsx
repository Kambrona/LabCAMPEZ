import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(companyData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(companyData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contacto" className="py-20 relative z-10 border-t border-slate-800/80 bg-[#080d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>CANALES DIRECTOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contáctanos directamente
          </h2>

          <p className="text-base text-slate-300">
            Estamos en Alajuela, Costa Rica. Escríbenos o llámanos para resolver dudas, cotizar proyectos o coordinar una reunión sin compromiso.
          </p>
        </div>

        {/* 3 Direct Functional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: WhatsApp */}
          <div className="rounded-2xl bg-[#0f172a]/90 border border-emerald-500/40 p-7 flex flex-col justify-between shadow-xl shadow-emerald-500/5 group hover:border-emerald-400 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  Canal Principal
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  WhatsApp Directo
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Respuesta ágil para cotizaciones, consultas rápidas y demostraciones de sistemas.
              </p>

              <div className="text-lg font-bold text-emerald-400 font-mono">
                {companyData.phone}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 space-y-2">
              <a
                href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.defaultWhatsAppMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>Abrir Chat de WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Correo Electrónico */}
          <div className="rounded-2xl bg-[#0f172a]/90 border border-slate-800 p-7 flex flex-col justify-between shadow-xl group hover:border-slate-700 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                  Correo Oficial
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Mensaje por Email
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Ideal para envío de requerimientos detallados, pliegos técnicos o propuestas formales.
              </p>

              <div className="text-sm font-bold text-slate-200 font-mono break-all">
                {companyData.email}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex gap-2">
              <a
                href={`mailto:${companyData.email}`}
                className="flex-1 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Escribir Correo</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Copiar correo"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Llamadas & Ubicación */}
          <div className="rounded-2xl bg-[#0f172a]/90 border border-slate-800 p-7 flex flex-col justify-between shadow-xl group hover:border-slate-700 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-teal-400">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-teal-400 font-semibold uppercase tracking-wider">
                  Llamada Telefónica
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Atención Directa
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Comunícate por llamada tradicional en horario de atención.
              </p>

              <div className="text-sm text-slate-300 space-y-1 pt-1">
                <div className="font-mono text-white font-bold">{companyData.phoneFormatted}</div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{companyData.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex gap-2">
              <a
                href={`tel:+506${companyData.whatsappNumber}`}
                className="flex-1 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Llamar ahora</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Copiar teléfono"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
