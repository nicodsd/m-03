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
    <section id="caracteristicas" className="py-24 bg-bone-100 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-red-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">Características</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">Todo lo que tu restaurante necesita</h3>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Una herramienta potente y fácil de usar para digitalizar tu negocio gastronómico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-bone-300 shadow-sm hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">{feature.title}</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};