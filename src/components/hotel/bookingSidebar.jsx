import React, { useState } from 'react';
import { Calendar, ChevronDown, Minus, Plus, X } from "lucide-react";

function Counter({ value, onChange, min = 0 }) {
    return (
        <div className="flex items-center gap-4 bg-[#F9FAFB] rounded-full border border-[#E8ECEF] h-10 px-1">
            <button
                type="button"
                onClick={() => onChange(value - 1)}
                disabled={value <= min}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-[#E8ECEF] text-[#4A5568] shadow-sm disabled:opacity-30 disabled:shadow-none hover:bg-gray-50 transition-colors"
            >
                <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="min-w-4 text-center text-[15px] font-bold text-heading">{value}</span>
            <button
                type="button"
                onClick={() => onChange(value + 1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-[#E8ECEF] text-[#0057FF] shadow-sm hover:bg-gray-50 transition-colors"
            >
                <Plus className="w-3.5 h-3.5" />
            </button>
        </div>
    );
}

export default function BookingSidebar({ hotel }) {
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [isGuestOpen, setIsGuestOpen] = useState(false);

    if (!hotel) return null;

    const totalGuests = adults + children;
    const guestSummary = `${rooms} room${rooms > 1 ? "s" : ""} · ${totalGuests} guest${totalGuests > 1 ? "s" : ""}`;

    return (
        <>
        {isGuestOpen && (
            <div className="fixed inset-0 z-10" onClick={() => setIsGuestOpen(false)} />
        )}

        {/* OUTER FRAME: High-elevation card */}
        <div className="z-20 w-full lg:w-[400px] min-h-[520px] bg-white border border-[#F0F2F5] rounded-[36px] flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] sticky top-24 font-roboto">
            
            {/* INNER STAGE */}
            <div className="w-[86%] flex flex-col gap-8">
                
                {/* 1. SELECTION CONTAINER */}
                <div className="w-full h-[180px] bg-white border border-[#E8ECEF] rounded-[24px] overflow-visible flex flex-col">
                    
                    {/* Top Row: Date Selection */}
                    <div className="flex-1 flex divide-x divide-[#E8ECEF]">
                        <div className="flex-1 flex items-center justify-center hover:bg-[#F9FAFB] transition-colors cursor-pointer group">
                            <div className="w-[75%] flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-[#1F2226]" />
                                    <span className="text-[14px] font-semibold text-heading">Check-in</span>
                                </div>
                                <div className="text-[15px] font-medium text-body ml-6.5">08/14/2025</div>
                            </div>
                        </div>

                        <div className="flex-1 flex items-center justify-center hover:bg-[#F9FAFB] transition-colors cursor-pointer group">
                            <div className="w-[75%] flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-[#1F2226]" />
                                    <span className="text-[14px] font-semibold text-heading">Check-out</span>
                                </div>
                                <div className="text-[15px] font-medium text-body ml-6.5">08/19/2025</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Guest Selection with DROPDOWN */}
                    <div
                        className="relative flex-1 border-t border-[#E8ECEF] flex items-center justify-center hover:bg-[#F9FAFB] transition-colors cursor-pointer group"
                        onClick={() => setIsGuestOpen((prev) => !prev)}
                    >
                        <div className="w-[88%] flex flex-col gap-2">
                            <div className="text-[14px] font-semibold text-heading">Rooms and Guests</div>
                            <div className="text-[15px] font-medium text-body flex justify-between items-center">
                                <span>{guestSummary}</span>
                                <ChevronDown size={18} className={`text-[#1F2226] opacity-40 transition-transform duration-300 ${isGuestOpen ? "rotate-180" : ""}`} />
                            </div>
                        </div>

                        {/* DROPDOWN */}
                        {isGuestOpen && (
                            <div
                                className="absolute top-[105%] left-0 w-full bg-white rounded-[24px] border border-[#E8ECEF] shadow-[0_24px_48px_rgba(0,0,0,0.16)] flex flex-col items-center justify-center py-6 z-30 animate-in fade-in slide-in-from-top-2"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="w-[85%] flex flex-col gap-6">
                                    {/* Dropdown Header */}
                                    <div className="flex items-center justify-between">
                                        <h5 className="text-[16px] font-bold text-heading">Select travelers</h5>
                                        <button onClick={() => setIsGuestOpen(false)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                                            <X size={18} className="text-body" />
                                        </button>
                                    </div>

                                    {/* Rows Wrapper */}
                                    <div className="flex flex-col gap-5">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[15px] font-semibold text-heading">Rooms</span>
                                            <Counter value={rooms} onChange={(n) => setRooms(Math.max(1, n))} min={1} />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[15px] font-semibold text-heading">Adults</span>
                                                <span className="text-[12px] text-body opacity-60">Ages 18 or above</span>
                                            </div>
                                            <Counter value={adults} onChange={(n) => setAdults(Math.max(1, n))} min={1} />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[15px] font-semibold text-heading">Children</span>
                                                <span className="text-[12px] text-body opacity-60">Ages 0 – 17</span>
                                            </div>
                                            <Counter value={children} onChange={(n) => setChildren(Math.max(0, n))} min={0} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* 2. PRICE INFO */}
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-[98%] flex flex-col gap-3">
                        <h4 className="text-[18px] font-bold text-heading">Prices:</h4>
                        <div className="text-[16px] text-body font-medium">From $300 to $600</div>
                    </div>
                </div>

                {/* 3. CTA BUTTON */}
                <div className="w-full h-[56px] flex items-center justify-center">
                    <button className="w-full h-full bg-[#0057FF] text-white rounded-[16px] font-bold text-[16px] hover:bg-blue-700 transition-all active:scale-[0.98] shadow-sm">
                        Show Rooms
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}