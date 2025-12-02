import React from 'react';
import { Camera, Edit3, Smartphone, QrCode } from 'lucide-react';

export const Showcase: React.FC = () => {
    return (
        <section id="demo" className="py-24 bg-white relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">Gestión Simple, <span className="text-primary-600">Experiencia Premium</span></h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        Desde tu panel de control actualizas precios y fotos al instante. Tus clientes escanean y disfrutan.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Dashboard Mockup (Left) */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-2xl border border-bone-300 p-2 shadow-2xl shadow-stone-200/50">
                            <div className="bg-bone-50 rounded-xl p-6 h-full min-h-[400px] relative overflow-hidden border border-bone-200">
                                {/* Header Browser */}
                                <div className="flex items-center justify-between mb-6 border-b border-bone-200 pb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="text-xs text-stone-400 font-mono bg-white px-3 py-1 rounded-md border border-bone-200">panel.gastroqr.app/menu</div>
                                </div>

                                {/* Fake App UI */}
                                <div className="flex gap-6">
                                    {/* Sidebar */}
                                    <div className="w-1/4 hidden sm:block">
                                        <div className="h-8 w-full bg-primary-50 rounded mb-4 border-l-4 border-primary-500"></div>
                                        <div className="h-6 w-3/4 bg-bone-200 rounded mb-3"></div>
                                        <div className="h-6 w-4/5 bg-bone-200 rounded mb-3"></div>
                                        <div className="h-6 w-2/3 bg-bone-200 rounded mb-3"></div>
                                    </div>
                                    {/* Main Content */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="h-6 w-32 bg-stone-200 rounded"></div>
                                            <div className="h-8 w-24 bg-primary-600 rounded shadow-md shadow-primary-600/20"></div>
                                        </div>

                                        {/* List Items */}
                                        <div className="space-y-3">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="flex items-center p-3 bg-white rounded-lg border border-bone-200 shadow-sm">
                                                    <div className="w-10 h-10 bg-bone-200 rounded mr-4"></div>
                                                    <div className="flex-1">
                                                        <div className="h-3 w-32 bg-stone-200 rounded mb-2"></div>
                                                        <div className="h-2 w-20 bg-bone-300 rounded"></div>
                                                    </div>
                                                    <div className="h-6 w-12 bg-bone-200 rounded"></div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Edit Modal Simulation */}
                                        <div className="mt-8 p-4 bg-primary-50/50 rounded-lg border border-primary-200 border-dashed">
                                            <div className="flex gap-4">
                                                <div className="w-16 h-16 bg-white rounded flex items-center justify-center border border-primary-100 shadow-sm">
                                                    <Camera className="w-6 h-6 text-primary-400" />
                                                </div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-3 w-full bg-primary-200/50 rounded"></div>
                                                    <div className="h-3 w-2/3 bg-primary-200/50 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Preview Mockup (Right) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                        <div className="relative w-[280px] h-[580px] bg-stone-900 rounded-[2.5rem] border-4 border-stone-800 shadow-2xl overflow-hidden">
                            {/* Screen Content */}
                            <div className="w-full h-full bg-bone-50 overflow-y-auto no-scrollbar relative">
                                {/* Header Image */}
                                <div style={{
                                    background: "linear-gradient(0deg, #FF3C00 0%, #FFBB00 100%)",
                                }} className="h-40 bg-black relative">
                                    <div className="absolute bottom-4 left-4 font-bold text-white text-xl shadow-sm z-10">Burger House</div>
                                </div>
                                {/* Categories */}
                                <div className="flex gap-2 p-4 overflow-x-auto border-b border-bone-200 bg-white sticky top-0 z-20">
                                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">Burgers</span>
                                    <span className="bg-bone-200 text-stone-600 px-3 py-1 rounded-full text-xs font-medium">Bebidas</span>
                                    <span className="bg-bone-200 text-stone-600 px-3 py-1 rounded-full text-xs font-medium">Postres</span>
                                </div>
                                {/* Items */}
                                <div className="px-4 space-y-4 py-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex gap-3 items-start bg-white p-2 rounded-xl border border-bone-200 shadow-sm">
                                            <div className="w-16 h-16 bg-stone-200 rounded-lg shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80)' }}></div>
                                            <div>
                                                <h4 className="text-stone-800 font-bold text-sm leading-tight">Doble Cheese Bacon</h4>
                                                <p className="text-stone-500 text-[10px] mt-1 leading-tight">Carne angus, queso cheddar doble.</p>
                                                <div className="text-primary-600 font-bold text-sm mt-1">$12.50</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* Floating Feature Cards */}
                        <div className="absolute top-1/2 -left-12 bg-white p-4 rounded-xl border border-bone-200 shadow-xl hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                    <Edit3 className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-stone-500">Cambios</div>
                                    <div className="font-bold text-stone-800">En tiempo real</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-20 -right-4 bg-white p-4 rounded-xl border border-bone-200 shadow-xl hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                                    <QrCode className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-stone-500">Scan</div>
                                    <div className="font-bold text-stone-800">Instantáneo</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};