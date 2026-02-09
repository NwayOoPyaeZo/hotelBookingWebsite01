import { Users, Square, MapPin, Check } from "lucide-react";

export default function roomCard({ room }) {
    const isAvailable = room.availability?.available;

    return (
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 p-6 border-b border-gray-100 last:border-0 ${!isAvailable ? 'opacity-60' : ''}`}>
            {/* Room Info */}
            <div className="col-span-1">
                <h4 className="font-bold text-lg text-[#2B3037]">{room.name}</h4>
                <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2 text-sm text-[#656F81]">
                        <Users className="w-4 h-4" /> {room.guests} Guests
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#656F81]">
                        <Square className="w-4 h-4" /> {room.size}
                    </div>
                    {room.view && (
                        <div className="flex items-center gap-2 text-sm text-[#656F81]">
                            <MapPin className="w-4 h-4" /> {room.view}
                        </div>
                    )}
                </div>
            </div>

            {/* Features */}
            <div className="col-span-1">
                <div className="space-y-1">
                    {room.features?.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-green-600 font-medium">
                            <Check className="w-3 h-3" /> {feature}
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing */}
            <div className="col-span-1 text-right md:text-left">
                {isAvailable ? (
                    <div>
                        {room.pricing.original && (
                            <span className="text-sm text-gray-400 line-through block">
                                €{room.pricing.original}
                            </span>
                        )}
                        <span className="text-2xl font-bold text-[#2B3037]">€{room.pricing.discounted || room.pricing.pricePerNight}</span>
                        <span className="text-gray-500 text-sm"> / night</span>
                    </div>
                ) : (
                    <span className="text-red-500 font-bold uppercase tracking-wide">Sold Out</span>
                )}
            </div>

            {/* Action */}
            <div className="col-span-1 flex items-center justify-end">
                <button 
                    disabled={!isAvailable}
                    className={`px-6 py-2 rounded-xl font-bold transition-colors ${
                        isAvailable 
                        ? 'bg-[#0057FF] text-white hover:bg-[#0046cc]' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    {isAvailable ? 'Select' : 'Full'}
                </button>
            </div>
        </div>
    );
}