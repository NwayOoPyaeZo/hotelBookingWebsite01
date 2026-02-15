import React, { useState } from "react";
import {
  Bed,
  Users,
  Coffee,
  Wifi,
  Eye,
  Maximize,
  Ban,
  Wind,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function RoomCard({ room }) {
  const [imgIndex, setImgIndex] = useState(0);
  const isAvailable = room.pricing.available;

  const nextImg = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    /* OUTER CARD: Playing strictly with fixed height and gap */
    <div className={`flex flex-col md:flex-row items-center justify-center w-full h-auto md:h-[263px] bg-white border border-[#DDDFE3] rounded-xl transition-all duration-300 ${!isAvailable ? "opacity-60 grayscale-[0.5]" : "hover:shadow-md"}`}>

      {/* 1. IMAGE SLIDER SECTION - Using fixed dimensions to create "gap space" */}
      <div className="relative w-full md:w-[32%] aspect-[16/10] md:h-[247px] shrink-0 rounded-lg overflow-hidden group">
        <img
          src={room.images[imgIndex]}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={prevImg} className="w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full"><ChevronLeft size={18} /></button>
          <button onClick={nextImg} className="w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full"><ChevronRight size={18} /></button>
        </div>
      </div>

      {/* 2. MIDDLE INFO SECTION - height is smaller than parent to create top/bottom spacing */}
      <div className="flex-1 md:flex-[2] w-full md:h-[247px] flex flex-col justify-between self-center">
        
        {/* Header Row */}
        <div className="flex justify-between items-start w-[95%] self-center">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-black font-roboto">{room.name}</h3>
              {room.unitsLeft > 0 && (
                <span className="text-sm text-[#FF3B3B] font-roboto">{room.unitsLeft} rooms Left</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end leading-tight">
              <span className="text-[12px] font-bold text-[#0046CC] uppercase font-roboto">Excellent</span>
              <span className="text-[10px] text-[#8B94A4] font-roboto">{room.reviewCount} reviews</span>
            </div>
            <div className="w-8 h-8 bg-[#F1F2F3] flex items-center justify-center rounded-tr-[12px] rounded-br-[12px] rounded-bl-[8px] text-[14px] font-bold text-[#0046CC]">
              {room.rating.toFixed(1)}
            </div>
          </div>
        </div>

        {/* Icons Row - Uses gap for spacing */}
        <div className="flex gap-12 self-center w-[95%]">
          <div className="flex flex-col items-center">
             <div className="flex gap-1 mb-1">
                <Bed size={22} className="text-[#2B3037]" />
                {room.beds > 1 && <Bed size={22} className="text-[#2B3037]" />}
             </div>
             <span className="text-sm font-medium text-[#121316] font-roboto">{room.bedType}</span>
          </div>
          <div className="flex flex-col items-center">
             <div className="flex gap-1 mb-1">
                <Users size={22} className="text-[#2B3037]" />
             </div>
             <span className="text-sm font-medium text-[#121316] font-roboto">{room.guests} Persons</span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="flex flex-col gap-2 self-center w-[95%]">
          <span className="text-[14px] font-medium text-[#454C58] font-roboto uppercase">Details</span>
          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            <DetailItem icon={<Coffee size={14} />} label="Breakfast" />
            <DetailItem icon={<Wifi size={14} />} label="Free Wifi" />
            <DetailItem icon={<Eye size={14} />} label={room.view} />
            <DetailItem icon={<Maximize size={14} />} label={room.size} />
            <DetailItem icon={<Ban size={14} />} label="No Smoking" />
            <DetailItem icon={<Wind size={14} />} label="Air Conditioner" />
          </div>
        </div>

        {/* Bottom details button */}
        <div className="flex justify-end w-[95%] self-center">
          <button className="flex items-center gap-1.5 text-[#0057FF] text-base font-medium font-roboto">
            More details <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* 3. VERTICAL DIVIDER  */}
      <div className="hidden md:block w-[1px] h-[169px] bg-[#DDDFE3] shrink-0" />

      {/* 4. PRICING SECTION  */}
      <div className="w-full md:w-[180px] md:h-[247px] flex flex-col justify-between items-center self-center pr-2">
        
        <div className="flex-1 flex flex-col justify-center items-end w-full">
          {!isAvailable ? (
            <span className="text-sm text-[#383E48] font-roboto">Not Available</span>
          ) : (
            <div className="flex flex-col items-end text-right">
              {room.pricing.discountPercent > 0 && (
                <div className="flex flex-col items-end gap-1 mb-2">
                  <span className="bg-[#CDF8E5] text-[#06C270] text-[12px] font-bold px-3 py-1 rounded-full">
                    {room.pricing.discountPercent}% off
                  </span>
                  <span className="text-[#8B94A4] line-through text-[16px]">${room.pricing.original}</span>
                </div>
              )}
              <span className="text-[32px] font-bold text-black">${room.pricing.discounted}</span>
              <span className="text-[16px] text-[#383E48]">x 5 night</span>
              <div className="text-[16px] text-[#383E48] font-medium mt-1">Total Price : ${room.pricing.discounted * 5}</div>
            </div>
          )}
        </div>

        <button
          disabled={!isAvailable}
          className={`w-5/6 h-[48px] text-white font-bold rounded-xl transition-all ${isAvailable
            ? "bg-[#0057FF]"
            : "bg-[#F1F2F3] text-[#B5BAC2]"
          }`}
        >
          Reserve
        </button>
      </div>
    </div>
  );
}

function DetailItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-[#1F2226]">
      <span className="text-[#2B3037] shrink-0">{icon}</span>
      <span className="text-[13px] font-normal truncate">{label}</span>
    </div>
  );
}