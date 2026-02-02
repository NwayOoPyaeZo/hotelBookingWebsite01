import React, { useState } from 'react';
import { 
  Compass, 
  Umbrella, 
  Landmark, 
  Ticket, 
  Utensils, 
  Martini 
} from 'lucide-react';

// Categories Configuration
const categories = [
  { id: 'explore', label: 'Explore', icon: <Compass size={18} /> },
  { id: 'beach', label: 'Beach', icon: <Umbrella size={18} /> },
  { id: 'museum', label: 'Museum', icon: <Landmark size={18} /> },
  { id: 'show', label: 'Show', icon: <Ticket size={18} /> },
  { id: 'food', label: 'Food', icon: <Utensils size={18} /> },
  { id: 'nightlife', label: 'Night Life', icon: <Martini size={18} /> },
];

const activitiesData = {
  explore: [
    { id: 101, title: "Sagrada Família", image: "/assets/images/activitiesCard/SagradaFamília.jpg" },
    { id: 102, title: "Park Güell", image: "/assets/images/activitiesCard/ParkGüell.jpg" },
    { id: 103, title: "Casa Batlló", image: "/assets/images/activitiesCard/CasaBatlló.jpg" }, 
    { id: 104, title: "Gothic Quarter", image: "/assets/images/activitiesCard/GothicQuarter.jpg" },
    { id: 105, title: "La Rambla", image: "/assets/images/activitiesCard/LaRambla.jpg" },
    { id: 106, title: "Montjuïc Castle", image: "/assets/images/activitiesCard/MontjuïcCastle.jpg" },
  ],
  beach: [
    { id: 201, title: "Barceloneta Beach", image: "/assets/images/activitiesCard/BarcelonetaBeach.jpg" },
    { id: 202, title: "Bogatell Beach", image: "/assets/images/activitiesCard/BogatellBeach.jpg" },
    { id: 203, title: "Nova Icària", image: "/assets/images/activitiesCard/NovaIcària.jpg" },
    { id: 204, title: "Somorrostro", image: "/assets/images/activitiesCard/Somorrostro.png" }, 
    { id: 205, title: "Mar Bella", image: "/assets/images/activitiesCard/MarBella.png" }, 
    { id: 206, title: "Sant Sebastià", image: "/assets/images/activitiesCard/SantSebastià.jpg" },
  ],
  museum: [
    { id: 301, title: "Picasso Museum", image: "/assets/images/activitiesCard/PicassoMuseum.jpg" },
    { id: 302, title: "MNAC Art Museum", image: "/assets/images/activitiesCard/MNACArtMuseum.jpg" },
    { id: 303, title: "Joan Miró Fdn.", image: "/assets/images/activitiesCard/JoanMiróFdn..png" }, 
    { id: 304, title: "MACBA Contemporary", image: "/assets/images/activitiesCard/MACBA Contemporary.png" }, 
    { id: 305, title: "CosmoCaixa", image: "/assets/images/activitiesCard/CosmoCaixa.png" }, 
    { id: 306, title: "FC Barcelona Museum", image: "/assets/images/activitiesCard/FCBarcelonaMuseum.png" }, 
  ],
  show: [
    { id: 401, title: "Magic Fountain", image: "/assets/images/activitiesCard/MagicFountain.jpg" },
    { id: 402, title: "Palau de la Música", image: "/assets/images/activitiesCard/PalaudelaMúsica.jpg" },
    { id: 403, title: "Tablao Flamenco", image: "/assets/images/activitiesCard/TablaoFlamenco.jpg" },
    { id: 404, title: "Gran Teatre del Liceu", image: "/assets/images/activitiesCard/GranTeatredelLiceu.jpg" },
    { id: 405, title: "Teatre Grec", image: "/assets/images/activitiesCard/TeatreGrec.jpg" },
    { id: 406, title: "Guitar Trio Show", image: "/assets/images/activitiesCard/GuitarTrioShow.jpg" },
  ],
  food: [
    { id: 501, title: "La Boqueria Market", image: "/assets/images/activitiesCard/LaBoqueriaMarket.png" }, 
    { id: 502, title: "El Nacional", image: "/assets/images/activitiesCard/ElNacional.jpg" },
    { id: 503, title: "Tapas at Cervecería", image: "/assets/images/activitiesCard/TapasAtCervecería.jpg" },
    { id: 504, title: "Paella at 7 Portes", image: "/assets/images/activitiesCard/PaellaAt7Portes.jpg" },
    { id: 505, title: "Granja Viader", image: "/assets/images/activitiesCard/GranjaViader.jpg" },
    { id: 506, title: "Santa Caterina", image: "/assets/images/activitiesCard/SantaCaterina.jpg" },
  ],
  nightlife: [
    { id: 601, title: "Opium Barcelona", image: "/assets/images/activitiesCard/OpiumBarcelona.jpg" },
    { id: 602, title: "Razzmatazz", image: "/assets/images/activitiesCard/Razzmatazz.jpg" },
    { id: 603, title: "Pacha Barcelona", image: "/assets/images/activitiesCard/PachaBarcelona.jpg" },
    { id: 604, title: "Sala Apolo", image: "/assets/images/activitiesCard/SalaApolo.jpg" },
    { id: 605, title: "Eclipse Bar (W Hotel)", image: "/assets/images/activitiesCard/EclipseBar.jpg" },
    { id: 606, title: "Sutton Club", image: "/assets/images/activitiesCard/SuttonClub.jpg" },
  ]
};

const TopThingsToDo = () => {
  const [activeCategory, setActiveCategory] = useState('explore');

  // Filter activities based on active category
  const currentActivities = activitiesData[activeCategory] || [];

  return (
    
    <section className="flex flex-col items-center justify-center min-h-[450px] py-24 w-full bg-white">
      
      {/* Main Container */}
      <div className="flex flex-col gap-8 w-full max-w-[1232px] px-5">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col gap-8 w-full">
          
          {/* Title */}
          <h2 className="font-roboto font-semibold text-[40px] leading-[52px] text-[#121316]">
            Top Things to Do in Barcelona
          </h2>

          {/* Filter Chips Row */}
          <div className="flex flex-row flex-wrap items-center gap-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    flex flex-row justify-center items-center 
                    px-5 py-3 gap-2
                    w-[117px] h-[48px]
                    rounded-[24px]
                    border
                    transition-all duration-200
                    cursor-pointer
                    font-roboto font-medium text-[16px] leading-[24px]
                    ${isActive 
                      ? 'bg-[#121316] text-white border-[#121316]' 
                      : 'bg-white text-[#121316] border-[#121316] hover:bg-gray-50'
                    }
                  `}
                >
                  <span className={isActive ? 'text-white' : 'text-[#121316]'}>
                    {cat.icon}
                  </span>
                  
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- Product Cards Grid --- */}
        <div className="flex flex-row flex-wrap gap-x-4 gap-y-8 w-full mt-8">
          {currentActivities.map((activity) => (
            <div 
              key={activity.id}
              className="flex flex-col items-start gap-2 w-[192px] group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-[192px] h-[172px] rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback just in case
                    console.error("Image failed to load:", activity.image);
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Hover Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-roboto font-medium text-[16px] leading-[20px] text-[#1F2226] group-hover:text-blue-600 transition-colors">
                {activity.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopThingsToDo;