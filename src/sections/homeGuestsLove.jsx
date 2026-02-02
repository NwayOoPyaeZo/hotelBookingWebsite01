import React, { useRef } from 'react';
import WeekendDealCard from '../components/WeekendDealCard';

// Data for "Homes Guests Love" - High ratings, no discounts
const homesData = [
    {
        id: 1,
        title: "Aparthotel Stare Miasto",
        location: "Krakow, Poland",
        rating: 4.8,
        reviewText: "Exceptional",
        reviews: 2450,
        priceOld: null, 
        priceNew: 120,
        imageUrl: "/assets/images/GuestLove/AparthotelStareMiasto.jpg"
    },
    {
        id: 2,
        title: "7Seasons Apartments",
        location: "Budapest, Hungary",
        rating: 4.7,
        reviewText: "Excellent",
        reviews: 1800,
        priceOld: null,
        priceNew: 145,
        imageUrl: "/assets/images/GuestLove/7SeasonsApartments.jpg"
    },
    {
        id: 3,
        title: "Cheval Three Quays",
        location: "London, UK",
        rating: 4.9,
        reviewText: "Superb",
        reviews: 3200,
        priceOld: null,
        priceNew: 450,
        imageUrl: "/assets/images/GuestLove/ChevalThreeQuays.jpg"
    },
    {
        id: 4,
        title: "Sugar Loft Apartments",
        location: "Rio de Janeiro, Brazil",
        rating: 4.6,
        reviewText: "Very Good",
        reviews: 950,
        priceOld: null,
        priceNew: 85,
        imageUrl: "/assets/images/GuestLove/SugarLoftApartments.jpg"
    },
    {
        id: 5,
        title: "Villa Domina",
        location: "Split, Croatia",
        rating: 4.8,
        reviewText: "Exceptional",
        reviews: 1100,
        priceOld: null,
        priceNew: 210,
        imageUrl: "/assets/images/GuestLove/VillaDomina.jpg"
    },
    {
        id: 6,
        title: "Kyoto Machiya Stay",
        location: "Kyoto, Japan",
        rating: 4.9,
        reviewText: "Superb",
        reviews: 850,
        priceOld: null,
        priceNew: 300,
        imageUrl: "/assets/images/GuestLove/KyotoMachiyaStay.jpg"
    }
];

const HomeGuestsLove = () => {
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
        <section className="flex flex-col justify-center items-center gap-12 py-12 px-5 bg-white w-full min-h-[600px]">

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
                    Homes Guests Love
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
                {homesData.map((home) => (
                    <div key={home.id} className="shrink-0">
                        <WeekendDealCard
                            image={home.imageUrl}
                            title={home.title}
                            location={home.location}
                            rating={home.rating}
                            reviewText={home.reviewText}
                            reviewCount={home.reviews}
                            priceOld={home.priceOld}
                            priceNew={home.priceNew}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeGuestsLove;