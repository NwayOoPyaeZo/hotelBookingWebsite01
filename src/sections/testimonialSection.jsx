import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA ---
const initialData = [
  {
    id: 'ethan',
    name: "Ethan Rogrinho",
    location: "Malaysia",
    flagCode: "my",
    quote: "This place is exactly like the picture posted on Tripto. Great service, we had a great stay!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    color: "#99BDFF"
  },
  {
    id: 'claudie',
    name: "Claudie Smitham",
    location: "United Kingdom",
    flagCode: "gb",
    quote: "The staff went above and beyond. A truly magical experience from start to finish.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    color: "#FFCC00" 
  },
  {
    id: 'lawrence',
    name: "Lawrence Brooks",
    location: "Australia",
    flagCode: "au",
    quote: "Perfect for a family getaway. The kids loved the pool and we loved the spa!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    color: "#8BF2F2" 
  },
  {
    id: 'benjamin',
    name: "Benjamin Russel",
    location: "France",
    flagCode: "fr",
    quote: "A hidden gem. The food, the atmosphere, the people - everything was 10/10.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
    color: "#6EE7B7" 
  },
  {
    id: 'alicia',
    name: "Alicia Bell",
    location: "Germany",
    flagCode: "de",
    quote: "Impeccably clean and spacious. The location was convenient for everything we wanted to do.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    color: "#F7B5B5" 
  },
  {
    id: 'jillian',
    name: "Jillian Steward",
    location: "Canada",
    flagCode: "ca",
    quote: "Booking was easy and the reality exceeded our expectations. Will definitely return.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    color: "#F5E4A3" 
  },
  {
    id: 'chelsea',
    name: "Chelsea Hagon",
    location: "United States",
    flagCode: "us",
    quote: "Absolutely stunning views and top-notch amenities. I've never felt more relaxed.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    color: "#00AEAE" 
  }
];

// Fallback image
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80";

// --- EXACT COORDINATES ---
const positions = [
  { top: '13.61%', left: '50%', x: '-50%', zIndex: 30 }, 
  { top: '20.79%', left: '79.71%', x: '0%', zIndex: 20 },
  { top: '64.2%', left: '88.31%', x: '0%', zIndex: 20 },
  { top: '77.44%', left: '60.88%', x: '0%', zIndex: 20 },
  { top: '83.33%', left: '27.84%', x: '0%', zIndex: 20 },
  { top: '48.38%', left: '6.41%', x: '0%', zIndex: 20 },
  { top: '13.98%', left: '21.83%', x: '0%', zIndex: 20 }
];

const TestimonialSection = () => {
  const [users, setUsers] = useState(initialData);
  const activeUser = users[0];

  const handleSwap = (clickedIndex) => {
    if (clickedIndex === 0) return; 

    const newUsers = [...users];
    const temp = newUsers[0];
    newUsers[0] = newUsers[clickedIndex];
    newUsers[clickedIndex] = temp;

    setUsers(newUsers);
  };

  // Helper to handle broken images
  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
  };

  return (
    <section className="flex justify-center w-full py-12 px-5 bg-white">
      
      <div className="
        relative 
        flex flex-col items-center
        w-full max-w-[1232px] 
        h-[544px] 
        bg-[#F1F2F3] 
        rounded-[24px] 
        overflow-hidden
        pt-8
      ">

        {/* --- HEADER SECTION --- */}
        <div className="w-full flex flex-col items-center gap-5 z-20 px-4">
          <h2 className="
            relative lg:top-7.5
            font-poppins font-normal 
            text-[16px] leading-[24px] 
            text-center text-[#6B7280]
            max-w-[1276px] w-full
          ">
            Let's see what people think of Tripto
          </h2>
        </div>


        {/* --- AVATARS LAYER --- */}
        {users.map((user, index) => {
          const isCenter = index === 0;
          const pos = positions[index];

          return (
            <motion.div
              layout 
              key={user.id} 
              onClick={() => handleSwap(index)}
              initial={false}
              animate={{
                top: pos.top,
                left: pos.left,
                x: pos.x,
                zIndex: pos.zIndex,
                width: isCenter ? '125px' : '60px',
                height: isCenter ? '119.76px' : '60px',
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className={`absolute cursor-pointer ${!isCenter ? 'hover:brightness-110' : ''}`}
            >
              <div className="relative w-full h-full">
                
                {/* Offset Color Circle */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  animate={{ 
                    x: isCenter ? -4 : -3, 
                    y: isCenter ? 4 : 3,
                    backgroundColor: user.color 
                  }}
                />

                {/* Image Circle */}
                <div 
                  className={`
                    absolute inset-0 rounded-full overflow-hidden 
                    bg-gray-200 
                    ${isCenter ? 'border-[3px] border-[#F1F2F3]' : 'border-2 border-white'}
                  `}
                >
                  <img 
                    src={user.image} 
                    alt={user.name} 
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}


        {/* --- TEXT CONTENT --- */}
        <div 
          className="absolute flex flex-col items-center gap-8 w-full max-w-[819px] left-1/2 -translate-x-1/2"
          style={{ top: '225px' }} 
        >
            
          {/* Quote Section */}
          <div className="flex flex-row items-start gap-[10px] w-full justify-center">
             
             {/* Left Quote */}
             <svg width="51" height="44" viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
               <path opacity="0.2" d="M51 44H31.5C29.7857 36.5593 28.9286 29.9772 28.9286 24.2537C28.9286 8.08455 36.2143 0 50.7857 0V9.44391C43.9286 9.44391 40.5 13.1642 40.5 20.6049V25.5415H51V44ZM22.0714 44H2.57143C0.857143 36.5593 0 29.9772 0 24.2537C0 8.08455 7.28572 0 21.8571 0V9.44391C15 9.44391 11.5714 13.1642 11.5714 20.6049V25.5415H22.0714V44Z" fill="#0057FF"/>
             </svg>

             {/* Dynamic Quote Text */}
             <AnimatePresence mode="wait">
               <motion.p
                 key={activeUser.id}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.2 }}
                 className="
                   font-poppins font-normal 
                   text-[20px] md:text-[24px] 
                   leading-[32px] 
                   text-center text-[#121316]
                   max-w-[677px]
                 "
               >
                 {activeUser.quote}
               </motion.p>
             </AnimatePresence>

             {/* Right Quote */}
             <svg width="51" height="44" viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
               <path opacity="0.2" d="M0 44H19.5C21.2143 36.5593 22.0714 29.9772 22.0714 24.2537C22.0714 8.08455 14.7857 0 0.214291 0V9.44391C7.07143 9.44391 10.5 13.1642 10.5 20.6049V25.5415H0V44ZM28.9286 44H48.4286C50.1429 36.5593 51 29.9772 51 24.2537C51 8.08455 43.7143 0 29.1429 0V9.44391C36 9.44391 39.4286 13.1642 39.4286 20.6049V25.5415H28.9286V44Z" fill="#0057FF"/>
             </svg>
          </div>

          {/* User Info */}
          <div className="flex flex-col items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeUser.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                {/* Name */}
                <div className="font-poppins font-semibold text-[24px] leading-[32px] text-[#1F2937]">
                  {activeUser.name}
                </div>

                {/* Location + Flag */}
                <div className="flex flex-row items-center gap-2">
                  <img 
                    src={`https://flagcdn.com/w40/${activeUser.flagCode}.png`}
                    alt={`${activeUser.location} Flag`} 
                    className="w-6 h-[18px] rounded-[4px] object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }} // Hide flag if fails
                  />
                  <span className="font-poppins font-normal text-[18px] leading-[28px] text-[#9CA3AF]">
                    {activeUser.location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;