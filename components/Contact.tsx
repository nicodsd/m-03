import React, { useState } from 'react';
import { Send, Mail, MapPin, Loader2 } from 'lucide-react';

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
    <section id="contacto" className="py-24 bg-bone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">¿Listo para modernizar tu local?</h2>
            <p className="text-stone-600 text-lg mb-8">
              Únete a miles de restaurantes que ya usan GastroQR. Si tienes dudas o necesitas un plan personalizado para tu franquicia, escríbenos.
            </p>

            <div className="space-y-6">
              <div className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-bone-200">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-semibold">Ventas y Soporte</h4>
                  <p className="text-stone-500">hola@gastroqr.app</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-bone-200">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-semibold">Oficinas Centrales</h4>
                  <p className="text-stone-500">Av. Gastronomía 123, Piso 4<br />Ciudad de México, México</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-bone-300 shadow-xl shadow-stone-200/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-bone-50 border border-bone-300 rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-stone-400"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bone-50 border border-bone-300 rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-stone-400"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium text-stone-700 mb-2">Nombre del Restaurante</label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    className="w-full bg-bone-50 border border-bone-300 rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-stone-400"
                    placeholder="Ej. La Trattoria"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-bone-50 border border-bone-300 rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-stone-400 resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                <p className="text-green-600 text-sm text-center animate-fade-in font-medium">Gracias. Un asesor gastronómico te contactará pronto.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};