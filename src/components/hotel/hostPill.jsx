import { ChevronDown } from "lucide-react";

export default function HostPill({ hotelName, hostName, avatar, isRoomView = false, className = "" }) {
    return (
        /* Host Pill Container - Matches your exact 331x96 specs */
        <div className={`
            flex flex-row items-center justify-center gap-4 px-4 py-2 
            w-[331px] h-[96px] bg-white backdrop-blur-[2px] rounded-[32px] 
            shadow-lg z-10 transition-all duration-500 ${className}
        `}>
            
            {/* Avatar - Fixed 80x80 */}
            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 ring-2 ring-gray-50">
                <img 
                    src={avatar} 
                    alt="Entity Avatar" 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Frame 10 - Text Container */}
            <div className="flex flex-col items-start justify-center gap-1 w-[155px] h-[80px]">
                {/* Entity Label (Regular 16px) */}
                <span className="font-roboto text-base font-normal leading-6 text-[#454C58] uppercase tracking-wider">
                    {isRoomView ? "Host" : "Hotel"}
                </span>
                
                {/* Entity Name (Medium 18px) */}
                <span className="font-roboto text-[18px] font-medium leading-[27px] text-[#1F2226] truncate w-full">
                    {isRoomView ? (hostName || "Selena Doberman") : hotelName}
                </span>
            </div>

            {/* angle-down-small */}
            <div className="w-8 h-8 flex items-center justify-center shrink-0 ml-auto">
                <ChevronDown size={24} className="text-[#1F2226]" />
            </div>
        </div>
    );
}