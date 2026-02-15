import React, { useState } from "react";
import RoomCard from "../../components/hotel/roomCard";
import { roomDetailsRegistry } from "../../constants/roomDetails";

export default function DetailRooms({ hotelId }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const rooms = roomDetailsRegistry[hotelId] || [];

  const filters = [
    { key: "all", label: "All Rooms" },
    { key: 1, label: "1 Bed" },
    { key: 2, label: "2 Beds" },
    { key: 3, label: "3 Beds" },
  ];

  const filteredRooms =
    activeFilter === "all"
      ? rooms
      : rooms.filter((room) => Number(room.beds) === Number(activeFilter));

  return (
    <section className="flex flex-col items-start gap-[29px] w-full max-w-[1234px] font-roboto mt-16">
      <h2 className="text-[28px] font-semibold leading-[34px] text-black">
        Rooms
      </h2>

      {/* Chips Container */}
      <div className="flex flex-row items-center gap-4 h-12">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`h-full w-[7rem] rounded-[24px] border transition-all duration-300 ${
              activeFilter === filter.key
                ? "bg-[#121316] text-white border-[#121316]"
                : "bg-white text-[#121316] border-[#121316] hover:bg-gray-50"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Room List Container */}
      <div className="flex flex-col gap-8 w-full">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div key={room.id} className="w-full h-[300px] flex items-center justify-center">
              <RoomCard room={room} />
            </div>
          ))
        ) : (
          <div className="w-full py-32 text-center border-2 border-dashed border-[#DDDFE3] rounded-2xl">
            <p className="text-[#8B94A4] text-lg font-medium font-roboto">
              No rooms matching this filter are currently available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}