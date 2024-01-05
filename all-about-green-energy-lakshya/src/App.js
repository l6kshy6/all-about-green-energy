import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/home";
import AboutUs from "./components/pages/about-us/AboutUs";
import LearnMore from "./components/pages/learn-more/LearnMore";
import LivingGreen from "./components/pages/living-green/LivingGreen";
import ClimateChange from "./components/pages/climate-change/ClimateChange";
import { useState } from "react";

function App() {
  const [scroll, setScroll] = useState(window.scrollY);
  const [width, setWidth] = useState(window.innerWidth);
  const [pageIsSet, setPageIsSet] = useState(false);

  if (!pageIsSet) {
    window.scrollBy(0, -scroll);
    setPageIsSet(true);
  }

  const location = useLocation();

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const navHome =
    location.pathname == "/all-about-green-energy" ||
    location.pathname == "/all-about-green-energy/";
  return (
    <div className="App">
      {navHome ? null : (
        <Header
          navHome={false}
          width={width}
          scroll={scroll}
          setPageIsSet={setPageIsSet}
        />
      )}
      <Routes>
        <Route
          path="/all-about-green-energy"
          element={
            <Home scroll={scroll} width={width} setPageIsSet={setPageIsSet} />
          }
        />
        <Route
          path="/all-about-green-energy/about-us"
          element={<AboutUs width={width} />}
        />
        <Route
          path="/all-about-green-energy/learn-more"
          element={<LearnMore width={width} />}
        />
        <Route
          path="/all-about-green-energy/living-green"
          element={<LivingGreen width={width} />}
        />
        <Route
          path="/all-about-green-energy/climate-change"
          element={<ClimateChange width={width} />}
        />
      </Routes>
      {navHome ? (
        <Header
          navHome={true}
          width={width}
          scroll={scroll}
          setPageIsSet={setPageIsSet}
        />
      ) : null}
    </div>
  );
}

export default App;
