import React from 'react';
import { ArrowRight, QrCode, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="inicio" className="relative pt-30 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-bone-100">
      {/* Background Organic Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[60%] bg-[#0004ff3a] rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-[#f85d156c] rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-bone-300 mb-8 shadow-sm">
            <QrCode className="h-6 w-6 text-primary-600" />
            <span className="text-sm font-medium text-stone-600">La solución #1 para bares modernos</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.1] mb-8">
            Tu Menú en el Móvil de <br className="block" />
            <span className='text-5xl md:text-7xl font-black' style={{
              lineHeight: "1.1",
              backgroundClip: "text",
              background: "linear-gradient(90deg, #FF0000 0%, #DC2626 50%, #FFBE0D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1.5rem",
            }}>
              tus clientes
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-stone-600 leading-base font-medium mb-10">
            Sube tus platos, actualiza precios en tiempo real y genera tu código QR en minutos. Moderniza la experiencia de tu restaurante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#planes" className="group w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary-600/30 hover:shadow-primary-600/40 hover:-translate-y-1">
              Crear Menú Gratis
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#demo" className="w-auto flex items-center justify-center gap-2 bg-white hover:bg-bone-50 text-stone-700 px-8 py-4 rounded-xl font-semibold text-lg border border-bone-300 transition-all hover:border-bone-400 hover:-translate-y-1 shadow-sm hover:shadow-md">
              <Smartphone className="h-5 w-5 text-stone-500" />
              Ver Ejemplo
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};