import React, { useState } from 'react';

export default function DetailsNavBar() {
    // 1. Initialize state with the first tab as active
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [
        { name: "Overview", width: "83px" },
        { name: "Rooms", width: "91px" },
        { name: "Amenities", width: "83px" },
        { name: "Policies", width: "64px" },
        { name: "Reviews", width: "75px" },
    ];

    return (
        /* The inner NavBar - Frame matching width 1232px */
        <nav className="flex flex-row items-center gap-[24px] h-[58px]">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.name;
                
                return (
                    <div
                        key={tab.name}
                        style={{ width: tab.width }}
                        // 2. Add onClick handler to change state
                        onClick={() => setActiveTab(tab.name)}
                        className="relative flex flex-col items-center justify-center h-[43px] cursor-pointer group"
                    >
                        {/* Text - Roboto Medium 20 */}
                        <span className={`text-[20px] font-medium leading-[26px] font-roboto whitespace-nowrap transition-colors duration-200
                            ${isActive ? "text-[#0057FF]" : "text-[#8B94A4] group-hover:text-[#1F2226]"}`}>
                            {tab.name}
                        </span>
                        
                        {/* Line 164 - The 2px Blue Underline */}
                        {isActive && (
                            <div className="absolute bottom-0 w-full h-0 border-[2px] border-[#0057FF] animate-in fade-in zoom-in-95 duration-200" />
                        )}
                    </div>
                );
            })}
        </nav>
    );
}