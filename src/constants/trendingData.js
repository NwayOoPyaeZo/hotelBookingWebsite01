import { imagePath } from "../lib/image";

export const chips = [
  { label: "Spring Picks", value: "spring" },
  { label: "Summer Hotspot", value: "summer" },
  { label: "Autumn Escapes", value: "autumn" },
  { label: "Winter Getaways", value: "winter" },
];

export const trendingCards = [
  // spring cards
  {
    id: 1,
    season: "spring",
    image: imagePath("card/paris.jpg"),
    title: "Paris, France",
    price: 128,
    description: "Gardens, art, and cafe culture.",
  },
  {
    id: 2,
    season: "spring",
    image: imagePath("card/florence.jpg"),
    title: "Florence, Italy",
    price: 110,
    description: "Tuscan hills, and Renaissance charm.",
  },
  {
    id: 3,
    season: "spring",
    image: imagePath("card/amsterdam.webp"),
    title: "Amsterdam, Netherlands",
    price: 95,
    description: "Tulips and canal cruises.",
  },
  {
    id: 4,
    season: "spring",
    image: imagePath("card/washington.jpg"),
    title: "Washington D.C., USA",
    price: 105,
    description: "Cherry blossoms and museums.",
  },

  // Summer cards
  {
    id: 5,
    season: "summer",
    image: imagePath("card/barcelona.jpg"),
    title: "Barcelona, Spain",
    price: 140,
    description: "Beaches, tapas, nightlife.",
  },
  {
    id: 6,
    season: "summer",
    image: imagePath("card/santorini.jpg"),
    title: "Santorini, Greece",
    price: 180,
    description: "Whitewashed views and sunsets.",
  },
  {
    id: 7,
    season: "summer",
    image: imagePath("card/bali.jpg"),
    title: "Bali, Indonesia",
    price: 90,
    description: "Tropical shores and rice terraces.",
  },
  {
    id: 8,
    season: "summer",
    image: imagePath("card/miami.jpg"),
    title: "Miami, USA",
    price: 135,
    description: "Art deco, beaches, nightlife.",
  },

  // Autumn cards
  {
    id: 9,
    season: "autumn",
    image: imagePath("card/munich.jpg"),
    title: "Munich, Germany",
    price: 120,
    description: "Oktoberfest and golden foliage.",
  },
  {
    id: 10,
    season: "autumn",
    image: imagePath("card/kyoto.jpg"),
    title: "Kyoto, Japan",
    price: 115,
    description: "Maple leaves and serene gardens.",
  },
  {
    id: 11,
    season: "autumn",
    image: imagePath("card/seoul.jpg"),
    title: "Seoul, South Korea",
    price: 160,
    description: "Palaces and autumn colors.",
  },
  {
    id: 12,
    season: "autumn",
    image: imagePath("card/prague.jpg"),
    title: "Prague, Czechia",
    price: 100,
    description: "Golden leaves, and riverside walks.",
  },

  // Winter cards
  {
    id: 13,
    season: "winter",
    image: imagePath("card/zermatt.jpg"),
    title: "Zermatt, Switzerland",
    price: 200,
    description: "Alpine chalets, ski slopes, and snowy peaks.",
  },
  {
    id: 14,
    season: "winter",
    image: imagePath("card/banff.jpg"),
    title: "Banff, Canada",
    price: 150,
    description: "Frozen lakes, and mountain trails.",
  },
  {
    id: 15,
    season: "winter",
    image: imagePath("card/vienna.jpg"),
    title: "Vienna, Austria",
    price: 130,
    description: "Festive streets, and cozy charm.",
  },
  {
    id: 16,
    season: "winter",
    image: imagePath("card/oslo.jpg"),
    title: "Oslo, Norway",
    price: 125,
    description: "Snowy lodges, northern lights, and warm cafes.",
  },
];
