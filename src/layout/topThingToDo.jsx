import React, { useState } from 'react';
import { imagePath } from "../lib/image";
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
    { id: 101, title: "Sagrada Família", image: imagePath("activities-card/sagrada-familia.jpg") },
    { id: 102, title: "Park Güell", image: imagePath("activities-card/park-guell.jpg") },
    { id: 103, title: "Casa Batlló", image: imagePath("activities-card/casa-batllo.jpg") },
    { id: 104, title: "Gothic Quarter", image: imagePath("activities-card/gothic-quarter.jpg") },
    { id: 105, title: "La Rambla", image: imagePath("activities-card/la-rambla.jpg") },
    { id: 106, title: "Montjuïc Castle", image: imagePath("activities-card/montjuic-castle.jpg") },
  ],
  beach: [
    { id: 201, title: "Barceloneta Beach", image: imagePath("activities-card/barceloneta-beach.jpg") },
    { id: 202, title: "Bogatell Beach", image: imagePath("activities-card/bogatell-beach.jpg") },
    { id: 203, title: "Nova Icària", image: imagePath("activities-card/nova-icaria.jpg") },
    { id: 204, title: "Somorrostro", image: imagePath("activities-card/somorrostro.png") },
    { id: 205, title: "Mar Bella", image: imagePath("activities-card/mar-bella.png") },
    { id: 206, title: "Sant Sebastià", image: imagePath("activities-card/sant-sebastia.jpg") },
  ],
  museum: [
    { id: 301, title: "Picasso Museum", image: imagePath("activities-card/picasso-museum.jpg") },
    { id: 302, title: "MNAC Art Museum", image: imagePath("activities-card/mnac-art-museum.jpg") },
    { id: 303, title: "Joan Miró Fdn.", image: imagePath("activities-card/joan-miro-fdn.png") },
    { id: 304, title: "MACBA Contemporary", image: imagePath("activities-card/macba-contemporary.png") },
    { id: 305, title: "CosmoCaixa", image: imagePath("activities-card/cosmo-caixa.png") },
    { id: 306, title: "FC Barcelona Museum", image: imagePath("activities-card/fc-barcelona-museum.png") },
  ],
  show: [
    { id: 401, title: "Magic Fountain", image: imagePath("activities-card/magic-fountain.jpg") },
    { id: 402, title: "Palau de la Música", image: imagePath("activities-card/palau-de-la-musica.jpg") },
    { id: 403, title: "Tablao Flamenco", image: imagePath("activities-card/tablao-flamenco.jpg") },
    { id: 404, title: "Gran Teatre del Liceu", image: imagePath("activities-card/gran-teatre-del-liceu.jpg") },
    { id: 405, title: "Teatre Grec", image: imagePath("activities-card/teatre-grec.jpg") },
    { id: 406, title: "Guitar Trio Show", image: imagePath("activities-card/guitar-trio-show.jpg") },
  ],
  food: [
    { id: 501, title: "La Boqueria Market", image: imagePath("activities-card/la-boqueria-market.png") },
    { id: 502, title: "El Nacional", image: imagePath("activities-card/el-nacional.jpg") },
    { id: 503, title: "Tapas at Cervecería", image: imagePath("activities-card/tapas-at-cerveceria.jpg") },
    { id: 504, title: "Paella at 7 Portes", image: imagePath("activities-card/paella-at-7-portes.jpg") },
    { id: 505, title: "Granja Viader", image: imagePath("activities-card/granja-viader.jpg") },
    { id: 506, title: "Santa Caterina", image: imagePath("activities-card/santa-caterina.jpg") },
  ],
  nightlife: [
    { id: 601, title: "Opium Barcelona", image: imagePath("activities-card/opium-barcelona.jpg") },
    { id: 602, title: "Razzmatazz", image: imagePath("activities-card/razzmatazz.jpg") },
    { id: 603, title: "Pacha Barcelona", image: imagePath("activities-card/pacha-barcelona.jpg") },
    { id: 604, title: "Sala Apolo", image: imagePath("activities-card/sala-apolo.jpg") },
    { id: 605, title: "Eclipse Bar (W Hotel)", image: imagePath("activities-card/eclipse-bar.jpg") },
    { id: 606, title: "Sutton Club", image: imagePath("activities-card/sutton-club.jpg") },
  ]
};

const TopThingsToDo = () => {
  const [activeCategory, setActiveCategory] = useState('explore');

  // Filter activities based on active category
  const currentActivities = activitiesData[activeCategory] || [];

  return (
    
    <section className="flex flex-col items-center justify-center h-[150vh] lg:h-[450px] py-24 w-full bg-white">
      
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
        <div className="flex flex-row justify-center flex-wrap gap-x-10 lg:gap-x-4 gap-y-8 w-full">
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