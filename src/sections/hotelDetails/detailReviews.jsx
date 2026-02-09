import ReviewBar from "../../components/hotel/reviewBar";
import * as Icons from "../../components/Icons";

export default function detailReviews({ reviews }) {
    if (!reviews) return null;

    const { summary, comments } = reviews;
    const StarIcon = Icons.Star;

    return (
        <section className="mt-12 pt-12 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-8">
                {StarIcon ? (
                    <StarIcon className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ) : (
                    <div className="w-6 h-6 rounded-full bg-yellow-300" />
                )}
                <h3 className="text-2xl font-bold text-[#2B3037]">
                    {summary.value.toFixed(1)} · {comments.length} reviews
                </h3>
            </div>

            {/* Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-12">
                <ReviewBar label="Cleanliness" score={summary.cleanliness} />
                <ReviewBar label="Location" score={summary.location} />
                <ReviewBar label="Amenities" score={summary.amenities} />
                <ReviewBar label="Communication" score={summary.communication} />
                <ReviewBar label="Value" score={summary.value} />
            </div>

            {/* Comments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {comments.map((comment, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                                {comment.user.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-[#2B3037]">{comment.user}</h4>
                                <p className="text-xs text-[#656F81]">{comment.date}</p>
                            </div>
                        </div>
                        <p className="text-[#2B3037] text-sm leading-relaxed italic">
                            "{comment.text}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}