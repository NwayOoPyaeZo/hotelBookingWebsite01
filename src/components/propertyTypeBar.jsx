
import { Building2, Home, Users, TreePalm, Tent, Globe } from "lucide-react";

const PROPERTY_TYPES = [
  { id: "hotel", label: "Hotel", icon: Building2 },
  { id: "house", label: "House", icon: Home },
  { id: "guestHouse", label: "Guest house", icon: Users },
  { id: "cabin", label: "Cabins", icon: TreePalm },
  { id: "glamping", label: "Glamping", icon: Tent },
  { id: "domes", label: "Domes", icon: Globe },
];

const PropertyTypeBar = ({ active = "hotel", onChange }) => {
  return (
    <div className="relative top-[500px] mx-auto z-20 w-full flex justify-center mt-8 lg:absolute lg:top-[392px] lg:left-1/2 lg:-translate-x-1/2 z-20">
      {/* Glass pill */}
      <div className="w-full lg:w-[812px] h-[72px] bg-black/30 backdrop-blur-[21.8px] rounded-[32px] flex items-center justify-center">
        {/* Button row */}
        <div className="w-11/12 lg:w-[760px] flex items-center gap-2">
          {PROPERTY_TYPES.map((type) => {
            const Icon = type.icon;
            const isActive = active === type.id;
            return (
              <button
                key={type.id}
                onClick={() => onChange?.(type.id)}
                className={`${isActive ? "flex-[1.5] bg-white text-[#1F2226] px-4" : "flex-1 text-white hover:text-black/75 px-0"} h-[40px] rounded-[24px] text-[16px] font-medium flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer hover:opacity-90`}
              >
                <Icon size={18} />
                <span className={`${isActive ? "inline" : "hidden"} lg:inline whitespace-nowrap`}>{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PropertyTypeBar;
