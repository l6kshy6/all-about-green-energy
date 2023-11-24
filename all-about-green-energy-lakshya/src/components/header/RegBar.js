import { Link } from "react-router-dom";
import logo from "./logo.png";

const RegBar = (props) => {
  return (
    <>
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
    </>
  );
};

export default RegBar;
