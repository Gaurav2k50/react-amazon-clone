import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NavFlyOut from "./components/NavFlyOut/NavFlyOut";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import SectionMain from "./components/SectionMain/SectionMain";
import SecondSection from "./components/SectionMain/SecondSection/SecondSection";

// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Routes>
    //     <Route path="/navbar" element={<Navbar />} />
    //     <Route path="/navflyout" element={<NavFlyOut />} />
    //     <Route path="/slider" element={<Slider />} />
    //     <Route path="/footer" element={<Footer />} />
    //   </Routes>
    // </div>

    <div className="App">
      <Navbar />
      <NavFlyOut />
      <Slider />
      <SectionMain />
      <SecondSection />
      <Footer />
    </div>
  );
}

export default App;
