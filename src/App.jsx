import Navbar from './layout/navbar';
import MainHeaderSection from './sections/mainHeaderSection';
import WhyTriptoSection from './sections/whyTriptoSection';
import TrendingDestinations from './sections/trendingDestination';
import WeekendDeals from './layout/WeekendDeal';

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
    </main>
    <footer>
      {/* footer content */}
    </footer>
    </>
  )
}

export default App
