import React from 'react';
import { Calendar, ChevronDown } from "lucide-react";

export default function BookingSidebar({ hotel }) {
    if (!hotel) return null;

    return (
        <div className="w-full lg:w-[400px] mt-10 md:mt-14 lg:mt-0 bg-white shadow-[0px_2px_20px_rgba(0,0,0,0.12)] rounded-[24px] p-4 md:p-6 flex flex-col gap-6 font-roboto relative border border-gray-100">
            
            {/* Input Container */}
            <div className="w-full border border-[#DDDFE3] rounded-[20px] overflow-hidden">
                <div className="flex divide-x divide-[#DDDFE3]">
                    <div className="flex-1 p-3">
                        <div className="flex items-center gap-2 mb-1">
                            <Calendar size={16} className="text-gray-400" />
                            <span className="text-xs font-semibold text-gray-500 uppercase">Check-in</span>
                        </div>
                        <div className="text-sm font-medium">08/14/2025</div>
                    </div>
                    <div className="flex-1 p-3">
                        <div className="flex items-center gap-2 mb-1">
                            <Calendar size={16} className="text-gray-400" />
                            <span className="text-xs font-semibold text-gray-500 uppercase">Check-out</span>
                        </div>
                        <div className="text-sm font-medium">08/19/2025</div>
                    </div>
                </div>

                <div className="border-t border-[#DDDFE3] p-3 flex justify-between items-center bg-gray-50/30">
                    <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Guests</div>
                        <div className="text-sm font-medium">1 room, 2 adults</div>
                    </div>
                    <ChevronDown size={18} className="text-gray-400" />
                </div>
            </div>

            {/* Pricing Section */}
            <div className="px-2">
                <p className="text-sm text-gray-500 font-medium mb-1">Total Price Range</p>
                <div className="text-lg font-bold text-[#1F2226]">
                    ${hotel.price} <span className="text-sm font-normal text-gray-400">—</span> ${Math.round(hotel.price * 1.5)}
                </div>
            </div>

            {/* Primary Action Button */}
            <button className="w-full h-[56px] bg-[#0057FF] text-white rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-[0.98] shadow-md shadow-blue-100">
                Show Rooms
            </button>
        </div>
    );
}