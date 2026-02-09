import * as Icons from "../../components/Icons";
import { Maximize, Minus, Plus, MapPin } from "lucide-react";
import mapPinPrice from "../../components/hotel/mapPinPrice";

export default function hotelLocation({ hotel }) {
    if (!hotel) return null;

    const MaximizeIcon = Icons.Maximize || Maximize;
    const PlusIcon = Icons.Plus || Plus;
    const MinusIcon = Icons.Minus || Minus;
    const PinIconFallback = Icons.MapPin || MapPin;

    return (
        <section className="w-full max-w-[1232px] mx-auto mt-24">
            <h2 className="text-[28px] font-semibold text-[#1F2226] mb-6 font-roboto">Location</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 relative h-[421px] bg-[#F1F2F3] rounded-[16px] overflow-hidden group">
                    <img
                        src="/assets/images/map-placeholder.jpg"
                        className="w-full h-full object-cover"
                        alt="Map area"
                    />

                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                            <MaximizeIcon size={20} className="text-[#454C58]" />
                        </button>
                        <div className="flex flex-col bg-white rounded-full shadow-md overflow-hidden">
                            <button className="p-2 hover:bg-gray-50 border-b border-gray-100">
                                <PlusIcon size={20} />
                            </button>
                            <button className="p-2 hover:bg-gray-50">
                                <MinusIcon size={20} />
                            </button>
                        </div>
                    </div>

                    <mapPinPrice price={hotel.price} active={true} position="top-1/2 left-1/2" />
                </div>

                <div className="flex flex-col gap-6">
                    <h3 className="font-bold text-[#1F2226]">Nearby places</h3>
                    <div className="flex flex-col gap-4">
                        {hotel.nearby?.map((item, index) => {
                            const IconComponent = Icons[item.type] || PinIconFallback;
                            return (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b border-gray-100 pb-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <IconComponent size={20} className="text-[#2B3037]" />
                                        <span className="text-[#2B3037] text-sm font-medium">
                                            {item.type}
                                        </span>
                                    </div>
                                    <span className="text-[#656F81] text-sm">{item.distance}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
