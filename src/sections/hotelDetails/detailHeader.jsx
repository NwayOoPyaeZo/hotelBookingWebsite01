import { Heart, Share2, Star } from "lucide-react";
import DetailsNavBar from "./detailsNavBar";

export default function DetailHeader({ hotel }) {
    if (!hotel) return null;

    const city = hotel.location?.city || "";
    const country = hotel.location?.country || "";
    const locationText = city && country ? `${city}, ${country}` : city || country;

    return (
        /* Section is the full-width wrapper */
        <section className="relative w-full flex flex-col items-center">
            
            {/* 1. TOP TITLES - Using Version 1 logic for perfect text/star balance */}
            <div className="flex flex-row justify-between items-center w-full max-w-[1232px] h-[83px] py-2">
                
                {/* Title & Stars (Frame 2147224572) */}
                <div className="flex flex-col items-start w-[423px]">
                    <div className="flex flex-row items-center gap-2 h-[42px]">
                        <h1 className="text-[32px] font-semibold text-[#1F2226] leading-[42px] font-roboto truncate">
                            {hotel.name}
                        </h1>
                        <div className="flex flex-row items-center gap-[2px] p-1 h-[26px]">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} size={18} fill="#FAC91E" color="#FAC91E" />
                            ))}
                        </div>
                    </div>
                    {locationText && (
                        <p className="text-[18px] font-medium text-[#454C58] leading-[27px] font-roboto">
                            {locationText}
                        </p>
                    )}
                </div>

                {/* Buttons (Frame 2147224571) - Using Version 1 sizing */}
                <div className="flex flex-row justify-end items-center gap-6 w-[112px] h-[48px]">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors border border-gray-100">
                        <Heart size={24} className="text-[#1F2226]" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors border border-gray-100">
                        <Share2 size={24} className="text-[#121316]" />
                    </button>
                </div>
            </div>

            {/* 2. NAVBAR AREA - Using Version 2 logic for correct centering & full-width bg */}
            <div className="w-full h-[94px] bg-white border-b border-[#DDDFE3] flex justify-center items-end pb-[7px]">
                {/* This internal div locks the Nav content to the 1232px grid */}
                <div className="w-[1232px]">
                    <DetailsNavBar />
                </div>
            </div>
            
        </section>
    );
}