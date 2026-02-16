import { createClient } from "@supabase/supabase-js";
import fs from "node:fs/promises";
import { hotelDetailsRegistry } from "../src/constants/hotelDetails.js";
import { roomDetailsRegistry } from "../src/constants/roomDetails.js";

const envFiles = [
  new URL("../.env.local", import.meta.url),
  new URL("../.env", import.meta.url)
];

const loadEnvFile = async (envUrl) => {
  try {
    const content = await fs.readFile(envUrl, "utf8");
    const lines = content.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }
      const eqIndex = trimmed.indexOf("=");
      if (eqIndex === -1) {
        continue;
      }
      const key = trimmed.slice(0, eqIndex).trim();
      let value = trimmed.slice(eqIndex + 1).trim();
      if (
        (value.startsWith("\"") && value.endsWith("\"")) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch (error) {
    if (error?.code !== "ENOENT") {
      console.warn("Failed to read env file:", envUrl.pathname, error);
    }
  }
};

const loadEnv = async () => {
  for (const envUrl of envFiles) {
    await loadEnvFile(envUrl);
  }
};

const buildHotelName = (details, hotelId) => {
  const propertyType = details?.propertyType ?? "Hotel";
  const city = details?.location?.city ?? "";
  const composed = `${propertyType} ${city}`.trim();
  return composed || `Hotel ${hotelId}`;
};

const createSupabaseClient = () => {
  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error(
      "Missing SUPABASE_URL (or VITE_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY in your environment."
    );
    process.exit(1);
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false }
  });
};

async function seed() {
  await loadEnv();
  const supabase = createSupabaseClient();

  console.log("Starting database seed...");

  for (const [hotelId, details] of Object.entries(hotelDetailsRegistry)) {
    const hotelIdValue = Number(hotelId);
    const normalizedHotelId = Number.isNaN(hotelIdValue) ? hotelId : hotelIdValue;

    console.log(`Processing hotel ${hotelId}...`);

    const { data: hotel, error: hotelError } = await supabase
      .from("hotels")
      .upsert(
        {
          id: normalizedHotelId,
          name: buildHotelName(details, hotelId),
          location: details.location,
          description: details?.overview?.description ?? null,
          rating: details?.reviews?.summary?.value ?? null,
          subheading: details?.overview?.subheading ?? null,
          total_rooms: details?.overview?.hotelSize?.rooms ?? null,
          total_floors: details?.overview?.hotelSize?.floors ?? null
        },
        { onConflict: "id" }
      )
      .select()
      .single();

    if (hotelError || !hotel) {
      console.error(
        `Error inserting hotel ${hotelId}:`,
        hotelError?.message ?? "No data returned"
      );
      continue;
    }

    const imageInserts = Array.isArray(details?.gallery)
      ? details.gallery
          .filter(Boolean)
          .map((url, index) => ({
            hotel_id: hotel.id,
            image_url: url,
            position: index
          }))
      : [];

    if (imageInserts.length > 0) {
      const { error: imageError } = await supabase
        .from("hotel_images")
        .insert(imageInserts);

      if (imageError) {
        console.error(
          `Error inserting hotel images for ${hotelId}:`,
          imageError.message
        );
      }
    }

    // 5. Insert Individual Reviews
    const reviewComments = details?.reviews?.comments || [];
    const reviewSummary = details?.reviews?.summary || {};

    if (reviewComments.length > 0) {
      console.log(`Seeding ${reviewComments.length} reviews for hotel ${hotelId}...`);
      
      const reviewInserts = reviewComments.map((comment) => ({
        hotel_id: hotel.id,
        user_name: comment.user,
        user_image: comment.userImage || null,
        rating: reviewSummary.value || 5.0,
        comment: comment.text,
        review_date: new Date(comment.date || Date.now()).toISOString().split('T')[0],
        cleanliness_rating: reviewSummary.cleanliness || 5.0,
        location_rating: reviewSummary.location || 5.0,
        amenities_rating: reviewSummary.amenities || 5.0,
        communication_rating: reviewSummary.communication || 5.0,
        value_rating: reviewSummary.value || 5.0
      }));

      const { error: reviewError } = await supabase
        .from("hotel_reviews")
        .insert(reviewInserts);

      if (reviewError) {
        console.error(
          `Error inserting reviews for ${hotelId}:`,
          reviewError.message
        );
      }
    }

    // 6. Insert Hotel Amenities
    const fullAmenities = details?.amenities?.fullList || [];
    const previewAmenities = details?.amenities?.preview || [];

    if (fullAmenities.length > 0) {
      console.log(`Seeding ${fullAmenities.length} amenities for hotel ${hotelId}...`);
      
      const amenityInserts = fullAmenities.map((amenity) => ({
        hotel_id: hotel.id,
        icon: amenity.icon,
        label: amenity.label,
        is_preview: previewAmenities.some(p => p.label === amenity.label)
      }));

      const { error: amenityError } = await supabase
        .from("hotel_amenities")
        .insert(amenityInserts);

      if (amenityError) {
        console.error(
          `Error inserting amenities for ${hotelId}:`,
          amenityError.message
        );
      }
    }

    // 7. Insert Hotel Policies
    if (details.policies) {
      console.log(`Seeding policies for hotel ${hotelId}...`);
      
      const { error: policyError } = await supabase
        .from("hotel_policies")
        .insert({
          hotel_id: hotel.id,
          check_in: details.policies.checkIn,
          check_out: details.policies.checkOut,
          cancellation: details.policies.cancellation,
          children: details.policies.children,
          pets: details.policies.pets,
          smoking: details.policies.smoking,
          quiet_hours: details.policies.quietHours
        });

      if (policyError) {
        console.error(
          `Error inserting policies for ${hotelId}:`,
          policyError.message
        );
      }
    }

    const roomsFromRegistry = roomDetailsRegistry[hotelId] || [];

    for (const roomRecord of roomsFromRegistry) {
      const { data: room, error: roomError } = await supabase
        .from("rooms")
        .insert({
          hotel_id: hotel.id,
          name: roomRecord.name,
          beds: roomRecord.beds,
          bed_type: roomRecord.bedType,
          guests: roomRecord.guests,
          size: roomRecord.size,
          view_type: roomRecord.view,
          units_left: roomRecord.unitsLeft,
          pricing: roomRecord.pricing,
          features: roomRecord.features,
          rating: roomRecord.rating,
          review_count: roomRecord.reviewCount,
          status: roomRecord.status
        })
        .select()
        .single();

      if (roomError || !room) {
        console.error(
          `Error inserting room ${roomRecord.id}:`,
          roomError?.message ?? "No data returned"
        );
        continue;
      }

      const roomImageInserts = Array.isArray(roomRecord?.images)
        ? roomRecord.images
            .filter(Boolean)
            .map((url) => ({
              room_id: room.id,
              image_url: url
            }))
        : [];

      if (roomImageInserts.length > 0) {
        const { error: roomImageError } = await supabase
          .from("room_images")
          .insert(roomImageInserts);

        if (roomImageError) {
          console.error(
            `Error inserting room images for ${roomRecord.id}:`,
            roomImageError.message
          );
        }
      }
    }
  }

  console.log("Seeding complete.");
}

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
