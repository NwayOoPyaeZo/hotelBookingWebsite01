import Navbar from './layout/navbar';
import MainHeaderSection from './sections/mainHeaderSection';
import WhyTriptoSection from './sections/whyTriptoSection';
import TrendingDestinations from './sections/trendingDestination';
import WeekendDeals from './layout/WeekendDeal';
import TravelMoreSpendLessSection from './sections/travelMoreSpendLessSection';
import TopSightsSection from './sections/topSightsSection';
import TopThingsToDo from './layout/topThingToDo';
import TriptoinMotionSection from './sections/TriptoinMotionSection';
import HomeGuestsLove from './sections/homeGuestsLove';

function App() {

  return (
    <>
    <header>
      <Navbar />
      <MainHeaderSection />
    </header>
    <main>
      <WhyTriptoSection />
      <TrendingDestinations />
      <WeekendDeals />
      <TravelMoreSpendLessSection />
      <TopSightsSection />
      <TopThingsToDo />
      <TriptoinMotionSection />
      <HomeGuestsLove />
    </main>
    <footer>
      {/* footer content */}
    </footer>
    </>
  )
}

export default App
