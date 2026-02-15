import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import * as LucideIcons from "lucide-react";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import shadowIcon from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: shadowIcon,
});

const customPin = L.divIcon({
    className: "custom-div-icon",
    html: `
        <div style="position: relative; width: 40px; height: 48px; display: flex; flex-direction: column; align-items: center;">
            <svg width="40" height="48" viewBox="0 0 78 94" fill="none" xmlns="http://www.w3.org/2000/svg" style="z-index: 2; position: relative;">
                <path d="M26.6614 38.7188C26.6614 32.0623 32.0576 26.6661 38.7141 26.6661C45.3707 26.6661 50.7669 32.0623 50.7669 38.7188C50.7669 45.3754 45.3707 50.7716 38.7141 50.7716C32.0576 50.7716 26.6614 45.3754 26.6614 38.7188Z" fill="#0057FF"/>
                <path d="M55.288 22.1491C45.9942 12.8557 31.042 12.7412 21.891 21.8923C12.7403 31.0433 12.856 45.9942 22.1493 55.2879L38.9777 72.1163L55.5463 55.5476L66.3082 66.3095L39.1428 93.4748L11.5526 65.8846C-3.68395 50.6476 -3.87353 26.1336 11.1292 11.1304L11.8391 10.4377C26.8958 -3.86383 50.8856 -3.44621 65.8847 11.5525L66.5871 12.2747C80.8927 27.3121 81.0742 50.7801 66.9994 65.5981L66.3082 66.3095L55.5463 55.5476C64.6975 46.3965 64.5819 31.443 55.288 22.1491Z" fill="#0057FF"/>
            </svg>

            <div style="position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%); z-index: 1; opacity: 0.6;">
                <svg width="20" height="8" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_675_356)">
                        <path d="M6.84445 7.69995H22.327" stroke="black" stroke-opacity="0.5" stroke-width="1.71111"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_675_356" x="0" y="0" width="30" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="3.42222" result="effect1_foregroundBlur_675_356"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    `,
    iconSize: [40, 48],
    iconAnchor: [20, 48],
});

