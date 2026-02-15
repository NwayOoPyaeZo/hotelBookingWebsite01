import React, { useEffect, useState } from 'react';
import { Image as ImageIcon, X } from "lucide-react";
import HostPill from "./hostPill";

export default function photoGrid({ gallery, hotelName, hostName, isRoomView = false }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    if (!gallery || gallery.length === 0) return null;

    const currentAvatar = isRoomView ? "/assets/images/host-avatar.jpg" : gallery[0];

    return (
        <div className="w-full flex justify-center overflow-hidden">
            <section className="relative w-full max-w-[1232px] flex flex-col lg:flex-row justify-center items-start lg:items-center gap-4 isolate px-4 lg:px-0 overflow-hidden">

                {/* 1. Main Featured Image */}
                <div className="relative w-full lg:w-[608px] aspect-[4/3] md:aspect-video lg:aspect-auto lg:h-[540px] rounded-[16px] overflow-hidden shrink-0 lg:shrink">
                    <img src={gallery[0]} className="w-full h-full object-cover" alt="Property Hero" />
                    <HostPill
                        className="hidden lg:flex absolute left-[25px] bottom-6"
                        hotelName={hotelName}
                        hostName={hostName}
                        avatar={currentAvatar}
                        isRoomView={isRoomView}
                    />
                </div>

                {/* Mobile Identity Info */}
                <div className="flex lg:hidden w-full items-center gap-3 py-2 px-1">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-100">
                        <img src={currentAvatar} alt="Entity" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-gray-500 font-roboto tracking-tight">
                            {isRoomView ? "Managed by" : "Property"}
                        </span>
                        <span className="text-sm font-semibold text-[#1F2226]">
                            {isRoomView ? (hostName || "Host") : hotelName}
                        </span>
                    </div>
                </div>

                {/* 2. Secondary Images Grid */}
                <div className="w-full lg:w-[608px] overflow-hidden">
                    <div className="flex flex-row lg:grid lg:grid-cols-2 gap-3 lg:gap-x-4 lg:gap-y-[19px] overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory no-scrollbar">
                        <style>{`
                            .no-scrollbar::-webkit-scrollbar { display: none; }
                            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                        `}</style>

                        {gallery.slice(1, 5).map((img, index) => (
                            <div
                                key={index}
                                className="relative min-w-[48%] lg:min-w-0 w-[48%] lg:w-[296px] aspect-square lg:aspect-auto lg:h-[260px] rounded-[12px] overflow-hidden shrink-0 snap-start"
                            >
                                <img src={img} className="w-full h-full object-cover" alt="Detail" />
                                {index === 3 && (
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md rounded-lg px-2 py-1 flex items-center gap-1.5 cursor-pointer border-none text-white z-10"
                                    >
                                        <ImageIcon size={12} />
                                        <span className="text-[10px] lg:text-sm font-semibold">
                                            {gallery.length > 5 ? `${gallery.length - 4}+` : "10+"}
                                        </span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- GALLERY MODAL --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[2000] bg-black/95 flex flex-col items-center animate-in fade-in duration-300">
                    {/* Modal Header */}
                    <div className="w-full flex justify-between items-center px-6 py-4 border-b border-white/10 shrink-0">
                        <div className="w-full flex justify-center gap-4">
                            <h3 className="text-white text-lg font-medium font-roboto truncate pr-4">
                                {hotelName} - Gallery
                            </h3>
                        </div>

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={32} />
                        </button>
                    </div>

                    {/* Modal Images Content */}
                    <div className="w-full flex-1 overflow-y-auto no-scrollbar">
                        <div className="flex flex-col items-center w-full p-4 lg:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-[1264px] w-full justify-items-center">
                                {gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="w-full max-w-[608px] aspect-[4/3] rounded-[16px] overflow-hidden shadow-2xl ring-1 ring-white/10"
                                    >
                                        <img
                                            src={img}
                                            className="w-full h-full object-cover"
                                            alt={`Gallery item ${idx}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}