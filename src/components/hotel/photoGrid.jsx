import React, { useState } from 'react';
import { Image as ImageIcon, X } from "lucide-react";
import HostPill from "./hostPill"; 

export default function photoGrid({ gallery, hotelName, hostName, isRoomView = false }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!gallery || gallery.length === 0) return null;

    const currentAvatar = isRoomView ? "/assets/images/host-avatar.jpg" : gallery[0];

    return (
        /* The wrapper now forces horizontal centering */
        <div className="w-full flex justify-center">
            <section className="relative w-full max-w-[1232px] h-auto lg:h-[540px] flex flex-col lg:flex-row justify-center items-center gap-4 isolate px-4 lg:px-0">
                
                {/* 1. Main Featured Image */}
                <div className="relative w-full lg:w-[608px] h-[400px] lg:h-[540px] rounded-[16px] overflow-hidden shrink-0">
                    <img src={gallery[0]} className="w-full h-full object-cover" alt="Property Hero" />
                    
                    <HostPill 
                        className="hidden lg:flex absolute left-[25px] top-[426px]"
                        hotelName={hotelName}
                        hostName={hostName}
                        avatar={currentAvatar}
                        isRoomView={isRoomView}
                    />
                </div>

                {/* Mobile Only: Inline Entity Info */}
                <div className="flex lg:hidden w-full items-center gap-3 py-2 px-1">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-100">
                        <img src={currentAvatar} alt="Entity" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-gray-500 font-roboto tracking-tight">
                            {isRoomView ? "Managed by" : "Property"}
                        </span>
                        <span className="text-sm font-semibold text-[#1F2226] font-roboto">
                            {isRoomView ? (hostName || "Selena Doberman") : hotelName}
                        </span>
                    </div>
                </div>

                {/* 2. Secondary Images Grid */}
                <div className="w-full lg:w-[608px] h-auto lg:h-[540px] shrink-0 overflow-hidden">
                    <div className="flex flex-row lg:grid lg:grid-cols-2 gap-3 lg:gap-x-4 lg:gap-y-[19px] overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 scroll-smooth">
                        <style>{`
                            .overflow-x-auto::-webkit-scrollbar { height: 6px; }
                            .overflow-x-auto::-webkit-scrollbar-track { background: #F3F4F6; border-radius: 10px; }
                            .overflow-x-auto::-webkit-scrollbar-thumb { background: #0057FF; border-radius: 10px; }
                        `}</style>

                        {gallery.slice(1, 5).map((img, index) => (
                            <div key={index} className="relative min-w-[296px] w-[296px] h-[260px] rounded-[8px] overflow-hidden shrink-0">
                                <img src={img} className="w-full h-full object-cover" alt="Detail" />
                                {index === 3 && (
                                    <button 
                                        onClick={() => setIsModalOpen(true)}
                                        className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 flex items-center gap-2 cursor-pointer border-none text-white"
                                    >
                                        <ImageIcon size={16} />
                                        <span className="text-xs lg:text-sm font-semibold">10+</span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Logic remains the same */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center animate-in fade-in duration-300">
                     <div className="w-full flex justify-between items-center px-6 py-4 border-b border-white/10 shrink-0">
                        <h3 className="text-white text-lg font-medium font-roboto">{hotelName} - Gallery</h3>
                        <button onClick={() => setIsModalOpen(false)} className="p-2 text-white hover:bg-white/10 rounded-full">
                            <X size={32} />
                        </button>
                    </div>

                    <div className="w-full flex-1 overflow-y-auto flex justify-center p-6 lg:p-12 no-scrollbar">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-[1264px]">
                            {gallery.map((img, idx) => (
                                <div key={idx} className="w-[608px] h-[540px] rounded-[16px] overflow-hidden shadow-2xl ring-1 ring-white/10 shrink-0">
                                    <img src={img} className="w-full h-full object-cover" alt={`Gallery item ${idx}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}