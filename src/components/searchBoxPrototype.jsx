import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function SearchBoxPrototype() {
    // Counter component for guest/room selection
    const Counter = ({ value, setValue, min = 0 }) => (
        <div className="flex relative right-10 items-center gap-3">
            <button
                type="button"
                onClick={() => setValue(value - 1)}
                disabled={value <= min}
                className="w-6 h-6 flex items-center justify-center rounded-full border disabled:opacity-30 p-0 leading-none"
            >
                <Minus className="w-4 h-4" />
            </button>
            <span className="w-4 text-center">{value}</span>
            <button
                type="button"
                onClick={() => setValue(value + 1)}
                className="w-6 h-6 flex items-center justify-center text-[#0057FF] rounded-full border p-0 leading-none"
            >
                <Plus className="w-4 h-4" />
            </button>
        </div>
    );

    // Search box states
    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [rooms, setRooms] = useState(0);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [pets, setPets] = useState(0);

    // Dropdown states
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isGuestOpen, setIsGuestOpen] = useState(false);

    const recentSearches = ["Bangkok", "Chiang Mai", "Phuket"];
    const suggestedDestinations = [
        "Tokyo",
        "Seoul",
        "Singapore",
        "Paris",
        "London",
    ];

    const handleSearch = () => {
        const payload = {
            location,
            checkIn,
            checkOut,
            rooms,
            adults,
            children,
        };
        console.log("SEARCH PAYLOAD:", payload);
    };

    return (
        <section className="absolute left-1/2 -translate-x-1/2 top-[520px] w-[1146px]">
            <div className="flex items-center gap-4 h-[154px] bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.15)] px-6">

                {/* Location */}
                <div className="relative lg:left-2 flex flex-col justify-center gap-1 w-[280px] h-[72px] px-4 rounded-xl hover:bg-[#E8EFFC]">
                    <span className="relative lg:left-8 text-[18px] font-medium text-[#2B3037]">Location</span>
                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onFocus={() => setIsLocationOpen(true)}
                        placeholder="Where are you going?"
                        className="relative lg:left-8 text-[16px] text-[#656F81] outline-none bg-transparent"
                    />
                    {/* Location dropdown */}
                    {isLocationOpen && (
                        <div className="relative lg:top-10 mt-2 w-[360px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-4 z-50">
                            {/* Recent Searches */}
                            <div className="mb-4">
                                <p className="text-[14px] font-medium text-[#2B3037] mb-2">
                                    Recent searches
                                </p>
                                <ul className="space-y-1">
                                    {recentSearches.map((item) => (
                                        <li
                                            key={item}
                                            onClick={() => {
                                                setLocation(item);
                                                setIsLocationOpen(false);
                                            }}
                                            className="cursor-pointer px-3 py-2 rounded-lg text-[16px] text-[#383E48] hover:bg-[#E8EFFC]"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Suggested Destinations */}
                            <div>
                                <p className="text-[14px] font-medium text-[#2B3037] mb-2">
                                    Suggested destinations
                                </p>
                                <ul className="space-y-1">
                                    {suggestedDestinations.map((item) => (
                                        <li
                                            key={item}
                                            onClick={() => {
                                                setLocation(item);
                                                setIsLocationOpen(false);
                                            }}
                                            className="cursor-pointer px-3 py-2 rounded-lg text-[16px] text-[#383E48] hover:bg-[#E8EFFC]"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-px h-10 bg-[#DDDFE3]" />

                {/* Dates */}
                <div className="flex items-center w-[273px] h-[74px] bg-white rounded-xl">
                    {/* Check in */}
                    <div className="flex flex-col items-center justify-center px-4 w-[130px] h-[72px] rounded-xl hover:bg-[#E8EFFC]">
                        <span className="text-[18px] font-medium text-[#2B3037]">Check in</span>
                        <span className="text-[16px] text-[#656F81]">Add dates</span>
                    </div>

                    <div className="w-px h-12 bg-[#DDDFE3]" />

                    {/* Check out */}
                    <div className="flex flex-col items-center justify-center px-4 w-[130px] h-[72px] rounded-xl hover:bg-[#E8EFFC]">
                        <span className="text-[18px] font-medium text-[#2B3037]">Check out</span>
                        <span className="text-[16px] text-[#656F81]">Add dates</span>
                    </div>
                </div>

                <div className="w-px h-10 bg-[#DDDFE3]" />

                {/* Rooms & Guests */}
                <div
                    onClick={() => setIsGuestOpen(true)}
                    className="relative flex flex-col justify-center gap-1 w-[360px] h-[72px] px-4 rounded-xl hover:bg-[#E8EFFC] cursor-pointer"
                >
                    <span className="relative lg:left-8 text-[18px] font-medium">Rooms and Guests</span>
                    <div className="relative lg:left-8 flex items-center justify-between text-[16px]">
                                                <span>
                                                    {(adults + children + pets) === 0
                                                        ? "Add rooms"
                                                        : `${rooms > 0 ? `${rooms} room${rooms > 1 ? "s" : ""} · ` : ""}${adults + children} guest${adults + children > 1 ? "s" : ""}${pets > 0 ? ` · ${pets} pet${pets > 1 ? "s" : ""}` : ""}`}
                                                </span>
                        {(rooms !== 0 || adults !== 0 || children !== 0 || pets !== 0) && (
                            <button
                                onClick={e => {
                                    e.stopPropagation();
                                    setRooms(0);
                                    setAdults(0);
                                    setChildren(0);
                                    setPets(0);
                                    setIsGuestOpen(false);
                                }}
                                className="relative lg:right-10 w-6 h-6 flex items-center justify-center rounded-full text-[#656F81] hover:bg-[#E8EFFC]"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    {/* Guest dropdown */}
                    {isGuestOpen && (
                        <div
                            className="absolute flex flex-col lg:top-[120px] lg:w-[360px] h-[350px] bg-white rounded-3xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] z-50 overflow-y-auto p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-full lg:h-[50px] flex justify-end ">
                                <button
                                    onClick={() => setIsGuestOpen(false)}
                                    className="relative lg:right-5 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#E8EFFC] self-end mb-2"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="flex flex-col flex-1 justify-between">
                                {/* Adults */}
                                <div className="flex w-full items-center py-3">
                                    <div className="flex-1 relative left-6">
                                        <p className="font-medium">Adults</p>
                                        <p className="text-sm text-[#656F81]">Age 17+</p>
                                    </div>
                                    <Counter value={adults} setValue={v => setAdults(Math.max(1, v))} min={1} />
                                </div>
                                {/* Children */}
                                <div className="flex w-full items-center py-3">
                                    <div className="flex-1 relative left-6">
                                        <p className="font-medium">Children</p>
                                        <p className="text-sm text-[#656F81]">Age 0–17</p>
                                    </div>
                                    <Counter
                                        value={children}
                                        setValue={v => {
                                            if (v > children && adults === 0) {
                                                setAdults(1);
                                            }
                                            setChildren(Math.max(0, v));
                                        }}
                                        min={0}
                                    />
                                </div>
                                {/* Pets */}
                                <div className="flex w-full justify-around items-center py-3">
                                    <div className="flex-1 relative left-6">
                                        <p className="font-medium">Pets</p>
                                    </div>
                                    <Counter
                                        value={pets}
                                        setValue={v => {
                                            if (v > pets && adults === 0) {
                                                setAdults(1);
                                            }
                                            setPets(Math.max(0, v));
                                        }}
                                        min={0}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row lg:h-[100px] justify-end items-center mt-4">
                                <button
                                    onClick={() => {
                                        setRooms(prev => prev + 1);
                                        setIsGuestOpen(false);
                                    }}
                                    className="relative lg:w-[130px] lg:h-[40px] lg:right-5 py-2 px-5 rounded-xl border border-[#0057FF] font-medium text-[#0057FF] mr-2 mb-1"
                                >
                                    + Add room
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="relative lg:right-1 lg:w-[135px] h-[56px] px-10 bg-[#0057FF] rounded-xl text-white text-[20px] font-medium hover:opacity-90 hover:bg-[#013fba]"
                >
                    Search
                </button>
            </div>
        </section>
    );
}
