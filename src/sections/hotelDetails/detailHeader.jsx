import { useRef, useState } from "react";
import { Heart, Share2, Star } from "lucide-react";
import DetailsNavBar from "./detailsNavBar";

export default function DetailHeader({ hotel }) {
    const [likedItems, setLikedItems] = useState({});
    const [shareNotice, setShareNotice] = useState(null);
    const shareNoticeTimerRef = useRef(null);

    if (!hotel) return null;

    const city = hotel.location?.city || "";
    const country = hotel.location?.country || "";
    const locationText = city && country ? `${city}, ${country}` : city || country;
    const hotelKey = hotel.id ?? hotel.hotel_id ?? hotel.name;
    const isLiked = Boolean(likedItems[hotelKey]);

    const toggleLike = () => {
        setLikedItems((prev) => ({ ...prev, [hotelKey]: !prev[hotelKey] }));
    };

    const handleShare = async () => {
        const shareUrl = window.location.href;
        if (shareNoticeTimerRef.current) {
            clearTimeout(shareNoticeTimerRef.current);
        }

        try {
            await navigator.clipboard.writeText(shareUrl);
            setShareNotice("Link copied to clipboard");
        } catch {
            try {
                const textArea = document.createElement("textarea");
                textArea.value = shareUrl;
                textArea.style.position = "fixed";
                textArea.style.opacity = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
                setShareNotice("Link copied to clipboard");
            } catch {
                setShareNotice("Could not copy link");
            }
        }

        shareNoticeTimerRef.current = setTimeout(() => {
            setShareNotice(null);
        }, 2200);
    };

    return (
        <section className="relative w-full flex flex-col items-center">
            
            {/* 1. TOP TITLES */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center w-full max-w-[1232px] min-h-[83px] py-2 px-4 sm:px-0">
                
                {/* Title & Stars */}
                <div className="flex flex-col items-start w-full sm:w-[423px]">
                    <div className="flex flex-row items-center gap-2 min-h-[42px] w-full">
                        <h1 className="text-[28px] sm:text-[32px] font-semibold text-[#1F2226] leading-[34px] sm:leading-[42px] font-roboto truncate">
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

                {/* Buttons */}
                <div className="flex flex-row justify-start sm:justify-end items-center gap-4 sm:gap-6 w-full sm:w-[112px] h-[48px]">
                    <button
                        aria-label="Add to favorites"
                        aria-pressed={isLiked}
                        onClick={toggleLike}
                        className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm transition-colors border border-gray-100 ${isLiked ? "text-red-500" : "text-[#1F2226] hover:text-red-500 hover:bg-gray-50"}`}
                    >
                        <Heart size={24} className="transition-colors duration-200" fill={isLiked ? "currentColor" : "none"} />
                    </button>
                    <button
                        aria-label="Share hotel"
                        onClick={handleShare}
                        title="Copy hotel link"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors border border-gray-100"
                    >
                        <Share2 size={24} className="text-[#121316]" />
                    </button>
                </div>
            </div>

            {shareNotice && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-[#2B3037] text-white rounded-lg shadow-md text-sm font-medium font-roboto" role="status" aria-live="polite">
                    {shareNotice}
                </div>
            )}

            {/* 2. NAVBAR AREA */}
            <div className="w-full h-[94px] bg-white border-b border-[#DDDFE3] flex justify-center items-end pb-[7px]">
                <div className="w-full max-w-[1232px] px-4 sm:px-0">
                    <DetailsNavBar />
                </div>
            </div>
            
        </section>
    );
}