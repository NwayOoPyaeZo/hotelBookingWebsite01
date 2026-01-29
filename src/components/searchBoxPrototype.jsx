import { useState } from "react";
import { Minus, Plus, Search, X, MapPin, Calendar } from "lucide-react";

export default function SearchBoxPrototype() {
    // --- SHARED STATE ---
    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [rooms, setRooms] = useState(0);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [pets, setPets] = useState(0);

    // --- DESKTOP SPECIFIC STATE ---
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isGuestOpen, setIsGuestOpen] = useState(false);

    // --- MOBILE SPECIFIC STATE ---
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [mobileStep, setMobileStep] = useState(0); // 0: Where, 1: When, 2: Who

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
        setIsMobileSearchOpen(false);
    };

    // YOUR ORIGINAL COUNTER (KEPT FOR DESKTOP)
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

    // NEW CLEAN COUNTER (FOR MOBILE)
    const MobileCounter = ({ value, setValue, min = 0 }) => (
        <div className="flex items-center gap-4">
            <button
                type="button"
                onClick={() => setValue(value - 1)}
                disabled={value <= min}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-30 text-gray-500"
            >
                <Minus className="w-4 h-4" />
            </button>
            <span className="w-6 text-center font-medium">{value}</span>
            <button
                type="button"
                onClick={() => setValue(value + 1)}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500"
            >
                <Plus className="w-4 h-4" />
            </button>
        </div>
    );

    return (
        <>
            {/* ===========================================================================
                DESKTOP VERSION
               =========================================================================== */}
            <div className="hidden lg:block">
                <section className="lg:absolute left-1/2 -translate-x-1/2 lg:top-[520px] lg:w-[1146px] z-50">
                    <div className="flex items-center gap-4 h-[154px] bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.15)] px-6 relative z-10">

                        {/* Location Section */}
                        {/* Added dynamic z-50 here so the dropdown floats above the Dates section */}
                        <div className={`relative lg:left-2 flex flex-col justify-center gap-1 w-[280px] h-[72px] px-4 rounded-xl hover:bg-[#E8EFFC] ${isLocationOpen ? 'z-50' : 'z-auto'}`}>
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
                                <div className="absolute top-[80px] left-0 w-[360px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-4 z-[100]">
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

                        {/* Dates Section */}
                        <div className="flex items-center w-[273px] h-[74px] bg-white rounded-xl relative z-10">
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

                        {/* Rooms & Guests Section */}
                        {/* Added dynamic z-50 here so the dropdown floats above the Search Button */}
                        <div
                            onClick={() => setIsGuestOpen(true)}
                            className={`relative flex flex-col justify-center gap-1 w-[360px] h-[72px] px-4 rounded-xl hover:bg-[#E8EFFC] cursor-pointer ${isGuestOpen ? 'z-50' : 'z-auto'}`}
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
                                    className="absolute flex flex-col lg:top-[80px] left-0 lg:w-[360px] h-[350px] bg-white rounded-3xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] z-[100] overflow-y-auto p-4"
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
                            className="relative lg:right-1 lg:w-[135px] h-[56px] px-10 bg-[#0057FF] rounded-xl text-white text-[20px] font-medium hover:opacity-90 hover:bg-[#013fba] z-10"
                        >
                            Search
                        </button>
                    </div>
                </section>
            </div>


            {/* ===========================================================================
                MOBILE VERSION
               =========================================================================== */}

            {/* 1. The Mobile Trigger */}
            <div className={`lg:hidden px-4 py-4 w-full ${isMobileSearchOpen ? 'hidden' : 'block'}`}>
                <div
                    onClick={() => setIsMobileSearchOpen(true)}
                    className="bg-white rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.1)] border border-gray-100 h-[56px] flex items-center justify-center px-4 gap-4 cursor-pointer"
                >
                    <Search className="w-5 h-5 text-[#2B3037]" />
                    <div className="flex flex-col">
                        <span className="text-[14px] font-semibold text-[#2B3037] flex items-center gap-1">
                            {location || "Search for homes"}
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. The Mobile Full-Screen Modal */}
            {isMobileSearchOpen && (
                <div className="lg:hidden h-full fixed inset-0 bg-[#F7F7F9] z-[100] flex flex-col">

                    {/* Modal Header */}
                    <div className="px-4 py-4 flex items-center justify-between bg-white border-b border-gray-100">
                        <button onClick={() => setIsMobileSearchOpen(false)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
                            <X className="w-5 h-5 text-gray-800" />
                        </button>
                        <div className="flex gap-4">
                            <span className="font-semibold text-[16px] underline decoration-[#0057FF] decoration-2 underline-offset-8 text-gray-900">Stays</span>
                        </div>
                        <div className="w-8" />
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

                        {/* --- Card 1: Where --- */}
                        <div className={`bg-white rounded-2xl p-5 shadow-sm transition-all duration-300 ${mobileStep === 0 ? 'ring-2 ring-black z-50' : 'z-auto'}`}>
                            <div className="flex justify-between items-center" onClick={() => setMobileStep(0)}>
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Where to?</span>
                                {mobileStep !== 0 && location && <span className="font-medium text-sm text-gray-800">{location}</span>}
                            </div>

                            {mobileStep === 0 && (
                                <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="bg-white border border-gray-300 rounded-lg flex items-center px-4 py-3 mb-4 focus-within:ring-2 focus-within:ring-black">
                                        <Search className="w-4 h-4 text-gray-800 mr-3" />
                                        <input
                                            autoFocus
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            placeholder="Search destinations"
                                            className="bg-transparent outline-none w-full text-sm font-medium text-gray-800 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                            {suggestedDestinations.map(dest => (
                                                <button
                                                    key={dest}
                                                    onClick={() => setLocation(dest)}
                                                    className="flex-shrink-0 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm hover:border-black transition-colors"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-3 h-3 text-gray-500" /> {dest}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* --- Card 2: When --- */}
                        <div className={`bg-white rounded-2xl p-5 shadow-sm transition-all duration-300 ${mobileStep === 1 ? 'ring-2 ring-black z-50' : 'z-auto'}`}>
                            <div className="flex justify-between items-center" onClick={() => setMobileStep(1)}>
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">When</span>
                                {mobileStep !== 1 && <span className="font-medium text-sm text-gray-800">{checkIn ? "Dates selected" : "Add dates"}</span>}
                            </div>

                            {mobileStep === 1 && (
                                <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {/* Placeholder for Date Picker */}
                                    <div className="w-full h-[320px] bg-white rounded-xl flex flex-col items-center justify-center text-gray-400">
                                        <Calendar className="w-10 h-10 mb-3 text-gray-300" />
                                        <span className="text-sm font-medium text-gray-500">Calendar View</span>
                                        <div className="mt-4 flex gap-2">
                                            <input
                                                type="date"
                                                className="border p-2 rounded-lg text-sm"
                                                onChange={(e) => setCheckIn(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* --- Card 3: Who --- */}
                        <div className={`bg-white rounded-2xl p-5 shadow-sm transition-all duration-300 ${mobileStep === 2 ? 'ring-2 ring-black z-50' : 'z-auto'}`}>
                            <div className="flex justify-between items-center" onClick={() => setMobileStep(2)}>
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Who</span>
                                {mobileStep !== 2 && <span className="font-medium text-sm text-gray-800">{(adults + children) > 0 ? `${adults + children} guests` : "Add guests"}</span>}
                            </div>

                            {mobileStep === 2 && (
                                <div className="mt-4 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-medium text-base text-gray-800">Adults</p>
                                            <p className="text-sm text-gray-500">Ages 13 or above</p>
                                        </div>
                                        <MobileCounter value={adults} setValue={setAdults} min={1} />
                                    </div>
                                    <div className="w-full h-px bg-gray-100" />
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-medium text-base text-gray-800">Children</p>
                                            <p className="text-sm text-gray-500">Ages 2–12</p>
                                        </div>
                                        <MobileCounter value={children} setValue={setChildren} />
                                    </div>
                                    <div className="w-full h-px bg-gray-100" />
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-medium text-base text-gray-800">Pets</p>
                                            <p className="text-sm text-gray-500">Service animals</p>
                                        </div>
                                        <MobileCounter value={pets} setValue={setPets} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="bg-white border-t border-gray-100 p-4 pb-6">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => {
                                    setAdults(0); setChildren(0); setPets(0); setLocation(""); setRooms(0); setCheckIn("");
                                }}
                                className="text-sm font-semibold underline text-gray-800"
                            >
                                Clear all
                            </button>

                            <button
                                onClick={handleSearch}
                                className="bg-[#0057FF] hover:bg-[#0046cc] text-white px-6 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-md"
                            >
                                <Search className="w-5 h-5" />
                                Search
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}