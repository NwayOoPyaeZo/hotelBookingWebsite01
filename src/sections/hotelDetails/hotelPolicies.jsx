import * as Icons from "../../components/Icons";

export default function hotelPolicies({ policies }) {
    if (!policies) return null;

    const policyItems = [
        { label: "Check-in", value: policies.checkIn, icon: "Clock" },
        { label: "Check-out", value: policies.checkOut, icon: "Clock" },
        { label: "Cancellation", value: policies.cancellation, icon: "Info" },
        { label: "Children", value: policies.children, icon: "Users" },
        { label: "Smoking", value: policies.smoking, icon: "NoSmoking" },
        { label: "Pets", value: policies.pets, icon: "PawPrint" },
        { label: "Quiet Hours", value: policies.quietHours, icon: "Moon" },
    ];

    return (
        <section className="mt-12 pt-12 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-[#2B3037] mb-8">House Rules</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                {policyItems.map((item, index) => {
                    const IconComponent = Icons[item.icon] || Icons.Info;
                    return (
                        <div key={index} className="flex items-start gap-4">
                            <div className="mt-1">
                                {IconComponent ? (
                                    <IconComponent className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <div className="w-5 h-5 rounded-full bg-gray-200" />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[#2B3037] text-sm">{item.label}</span>
                                <span className="text-[#656F81] text-sm leading-relaxed mt-1">
                                    {item.value}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}