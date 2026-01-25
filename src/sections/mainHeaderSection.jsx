import { useEffect, useState } from "react";
import PropertyTypeBar from "../components/propertyTypeBar";
import heroPic01 from "../assets/images/heroBanner/heroPic01.jpg";
import heroPic02 from "../assets/images/heroBanner/heroPic02.jpg";
import heroPic03 from "../assets/images/heroBanner/heroPic03.jpg";
import heroPic04 from "../assets/images/heroBanner/heroPic04.png";
import heroPic05 from "../assets/images/heroBanner/heroPic05.png";

const images = [heroPic01, heroPic02, heroPic03, heroPic04, heroPic05];


const MainHeaderSection = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [activeType, setActiveType] = useState("hotel");

  useEffect(() => {
    // Increase fade and slide time for smoother, slower transitions
    const fadeTimeout = setTimeout(() => setFade(false), 4500);
    const slideTimeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 5000);
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(slideTimeout);
    };
  }, [current]);


  return (
    <section className="w-full bg-amber-300">
      <div className="relative -top-[96px] w-full h-[607px] overflow-hidden rounded-b-[32px]">
        {/* Image */}
        <img
          src={images[current]}
          alt={`Hero ${current + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#00349959]" />

        {/* Title */}
        <div className="absolute top-[300px] lg:top-[250px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 lg:gap-4 w-[90%] max-w-[615px] text-white text-center z-10 px-4">
          <h1 className="font-semibold text-[28px] sm:text-[34px] lg:text-[40px] leading-tight lg:leading-[52px]">
            Your Trip Starts Here
          </h1>
          <p className="font-semibold text-[18px] sm:text-[22px] lg:text-[28px] leading-snug lg:leading-[34px]">
            Find unique stays across hotels, villas, and more.
          </p>
        </div>

        {/* Property type bar */}
        <PropertyTypeBar
          active={activeType}
          onChange={setActiveType}
        />

        
      </div>


    </section>
  );
}

export default MainHeaderSection;