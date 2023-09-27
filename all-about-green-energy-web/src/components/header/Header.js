import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="header">
      <Link to="/" className="header-child">
        All about green energy.
      </Link>
      <Link to="/about-us" className="header-child">
        about us
      </Link>
      <Link to="/learn-more" className="header-child">
        learn more
      </Link>
    </div>
  );
};

export default Header;
