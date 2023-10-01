import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <Link to="/" className="header-child logo">
        All about green energy.
      </Link>
      <ul>
        <li>
          <Link to="/living-green" className="header-child">
            <button>living green</button>
          </Link>
        </li>
        <li>
          <Link to="/learn-more" className="header-child">
            <button>learn more</button>
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="header-child">
            <button>about us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
