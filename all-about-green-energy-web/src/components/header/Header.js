import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav nav-home">
      <Link to="/" className="header-child logo">
        All about green energy.
      </Link>
      <ul>
        <li>
          <Link to="/living-green" className="header-child">
            <button>Living green</button>
          </Link>
        </li>
        <li>
          <Link to="/home" className="header-child">
            <button>Learn more</button>
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="header-child">
            <button>About us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
