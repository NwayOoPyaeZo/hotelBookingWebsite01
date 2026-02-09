import RoomCard from "../../components/hotel/roomCard";

export default function DetailRooms({ rooms }) {
    if (!rooms || rooms.length === 0) return null;

    return (
        <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#2B3037] mb-6">Availability</h3>
            
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
                {/* Desktop Header Labels */}
                <div className="hidden md:grid grid-cols-4 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
                    <div>Accommodation Type</div>
                    <div>Features</div>
                    <div>Price for 1 night</div>
                    <div className="text-right">Selection</div>
                </div>

                <div className="flex flex-col">
                    {rooms.map((room) => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>
            </div>
        </section>
    );
}