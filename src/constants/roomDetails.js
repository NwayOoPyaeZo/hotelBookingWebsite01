export const roomDetailsRegistry = {
    // 1: Aparthotel Stare Miasto
    1: [
        {
            id: "stare-miasto-superior-twin",
            name: "Superior Twin Room",
            beds: 2,
            bedType: "2 Single bed",
            guests: 2,
            size: "30 m²",
            view: "Old Town View",
            rating: 5.0,
            reviewCount: 1350,
            status: "Excellent",
            unitsLeft: 2, 
            features: { breakfast: true, wifi: true, smoking: false, airConditioner: true },
            images: [
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600"
            ],
            pricing: { original: 350, discounted: 290, discountPercent: 10, available: true }
        },
        {
            id: "stare-miasto-suite",
            name: "Suite",
            beds: 2,
            bedType: "2 Double bed",
            guests: 4,
            size: "45 m²",
            view: "City View",
            rating: 5.0,
            reviewCount: 1250,
            status: "Excellent",
            unitsLeft: null, 
            features: { breakfast: true, wifi: true, smoking: false, airConditioner: true },
            images: [
                "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=600",
                "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600"
            ],
            pricing: { original: 460, discounted: 460, discountPercent: 0, available: true }
        },
        {
            id: "stare-miasto-spacious",
            name: "Spacious Room",
            beds: 1,
            bedType: "1 King bed",
            guests: 2,
            size: "40 m²",
            view: "Sea View",
            rating: 5.0,
            reviewCount: 1360,
            status: "Excellent",
            unitsLeft: 1,
            features: { breakfast: true, wifi: true, smoking: false, airConditioner: true },
            images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600"],
            pricing: { original: 380, discounted: 300, discountPercent: 10, available: true }
        },
        {
            id: "stare-miasto-deluxe",
            name: "Deluxe Double Room",
            beds: 2,
            bedType: "2 Double bed",
            guests: 2,
            size: "30 m²",
            view: "Sea View",
            rating: 5.0,
            reviewCount: 1350,
            status: "Excellent",
            unitsLeft: 0,
            features: { breakfast: true, wifi: true, smoking: false, airConditioner: true },
            images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600"],
            pricing: { original: 0, discounted: 0, discountPercent: 0, available: false }
        }
    ],

    // 2: 7Seasons Apartments
    2: [
        {
            id: "7seasons-deluxe",
            name: "Deluxe Apartment",
            beds: 1,
            bedType: "1 Queen bed",
            guests: 3,
            size: "35 m²",
            view: "City view",
            rating: 4.8,
            reviewCount: 920,
            status: "Excellent",
            unitsLeft: 3,
            features: { breakfast: true, wifi: true, smoking: false, airConditioner: true },
            images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600"],
            pricing: { original: 190, discounted: 165, discountPercent: 12, available: true }
        },
        {
            id: "7seasons-family",
            name: "Family Suite",
            beds: 2,
            bedType: "1 Double, 2 Single",
            guests: 4,
            size: "52 m²",
            view: "Courtyard view",
            rating: 4.9,
            reviewCount: 450,
            status: "Exceptional",
            unitsLeft: 0,
            features: { breakfast: true, wifi: true, smoking: false, airConditioner: true },
            images: ["https://images.unsplash.com/photo-1501183317491-3de19b01e93f?q=80&w=600"],
            pricing: { original: 220, discounted: 220, discountPercent: 0, available: false }
        }
    ],

    // 3: Cheval Three Quays
    3: [
        {
            id: "cheval-deluxe",
            name: "Deluxe Suite",
            beds: 1,
            bedType: "1 King bed",
            guests: 2,
            size: "48 m²",
            view: "Thames view",
            rating: 5.0,
            reviewCount: 2100,
            status: "Exceptional",
            unitsLeft: null,
            features: { breakfast: true, wifi: true, smoking: false, airConditioner: true },
            images: ["https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=600"],
            pricing: { original: 560, discounted: 520, discountPercent: 8, available: true }
        },
        {
            id: "cheval-family",
            name: "Executive Family Suite",
            beds: 3,
            bedType: "2 King beds, 1 Sofa",
            guests: 4,
            size: "68 m²",
            view: "Tower view",
            rating: 5.0,
            reviewCount: 1200,
            status: "Exceptional",
            unitsLeft: 2,
            features: { breakfast: true, wifi: true, smoking: false, airConditioner: true },
            images: ["https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600"],
            pricing: { original: 640, discounted: 640, discountPercent: 0, available: true }
        }
    ],

    // 4: Sugar Loft Apartments (House/Single Unit)
    4: [
        {
            id: "sugar-loft-entire",
            name: "Entire Loft Studio",
            beds: 1,
            bedType: "1 Queen bed",
            guests: 3,
            size: "34 m²",
            view: "Garden & Pool view",
            rating: 4.6,
            reviewCount: 540,
            status: "Excellent",
            unitsLeft: 1, // Only 1 house available
            features: { breakfast: false, wifi: true, smoking: true, airConditioner: true },
            images: ["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=600"],
            pricing: { original: 120, discounted: 102, discountPercent: 15, available: true }
        }
    ],

    // 5: Villa Domina
    5: [
        {
            id: "villa-domina-classic",
            name: "Classic Double",
            beds: 1,
            bedType: "1 Queen bed",
            guests: 2,
            size: "22 m²",
            view: "Old Town view",
            rating: 4.8,
            reviewCount: 670,
            status: "Excellent",
            unitsLeft: 4,
            features: { breakfast: true, wifi: true, smoking: false, airConditioner: true },
            images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600"],
            pricing: { original: 260, discounted: 230, discountPercent: 12, available: true }
        },
        {
            id: "villa-domina-suite",
            name: "Harbor Suite",
            beds: 2,
            bedType: "1 King, 1 Sofa bed",
            guests: 3,
            size: "38 m²",
            view: "Harbor view",
            rating: 4.9,
            reviewCount: 310,
            status: "Exceptional",
            unitsLeft: 1,
            features: { breakfast: true, wifi: true, smoking: false, airConditioner: true },
            images: ["https://images.unsplash.com/photo-1464890100898-a385f744067f?q=80&w=600"],
            pricing: { original: 280, discounted: 255, discountPercent: 10, available: true }
        }
    ],

    // 6: Kyoto Machiya Stay (House/Single Unit)
    6: [
        {
            id: "machiya-entire-house",
            name: "Entire Traditional Townhouse",
            beds: 3, // Multi-bed single unit
            bedType: "3 Traditional Futons",
            guests: 4,
            size: "54 m²",
            view: "Private Zen Garden",
            rating: 4.9,
            reviewCount: 280,
            status: "Exceptional",
            unitsLeft: 1,
            features: { breakfast: false, wifi: true, smoking: false, airConditioner: true },
            images: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600"],
            pricing: { original: 410, discounted: 380, discountPercent: 8, available: true }
        }
    ]
};