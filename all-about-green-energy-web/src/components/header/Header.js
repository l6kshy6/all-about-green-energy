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
          <Link to="/about-us" className="header-child">
            about us
          </Link>
        </li>
        <li>
          <Link to="/learn-more" className="header-child">
            learn more
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
