import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { chips, trendingCards } from "../data/trendingData";
import { FlowerIcon, SunIcon, LeafIcon, SnowIcon } from "../components/Icons";

const iconMap = {
  spring: <FlowerIcon />,
  summer: <SunIcon />,
  autumn: <LeafIcon />,
  winter: <SnowIcon />,
};

export default function TrendingDestinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeSeason, setActiveSeason] = useState(
    searchParams.get("season") || "spring"
  );

  useEffect(() => {
    const season = searchParams.get("season") || "spring";
    setActiveSeason(season);
  }, [searchParams]);

  const handleSeasonChange = (season) => {
    setActiveSeason(season);
    setSearchParams({ season });
  };

  return (
    <section className="w-full min-h-screen flex justify-center py-12 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        
        {/* Header */}
        <div className="w-full flex items-center">
          <h2 className="relative left-2 top-2 font-roboto font-semibold text-3xl md:text-[40px] leading-tight text-gray-900">
            Trending Destinations
          </h2>
        </div>

        {/* Chips */}
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {chips.map((chip) => (
            <button
              key={chip.value}
              onClick={() => handleSeasonChange(chip.value)}
              className={`
                /* --- Shared Structure (Auto Layout) --- */
                flex flex-row justify-center items-center
                px-4 py-3 gap-2
                h-[48px]
                border
                rounded-[24px]
                
                /* --- Typography --- */
                font-roboto font-medium text-[16px] leading-[24px]
                
                /* --- Animation --- */
                transition-colors duration-300
                
                /* --- Dynamic Styles (Active vs Inactive) --- */
                ${
                  activeSeason === chip.value
                    ? "bg-[#121316] text-white border-[#121316] min-w-[187px]" // CLICKED STATE
                    : "bg-white text-[#121316] border-[#121316] hover:bg-gray-50 min-w-[187px]" // DEFAULT STATE
                }
              `}
            >
              {/* Icon Container */}
              <span className="w-6 h-6 flex items-center justify-center">
                {iconMap[chip.value]}
              </span>
              
              {/* Text Label */}
              <span>{chip.label}</span>
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCards
            .filter((card) => card.season === activeSeason)
            .map((card) => (
              <TrendingCard key={card.id} card={card} />
            ))}
        </div>
      </div>
    </section>
  );
}

function TrendingCard({ card }) {
  return (
    <div className="group relative h-[520px] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div
        className="absolute bottom-0 left-0 w-full flex flex-col justify-end p-6 gap-2"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.3) 100%)",
          backdropFilter: "blur(11.05px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h3 className="relative left-2 font-roboto font-semibold text-[22px] text-[#F0F3F4] truncate">
          {card.title}
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="relative left-2 font-roboto font-medium text-[18px] text-[#F1F2F3]">
            From €
          </span>
          <span className="relative left-2 font-roboto font-medium text-[18px] text-[#FFCC00]">
            {card.price}
          </span>
          <span className="relative left-2 font-roboto font-medium text-[18px] text-[#FFCC00]">
            /night
          </span>
        </div>

        <p className="relative left-2 font-roboto font-normal text-[14px] leading-[20px] text-[#F0F3F4] line-clamp-2">
          {card.description}
        </p>
      </div>
    </div>
  );
}