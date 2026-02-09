import React, { useState, useEffect } from 'react';
import { getCountryFlag } from "../../services/locale";

const initialSightsData = [
  {
    id: 1,
    country: "Finland",
    countryCode: "fi",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    widthClass: "md:w-[608px]"
  },
  {
    id: 2,
    country: "Vietnam",
    countryCode: "vn",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    widthClass: "md:w-[608px]"
  },
  {
    id: 3,
    country: "France",
    countryCode: "fr",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    widthClass: "md:w-[400px]"
  },
  {
    id: 4,
    country: "United Kingdom",
    countryCode: "gb",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    widthClass: "md:w-[400px]"
  },
  {
    id: 5,
    country: "United States",
    countryCode: "us", 
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
    widthClass: "md:w-[400px]"
  }
];

const TopSightsSection = () => {
  const [sights, setSights] = useState(initialSightsData);

  useEffect(() => {
    let isMounted = true;

    const fetchAllFlags = async () => {
      const updatedSights = await Promise.all(
        sights.map(async (sight) => {
          try {
            const flagUrl = await getCountryFlag(sight.countryCode);
            return { ...sight, flagUrl };
          } catch (error) {
            console.warn(`Failed to load flag for ${sight.country}`, error);
            return { ...sight, flagUrl: null };
          }
        })
      );
      
      if (isMounted) {
        setSights(updatedSights);
      }
    };

    fetchAllFlags();
    return () => { isMounted = false; };
  }, []); 

  return (
    
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-24 lg:py-32 w-full bg-white">
      
      {/* Inner Container */}
      <div className="flex flex-col gap-8 w-full max-w-[1232px] px-5">
        
        <h2 className="font-roboto font-semibold text-[40px] leading-[52px] text-[#121316]">
          Top Sights to See
        </h2>

        <div className="flex flex-row flex-wrap gap-4 w-full">
          {sights.map((sight) => (
            <button
              key={sight.id}
              type="button"
              className={`
                relative
                h-[248px] w-full ${sight.widthClass}
                rounded-2xl
                overflow-hidden
                group cursor-pointer
                text-left
                shadow-[0px_23px_9px_rgba(0,0,0,0.01),0px_13px_8px_rgba(0,0,0,0.05),0px_6px_6px_rgba(0,0,0,0.09)]
                focus:outline-none focus:ring-4 focus:ring-blue-500/50
              `}
            >
              {/* Image */}
              <img 
                src={sight.image} 
                alt={`Travel to ${sight.country}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-transparent via-40%" />

              {/* Info Group */}
              <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
                <span className="font-roboto font-semibold text-[28px] leading-[34px] text-white">
                  {sight.country}
                </span>

                {sight.flagUrl && (
                  <img 
                    src={sight.flagUrl}
                    alt="" 
                    className="w-8 h-6 rounded-[4px] object-cover bg-gray-200"
                  />
                )}
              </div>

            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopSightsSection;