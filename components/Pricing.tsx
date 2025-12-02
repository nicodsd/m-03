import React from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "/mes",
    description: "Para pequeños locales o food trucks que inician.",
    features: [
      "Hasta 20 platos",
      "1 Código QR",
      "Fotos básicas",
      "Actualización en tiempo real",
      "Soporte por email"
    ],
    cta: "Crear Menú Gratis"
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mes",
    description: "Para restaurantes que quieren destacar su marca.",
    features: [
      "Platos ilimitados",
      "Códigos QR personalizados (Logo)",
      "Multi-idioma (5 idiomas)",
      "Gestión de alérgenos",
      "Analíticas de visitas",
      "Soporte prioritario"
    ],
    cta: "Elegir Plan Pro",
    recommended: true
  },
  {
    name: "Franquicias",
    price: "$49",
    period: "/mes",
    description: "Gestión centralizada para múltiples sucursales.",
    features: [
      "Todo lo del plan Pro",
      "Gestión multi-sucursal",
      "Menús diferenciados por zona",
      "Roles de empleado",
      "API de integración POS",
      "Account Manager dedicado"
    ],
    cta: "Contactar Ventas"
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="planes" className="py-24 bg-[#050427]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Planes Transparentes</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Elige la opción que mejor se adapte a tu negocio. Sin comisiones ocultas por pedido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl border ${plan.recommended
                ? 'bg-slate-800/80 border-primary-500 shadow-2xl shadow-primary-900/20'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                } transition-all duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                  Recomendado
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-slate-400 text-sm mt-2 min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-500 ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.recommended ? 'text-primary-400' : 'text-slate-500'}`} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all ${plan.recommended
                  ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-900/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};