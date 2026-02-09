import * as Icons from "../Icons";

export default function amenitiesGrid({ previewAmenities }) {
    if (!previewAmenities || previewAmenities.length === 0) return null;

    return (
        <section className="w-full max-w-[1232px] mx-auto mt-16">
            <h2 className="text-[28px] font-semibold text-[#1F2226] mb-4">Amenities</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {previewAmenities.map((amenity, index) => {
                    const IconComponent = Icons[amenity.icon] || Icons.Info;

                    return (
                        <div
                            key={index}
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-[24px] hover:border-[#0057FF] transition-colors cursor-default"
                        >
                            {IconComponent && <IconComponent className="w-6 h-6 text-[#2B3037]" />}
                            <span className="text-base font-medium text-[#2B3037]">
                                {amenity.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            <button className="mt-8 px-4 py-2 border border-[#0057FF] rounded-xl text-[#0057FF] font-medium text-base">
                Show all {previewAmenities.length + 10} amenities
            </button>
        </section>
    );
}