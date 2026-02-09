import { DollarSign, Heart } from "lucide-react";

export default function mapPinPrice({ price, active, position }) {
    const displayPrice = price ?? "--";

    return (
        <div
            className={`absolute ${position} -translate-x-1/2 -translate-y-full flex flex-col items-center group`}
        >
            <div
                className={`flex items-center gap-1 px-3 py-1 rounded-[12px] border shadow-sm transition-colors ${
                    active
                        ? "bg-[#121316] border-[#121316] text-white"
                        : "bg-white border-gray-200 text-black"
                }`}
            >
                <DollarSign size={14} />
                <span className="text-sm font-medium font-roboto">{displayPrice}</span>
                {active && <Heart size={16} fill="white" className="ml-1" />}
            </div>

            <div
                className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] ${
                    active ? "border-t-[#121316]" : "border-t-white"
                }`}
            />
        </div>
    );
}
