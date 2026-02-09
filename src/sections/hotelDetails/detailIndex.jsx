import { useEffect, useState } from "react";
import { homesData } from "../../constants/homeData";
import { getHotelDetailsById } from "../../services/hotelService";
import DetailHeader from "./detailHeader";
import PhotoGrid from "../../components/hotel/photoGrid";
import DetailMain from "./detailMain";
import BookingSidebar from "../../components/hotel/bookingSidebar";

export default function DetailIndex({ hotelId }) {
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        const details = getHotelDetailsById(hotelId);
        const summary = homesData.find((home) => String(home.id) === String(hotelId));

        if (!details || !summary) {
            setHotel(null);
            return;
        }

        const locationParts = summary?.location?.split(",") || [];
        const location = {
            city: locationParts[0]?.trim() || details.location?.city || "",
            country: locationParts[1]?.trim() || details.location?.country || "",
            lat: details.location?.lat,
            lng: details.location?.lng
        };

        setHotel({
            ...details,
            name: summary?.title ?? details.name,
            price: summary?.priceNew ?? details.price,
            location,
            gallery: details.gallery || []
        });
    }, [hotelId]);

    if (!hotel) return <div className="p-10 text-center font-roboto">Loading...</div>;

    return (
        <main className="flex flex-col items-center">
            {/* 1. Header & Navigation */}
            <DetailHeader hotel={hotel} />                   

            {/* 2. Photo Gallery Section - NOW CENTERED */}
            <div className="max-w-[1232px] mx-auto mt-8 mb-12 px-4 lg:px-0">
                <PhotoGrid gallery={hotel.gallery} hotelName={hotel.name} />
            </div>

            {/* 3. TWO-COLUMN LAYOUT SECTION */}
            <section className="max-w-[1232px] mx-auto flex flex-col lg:flex-row gap-[104px] items-start relative px-4 lg:px-0">
                
                {/* Left Column: Handled by DetailMain (730px) */}
                <DetailMain hotel={hotel} />

                {/* Right Column: Sticky Sidebar (400px) */}
                <aside className="hidden lg:block w-[400px] sticky top-24 self-start">
                    <BookingSidebar hotel={hotel} />
                </aside>
                
            </section>
        </main>
    );
}