import React, { useRef } from 'react';
import WeekendDealCard from '../components/WeekendDealCard';
import { weekendDeals } from '../data/weekendData';

const WeekendDeals = () => {
    const sliderRef = useRef(null);

    const slide = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 340;
            sliderRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    };

    const navBtnClass = "flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm border border-[#DDDFE3] text-[#B5BAC2] transition-all duration-200 hover:border-[#2B3037] hover:text-[#2B3037] active:scale-95";

    return (
        <section className="flex flex-col items-center gap-12 py-12 px-5 bg-[#F1F2F3] w-full">

            {/* --- Header Section --- */}
                        <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1232px] gap-6">
                                <h2 className="font-roboto font-semibold text-[32px] md:text-[40px] text-[#121316]">
                    Deals for the Weekend
                </h2>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={() => slide('left')}
                        className={navBtnClass}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={() => slide('right')}
                        className={navBtnClass}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* --- Product Slider --- */}
            <div
                ref={sliderRef}
                className="flex flex-row overflow-x-auto scroll-smooth no-scrollbar gap-4 w-full max-w-[1232px] px-2 pb-4"
            >
                {weekendDeals.map((deal) => (
                    <div key={deal.id} className="shrink-0">
                        <WeekendDealCard
                            image={deal.imageUrl}
                            {...deal}
                            reviewCount={deal.reviews}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeekendDeals;