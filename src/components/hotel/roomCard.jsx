import React, { useState } from "react";
import {
  Bed, Users, Coffee, Wifi, Eye, Maximize, Ban, Wind, ChevronLeft, ChevronRight
} from "lucide-react";

export default function RoomCard({ room }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const isAvailable = room.pricing.available;

  const nextImg = (e) => {
    if (e?.stopPropagation) e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImg = (e) => {
    if (e?.stopPropagation) e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.targetTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      nextImg();
      setTouchStart(null);
    } else if (distance < -50) {
      prevImg();
      setTouchStart(null);
    }
  };

  return (
    /* OUTER CARD (The Frame): Centers the content perfectly */
    <div className={`flex flex-col md:flex-row items-center justify-center w-full h-auto md:h-[280px] bg-white border border-[#DDDFE3] rounded-2xl transition-all duration-300 ${!isAvailable ? "opacity-60 grayscale-[0.5]" : "hover:shadow-md"}`}>

      {/* INNER STAGE: Sized at 96% width and 90% height for that floating inset look */}
      <div className="w-[96%] h-full md:h-[90%] flex flex-col md:flex-row items-center gap-6 py-4 md:py-0">

        {/* 1. IMAGE SLIDER SECTION */}
        <div
          className="relative w-full md:w-[30%] h-[200px] md:h-full shrink-0 rounded-xl overflow-hidden group touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <img
            src={room.images[imgIndex]}
            alt={room.name}
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
            <button onClick={prevImg} className="w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/70"><ChevronLeft size={18} /></button>
            <button onClick={nextImg} className="w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/70"><ChevronRight size={18} /></button>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 md:hidden">
            {room.images.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === imgIndex ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
        </div>

        {/* 2. MIDDLE INFO SECTION */}
        <div className="flex-1 h-full flex flex-col justify-between py-1">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-[#1F2226] font-roboto">{room.name}</h3>
                {room.unitsLeft > 0 && (
                  <span className="text-sm text-[#FF3B3B] font-medium font-roboto bg-[#FFF2F2] px-2 py-0.5 rounded-md">
                    {room.unitsLeft} rooms left
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex flex-col items-end leading-tight">
                <span className="text-[12px] font-bold text-[#0046CC] uppercase">{room.status ?? "Excellent"}</span>
                <span className="text-[10px] text-[#8B94A4]">{room.reviewCount ?? 0} reviews</span>
              </div>
              <div className="w-10 h-10 bg-[#F1F2F3] flex items-center justify-center rounded-xl text-[16px] font-bold text-[#0046CC]">
                {room.rating?.toFixed(1) ?? "5.0"}
              </div>
            </div>
          </div>

          {/* Icons Row */}
          <div className="flex gap-10">
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-1">
                <Bed size={20} className="text-[#2B3037]" />
                {room.beds > 1 && <Bed size={20} className="text-[#2B3037]" />}
              </div>
              <span className="text-sm font-medium text-[#121316]">{room.bedType}</span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <Users size={20} className="text-[#2B3037]" />
              <span className="text-sm font-medium text-[#121316]">{room.guests} Persons</span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-[#8B94A4] uppercase tracking-wider">Details</span>
            <div className="grid grid-cols-3 gap-x-4 gap-y-1">
              <DetailItem icon={<Coffee size={14} />} label="Breakfast" />
              <DetailItem icon={<Wifi size={14} />} label="Free Wifi" />
              <DetailItem icon={<Eye size={14} />} label={room.view} />
              <DetailItem icon={<Maximize size={14} />} label={room.size} />
              <DetailItem icon={<Ban size={14} />} label="No Smoking" />
              <DetailItem icon={<Wind size={14} />} label="Air Con" />
            </div>
          </div>

          <button className="flex items-center gap-1 text-[#0057FF] text-sm font-bold hover:underline">
            More details <ChevronRight size={16} />
          </button>
        </div>

        {/* 3. VERTICAL DIVIDER */}
        <div className="hidden md:block w-[1px] h-[70%] bg-[#DDDFE3]" />

        {/* 4. PRICING SECTION */}
        <div className="w-full md:w-[180px] h-full flex flex-col justify-between items-center py-1">
          <div className="flex-1 flex flex-col justify-center items-end w-full">
            {!isAvailable ? (
              <span className="text-sm font-bold text-[#8B94A4]">Sold Out</span>
            ) : (
              <div className="flex flex-col items-end text-right">
                {room.pricing.discountPercent > 0 && (
                  <>
                    <span className="bg-[#CDF8E5] text-[#06C270] text-[12px] font-bold px-3 py-1 rounded-full mb-1">
                      {room.pricing.discountPercent}% off
                    </span>
                    <span className="text-[#8B94A4] line-through text-sm">${room.pricing.original}</span>
                  </>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-[#1F2226]">${room.pricing.discounted}</span>
                  <span className="text-xs text-[#8B94A4] font-medium">/night</span>
                </div>
                <div className="text-[11px] text-[#454C58] font-bold mt-2 uppercase tracking-tighter">
                  Total (5 nights): ${room.pricing.discounted * 5}
                </div>
              </div>
            )}
          </div>

          <button
            disabled={!isAvailable}
            className={`w-full h-12 text-white font-bold rounded-xl transition-all ${isAvailable
                ? "bg-[#0057FF] hover:bg-[#0046CC] shadow-lg shadow-blue-100"
                : "bg-[#F1F2F3] text-[#B5BAC2] cursor-not-allowed"
              }`}
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-[#454C58]">
      <span className="text-[#2B3037] shrink-0">{icon}</span>
      <span className="text-[13px] font-medium truncate">{label}</span>
    </div>
  );
}