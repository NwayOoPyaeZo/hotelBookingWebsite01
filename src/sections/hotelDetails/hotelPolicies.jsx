import React from "react";
import { 
  Clock, Dog, Baby, ShieldCheck, Ban, Moon, UserCheck
} from "lucide-react";

export default function HotelPolicies({ policies }) {
  if (!policies) return null;

  const policyItems = [
    { 
      icon: <Clock size={22} />, 
      label: "Check-in", 
      value: policies.checkIn,
      description: "You'll need to let the property know in advance what time you'll arrive." 
    },
    { 
      icon: <Clock size={22} />, 
      label: "Check-out", 
      value: policies.checkOut 
    },
    { 
      icon: <ShieldCheck size={22} />, 
      label: "Cancellation/prepayment", 
      value: policies.cancellation,
      description: "Cancellation and prepayment policies vary according to accommodation type."
    },
    { 
      icon: <Baby size={22} />, 
      label: "Children and beds", 
      value: policies.children,
      description: "Child policies: children of any age are welcome." 
    },
    { 
      icon: <UserCheck size={22} />, 
      label: "No age restriction", 
      value: "Guests of all ages are welcome." 
    },
    { 
      icon: <Moon size={22} />, 
      label: "Quiet hours", 
      value: policies.quietHours 
    },
    { 
      icon: <Ban size={22} />, 
      label: "Smoking", 
      value: policies.smoking 
    },
    { 
      icon: <Dog size={22} />, 
      label: "Pets", 
      value: policies.pets 
    },
  ];

  return (
    <section className="w-full md:h-[700px] h-[800px] flex flex-col justify-center items-center font-roboto px-4 lg:px-0 py-20 bg-transparent">
      
      <div className="w-full max-w-[1232px] flex flex-col gap-8">
        
        <div className="flex flex-col items-start md:items-start text-center md:text-left gap-1">
          <h2 className="text-[28px] font-bold text-[#1F2226]">Policies</h2>
          <p className="text-sm text-[#8B94A4]">
            Lazur Hotel Apartments takes special requests - add in the next step!
          </p>
        </div>

        {/* THE TABLE */}
        <div className="w-full bg-white rounded-[20px] overflow-hidden border-1 border-[#c3c5c7] shadow-sm">
          <div className="w-full flex flex-col">
            {policyItems.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-[1fr_1fr] min-h-[4rem] items-stretch border-[#c3c5c7] border-b-1 ${
                  index === 0 ? "" : ""
                }`}
              >
                {/* COLUMN 1: Icon & Label */}
                <div className="flex items-center justify-center md:justify-start px-8 py-6 md:py-10">
                  <div className="flex flex-row items-center gap-4 w-fit md:w-[90%] mx-auto md:mx-0">
                    <span className="text-[#1F2226] shrink-0">{item.icon}</span>
                    <span className="text-[17px] font-bold text-[#1F2226] whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* COLUMN 2: Value & Description */}
                <div className="flex items-center justify-center md:justify-start px-8 pb-8 md:pb-10 pt-0 md:pt-10">
                  <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-[95%] text-center md:text-left">
                    <span className="text-[15px] text-[#1F2226] font-semibold">
                      {item.value || "Not specified"}
                    </span>
                    {item.description && (
                      <span className="text-[14px] text-[#454C58] leading-relaxed max-w-[450px] md:max-w-none">
                        {item.description}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}