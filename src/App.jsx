import { useState } from 'react'
import Navbar from './layout/navbar';
import MainHeaderSection from './sections/mainHeaderSection';

function App() {

  return (
    <div>
    <header>
      <Navbar />
      <MainHeaderSection />
    </header>
    <main>
      {/* main content */}
    </main>
    <footer>
      {/* footer content */}
    </footer>
    </div>
  )
}

export default App
