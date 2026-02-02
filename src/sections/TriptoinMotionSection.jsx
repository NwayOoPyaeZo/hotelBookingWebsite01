import React from 'react';
import { Play, Star } from 'lucide-react';

const sideVideos = [
  {
    id: 1,
    location: "Phuket, Thailand",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80",
  }
];

const TriptoinMotionSection = () => {
  return (
    /* Updates:
      1. lg:h-[800px]: Forces exact desktop height.
      2. py-24 (96px): Creates perfect centering (96px pad + 608px content + 96px pad = 800px).
    */
    <section className="flex flex-col items-center justify-center w-full h-auto lg:h-[800px] py-24 bg-[#F1F2F3]">
      
      <div className="flex flex-col gap-8 w-full max-w-[1232px] px-5">
        
        <h2 className="font-roboto font-semibold text-[40px] leading-[52px] text-[#121316]">
          Explore Tripto in Motion
        </h2>

        {/* Main Layout Wrapper */}
        <div className="flex flex-col lg:flex-row gap-4 w-full h-auto lg:h-[608px]">
          
          {/* LEFT: Main Video Card */}
          <div className="
            relative
            flex-grow
            lg:w-[1023px] h-[500px] lg:h-full
            rounded-[24px]
            overflow-hidden
            group cursor-pointer
            border-[10px] border-[#99BDFF]
          ">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80" 
              alt="Luxury Resort"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            {/* Content Overlay */}
            <div className="absolute top-[150px] lg:top-[155px] left-[25px] lg:left-[75px] flex flex-col gap-[40px]">
              
              <h3 className="
                w-full lg:w-[623px]
                h-auto lg:h-[168px] 
                font-roboto font-extrabold 
                text-[48px] lg:text-[64px] 
                leading-[1.2] lg:leading-[84px] 
                text-white 
                shadow-sm
              ">
                Step Into a world of Luxury
              </h3>

              <p className="
                w-full lg:w-[822px] 
                h-auto lg:h-[68px] 
                font-roboto font-semibold 
                text-[20px] lg:text-[28px] 
                leading-[28px] lg:leading-[34px] 
                text-white 
                shadow-sm
              ">
                Immerse yourself in captivating visuals from our most iconic and indulgent destinations.
              </p>

              <button className="
                mt-8
                flex flex-row justify-center items-center 
                px-4 py-2 gap-2 
                w-[205px] h-[56px]
                bg-[#0057FF] 
                hover:bg-blue-700 transition-colors
                rounded-[12px]
              ">
                <span className="font-inter font-medium text-[20px] leading-[24px] text-white">
                  Watch Video
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT: Small Videos Container */}
          <div className="
            w-full lg:w-[192px]
            grid grid-cols-3 gap-4 
            lg:flex lg:flex-col
          ">
            
            {sideVideos.map((video) => (
              <div 
                key={video.id}
                className="
                  relative 
                  /* Mobile height adjustment to keep them looking square-ish in grid */
                  h-[120px] sm:h-[192px] lg:h-[192px]
                  w-full lg:w-[192px]
                  rounded-[12px] 
                  overflow-hidden
                  cursor-pointer
                  group
                "
              >
                <img 
                  src={video.image} 
                  alt={video.location}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] lg:w-[38px] lg:h-[38px] flex items-center justify-center bg-white/30 backdrop-blur-[2px] rounded-full group-hover:bg-white/50 transition-colors">
                  <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] bg-white rounded-full flex items-center justify-center">
                     <Play size={10} className="text-[#0057FF] fill-[#0057FF] ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 flex flex-col items-start gap-1 min-w-0 w-[90%]">
                  <span className="font-roboto font-medium text-[12px] lg:text-[18px] leading-tight lg:leading-[24px] text-white truncate w-full">
                    {video.location.split(',')[0]}
                  </span>
                  
                  <div className="hidden sm:flex flex-row gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className="text-[#FAC91E] fill-[#FAC91E]" 
                      />
                    ))}
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default TriptoinMotionSection;