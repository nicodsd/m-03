import React from 'react';
import { Camera, Edit3, Smartphone, QrCode } from 'lucide-react';

export const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gestión Simple, Experiencia Premium</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Desde tu panel de control actualizas precios y fotos al instante. Tus clientes escanean y disfrutan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Dashboard Mockup (Left) */}
            <div className="lg:col-span-7 bg-slate-800 rounded-2xl border border-slate-700 p-2 shadow-2xl">
              <div className="bg-slate-950 rounded-xl p-6 h-full min-h-[400px] relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">panel.gastroqr.app/menu</div>
                </div>
                
                {/* Fake App UI */}
                <div className="flex gap-6">
                    {/* Sidebar */}
                    <div className="w-1/4 hidden sm:block">
                         <div className="h-8 w-full bg-primary-900/30 rounded mb-4 border-l-2 border-primary-500"></div>
                         <div className="h-6 w-3/4 bg-slate-800 rounded mb-3"></div>
                         <div className="h-6 w-4/5 bg-slate-800 rounded mb-3"></div>
                         <div className="h-6 w-2/3 bg-slate-800 rounded mb-3"></div>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <div className="h-6 w-32 bg-slate-700 rounded"></div>
                            <div className="h-8 w-24 bg-primary-600 rounded"></div>
                        </div>

                        {/* List Items */}
                        <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center p-3 bg-slate-900 rounded-lg border border-slate-800">
                                    <div className="w-10 h-10 bg-slate-800 rounded mr-4"></div>
                                    <div className="flex-1">
                                        <div className="h-3 w-32 bg-slate-700 rounded mb-2"></div>
                                        <div className="h-2 w-20 bg-slate-800 rounded"></div>
                                    </div>
                                    <div className="h-6 w-12 bg-slate-800 rounded"></div>
                                </div>
                            ))}
                        </div>
                         
                         {/* Edit Modal Simulation */}
                         <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700 border-dashed">
                             <div className="flex gap-4">
                                 <div className="w-16 h-16 bg-slate-700 rounded flex items-center justify-center">
                                     <Camera className="w-6 h-6 text-slate-500" />
                                 </div>
                                 <div className="flex-1 space-y-2">
                                     <div className="h-3 w-full bg-slate-700 rounded"></div>
                                     <div className="h-3 w-2/3 bg-slate-700 rounded"></div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Mobile Preview Mockup (Right) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                    {/* Screen Content */}
                    <div className="w-full h-full bg-slate-950 overflow-y-auto no-scrollbar relative">
                        {/* Header Image */}
                        <div className="h-40 bg-gradient-to-b from-primary-600 to-orange-400 relative">
                             <div className="absolute bottom-4 left-4 font-bold text-white text-xl shadow-sm">Burger House</div>
                        </div>
                        {/* Categories */}
                        <div className="flex gap-2 p-4 overflow-x-auto">
                            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs">Hamburguesas</span>
                            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs">Bebidas</span>
                            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs">Postres</span>
                        </div>
                        {/* Items */}
                        <div className="px-4 space-y-4 pb-8">
                             {[1, 2, 3, 4].map((i) => (
                                 <div key={i} className="flex gap-3 items-start">
                                     <div className="w-20 h-20 bg-slate-800 rounded-lg flex-shrink-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80)'}}></div>
                                     <div>
                                         <h4 className="text-white font-bold text-sm">Doble Cheese Bacon</h4>
                                         <p className="text-slate-400 text-xs mt-1">Carne angus, queso cheddar doble, bacon crujiente.</p>
                                         <div className="text-primary-400 font-bold text-sm mt-2">$12.50</div>
                                     </div>
                                 </div>
                             ))}
                        </div>
                        {/* FAB */}
                        <div className="absolute bottom-6 right-6 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg text-white">
                            <Smartphone className="w-5 h-5" />
                        </div>
                    </div>
                </div>
                
                {/* Floating Feature Cards */}
                <div className="absolute top-1/2 -left-12 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl hidden md:block">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-900/50 rounded-lg text-green-400">
                            <Edit3 className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-400">Cambios</div>
                            <div className="font-bold text-white">En tiempo real</div>
                        </div>
                    </div>
                </div>
                
                <div className="absolute bottom-20 -right-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl hidden md:block">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-900/50 rounded-lg text-primary-400">
                            <QrCode className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-400">Scan</div>
                            <div className="font-bold text-white">Instantáneo</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};