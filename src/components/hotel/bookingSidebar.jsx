import React from 'react';
import { Calendar, ChevronDown } from "lucide-react";

export default function BookingSidebar({ hotel }) {
    if (!hotel) return null;

    return (
        /* Reserve Card */
        <div className="w-[400px] h-[398px] bg-white shadow-[0px_2px_20px_rgba(0,0,0,0.12)] rounded-[24px] p-6 flex flex-col items-center justify-center gap-6 font-roboto relative">
            
            {/*Check-in/Out & Guest Picker Container */}
            <div className="w-[352px] h-[180px] flex flex-col items-center p-2 gap-2 border border-[#DDDFE3] rounded-[24px] overflow-hidden">
                
                {/* Frame 1105: Check-in & Check-out Row */}
                <div className="flex flex-row items-center w-[336px] h-[76px]">
                    {/* Frame 1102: Check-in Section */}
                    <div className="flex-1 flex flex-col justify-center items-start p-4 bg-white">
                        <div className="flex items-center gap-[10px] w-full h-6">
                            <Calendar size={24} className="text-[#2B3037] shrink-0" />
                            <span className="text-base font-normal text-[#2B3037]">Check-in</span>
                        </div>
                        <span className="text-base text-[#383E48] font-normal w-full text-center mt-1">08/14/2025</span>
                    </div>

                    {/* Line 163: Vertical Divider */}
                    <div className="w-[1px] h-[58px] bg-[#B5BAC2] shrink-0" />

                    {/* Frame 1103: Check-out Section */}
                    <div className="flex-1 flex flex-col justify-center items-center p-4 bg-white">
                        <div className="flex items-center justify-center gap-[10px] w-full h-6">
                            <Calendar size={24} className="text-[#2B3037] shrink-0" />
                            <span className="text-base font-normal text-[#2B3037]">Check-out</span>
                        </div>
                        <span className="text-base text-[#383E48] font-normal w-full text-center mt-1">08/19/2025</span>
                    </div>
                </div>

                {/* Line 162: Horizontal Divider */}
                <div className="w-[281px] h-[1px] bg-[#DDDFE3] shrink-0" />

                {/* Room and Guests Drop down */}
                <div className="w-[336px] h-[72px] flex items-center px-4 bg-white rounded-[12px] cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col gap-1 flex-1">
                        <span className="text-[18px] font-medium leading-[27px] text-[#2B3037]">
                            Rooms and Guests
                        </span>
                        <div className="flex flex-row items-center gap-2 text-base text-[#383E48] font-normal">
                            <span>1 rooms,</span>
                            <span>2 adults</span>
                        </div>
                    </div>
                    <ChevronDown size={20} className="text-[#2B3037]" />
                </div>
            </div>

            {/* Frame 2147224461: Pricing Section */}
            <div className="flex flex-col items-start gap-2 w-[352px] h-[58px]">
                <div className="flex flex-row items-start self-stretch gap-1 h-[26px]">
                    <span className="text-[20px] font-medium leading-[26px] text-[#1F2226]">
                        Prices:
                    </span>
                </div>
                <div className="flex flex-row items-start self-stretch gap-1 text-base text-[#2B3037] h-6">
                    <span>From</span>
                    <span className="text-[#2B3037]">$300</span>
                    <span>to</span>
                    <span className="text-[#2B3037]">$600</span>
                </div>
            </div>

            {/* Buttons: Primary Blue CTA */}
            <button className="w-[352px] min-w-[102px] h-[48px] bg-[#0057FF] rounded-[12px] flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="font-inter text-[18px] font-medium text-white">
                    Show Rooms
                </span>
            </button>
        </div>
    );
}