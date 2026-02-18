import React from "react";
import PopularThingsToDoNearby from "../layout/popularThingToDoNearby";
import SimilarHotelsNearby from "../layout/similarHotelsNearby";

export default function SuggestionSection({ activities = [], similarHotels = [], hotel }) {
  return (
    /* OUTER SECTION */
    <section className="w-full min-h-[800px] flex flex-col justify-center items-center font-roboto py-24 bg-white">
      
      {/* INNER STAGE */}
      <div className="w-full max-w-[1232px] flex flex-col gap-24 px-4 lg:px-0">
        
        {/* CATEGORY 1: POPULAR THINGS TO DO */}
        {activities.length > 0 ? (
          <PopularThingsToDoNearby activities={activities} />
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <h2 className="text-[28px] font-bold text-[#1F2226]">Things to Do Nearby</h2>
            <p className="text-sm text-[#8B94A4] mt-2">Activities will appear here once available for this city.</p>
          </div>
        )}

        {/* CATEGORY 2: SIMILAR HOTELS NEARBY */}
        <div className="flex flex-col gap-10">
          {similarHotels.length > 0 ? (
            <SimilarHotelsNearby hotels={similarHotels} city={hotel?.city || "Barcelona"} />
          ) : (
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-[#DDDFE3] bg-[#F9FAFB] py-10">
              <p className="text-sm text-[#8B94A4]">No similar hotels found for this location yet.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

