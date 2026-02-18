import React, { useRef, useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Landmark,
  Compass,
  Ticket,
  Utensils,
  Martini,
  Umbrella,
  Film,
  Ship,
  Palette,
  Building,
  Eye,
  Sparkles,
  Trophy
} from "lucide-react";
import { supabase } from "../lib/supabaseClient";

/* 1. Dynamic category styles */
const getCategoryColor = (category) => {
  const categoryColors = {
    History: "#0F62FE",
    Culture: "#5A3FC0",
    Show: "#E11D48",
    Food: "#F97316",
    Nightlife: "#DB2777",
    Beach: "#2563EB",
    Nature: "#16A34A",
    Museum: "#1D4ED8",
    Movie: "#7C3AED",
    Adventure: "#0EA5A4",
    Landmark: "#0F62FE",
    View: "#0284C7",
    Architecture: "#334155",
    Sports: "#DC2626",
    Art: "#9333EA",
    Wellness: "#22C55E",
    Cruise: "#0891B2"
  };

  return categoryColors[category] || "#0057FF";
};

const getCategoryIcon = (category) => {
  const icons = {
    History: <Landmark size={14} />,
    Culture: <Compass size={14} />,
    Show: <Ticket size={14} />,
    Food: <Utensils size={14} />,
    Nightlife: <Martini size={14} />,
    Beach: <Umbrella size={14} />,
    Nature: <Compass size={14} />,
    Museum: <Landmark size={14} />,
    Movie: <Film size={14} />,
    Adventure: <Compass size={14} />,
    Landmark: <MapPinIcon size={14} />,
    View: <Eye size={14} />,
    Architecture: <Building size={14} />,
    Sports: <Trophy size={14} />,
    Art: <Palette size={14} />,
    Wellness: <Sparkles size={14} />,
    Cruise: <Ship size={14} />
  };
  return icons[category] || <Compass size={14} />;
};

const MapPinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const resolveActivityImageUrl = (activity) => {
  const rawUrl = activity?.image_url;
  if (!rawUrl) return "";
  if (/^https?:\/\//i.test(rawUrl)) return rawUrl;
  const { data } = supabase.storage.from("activities").getPublicUrl(rawUrl);
  return data?.publicUrl || "";
};

export default function PopularThingsToDoNearby({ activities = [] }) {
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

  if (!activities || activities.length === 0) return null;

  return (
    <section className="w-full flex flex-col justify-center items-center font-roboto bg-white py-12">
      <div className="w-full max-w-[1232px] flex flex-col gap-10 px-4 lg:px-0">
        <div className="flex flex-row justify-between items-end w-full">
          <div className="flex flex-col gap-1">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#1F2226]">
              {activities.length} Most Popular Things to Do Nearby
            </h2>
            <p className="text-sm text-[#8B94A4]">Top rated activities based on visitor reviews.</p>
          </div>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg border border-[#DDDFE3] rounded-full hidden lg:flex items-center justify-center text-[#0057FF] z-10 hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex flex-row overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {activities.map((activity) => (
              <div key={activity.id} className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start">
                <ActivityCard activity={activity} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg border border-[#DDDFE3] rounded-full hidden lg:flex items-center justify-center text-[#0057FF] z-10 hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ activity }) {
  const [imgError, setImgError] = useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=800&q=80";
  const resolvedUrl = resolveActivityImageUrl(activity);
  const imageUrl = imgError || !resolvedUrl ? fallbackImage : resolvedUrl;
  const categoryColor = getCategoryColor(activity.category);

  return (
    <div className="flex flex-col gap-4 group cursor-pointer w-full">
      <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden bg-gray-100 shadow-sm">
        <img
          src={imageUrl}
          alt={activity.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />

        {/* FROSTBITE STYLE CATEGORY PILL */}
        <div
          className={`
            absolute top-4 left-4
            inline-flex items-center justify-center gap-2
            px-3 py-2 min-h-6 min-w-25
            text-sm font-medium leading-none
            rounded-full
            bg-white/90 backdrop-blur-sm
            border
          `}
          style={{ borderColor: categoryColor }}
        >
          <span className="w-4 h-4 flex items-center justify-center" style={{ color: categoryColor }}>
            {getCategoryIcon(activity.category)}
          </span>

          <span style={{ color: categoryColor }}>
            {activity.category}
          </span>
        </div>

        {/* DISTANCE PILL */}
        <div
          className="absolute top-4 right-4 inline-flex justify-center items-center gap-2 px-3 py-2 min-h-6 min-w-25 text-sm font-medium leading-none rounded-full bg-white/90 backdrop-blur-sm border border-[#DDDFE3]"
        >
          <span className="text-[#1F2226] whitespace-nowrap">
            {activity.distance}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-[18px] font-bold text-[#1F2226] leading-tight group-hover:text-[#0057FF] transition-colors truncate">
          {activity.name}
        </h3>
        <div className="flex justify-between items-end mt-1">
          <span className="text-[14px] text-[#8B94A4]">Per Person</span>
          <div className="flex items-center gap-2">
            {activity.original_price && (
              <span className="text-[14px] text-[#8B94A4] line-through">
                ${activity.original_price}
              </span>
            )}
            <span className="text-[20px] font-bold text-[#1F2226]">
              {Number(activity.price) === 0 ? "Free" : `$${activity.price}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}