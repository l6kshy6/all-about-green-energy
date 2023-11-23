import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";

const Header = (props) => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <nav
      className={`nav ${props.navHome ? "nav-home" : ""} ${
        scroll > 0 && props.navHome ? "burger" : ""
      }`}
    >
      <Link to="/all-about-green-energy" className="header-child logo">
        {width > 1100 ? (
          "All about green energy."
        ) : (
          <img src={logo} className="logo-img"></img>
        )}
      </Link>
      <ul>
        <li>
          <Link
            to="/all-about-green-energy/climate-change"
            className="header-child"
          >
            <button>Climate change</button>
          </Link>
        </li>
        <li>
          <Link
            to="/all-about-green-energy/living-green"
            className="header-child"
          >
            <button>Living green</button>
          </Link>
        </li>
        <li>
          <Link
            to="/all-about-green-energy/learn-more"
            className="header-child"
          >
            <button>Learn more</button>
          </Link>
        </li>
        <li>
          <Link to="/all-about-green-energy/about-us" className="header-child">
            <button>About us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
