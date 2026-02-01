import React, { useState } from 'react';

const WeekendDealCard = ({
    image,
    title,
    location,
    rating,
    reviewText,
    reviewCount,
    priceOld,
    priceNew
}) => {
    const [liked, setLiked] = useState(false);

    return (
        <article className="
            /* Auto layout & Dimensions */
            flex flex-col items-start 
            w-full sm:w-[296px] h-[440px] min-h-[432px]
            
            /* Spacing matches: gap: 16px; */
            gap-4 
            
            /* Visual Style */
            bg-white 
            border border-[#DDDFE3] 
            rounded-2xl 
            overflow-hidden 
            transition-shadow duration-200
            
            /* Hover Effect: Custom Blue Shadow */
            hover:shadow-[0px_12px_24px_rgba(0,52,153,0.15)]
            hover:border-blue-100
        ">

            {/* --- Image Section --- */}
            <div className="relative shrink-0 w-full">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-[228px] w-full object-cover"
                />

                {/* --- Favorite Button --- */}
                <button
                    aria-label="Add to favorites"
                    aria-pressed={liked}
                    onClick={() => setLiked((prev) => !prev)}
                    className={`
                        absolute top-4 right-4 flex items-center justify-center w-8 h-8 
                        bg-white rounded-full shadow-sm 
                        transition-all duration-200 cursor-pointer
                        hover:scale-110 active:scale-95
                        /* Color Logic: If liked, Red. If not, Dark Grey but Red on Hover */
                        ${liked ? 'text-red-500' : 'text-[#1F2226] hover:text-red-500'}
                    `}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={liked ? "currentColor" : "none"}
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-colors duration-200"
                    >
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            {/* --- Outer Text Container --- */}
            <div className="w-full px-4 h-[180px] flex flex-col box-border">

                {/* --- Inner Text Container --- */}
                <div className="flex flex-col w-full h-[180px] justify-between gap-4">

                    {/* Top Info: Rating + Title */}
                    <div className="relative left-4 flex flex-col gap-2">

                        {/* Rating Badge Row */}
                        <div className="flex flex-row items-center gap-[6px]">
                            <div className="flex items-center justify-center px-2 w-[32px] h-[24px] bg-[#F1F2F3] rounded-tl-[12px] rounded-br-[8px] rounded-bl-[12px]">
                                <span className="font-roboto font-medium text-sm text-[#003499]">
                                    {rating}
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="font-roboto font-medium text-xs text-[#052461]">
                                    {reviewText}
                                </span>
                                <span className="font-roboto font-normal text-[10px] text-[#8B94A4]">
                                    {reviewCount} reviews
                                </span>
                            </div>
                        </div>

                        {/* Title & Location */}
                        <div className="flex flex-col gap-1.5">
                            <h3 title={title} className="font-roboto font-semibold text-2xl text-[#1F2226] truncate leading-8">
                                {title}
                            </h3>
                            <p className="font-roboto font-medium text-sm text-[#2B3037] leading-[22px]">
                                {location}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Info: Deal Badge + Price */}
                    <div className="flex flex-col gap-4">

                        {/* Getaway Deal Badge */}
                        <div className="relative left-4 flex items-center justify-center px-3 py-1 bg-[#049153] rounded-[16px] w-[110px] h-[30px]">
                            <span className="font-roboto font-medium text-sm text-white">
                                Getaway Deal
                            </span>
                        </div>

                        {/* Price Row */}
                        <div className="relative right-4 bottom-2 flex justify-end items-center gap-2">
                            <span className="font-roboto font-normal text-sm text-[#8B94A4]">
                                per night
                            </span>
                            <span className="font-roboto font-medium text-base text-[#8B94A4] line-through">
                                €{priceOld}
                            </span>
                            <span className="font-roboto font-semibold text-lg text-[#1F2226]">
                                €{priceNew}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
};

export default WeekendDealCard;