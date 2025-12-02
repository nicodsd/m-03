import React, { useState } from 'react';
import { Send, Mail, MapPin, Loader2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      if (formData.name && formData.email) {
        setStatus('success');
        setFormData({ name: '', email: '', restaurant: '', message: '' });
      } else {
        setStatus('error');
      }
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para modernizar tu local?</h2>
            <p className="text-slate-400 text-lg mb-8">
              Únete a cientos de restaurantes que ya usan GastroQR. Si tienes dudas o necesitas un plan personalizado para tu negocio, escribenos.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-900/30 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Ventas y Soporte</h4>
                  <p className="text-slate-400">hola@gastroqr.app</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-900/30 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Oficinas Centrales</h4>
                  <p className="text-slate-400">Av. Gastronomía 123, Piso 4<br />Ciudad de México, México</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium text-slate-300 mb-2">Nombre del Restaurante</label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
                    placeholder="Ej. La Trattoria"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-600 resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : status === 'success' ? (
                  <>
                    ¡Solicitud Enviada!
                  </>
                ) : (
                  <>
                    Contactar Equipo
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center animate-fade-in">Gracias. Un asesor gastronómico te contactará pronto.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};