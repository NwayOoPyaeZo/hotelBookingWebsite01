import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import TestimonialSection from './sections/testimonialSection';
import Footer from './layout/footer';

function HomePage() {
  return (
    <>
      <header>
        <Navbar />
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
        <HomeGuestsLove />
        <TestimonialSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App
