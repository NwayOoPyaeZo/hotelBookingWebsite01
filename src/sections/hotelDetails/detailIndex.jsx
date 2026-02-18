import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import DetailHeader from "./detailHeader";
import PhotoGrid from "../../components/hotel/photoGrid";
import DetailMain from "./detailMain";
import BookingSidebar from "../../components/hotel/bookingSidebar";
import DetailRoom from "./detailRooms";
import HotelPolicies from "./hotelPolicies";
import DetailReviews from "./detailReviews";
import SuggestionSection from "../suggestionSection";
import { SAMPLE_HOTELS } from "../../constants/sampleHotels";

export default function DetailIndex({ hotelId }) {
    const [hotel, setHotel] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activities, setActivities] = useState([]);
    const [similarHotels, setSimilarHotels] = useState([]);

    useEffect(() => {
        let isActive = true;
        const normalizedHotelId = Number.isNaN(Number(hotelId)) ? hotelId : Number(hotelId);

        const fetchHotel = async () => {
            setIsLoading(true);
            const { data, error } = await supabase
                .from("hotels")
                .select(
                    `
                        *,
                        hotel_images (image_url, position),
                        hotel_amenities (*),
                        hotel_policies (*),
                        rooms (
                            *,
                            room_images (image_url)
                        ),
                        hotel_reviews (*)
                    `
                )
                .eq("id", normalizedHotelId)
                .single();

            if (error) {
                console.error("❌ Fetch error:", error);
                if (isActive) {
                    setHotel(null);
                    setActivities([]);
                    setSimilarHotels([]);
                    setIsLoading(false);
                }
                return;
            }

            if (isActive) {
                console.log("✅ Fetched hotel data:", data);

                let targetCity = data?.city;
                if (!targetCity && data?.location) {
                    try {
                        const locObj = typeof data.location === "string"
                            ? JSON.parse(data.location)
                            : data.location;
                        targetCity = locObj?.city;
                    } catch (parseError) {
                        console.error("Error parsing hotel location:", parseError);
                    }
                }

                if (targetCity) {
                    // 1. Fetch Activities
                    const { data: actsData } = await supabase
                        .from("activities")
                        .select("*")
                        .eq("city", targetCity)
                        .limit(7);

                    // 2. Fetch Similar Hotels 
                    const { data: similarByCity, error: similarByCityError } = await supabase
                        .from("hotels")
                        .select("*")
                        .eq("city", targetCity)
                        .neq("id", normalizedHotelId)
                        .limit(5);

                    if (similarByCityError) {
                        console.error("❌ Similar hotels (city) fetch error:", similarByCityError);
                    }

                    let similarData = similarByCity || [];

                    if (similarData.length === 0) {
                        const { data: similarByLocation, error: similarByLocationError } = await supabase
                            .from("hotels")
                            .select("*")
                            .ilike("location", `%${targetCity}%`)
                            .neq("id", normalizedHotelId)
                            .limit(5);

                        if (similarByLocationError) {
                            console.error("❌ Similar hotels (location) fetch error:", similarByLocationError);
                        }

                        similarData = similarByLocation || [];
                    }

                    if (similarData.length === 0) {
                        similarData = SAMPLE_HOTELS.filter(
                            (candidate) => Number(candidate.hotel_id) === Number(normalizedHotelId)
                        );
                    }

                    setActivities(actsData || []);
                    setSimilarHotels(similarData);
                } else {
                    setActivities([]);
                    const fallbackSimilarHotels = SAMPLE_HOTELS.filter(
                        (candidate) => Number(candidate.hotel_id) === Number(normalizedHotelId)
                    );
                    setSimilarHotels(fallbackSimilarHotels);
                }

                // 1. Process Gallery
                const gallery = Array.isArray(data?.hotel_images)
                    ? [...data.hotel_images]
                          .sort((a, b) => (a?.position ?? 0) - (b?.position ?? 0))
                          .map((image) => image?.image_url)
                          .filter(Boolean)
                    : [];

                // 2. Process Rooms
                const roomList = Array.isArray(data?.rooms)
                    ? data.rooms.map((room) => ({
                          ...room,
                          rating: room.rating ?? data.rating ?? 5.0,
                          reviewCount: room.review_count ?? 0,
                          status: room.status ?? "Excellent",
                          view: room.view_type,
                          bedType: room.bed_type,
                          unitsLeft: room.units_left,
                          images: Array.isArray(room?.room_images)
                              ? room.room_images.map((image) => image?.image_url).filter(Boolean)
                              : []
                      }))
                    : [];

                console.log("📸 Gallery:", gallery.length, "images");
                console.log("🛏️ Rooms:", roomList.length, "rooms");

                // 3. Process Reviews
                const reviewsArray = Array.isArray(data?.hotel_reviews) ? data.hotel_reviews : [];
                console.log("📝 Total Reviews fetched:", reviewsArray.length);
                
                const avgRatings = reviewsArray.length > 0 ? {
                    amenities: reviewsArray.reduce((sum, r) => sum + (r.amenities_rating || 5.0), 0) / reviewsArray.length,
                    cleanliness: reviewsArray.reduce((sum, r) => sum + (r.cleanliness_rating || 5.0), 0) / reviewsArray.length,
                    communication: reviewsArray.reduce((sum, r) => sum + (r.communication_rating || 5.0), 0) / reviewsArray.length,
                    location: reviewsArray.reduce((sum, r) => sum + (r.location_rating || 5.0), 0) / reviewsArray.length,
                    value: reviewsArray.reduce((sum, r) => sum + (r.value_rating || r.rating || 5.0), 0) / reviewsArray.length
                } : {
                    amenities: 5.0,
                    cleanliness: 5.0,
                    communication: 5.0,
                    location: 5.0,
                    value: data.rating || 5.0
                };

                const reviews = {
                    summary: avgRatings,
                    comments: reviewsArray.map((r) => ({
                        user: r.user_name,
                        date: r.review_date,
                        text: r.comment,
                        rating: r.rating
                    }))
                };
                
                console.log("📝 Reviews object created with", reviews.comments.length, "comments");

                // 4. Reconstruct overview object
                const overview = {
                    subheading: data.subheading || "Experience luxury and comfort",
                    description: data.description || "",
                    hotelSize: {
                        rooms: data.total_rooms || 26,
                        floors: data.total_floors || 5
                    }
                };

                // 5. Add amenities and policies
                const amenities = Array.isArray(data?.hotel_amenities) && data.hotel_amenities.length > 0
                    ? {
                        preview: data.hotel_amenities
                            .filter(a => a.is_preview)
                            .map(a => ({ icon: a.icon, label: a.label })),
                        fullList: data.hotel_amenities
                            .map(a => ({ icon: a.icon, label: a.label })),
                        totalCount: data.hotel_amenities.length
                    }
                    : data.amenities || {
                        preview: [],
                        fullList: [],
                        totalCount: 0
                    };

                const policies = Array.isArray(data?.hotel_policies) && data.hotel_policies.length > 0
                    ? {
                        checkIn: data.hotel_policies[0].check_in,
                        checkOut: data.hotel_policies[0].check_out,
                        cancellation: data.hotel_policies[0].cancellation,
                        children: data.hotel_policies[0].children,
                        pets: data.hotel_policies[0].pets,
                        smoking: data.hotel_policies[0].smoking,
                        quietHours: data.hotel_policies[0].quiet_hours
                    }
                    : data.policies || {};

                setHotel({
                    ...data,
                    city: targetCity,
                    overview,
                    amenities,
                    policies,
                    gallery,
                    roomList,
                    reviews
                });
                setIsLoading(false);
            }
        };

        fetchHotel();

        return () => {
            isActive = false;
        };
    }, [hotelId]);

    if (isLoading) {
        return <div className="p-10 text-center font-roboto">Loading...</div>;
    }

    if (!hotel) {
        return <div className="p-10 text-center font-roboto">No hotel found.</div>;
    }

    return (
        <main className="flex w-full flex-col gap-y-5 items-center">
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

            {/* 4. ROOMS SECTION */}
            <section className="w-full max-w-[1232px] mx-auto px-4 lg:px-0 mt-16">
                <DetailRoom roomList={hotel?.roomList ?? []} />
            </section>

            {/* 5. POLICIES SECTION */}
            <section className="w-full max-w-[1232px] mx-auto px-4 lg:px-0 mt-16">
                <HotelPolicies policies={hotel.policies} />
            </section>

            {/* 6. REVIEWS SECTION */}
            <section className="w-full max-w-[1232px] mx-auto px-4 lg:px-0 mt-16">
                <DetailReviews reviews={hotel.reviews} />
            </section>

            {/* 7. SUGGESTIONS SECTION */}
            <SuggestionSection activities={activities} similarHotels={similarHotels} hotel={hotel} />
        </main>
    );
}