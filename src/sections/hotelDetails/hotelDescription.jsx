import { ChevronDown } from "lucide-react";

export default function hotelDescription({ hotel }) {
    const rooms = hotel?.overview?.hotelSize?.rooms;
    const floors = hotel?.overview?.hotelSize?.floors;
    const description = hotel?.overview?.description;

    return (
        <section className="w-full max-w-[1232px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            <div className="lg:col-span-2 flex flex-col gap-4">
                <h2 className="text-[28px] font-semibold text-[#1F2226] font-roboto">Description</h2>

                <div className="flex flex-col gap-2">
                    {rooms && floors && (
                        <p className="text-base font-bold text-[#1F2226]">
                            Hotel size {rooms} rooms, Arranged over {floors} floors
                        </p>
                    )}

                    {description && (
                        <p className="text-base font-normal text-[#1F2226] leading-[24px] whitespace-pre-line">
                            {description}
                        </p>
                    )}
                </div>

                <button className="w-fit px-4 py-2 border border-[#0057FF] rounded-xl text-[#0057FF] font-medium text-base hover:bg-[#F0F5FF] transition-colors">
                    More Details
                </button>
            </div>

            <div className="hidden lg:block">
                <div className="bg-white border border-gray-100 rounded-[32px] gap-5 shadow-sm flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img src="/assets/images/user.jpg" alt="Lisa Doberman" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-normal text-[#1F2226]">Host</span>
                        <span className="text-lg font-medium text-[#1F2226]">Lisa Doberman</span>
                    </div>
                    <ChevronDown className="ml-auto w-8 h-8 text-black" />
                </div>
            </div>
        </section>
    );
}
