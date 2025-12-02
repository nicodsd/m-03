import React from 'react';
import { ArrowRight, QrCode, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="inicio" className="shadow-xl shadow-primary-700/20 relative md:min-h-[calc(100vh-14rem)] pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-1/2 w-72 h-72 bg-primary-500/50 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent-600/30 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/20 border border-slate-700 mb-8 backdrop-blur-sm">
            <QrCode className="h-6 w-6 text-[#00f2ff]" />
            <span className="text-sm font-medium text-slate-300">Menús digitales sin contacto</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#ffffff89] bg-clip-text bg-linear-to-r from-white via-white to-yellow-700 tracking-tight leading-tight mb-6">
            Tu Menú en el Móvil de <br />
            <span className="text-[#ffffff66] bg-clip-text bg-linear-to-r from-amber-200 via-yellow-200 to-blue-200">
              Tus Clientes
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-base ">
            Sube tus platos, actualiza precios en tiempo real y genera tu código QR en minutos. Moderniza la experiencia de tu restaurante y aumenta tus ventas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#pricing" className="group sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary-900/40 hover:shadow-primary-900/60 hover:-translate-y-1">
              Crear Menú Gratis
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#showcase" className="sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-slate-700 transition-all hover:-translate-y-1">
              <Smartphone className="h-6 w-6 text-slate-100" />
              Ver Ejemplo
            </a>
          </div>

        </div>
      </div>
    </div >
  );
};