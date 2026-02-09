import React, { useRef, useState } from 'react';
import { homesData } from "../../constants/homeData";

export default function HomeGuestsLove({ onHotelSelect }) {
    const sliderRef = useRef(null);
    // Track likes per hotel ID
    const [likedItems, setLikedItems] = useState({});

    const slide = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 340; // Card width (296) + gap (16) + wiggle room
            sliderRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    };

    const toggleLike = (e, id) => {
        e.stopPropagation(); // Stop navigation to details when clicking the heart
        setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const navBtnClass = "flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm border border-[#DDDFE3] text-[#B5BAC2] transition-all duration-200 hover:border-[#2B3037] hover:text-[#2B3037] active:scale-95 cursor-pointer";

    return (
        <section className="flex flex-col items-center gap-8 py-12 w-full bg-white">
            
            {/* --- Header Section --- */}
            <div className="flex flex-row justify-between items-center w-full max-w-[1232px] px-4 lg:px-0">
                <h2 className="font-roboto font-semibold text-[32px] md:text-[40px] text-[#121316]">
                    Homes guests love
                </h2>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                    <button onClick={() => slide('left')} className={navBtnClass} aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    
                    <button onClick={() => slide('right')} className={navBtnClass} aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* --- Product Slider --- */}
            <div
                ref={sliderRef}
                className="flex flex-row overflow-x-auto scroll-smooth no-scrollbar gap-4 w-full max-w-[1232px] px-4 lg:px-0 pb-6"
            >
                {homesData.map((home) => (
                    <div key={home.id} className="shrink-0">
                        <article 
                            onClick={() => onHotelSelect?.(home.id)}
                            className="flex flex-col items-start w-[296px] h-[440px] min-h-[432px] gap-4 bg-white border border-[#DDDFE3] rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-[0px_12px_24px_rgba(0,52,153,0.15)] hover:border-blue-100 cursor-pointer"
                        >
                            {/* --- Image Section --- */}
                            <div className="relative shrink-0 w-full">
                                <img
                                    src={home.imageUrl}
                                    alt={home.title}
                                    className="h-[228px] w-full object-cover"
                                />
                                <button
                                    aria-label="Add to favorites"
                                    onClick={(e) => toggleLike(e, home.id)}
                                    className={`absolute top-4 right-4 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-sm transition-all duration-200 hover:scale-110 active:scale-95 ${likedItems[home.id] ? 'text-red-500' : 'text-[#1F2226] hover:text-red-500'}`}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill={likedItems[home.id] ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                </button>
                            </div>

                            {/* --- Outer Text Container --- */}
                            <div className="w-full px-4 h-[180px] flex flex-col box-border">
                                <div className="flex flex-col w-full h-[180px] justify-between gap-4 pb-4">
                                    
                                    {/* Top Info: Rating + Title */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            <div className="flex items-center justify-center px-2 w-[32px] h-[24px] bg-[#F1F2F3] rounded-tl-[12px] rounded-br-[8px] rounded-bl-[12px]">
                                                <span className="font-roboto font-medium text-sm text-[#003499]">{home.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="font-roboto font-medium text-xs text-[#052461]">{home.reviewText}</span>
                                                <span className="font-roboto font-normal text-[10px] text-[#8B94A4]">{home.reviews} reviews</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <h3 className="font-roboto font-semibold text-2xl text-[#1F2226] truncate leading-8">{home.title}</h3>
                                            <p className="font-roboto font-medium text-sm text-[#2B3037] leading-[22px]">{home.location}</p>
                                        </div>
                                    </div>

                                    {/* Bottom Info: Price */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-center px-3 py-1 bg-[#049153] rounded-[16px] w-[110px] h-[30px]">
                                            <span className="font-roboto font-medium text-sm text-white">Getaway Deal</span>
                                        </div>
                                        <div className="flex justify-end items-center gap-2">
                                            <span className="font-roboto font-normal text-sm text-[#8B94A4]">per night</span>
                                            {home.priceOld && (
                                                <span className="font-roboto font-medium text-base text-[#8B94A4] line-through">€{home.priceOld}</span>
                                            )}
                                            <span className="font-roboto font-semibold text-lg text-[#1F2226]">€{home.priceNew}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}