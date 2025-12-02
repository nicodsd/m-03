import React from 'react';
import { ArrowRight, QrCode, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 backdrop-blur-sm">
            <QrCode className="h-4 w-4 text-primary-400" />
            <span className="text-sm font-medium text-slate-300">Menús digitales sin contacto</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight leading-tight mb-6">
            Tu Menú en el Móvil de <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">Tus Clientes</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
            Sube tus platos, actualiza precios en tiempo real y genera tu código QR en minutos. Moderniza la experiencia de tu restaurante y aumenta tus ventas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#pricing" className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary-900/40 hover:shadow-primary-900/60 hover:-translate-y-1">
              Crear Menú Gratis
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#showcase" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-slate-700 transition-all hover:-translate-y-1">
              <Smartphone className="h-5 w-5 text-slate-400" />
              Ver Ejemplo
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
             <span className="text-xl font-bold text-slate-500">Restaurante La Plaza</span>
             <span className="text-xl font-bold text-slate-500">Burger King</span>
             <span className="text-xl font-bold text-slate-500">Sushi Club</span>
             <span className="text-xl font-bold text-slate-500">Café Martínez</span>
          </div>
        </div>
      </div>
    </div>
  );
};