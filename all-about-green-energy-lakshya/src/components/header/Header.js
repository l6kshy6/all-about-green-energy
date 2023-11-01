import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const [scroll, setScroll] = useState(0);
  window.addEventListener("scroll", (e) => {
    setScroll(window.scrollY);
  });

  return (
    <nav
      className={`nav ${props.navHome ? "nav-home" : ""} ${
        scroll > 0 && props.navHome ? "burger" : ""
      }`}
    >
      <Link to="/all-about-green-energy" className="header-child logo">
        All about green energy.
      </Link>
      <ul>
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
