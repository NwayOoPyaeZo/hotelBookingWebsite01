export default function reviewBar({ label, score }) {
    // Calculate percentage for the width (score of 5.0 = 100%)
    const percentage = (score / 5) * 100;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
                <span className="text-[#2B3037] font-medium">{label}</span>
                <span className="text-[#2B3037] font-bold">{score.toFixed(1)}</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div 
                    className="bg-[#0057FF] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}