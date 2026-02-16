import { useState } from "react";

export default function ReviewCard({ comment }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const avatarPlaceholder = comment.user?.charAt(0).toUpperCase() || "?";
    return (
        /* Outer Shell */
        <div className="w-full min-h-[220px] bg-white border border-[#DDDFE3] rounded-[24px] shadow-sm flex justify-center items-center">

            {/* Inner Div */}
            <div className="w-[90%] flex flex-col">

                {/* 1. Top Section: Profile & Rating */}
                <div className="flex flex-row justify-between items-start w-full">
                    <div className="flex flex-row items-center gap-3">
                        <div className="w-12 h-12 bg-[#2B3037] rounded-full flex items-center justify-center text-white font-bold shrink-0 overflow-hidden">
                            {comment.userImage ? (
                                <img src={comment.userImage} className="w-full h-full object-cover" alt="" />
                            ) : (
                                <span className="text-sm">{avatarPlaceholder}</span>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[18px] font-bold text-[#1F2226] leading-tight">{comment.user}</span>
                            <span className="text-[14px] text-[#8B94A4]">{comment.date}</span>
                        </div>
                    </div>

                    <div className="w-10 h-10 bg-[#F1F2F3] rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-[16px] font-bold text-[#0046CC]">
                            {typeof comment.rating === 'number' ? comment.rating.toFixed(1) : "5.0"}
                        </span>
                    </div>
                </div>

                {/* 2. Middle Section: Review Text */}
                <div className="flex-1 mt-4">
                    <p className={`text-[#1F2226] text-[15px] leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
                        {comment.text}
                    </p>
                </div>

                {/* 3. Bottom Section: Action Area */}
                <div className="flex flex-row justify-end items-center mt-auto pt-2">
                    <button
                        type="button"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-[#656F81] text-[14px] font-medium hover:text-[#0046CC] transition-colors"
                    >
                        {isExpanded ? "Show" : "Read"} <span className="font-bold text-[#0046CC]">{isExpanded ? "Less" : "More"}</span>
                    </button>
                </div>

            </div>
        </div>
    );
}