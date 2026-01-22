import Navbar from '../components/navbar';

const MainHeaderSection = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}

export default MainHeaderSection;