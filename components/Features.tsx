import React from 'react';
import { Camera, QrCode, Smartphone, CloudLightning, Globe, ShieldCheck, PieChart, Printer } from 'lucide-react';

const featuresList = [
  {
    icon: <QrCode className="h-6 w-6" />,
    title: "Códigos QR Personalizables",
    description: "Genera QRs únicos para cada mesa o local. Descárgalos en alta resolución listos para imprimir."
  },
  {
    icon: <CloudLightning className="h-6 w-6" />,
    title: "Actualizaciones en Tiempo Real",
    description: "Modifica precios, oculta platos agotados o cambia descripciones instantáneamente sin reimprimir."
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Galería de Fotos HD",
    description: "Sube fotos apetitosas de tus platos. La comida entra por los ojos y aumenta el ticket promedio."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Multi-Idioma Automático",
    description: "Tu menú se traduce automáticamente al idioma del teléfono de tu cliente. Ideal para zonas turísticas."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Información de Alérgenos",
    description: "Cumple con la normativa indicando claramente los alérgenos en cada plato para seguridad de tus clientes."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "100% Responsive",
    description: "Diseño optimizado para cargar rápido en cualquier smartphone, sin necesidad de instalar apps."
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Analíticas de Visitas",
    description: "Conoce qué platos son los más vistos y en qué horarios tienes más tráfico en tu menú digital."
  },
  {
    icon: <Printer className="h-6 w-6" />,
    title: "Soporte para Impresión",
    description: "¿Necesitas una carta física? Exporta tu menú digital a PDF con un diseño elegante en un clic."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary-500 font-bold tracking-wide uppercase text-sm mb-3">Características</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Todo lo que tu restaurante necesita</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Una herramienta potente y fácil de usar para digitalizar tu negocio gastronómico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-primary-500/30 hover:bg-slate-800/80 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-primary-400 group-hover:scale-110 group-hover:bg-primary-900/20 transition-all">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};