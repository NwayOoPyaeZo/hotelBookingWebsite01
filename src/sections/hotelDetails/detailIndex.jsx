import { useEffect, useState } from "react";
import { homesData } from "../../constants/homeData";
import { getHotelDetailsById } from "../../services/hotelService";
import DetailHeader from "./detailHeader";
import PhotoGrid from "../../components/hotel/photoGrid";
import DetailMain from "./detailMain";
import BookingSidebar from "../../components/hotel/bookingSidebar";
import DetailRoom from "./detailRooms";

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
        <main className="flex w-full flex-col items-center">
            {/* 1. Header & Navigation */}
            <DetailHeader hotel={hotel} />                   

            {/* 2. Photo Gallery Section */}
            <div className="w-full max-w-[1232px] mx-auto mt-8 px-4 lg:px-0">
                <PhotoGrid gallery={hotel.gallery} hotelName={hotel.name} />
            </div>

            {/* 3. TWO-COLUMN LAYOUT SECTION */}
            <section className="w-full max-w-[1232px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[104px] items-start relative px-4 lg:px-0 mt-12 lg:mt-16">
                <aside className="w-full lg:w-[400px] lg:sticky lg:top-24 order-first lg:order-last">
                    <BookingSidebar hotel={hotel} />
                </aside>

                {/* Left Column: Handled by DetailMain */}
                <div className="w-full lg:max-w-[730px]">
                    <DetailMain hotel={hotel} />
                </div>
            </section>

            {/* 4. ROOMS SECTION (FULL WIDTH) */}
            <section className="w-full max-w-[1232px] mx-auto px-4 lg:px-0 mt-16">
                <DetailRoom hotelId={hotelId} />
            </section>
        </main>
    );
}