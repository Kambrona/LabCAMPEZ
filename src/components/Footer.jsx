import React from 'react';
import { ArrowUp, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800 bg-[#060910] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/brand/lab-campez/logo-horizontal-dark.svg"
                alt="Lab-CAMPEZ Logo Oficial"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {companyData.subtitle}
            </p>

            <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{companyData.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicios" className="hover:text-emerald-400 transition-colors">
                  ¿A qué nos dedicamos?
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-emerald-400 transition-colors">
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-emerald-400 transition-colors">
                  Canales de Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Strip */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Contacto Oficial
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: <strong>{companyData.phone}</strong></span>
                </span>
                <a
                  href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.defaultWhatsAppMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold"
                >
                  Abrir
                </a>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>{companyData.email}</span>
                </span>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-sky-400 hover:text-sky-300 font-bold"
                >
                  Escribir
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {companyData.fullName}. Alajuela, Costa Rica.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Subir al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
