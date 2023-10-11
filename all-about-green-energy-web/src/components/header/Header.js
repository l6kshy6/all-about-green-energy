import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <nav className={`nav ${props.navHome ? "nav-home" : ""}`}>
      <Link to="/all-about-green-energy" className="header-child logo">
        All about green energy.
      </Link>
      <ul>
        <li>
          <Link to="/all-about-green-energy/living-green" className="header-child">
            <button>Living green</button>
          </Link>
        </li>
        <li>
          <Link to="/all-about-green-energy" className="header-child">
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
