import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/home";
import AboutUs from "./components/pages/about-us/AboutUs";
import LearnMore from "./components/pages/learn-more/LearnMore";
import LivingGreen from "./components/pages/living-green/LivingGreen";
import ClimateChange from "./components/pages/climate-change/ClimateChange";

function App() {
  const element = document.querySelector(".App");
  if (element) {
    element.scrollIntoView();
  }
  const location = useLocation();

  const navHome =
    location.pathname == "/all-about-green-energy" ||
    location.pathname == "/all-about-green-energy/";
  return (
    <div className="App">
      {navHome ? null : <Header navHome={false} />}
      <Routes>
        <Route path="/all-about-green-energy" element={<Home />} />
        <Route path="/all-about-green-energy/about-us" element={<AboutUs />} />
        <Route
          path="/all-about-green-energy/learn-more"
          element={<LearnMore />}
        />
        <Route
          path="/all-about-green-energy/living-green"
          element={<LivingGreen />}
        />
        <Route
          path="/all-about-green-energy/climate-change"
          element={<ClimateChange />}
        />
      </Routes>
      {navHome ? <Header navHome={true} /> : null}
    </div>
  );
}

export default App;
