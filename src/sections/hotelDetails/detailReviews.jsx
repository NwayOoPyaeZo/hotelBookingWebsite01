import React, { useState } from "react";
import { Star, Sparkles, MessageSquare, MapPin, BadgeDollarSign } from "lucide-react";
import ReviewCard from "../../components/hotel/reviewCard";

export default function DetailReviews({ reviews }) {
  const [showAll, setShowAll] = useState(false);

  if (!reviews || !reviews.comments) return null;

  const { summary, comments } = reviews;
  const visibleComments = showAll ? comments : comments.slice(0, 3);

  return (
    <section className="flex flex-col items-start gap-8 w-full max-w-[1232px] font-roboto mt-16 mx-auto mb-24 px-4 lg:px-0">
      
      {/* 1. Header Section */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-[28px] font-semibold text-[#1F2226]">Reviews</h2>
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center w-10 h-8 bg-[#F1F2F3] rounded-l-2xl rounded-tr-none rounded-br-lg">
            <span className="text-base font-medium text-[#0046CC]">
              {summary.value?.toFixed(1) || "0.0"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-[#0046CC]">Excellent</span>
            <span className="text-xs text-[#8B94A4]">
              • {comments.length} reviews
            </span>
          </div>
        </div>
      </div>

      {/* 2. Dashboard Section (Kept for layout) */}
      {/* ... Your Rating Dashboard code ... */}

      {/* 3. Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {visibleComments.map((comment, index) => (
          <ReviewCard key={index} comment={comment} />
        ))}
      </div>

      {/* 4. Footer Show All Button */}
      {comments.length > 3 && (
        <button 
          onClick={() => setShowAll(!showAll)}
          className="mt-4 flex justify-center items-center w-[200px] h-10 bg-white border border-[#0057FF] rounded-xl text-[#0057FF] font-medium mx-auto hover:bg-blue-50 transition-all duration-200"
        >
          {showAll ? "Show less" : `Show all ${comments.length} reviews`}
        </button>
      )}
    </section>
  );
}