import { hotelDetailsRegistry } from "../constants/hotelDetails";

export const getHotelDetailsById = (id) => {
    // Return the details or null if the ID doesn't exist
    return hotelDetailsRegistry[id] || null;
};