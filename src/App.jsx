import { useSearchParams } from "react-router-dom";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import MainHeaderSection from "./sections/home/mainHeaderSection";
import WhyTriptoSection from "./sections/home/whyTriptoSection";
import TrendingDestinations from "./sections/home/trendingDestination";
import WeekendDeals from "./layout/WeekendDeal";
import TravelMoreSpendLessSection from "./sections/home/travelMoreSpendLessSection";
import TopSightsSection from "./sections/home/topSightsSection";
import TopThingsToDo from "./layout/topThingToDo";
import TriptoinMotionSection from "./sections/home/TriptoinMotionSection";
import HomeGuestsLove from "./sections/home/homeGuestsLove";
import TestimonialSection from "./sections/home/testimonialSection";
import DetailIndex from "./sections/hotelDetails/detailIndex";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const hotelIdFromUrl = searchParams.get("hotel");
  const selectedHotelId = hotelIdFromUrl ? Number.parseInt(hotelIdFromUrl, 10) : null;

  const handleHotelSelect = (id) => {
    setSearchParams({ hotel: id });
  };

  const handleGoHome = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#2B3037]">
      <Navbar onLogoClick={handleGoHome} />

        {selectedHotelId === null ? (
          <>
            <header>
              <MainHeaderSection />
            </header>
            <main>
              <WhyTriptoSection />
              <div id="trending">
                <TrendingDestinations />
              </div>
              <div id="weekend-deals">
                <WeekendDeals />
              </div>
              <TravelMoreSpendLessSection />
              <TopSightsSection />
              <TopThingsToDo />
              <TriptoinMotionSection />
              <HomeGuestsLove onHotelSelect={handleHotelSelect} />
              <TestimonialSection />
            </main>
          </>
        ) : (
          <div className="animate-in fade-in duration-500">
            <DetailIndex hotelId={selectedHotelId} />
          </div>
        )}

      <Footer />
    </div>
  );
}

export default App;
