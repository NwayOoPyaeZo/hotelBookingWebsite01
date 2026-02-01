import React, { useRef } from 'react';
import WeekendDealCard from '../components/WeekendDealCard';

const dealsData = [
    {
        id: 1,
        title: "Seaside Serenity Villa",
        location: "Amalfi Coast, Italy",
        rating: 4.0,
        reviewText: "Very Good",
        reviews: 160,
        priceOld: 250,
        priceNew: 175,
        imageUrl: "/assets/images/weeklyDealCard/AmalfiCoast.jpg"
    },
    {
        id: 2,
        title: "Mountain Retreat",
        location: "Swiss Alps, Switzerland",
        rating: 4.8,
        reviewText: "Excellent",
        reviews: 210,
        priceOld: 400,
        priceNew: 299,
        imageUrl: "/assets/images/weeklyDealCard/SwissAlps.jpg"
    },
    {
        id: 3,
        title: "Ocean View Hotel",
        location: "Malé, Maldives",
        rating: 4.5,
        reviewText: "Great",
        reviews: 85,
        priceOld: 550,
        priceNew: 420,
        imageUrl: "/assets/images/weeklyDealCard/Maldives.jpg"
    },
    {
        id: 4,
        title: "Sunset Cliff Suite",
        location: "Santorini, Greece",
        rating: 4.7,
        reviewText: "Excellent",
        reviews: 185,
        priceOld: 450,
        priceNew: 320,
        imageUrl: "/assets/images/weeklyDealCard/Santorini.jpg"
    },
    {
        id: 5,
        title: "Desert Oasis",
        location: "Dubai, UAE",
        rating: 4.9,
        reviewText: "Exceptional",
        reviews: 320,
        priceOld: 600,
        priceNew: 450,
        imageUrl: "/assets/images/weeklyDealCard/Dubai.jpg"
    }
];

const WeekendDeals = () => {
    const sliderRef = useRef(null);

    // Scroll Handler
    const slide = (direction) => {
        if (sliderRef.current) {
            const { current } = sliderRef;
            const scrollAmount = 320;

            if (direction === 'left') {
                current.scrollLeft -= scrollAmount;
            } else {
                current.scrollLeft += scrollAmount;
            }
        }
    };

    // Navigation Button Classes
    const navBtnClass = `
        flex items-center justify-center w-10 h-10 
        bg-white rounded-full shadow-sm 
        border border-[#DDDFE3] text-[#B5BAC2]
        transition-all duration-200 
        hover:border-[#2B3037] hover:text-[#2B3037] hover:bg-gray-50
        active:scale-95
    `;

    return (
        <section className="flex flex-col justify-center items-center gap-12 py-12 px-5 bg-[#F1F2F3] w-full min-h-[800px]">

            {/* Hide scrollbar utility styles */}
            <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

            {/* --- Header Section --- */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1232px] gap-6 lg:gap-0">
                <h2 className="font-roboto font-semibold text-[32px] md:text-[40px] leading-[42px] md:leading-[52px] text-[#121316] text-center lg:text-left">
                    Deals for the Weekend
                </h2>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={() => slide('left')}
                        className={navBtnClass}
                        aria-label="Scroll left"
                    >
            
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={() => slide('right')}
                        className={navBtnClass}
                        aria-label="Scroll right"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* --- Product Slider --- */}
            <div
                ref={sliderRef}
                className="
          flex flex-row flex-nowrap 
          overflow-x-auto scroll-smooth no-scrollbar 
          gap-4 w-full max-w-[1232px] 
          px-2 pb-4
          items-start
        "
            >
                {dealsData.map((deal) => (
                    <div key={deal.id} className="shrink-0">
                        <WeekendDealCard
                            image={deal.imageUrl}
                            title={deal.title}
                            location={deal.location}
                            rating={deal.rating}
                            reviewText={deal.reviewText}
                            reviewCount={deal.reviews}
                            priceOld={deal.priceOld}
                            priceNew={deal.priceNew}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeekendDeals;