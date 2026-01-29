import Navbar from './layout/navbar';
import MainHeaderSection from './sections/mainHeaderSection';
import WhyTriptoSection from './sections/whyTriptoSection';
import TrendingDestinations from './sections/trendingDestination';

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
    </main>
    <footer>
      {/* footer content */}
    </footer>
    </>
  )
}

export default App
