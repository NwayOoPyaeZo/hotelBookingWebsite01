import { imagePath } from "../lib/image";

export const hotelDetailsRegistry = {
    1: {
        overview: {
            hotelSize: {
                rooms: 26,
                floors: 5
            },
            subheading: "Barcelonia elegance with 6-star service",
            description:
                "Aparthotel Stare Miasto is situated in the very heart of Krakow's Old Town, just 120 metres from the Main Market Square. It features uniquely designed apartments with free WiFi and air conditioning. Simply elegant in all respects, this beautiful property offers a wonderful location that enhances your stay. Enjoy spacious rooms with great amenities and 6-star service from a superb team dedicated to making you feel like a VIP. The Peninsula Spa has 8 treatment rooms including couples treatment rooms. The palace's spa offers hot stone massages and treatments such as aromatherapy. Other on-site facilities include a steam room and a sauna. Pets stay for free (dogs and cats only, 1 total, up to 5 kg per pet). Special check-in instructions: Front desk staff will greet guests on arrival at the property."
        },
        location: {
            city: "Krakow",
            country: "Poland",
            lat: 50.0647,
            lng: 19.9450
        },
        amenities: {
            preview: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Utensils", label: "Kitchenette" },
                { icon: "Dumbbell", label: "Gym" },
                { icon: "Waves", label: "Pool" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" }
            ],
            fullList: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Utensils", label: "Kitchenette" },
                { icon: "Dumbbell", label: "Gym" },
                { icon: "Waves", label: "Pool" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" },
                { icon: "Car", label: "Private Parking" },
                { icon: "Wind", label: "Air Conditioning" },
                { icon: "ShieldCheck", label: "24h Security" },
                { icon: "Coffee", label: "Coffee Machine" }
            ],
            totalCount: 10
        },
        gallery: [
            imagePath("guest-love/aparthotel-stare-miasto.jpg"),
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=600&q=80"
        ],
        policies: {
            checkIn: "Check-in from 14:00",
            checkOut: "Check-out by 11:00",
            cancellation: "Free cancellation within 48 hours of booking.",
            children: "Children of all ages are welcome.",
            smoking: "Non-smoking property.",
            pets: "Pets are not allowed.",
            quietHours: "Quiet hours after 22:00."
        },
        rooms: [
            {
                id: "stare-miasto-studio",
                name: "Old Town Studio",
                guests: 2,
                size: "28 m²",
                view: "City view",
                features: ["Kitchenette", "Private bathroom", "Air conditioning"],
                pricing: {
                    pricePerNight: 140,
                    original: 160,
                    discounted: 120
                },
                availability: { available: true }
            },
            {
                id: "stare-miasto-suite",
                name: "Main Square Suite",
                guests: 4,
                size: "45 m²",
                view: "Old Town view",
                features: ["Separate living area", "Kitchenette", "Balcony"],
                pricing: {
                    pricePerNight: 210,
                    original: 195,
                    discounted: 195
                },
                availability: { available: true }
            }
        ],
        reviews: {
            summary: {
                value: 4.8,
                cleanliness: 4.9,
                location: 5.0,
                amenities: 4.7,
                communication: 4.8
            },
            comments: [
                {
                    user: "Marta",
                    date: "Jan 2026",
                    text: "Perfect location, spotless room, and very helpful staff."
                },
                {
                    user: "Lucas",
                    date: "Dec 2025",
                    text: "Cozy suite with a great view of the square."
                }
            ]
        },
        nearby: [
            { type: "Landmark", distance: "0.2 km" },
            { type: "Restaurant", distance: "0.3 km" },
            { type: "Transit", distance: "0.5 km" },
            { type: "Shopping", distance: "0.8 km" }
        ]
    },
    2: {
        overview: {
            hotelSize: {
                rooms: 34,
                floors: 7
            },
            subheading: "Modern urban living with premium wellness",
            description:
                "7Seasons Apartments offers modern apartments in the heart of Budapest, only steps away from the main transport hub of Deak Ferenc Square. The property features a 24-hour reception and a private garden area for guests to relax. Each unit is equipped with a full kitchen and premium bedding to ensure a comfortable stay. Simply elegant in all respects, this beautiful property offers a wonderful location that enhances your stay. Our wellness corner includes a small sauna and massage room available by appointment. Pets are welcome for an additional fee per night. Please note that the property is entirely non-smoking. Special instructions: Guests arriving after 10 PM should contact the property 24 hours in advance to receive access codes."
        },
        location: {
            city: "Budapest",
            country: "Hungary",
            lat: 47.4979,
            lng: 19.0402
        },
        amenities: {
            preview: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Car", label: "Airport Shuttle" },
                { icon: "Dumbbell", label: "Gym" },
                { icon: "Waves", label: "Pool" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" }
            ],
            fullList: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Car", label: "Airport Shuttle" },
                { icon: "Dumbbell", label: "Gym" },
                { icon: "Waves", label: "Pool" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" },
                { icon: "Coffee", label: "Breakfast Included" },
                { icon: "Wind", label: "Climate Control" },
                { icon: "Tv", label: "Smart TV" },
                { icon: "Briefcase", label: "Workspace" },
                { icon: "Languages", label: "Multilingual Staff" },
                { icon: "Key", label: "Digital Entry" }
            ],
            totalCount: 12
        },
        gallery: [
            imagePath("guest-love/7-seasons-apartments.jpg"),
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1502672023488-70e25813efdf?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1493200066229-3796d39b503f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1536376074432-8d2a3ff17360?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1501183317491-3de19b01e93f?auto=format&fit=crop&w=600&q=80"
        ],
        policies: {
            checkIn: "Check-in from 15:00",
            checkOut: "Check-out by 11:00",
            cancellation: "Free cancellation up to 24 hours before arrival.",
            children: "Children are welcome with extra bedding on request.",
            smoking: "Non-smoking property.",
            pets: "Pets are not allowed.",
            quietHours: "Quiet hours after 23:00."
        },
        rooms: [
            {
                id: "7seasons-deluxe",
                name: "Deluxe Apartment",
                guests: 3,
                size: "35 m²",
                view: "City view",
                features: ["Kitchenette", "Washer", "Soundproof"],
                pricing: {
                    pricePerNight: 165,
                    original: 190,
                    discounted: 145
                },
                availability: { available: true }
            },
            {
                id: "7seasons-family",
                name: "Family Suite",
                guests: 4,
                size: "52 m²",
                view: "Courtyard view",
                features: ["Two bedrooms", "Full kitchen", "Sofa bed"],
                pricing: {
                    pricePerNight: 220,
                    original: 220,
                    discounted: 205
                },
                availability: { available: false }
            }
        ],
        reviews: {
            summary: {
                value: 4.7,
                cleanliness: 4.6,
                location: 4.9,
                amenities: 4.6,
                communication: 4.8
            },
            comments: [
                {
                    user: "Anna",
                    date: "Jan 2026",
                    text: "Excellent location and super comfortable beds."
                },
                {
                    user: "David",
                    date: "Nov 2025",
                    text: "Easy check-in and great value for the center."
                }
            ]
        },
        nearby: [
            { type: "Transit", distance: "0.1 km" },
            { type: "Restaurant", distance: "0.4 km" },
            { type: "Landmark", distance: "0.6 km" },
            { type: "Shopping", distance: "1.0 km" }
        ]
    },
    3: {
        overview: {
            hotelSize: {
                rooms: 45,
                floors: 9
            },
            subheading: "Riverside luxury with Tower Bridge views",
            description:
                "Cheval Three Quays delivers riverside luxury suites beside the Tower of London, with spacious layouts and concierge service. Each apartment features floor-to-ceiling windows with stunning views of the Thames and Tower Bridge. Simply elegant in all respects, this beautiful property offers a wonderful location that enhances your stay. The onsite Fitness Center is open 24/7 with state-of-the-art equipment. The private lounge offers afternoon tea and light refreshments for residents. Service animals are welcome and stay for free. The property uses advanced air-filtration systems for guest comfort. Special check-in instructions: A valid government-issued photo ID and a credit card for incidental charges are required at check-in."
        },
        location: {
            city: "London",
            country: "United Kingdom",
            lat: 51.5086,
            lng: -0.0805
        },
        amenities: {
            preview: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Dumbbell", label: "Fitness room" },
                { icon: "Shield", label: "24h Security" },
                { icon: "Coffee", label: "Breakfast" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" }
            ],
            fullList: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Dumbbell", label: "Fitness Room" },
                { icon: "Shield", label: "24h Security" },
                { icon: "Coffee", label: "Breakfast" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" },
                { icon: "ConciergeBell", label: "24h Concierge" },
                { icon: "Waves", label: "Riverside Pool" },
                { icon: "Wine", label: "Mini Bar" },
                { icon: "Shirt", label: "Dry Cleaning" },
                { icon: "Zap", label: "EV Charging" },
                { icon: "Baby", label: "Babysitting" },
                { icon: "Laptop", label: "Business Center" },
                { icon: "Vault", label: "In-room Safe" },
                { icon: "Microwave", label: "Full Kitchen" }
            ],
            totalCount: 15
        },
        gallery: [
            imagePath("guest-love/cheval-three-quays.jpg"),
            "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600607687940-4e230369a12c?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80"
        ],
        policies: {
            checkIn: "Check-in from 15:00",
            checkOut: "Check-out by 11:00",
            cancellation: "Free cancellation up to 48 hours before arrival.",
            children: "Children are welcome with complimentary breakfast.",
            smoking: "Non-smoking property.",
            pets: "Pets allowed on request.",
            quietHours: "Quiet hours after 22:00."
        },
        rooms: [
            {
                id: "cheval-deluxe",
                name: "Deluxe Suite",
                guests: 2,
                size: "48 m²",
                view: "Thames view",
                features: ["Kitchenette", "Concierge service", "Soundproof"],
                pricing: {
                    pricePerNight: 520,
                    original: 560,
                    discounted: 450
                },
                availability: { available: true }
            },
            {
                id: "cheval-family",
                name: "Executive Family Suite",
                guests: 4,
                size: "68 m²",
                view: "Tower view",
                features: ["Two bedrooms", "Full kitchen", "Lounge area"],
                pricing: {
                    pricePerNight: 640,
                    original: 640,
                    discounted: 590
                },
                availability: { available: true }
            }
        ],
        reviews: {
            summary: {
                value: 4.9,
                cleanliness: 5.0,
                location: 4.9,
                amenities: 4.8,
                communication: 4.9
            },
            comments: [
                {
                    user: "Charlotte",
                    date: "Feb 2026",
                    text: "Outstanding service and immaculate suites."
                },
                {
                    user: "Noah",
                    date: "Dec 2025",
                    text: "Best location for Tower Bridge views."
                }
            ]
        },
        nearby: [
            { type: "Landmark", distance: "0.3 km" },
            { type: "Transit", distance: "0.5 km" },
            { type: "Restaurant", distance: "0.7 km" },
            { type: "Shopping", distance: "1.1 km" }
        ]
    },
    4: {
        overview: {
            hotelSize: {
                rooms: 18,
                floors: 3
            },
            subheading: "Breezy loft-style living near the beach",
            description:
                "Sugar Loft Apartments brings a breezy Rio stay with loft-style rooms, quick beach access, and a laid-back neighborhood vibe in the Santa Teresa district. The outdoor patio is perfect for evening gatherings, featuring local plants and a view of the Christ the Redeemer statue. Simply elegant in all respects, this beautiful property offers a wonderful location that enhances your stay. The rooms are decorated with local art and sustainable materials. Our staff can arrange private surfing lessons and city tours upon request. Pets are allowed but must be supervised at all times. Special check-in instructions: This property does not have a traditional front desk; guests will receive a digital key via mobile app on the day of arrival."
        },
        location: {
            city: "Rio de Janeiro",
            country: "Brazil",
            lat: -22.9213,
            lng: -43.1812
        },
        amenities: {
            preview: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Wind", label: "Air Conditioning" },
                { icon: "TreePalm", label: "Outdoor patio" },
                { icon: "Utensils", label: "Kitchenette" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" }
            ],
            fullList: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Wind", label: "Air Conditioning" },
                { icon: "TreePalm", label: "Outdoor patio" },
                { icon: "Utensils", label: "Kitchenette" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" },
                { icon: "Users", label: "Social Lounge" },
                { icon: "Camera", label: "Tour Desk" },
                { icon: "Map", label: "Local Guide" },
                { icon: "BaggageClaim", label: "Luggage Storage" }
            ],
            totalCount: 10
        },
        gallery: [
            imagePath("guest-love/sugar-loft-apartments.jpg"),
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f2c5?auto=format&fit=crop&w=600&q=80"
        ],
        policies: {
            checkIn: "Check-in from 14:00",
            checkOut: "Check-out by 10:30",
            cancellation: "Non-refundable rate.",
            children: "Children over 12 are welcome.",
            smoking: "Smoking allowed in outdoor areas only.",
            pets: "Pets allowed on request.",
            quietHours: "Quiet hours after 22:00."
        },
        rooms: [
            {
                id: "sugar-loft-standard",
                name: "Loft Studio",
                guests: 2,
                size: "26 m²",
                view: "Garden view",
                features: ["Mini kitchen", "Private terrace", "Ceiling fan"],
                pricing: {
                    pricePerNight: 95,
                    original: 110,
                    discounted: 85
                },
                availability: { available: true }
            },
            {
                id: "sugar-loft-deluxe",
                name: "Garden Loft",
                guests: 3,
                size: "34 m²",
                view: "Pool view",
                features: ["Outdoor patio", "Kitchenette", "Work desk"],
                pricing: {
                    pricePerNight: 120,
                    original: 120,
                    discounted: 102
                },
                availability: { available: false }
            }
        ],
        reviews: {
            summary: {
                value: 4.6,
                cleanliness: 4.5,
                location: 4.7,
                amenities: 4.4,
                communication: 4.6
            },
            comments: [
                {
                    user: "Rafaela",
                    date: "Jan 2026",
                    text: "Great vibe and close to the beach."
                },
                {
                    user: "Diego",
                    date: "Oct 2025",
                    text: "Loved the patio and friendly staff."
                }
            ]
        },
        nearby: [
            { type: "Beach", distance: "0.4 km" },
            { type: "Restaurant", distance: "0.6 km" },
            { type: "Transit", distance: "0.9 km" },
            { type: "Landmark", distance: "1.2 km" }
        ]
    },
    5: {
        overview: {
            hotelSize: {
                rooms: 22,
                floors: 4
            },
            subheading: "Heritage charm in the heart of the Old Town",
            description:
                "Villa Domina offers heritage charm in Split's Old Town, steps from Diocletian's Palace and the seaside promenade. This restored stone villa combines 19th-century architecture with modern luxury. Simply elegant in all respects, this beautiful property offers a wonderful location that enhances your stay. Guests can enjoy a traditional Croatian breakfast served in the courtyard. The property offers airport shuttle services and private boat tours to nearby islands. Due to its historic nature, the building does not have an elevator. Special check-in instructions: Please provide your estimated time of arrival at least 48 hours in advance to ensure a staff member is present to greet you."
        },
        location: {
            city: "Split",
            country: "Croatia",
            lat: 43.5113,
            lng: 16.4395
        },
        amenities: {
            preview: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Ship", label: "Harbor access" },
                { icon: "Wind", label: "Air Conditioning" },
                { icon: "Coffee", label: "Breakfast" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" }
            ],
            fullList: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Ship", label: "Harbor access" },
                { icon: "Wind", label: "Air Conditioning" },
                { icon: "Coffee", label: "Breakfast" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" },
                { icon: "History", label: "Heritage Tour" },
                { icon: "Anchor", label: "Boat Rental" },
                { icon: "Bus", label: "Airport Shuttle" },
                { icon: "Waves", label: "Beach Towels" },
                { icon: "UtensilsCrossed", label: "Wine Tasting" },
                { icon: "Refrigerator", label: "Mini Fridge" }
            ],
            totalCount: 12
        },
        gallery: [
            imagePath("guest-love/villa-domina.jpg"),
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1501183317491-3de19b01e93f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1493200066229-3796d39b503f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1536376074432-8d2a3ff17360?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
        ],
        policies: {
            checkIn: "Check-in from 14:00",
            checkOut: "Check-out by 10:30",
            cancellation: "Free cancellation up to 72 hours before arrival.",
            children: "Children are welcome.",
            smoking: "Non-smoking property.",
            pets: "Pets are not allowed.",
            quietHours: "Quiet hours after 22:30."
        },
        rooms: [
            {
                id: "villa-domina-classic",
                name: "Classic Double",
                guests: 2,
                size: "22 m²",
                view: "Old Town view",
                features: ["Queen bed", "Rain shower", "Soundproof"],
                pricing: {
                    pricePerNight: 230,
                    original: 260,
                    discounted: 210
                },
                availability: { available: true }
            },
            {
                id: "villa-domina-suite",
                name: "Harbor Suite",
                guests: 3,
                size: "38 m²",
                view: "Harbor view",
                features: ["Sofa bed", "Coffee setup", "Work desk"],
                pricing: {
                    pricePerNight: 280,
                    original: 280,
                    discounted: 255
                },
                availability: { available: true }
            }
        ],
        reviews: {
            summary: {
                value: 4.8,
                cleanliness: 4.9,
                location: 4.8,
                amenities: 4.6,
                communication: 4.8
            },
            comments: [
                {
                    user: "Ivana",
                    date: "Jan 2026",
                    text: "Historic charm and very comfortable rooms."
                },
                {
                    user: "Marco",
                    date: "Sep 2025",
                    text: "Fantastic harbor view and great service."
                }
            ]
        },
        nearby: [
            { type: "Landmark", distance: "0.2 km" },
            { type: "Harbor", distance: "0.5 km" },
            { type: "Restaurant", distance: "0.6 km" },
            { type: "Transit", distance: "0.9 km" }
        ]
    },
    6: {
        overview: {
            hotelSize: {
                rooms: 12,
                floors: 2
            },
            subheading: "Traditional Machiya stays with modern comforts",
            description:
                "Kyoto Machiya Stay blends traditional wooden townhouses with modern comforts, close to Gion and the Kamo River. Each Machiya features tatami floors, shoji paper screens, and a private 'Tsuboniwa' garden. Simply elegant in all respects, this beautiful property offers a wonderful location that enhances your stay. The property provides high-quality Yukata robes and premium green tea for an authentic Japanese experience. Modern additions include a deep soaking wooden bathtub and high-speed fiber internet. Quiet hours are strictly enforced to respect the local neighborhood. Special check-in instructions: Guests must register at the central Kyoto station office before proceeding to their specific townhouse location."
        },
        location: {
            city: "Kyoto",
            country: "Japan",
            lat: 35.0033,
            lng: 135.7750
        },
        amenities: {
            preview: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Leaf", label: "Garden courtyard" },
                { icon: "Wind", label: "Air Conditioning" },
                { icon: "Utensils", label: "Kitchenette" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" }
            ],
            fullList: [
                { icon: "Wifi", label: "Free WiFi" },
                { icon: "Leaf", label: "Garden courtyard" },
                { icon: "Wind", label: "Air Conditioning" },
                { icon: "Utensils", label: "Kitchenette" },
                { icon: "Cigarette", label: "Smoking Allowed" },
                { icon: "Bath", label: "Spa" },
                { icon: "CloudMoon", label: "Yukata Robes" },
                { icon: "CupSoda", label: "Matcha Tea Set" },
                { icon: "Home", label: "Traditional Bath" },
                { icon: "Wifi", label: "Fiber Internet" },
                { icon: "Bell", label: "Concierge Office" },
                { icon: "MapPin", label: "Station Pickup" },
                { icon: "Couch", label: "Tatami Seating" },
                { icon: "Bike", label: "Bicycle Rental" }
            ],
            totalCount: 14
        },
        gallery: [
            imagePath("guest-love/kyoto-machiya-stay.jpg"),
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1526481280693-3bfa75ac8a0f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&w=600&q=80"
        ],
        policies: {
            checkIn: "Check-in from 15:00",
            checkOut: "Check-out by 11:00",
            cancellation: "Free cancellation up to 5 days before arrival.",
            children: "Children are welcome.",
            smoking: "Non-smoking property.",
            pets: "Pets are not allowed.",
            quietHours: "Quiet hours after 21:00."
        },
        rooms: [
            {
                id: "machiya-classic",
                name: "Traditional Machiya",
                guests: 2,
                size: "30 m²",
                view: "Garden view",
                features: ["Tatami room", "Garden courtyard", "Tea set"],
                pricing: {
                    pricePerNight: 320,
                    original: 350,
                    discounted: 300
                },
                availability: { available: true }
            },
            {
                id: "machiya-family",
                name: "Machiya Family Suite",
                guests: 4,
                size: "54 m²",
                view: "Courtyard view",
                features: ["Two bedrooms", "Kitchenette", "Outdoor bath"],
                pricing: {
                    pricePerNight: 410,
                    original: 410,
                    discounted: 380
                },
                availability: { available: true }
            }
        ],
        reviews: {
            summary: {
                value: 4.9,
                cleanliness: 4.9,
                location: 4.8,
                amenities: 4.8,
                communication: 4.9
            },
            comments: [
                {
                    user: "Aiko",
                    date: "Jan 2026",
                    text: "Beautiful machiya and very peaceful stay."
                },
                {
                    user: "Jonas",
                    date: "Oct 2025",
                    text: "Great location near Gion and lovely garden."
                }
            ]
        },
        nearby: [
            { type: "Landmark", distance: "0.4 km" },
            { type: "Transit", distance: "0.6 km" },
            { type: "Restaurant", distance: "0.8 km" },
            { type: "Shopping", distance: "1.2 km" }
        ]
    }
};