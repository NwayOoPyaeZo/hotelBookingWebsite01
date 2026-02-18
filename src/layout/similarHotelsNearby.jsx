import React, { useRef } from "react";
import {
  ChevronRight, ChevronLeft, MapPin, Wifi, Utensils, Wind,
  Waves, Dumbbell, ParkingCircle, TrainFront, Sparkles
} from "lucide-react";

const getAmenityIcon = (label) => {
  const icons = {
    "Beach Access": <Waves size={14} />,
    "Free Wi-Fi": <Wifi size={14} />,
    "Restaurant": <Utensils size={14} />,
    "Air Conditioner": <Wind size={14} />,
    "Free Parking": <ParkingCircle size={14} />,
    "Gym Access": <Dumbbell size={14} />,
    "Private Beach Area": <Waves size={14} />,
    "Easy Metro Access": <TrainFront size={14} />,
    "Spa & Wellness": <Sparkles size={14} />,
    "Indoor Pool": <Waves size={14} />
  };
  return icons[label] || <MapPin size={14} />;
};

const getFrostbiteStyle = (category) => {
  const styles = {
    default: { outer: "border-brand-subtle", inner: "bg-brand-softer", text: "text-fg-brand-strong" },
    Show: { outer: "border-danger-subtle", inner: "bg-danger-soft", text: "text-fg-danger-strong" },
    Nature: { outer: "border-success-subtle", inner: "bg-success-soft", text: "text-fg-success-strong" },
    Adventure: { outer: "border-warning-subtle", inner: "bg-warning-soft", text: "text-fg-warning" }
  };
  return styles[category] || styles.default;
};

export default function SimilarHotelsNearby({ hotels = [], city = "Barcelona" }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  if (!hotels || hotels.length === 0) return null;

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-row justify-between items-end w-full">
        <div className="flex flex-col gap-1">
          <h2 className="text-[28px] md:text-[32px] font-bold text-heading">
            Similar Hotels in {city}
          </h2>
          <p className="text-sm text-body">Properties with similar style and amenities you might like.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="w-10 h-10 flex items-center justify-center rounded-full border border-default hover:bg-neutral-primary-soft text-heading transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="w-10 h-10 flex items-center justify-center rounded-full border border-default hover:bg-neutral-primary-soft text-heading transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start">
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
}

function HotelCard({ hotel }) {
  const style = getFrostbiteStyle(hotel.category);
  const amenities = hotel.amenities || ["Free Wi-Fi", "Air Conditioner", "Restaurant"];

  return (
    <div className="flex justify-center items-center flex-col w-full h-full bg-neutral-primary-soft border border-default rounded-[32px] p-6 shadow-xs group cursor-pointer hover:shadow-md transition-all">

      {/* INNER STAGE: Component Stack */}
      <div className="flex flex-col justify-center items-center h-full gap-5">

        {/* 1. Inset Image */}
        <div className="relative aspect-[4/3] w-full rounded-t-[24px] overflow-hidden">
          <img
            src={hotel.image_url}
            alt={hotel.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="flex flex-col w-8/10 h-3/4">
          {/* 2. Content Stack */}
          <div className="flex flex-col gap-4 flex-grow">
            <div className="flex flex-col gap-1">
              <h3 className="text-[18px] font-semibold text-heading truncate group-hover:text-fg-brand transition-colors leading-tight">
                {hotel.name}
              </h3>
              <div className="flex items-center gap-1.5 text-body">
                <MapPin size={14} />
                <span className="text-[13px] font-medium truncate">{hotel.location}</span>
              </div>
            </div>

            {/* Quote Box */}
            <div className="h-10 px-4 bg-white/50 border border-default rounded-lg flex items-center">
              <span className="text-[12px] text-body truncate italic">
                "{hotel.highlight || "Travelers love the location"}"
              </span>
            </div>

            {/* Amenities */}
            <div className="flex flex-col gap-3 my-1">
              {amenities.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-body">
                  <span className="text-body/70">{getAmenityIcon(item)}</span>
                  <span className="text-[13px] font-medium leading-none">{item}</span>
                </div>
              ))}
            </div>

            {/* Rating Pill */}
            <div className="flex items-center gap-2 mt-auto pt-3">
              <div className={`h-6 w-[1.7rem] px-[1.5px] border ${style.outer} rounded-full flex items-center justify-center bg-white/40`}>
                <div className={`flex items-center justify-center px-2.5 h-[18px] ${style.inner} rounded-full`}>
                  <span className={`text-[11px] font-black ${style.text} leading-none`}>
                    {hotel.rating?.toFixed(1) || "5.0"}
                  </span>
                </div>
              </div>
              <span className="text-[13px] font-bold text-heading">{hotel.status || "Excellent"}</span>
              <span className="text-[13px] text-body font-medium">{hotel.review_count || 0} reviews</span>
            </div>

            {/* Pricing Section */}
            <div className="flex flex-col items-end gap-0.5 mt-2 border-t border-default pt-4">
              <span className="text-[12px] text-body font-medium">
                ${hotel.price_per_night || 150} nightly
              </span>
              <div className="flex items-center gap-2">
                {hotel.original_total_price && (
                  <span className="text-[14px] text-body line-through font-medium">
                    ${hotel.original_total_price}
                  </span>
                )}
                <span className="text-[20px] font-bold text-heading tracking-tight">
                  ${hotel.total_price || 450} total
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}