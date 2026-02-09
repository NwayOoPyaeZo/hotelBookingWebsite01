import React, { useState } from 'react';

const benefitsData = [
  {
    id: 1,
    title: "10% discounts on stays",
    description: "Enjoy discounts at participating properties worldwide."
  },
  {
    id: 2,
    title: "15% discounts on stays",
    description: "Complete 5 stays to unlock level 2 discounts."
  },
  {
    id: 3,
    title: "Free breakfast",
    description: "Start your day with a complimentary breakfast at select stays."
  },
  {
    id: 4,
    title: "Free room upgrades",
    description: "Get upgraded to better rooms at no extra cost when available."
  },
  {
    id: 5,
    title: "Priority support",
    description: "Access our dedicated 24/7 support line for Genius members."
  },
  {
    id: 6,
    title: "Late check-out",
    description: "Sleep in longer with complimentary late check-out options."
  }
];

const TravelMoreSpendLessSection = () => {
  // State to track ARRAY of active card IDs for multi-select
  const [activeCards, setActiveCards] = useState([]);

  const toggleCard = (id) => {
    setActiveCards(prev => {
      // If id is already selected, remove it
      if (prev.includes(id)) {
        return prev.filter(cardId => cardId !== id);
      }
      // Otherwise, add it to the array
      return [...prev, id];
    });
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-[350px] w-full bg-white overflow-hidden">
      
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            /* PERFECT LOOP CALCULATION:
               Card Width (296px) + Gap (16px) = 312px per item
               6 Items * 312px = 1872px
            */
            transform: translateX(-1872px);
          }
        }
        .animate-infinite-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>

      {/* Main Content Wrapper */}
      <div className="flex flex-col gap-16 w-full max-w-[1232px] my-16 lg:my-24 px-5">
        
        {/* --- Section Title --- */}
        <div className="flex flex-col w-full">
          <h2 className="font-roboto font-semibold text-[40px] leading-[52px] text-[#121316]">
            Travel more, spend less
          </h2>
        </div>

        {/* --- Infinite Scrolling Slider --- */}
        <div className="flex w-full overflow-hidden">
          
          <div className="flex gap-4 w-max animate-infinite-scroll hover:[animation-play-state:paused]">
            
            {/* Original Set */}
            {benefitsData.map((benefit) => {
              // Check if this ID is in the active array
              const isActive = activeCards.includes(benefit.id);
              
              return (
                <div 
                  key={`original-${benefit.id}`}
                  onClick={() => toggleCard(benefit.id)}
                  className={`
                    /* Card Dimensions */
                    w-[296px] h-[154px] 
                    shrink-0 box-border
                    cursor-pointer
                    
                    /* Styling */
                    border border-[#0057FF] 
                    rounded-2xl
                    
                    /* Interaction Transitions */
                    transition-colors duration-300
                    ${isActive ? 'bg-[#0057FF]' : 'bg-white hover:bg-blue-50'}
                  `}
                >
                  {/* --- Inner Text Container  */}
                  <div className="relative left-5 top-5 w-[240px] h-[92px] m-[18px] flex flex-col gap-[18px]">
                      <h3 className={`
                        font-roboto font-semibold text-[20px] leading-[26px] transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-black'}
                      `}>
                        {benefit.title}
                      </h3>
                      <p className={`
                        font-roboto font-normal text-[16px] leading-[24px] transition-colors duration-300
                        ${isActive ? 'text-white/90' : 'text-black'}
                      `}>
                        {benefit.description}
                      </p>
                  </div>
                </div>
              );
            })}

            {/* Duplicate Set (For Seamless Loop) */}
            {benefitsData.map((benefit) => {
              const isActive = activeCards.includes(benefit.id);
              
              return (
                <div 
                  key={`duplicate-${benefit.id}`}
                  onClick={() => toggleCard(benefit.id)}
                  className={`
                    /* Card Dimensions */
                    w-[296px] h-[154px] 
                    shrink-0 box-border
                    cursor-pointer
                    
                    /* Styling */
                    border border-[#0057FF] 
                    rounded-2xl

                    /* Interaction Transitions */
                    transition-colors duration-300
                    ${isActive ? 'bg-[#0057FF]' : 'bg-white hover:bg-blue-50'}
                  `}
                >
                  {/* --- Inner Text Container  --- */}
                  <div className="relative left-5 top-5 w-[240px] h-[92px] m-[18px] flex flex-col gap-[18px]">
                      <h3 className={`
                        font-roboto font-semibold text-[20px] leading-[26px] transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-black'}
                      `}>
                        {benefit.title}
                      </h3>
                      <p className={`
                        font-roboto font-normal text-[16px] leading-[24px] transition-colors duration-300
                        ${isActive ? 'text-white/90' : 'text-black'}
                      `}>
                        {benefit.description}
                      </p>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default TravelMoreSpendLessSection;