function MapControls({ onClose, hotelName }) {
    const map = useMap();
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        const trimmedQuery = searchQuery.trim();

        if (!trimmedQuery) {
            return;
        }

        console.log("Searching for:", trimmedQuery, "from", hotelName || "hotel map");
    };

    return (
        <div className="absolute inset-0 z-[1001] pointer-events-none p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start w-full">
                <div className="flex items-center gap-2 pointer-events-auto">
                    <form
                        onSubmit={handleSearch}
                        className={`flex items-center bg-white rounded-full shadow-lg transition-all duration-300 overflow-hidden ${isSearching ? "w-64 px-4" : "w-12 px-0"}`}
                    >
                        <button
                            type="button"
                            onClick={() => setIsSearching(!isSearching)}
                            className="w-12 h-12 shrink-0 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            <LucideIcons.Search size={24} className="text-[#2B3037]" />
                        </button>
                        {isSearching && (
                            <input
                                autoFocus
                                type="text"
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                placeholder="Search location..."
                                className="flex-1 bg-transparent border-none focus:ring-0 text-[#1F2226] font-roboto py-2"
                            />
                        )}
                    </form>
                </div>

                <button
                    onClick={onClose}
                    className="pointer-events-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                >
                    <LucideIcons.X size={24} className="text-black" />
                </button>
            </div>

            <div className="flex flex-col items-end gap-3">
                <div className="pointer-events-auto flex flex-col w-12 bg-white rounded-2xl shadow-xl border border-[#DDDFE3] overflow-hidden">
                    <button
                        onClick={() => map.zoomIn()}
                        className="h-12 flex items-center justify-center hover:bg-gray-50 border-b border-[#DDDFE3]"
                    >
                        <LucideIcons.Plus size={24} className="text-[#2B3037]" />
                    </button>
                    <button
                        onClick={() => map.zoomOut()}
                        className="h-12 flex items-center justify-center hover:bg-gray-50"
                    >
                        <LucideIcons.Minus size={24} className="text-[#2B3037]" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function DetailMain({ hotel }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const previewAmenities = hotel?.amenities?.preview ?? [];
    const fullAmenities = hotel?.amenities?.fullList ?? [];
    const lat = hotel?.location?.lat ?? 0;
    const lng = hotel?.location?.lng ?? 0;
    const position = [lat, lng];

    return (
        <div className="flex flex-col gap-16 w-full max-w-[730px]">

            {/* Description Section */}
            <section className="flex flex-col gap-4 w-full max-w-[728px] font-roboto">
                <h2 className="text-[28px] font-semibold leading-[34px] text-[#1F2226]">
                    Description
                </h2>

                <div className="flex flex-col gap-2">
                    <p className="text-base leading-6 text-[#1F2226]">
                        <span className="font-bold">Hotel size</span> {hotel.overview.hotelSize.rooms} rooms, Arranged over {hotel.overview.hotelSize.floors} floors
                    </p>

                    <div className="flex flex-col gap-1">
                        <p className="text-base font-bold leading-6 text-[#1F2226]">
                            {hotel.overview.subheading}
                        </p>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-[72px]'}`}>
                            <ul className="list-none p-0 m-0">
                                <li className="flex items-start gap-3 text-base leading-6 text-[#1F2226]">

                                    <div className="h-6 flex items-center shrink-0">
                                        <span className="w-1 h-1 bg-[#1F2226] rounded-full"></span>
                                    </div>

                                    <span className={`flex-1 ${!isExpanded ? "line-clamp-3" : ""}`}>
                                        {hotel.overview.description}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 flex flex-row justify-center items-center px-4 py-2 w-[118px] h-10 bg-white border border-[#0057FF] rounded-xl transition-all hover:bg-blue-50"
                >
                    <span className="font-inter text-base font-medium text-[#0057FF]">
                        {isExpanded ? "Show Less" : "Show More"}
                    </span>
                </button>
            </section>

            {/* Amenities */}
            <section className="flex flex-col gap-4">
                <h2 className="font-roboto text-[28px] font-semibold text-[#1F2226]">Amenities</h2>
                <div className="grid grid-cols-2 gap-x-[101px] gap-y-4 max-w-[563px]">
                    {previewAmenities.map((amenity, index) => (
                        <AmenityChip
                            key={`${amenity.label}-${index}`}
                            icon={<DynamicIcon name={amenity.icon} size={24} className="text-[#2B3037]" />}
                            label={amenity.label}
                        />
                    ))}
                </div>
                {fullAmenities.length > 0 && (
                    <button
                        onClick={() => setIsAmenitiesModalOpen(true)}
                        className="w-[201px] h-10 border border-[#0057FF] text-[#0057FF] rounded-xl font-medium mt-4"
                    >
                        Show All {hotel?.amenities?.totalCount ?? fullAmenities.length} Amenities
                    </button>
                )}
            </section>

            {/* Location Section */}
            <section className="flex flex-col gap-6 w-full max-w-[730px]">
                <div className="flex flex-col gap-2">
                    <h2 className="font-roboto text-[28px] font-semibold text-[#1F2226]">
                        Location
                    </h2>
                    <p className="font-roboto text-base font-medium text-[#1F2226]">
                        {hotel?.location?.city}, {hotel?.location?.country}
                    </p>
                </div>

                {/* Clickable Map Preview */}
                <div
                    onClick={() => setIsMapModalOpen(true)}
                    className="w-full max-w-[730px] h-[260px] sm:h-[421px] rounded-[16px] overflow-hidden border border-[#DDDFE3] cursor-pointer relative group"
                >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
                    <MapContainer
                        key={`preview-${lat}-${lng}`}
                        center={position}
                        zoom={13}
                        zoomControl={false}
                        dragging={false}
                        scrollWheelZoom={false}
                        doubleClickZoom={false}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            attribution='&copy; OpenStreetMap contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={customPin} />
                    </MapContainer>
                </div>
            </section>

            {/* --- AMENITIES MODAL --- */}
            {isAmenitiesModalOpen && (
                /* 1. Modal Overlay */
                <div className="fixed inset-0 z-[2000] bg-white md:bg-black/50 md:backdrop-blur-sm md:flex md:items-center md:justify-center animate-in fade-in duration-300">

                    <div className="flex flex-col w-full h-full md:h-[600px] md:max-w-[800px] md:rounded-[32px] md:shadow-2xl bg-white overflow-hidden">

                        <div className="flex items-center justify-between px-6 py-4 md:h-24 border-b border-gray-100 shrink-0">
                            <h3 className="text-xl md:text-3xl font-semibold font-roboto text-[#1F2226]">
                                All Amenities
                            </h3>
                            <button
                                onClick={() => setIsAmenitiesModalOpen(false)}
                                className="flex items-center justify-center hover:bg-gray-100 rounded-full transition-all h-10 w-10 md:h-14 md:w-14"
                            >
                                <LucideIcons.X size={24} className="md:size-32 text-[#1F2226]" />
                            </button>
                        </div>

                        {/* 4. Content Area: Scrollable grid */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-12 no-scrollbar">
                            <div className="flex flex-col items-center w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-24 w-full max-w-[600px] md:max-w-none">
                                    {fullAmenities.map((amenity, index) => (
                                        <div
                                            key={`${amenity.label}-${index}`}
                                            className="flex flex-row items-center gap-4 md:gap-6 w-full"
                                        >
                                            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 shrink-0">
                                                <DynamicIcon
                                                    name={amenity.icon}
                                                    size={24}
                                                    strokeWidth={1.5}
                                                    className="md:size-[32px] text-[#2B3037]"
                                                />
                                            </div>

                                            <span className="font-roboto text-[#1F2226] text-base md:text-xl font-medium whitespace-nowrap">
                                                {amenity.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t border-gray-100 md:hidden shrink-0">
                            <button
                                onClick={() => setIsAmenitiesModalOpen(false)}
                                className="w-full py-4 bg-[#0057FF] text-white rounded-xl font-bold font-roboto"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* --- FULL SCREEN MAP MODAL --- */}
            {isMapModalOpen && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300">
                    <div className="relative w-full max-w-6xl h-full max-h-[850px] bg-white rounded-[24px] shadow-2xl overflow-hidden border border-[#DDDFE3]">
                        <MapContainer
                            key={`modal-${lat}-${lng}`}
                            center={position}
                            zoom={15}
                            zoomControl={false}
                            style={{ height: "100%", width: "100%" }}
                        >
                            <TileLayer
                                attribution='&copy; OpenStreetMap contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position} icon={customPin} />

                            <MapControls
                                onClose={() => setIsMapModalOpen(false)}
                                hotelName={hotel?.name}
                            />
                        </MapContainer>
                    </div>
                </div>
            )}
        </div>
    );
}

function DynamicIcon({ name, ...props }) {
    const IconComponent = LucideIcons[name] || LucideIcons.Info;
    return IconComponent ? <IconComponent {...props} /> : null;
}

function AmenityChip({ icon, label }) {
    return (
        <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-[24px] h-12 w-full border border-gray-50">
            <span className="text-[#2B3037] shrink-0">{icon}</span>
            <span className="font-roboto font-medium text-base text-[#2B3037] whitespace-nowrap">{label}</span>
        </div>
    );
}