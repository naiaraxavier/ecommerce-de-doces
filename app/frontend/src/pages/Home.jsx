import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";


function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Carousel />
      <About />
      <Footer />
    </main>
  )
}

export default Home;
