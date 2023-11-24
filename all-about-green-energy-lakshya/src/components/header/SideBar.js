import { Link } from "react-router-dom";
import "./SideBar.css";
import logo from "./logo.png";

const SideBar = (props) => {
  return (
    <div
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <Link to="/all-about-green-energy" className="header-child logo">
        All about green energy.
      </Link>
      <ul>
        <li>
          <Link
            to="/all-about-green-energy/climate-change"
            className="header-child"
          >
            <button className="side-bar-child">Climate change</button>
          </Link>
        </li>
        <li>
          <Link
            to="/all-about-green-energy/living-green"
            className="header-child"
          >
            <button className="side-bar-child">Living green</button>
          </Link>
        </li>
        <li>
          <Link
            to="/all-about-green-energy/learn-more"
            className="header-child"
          >
            <button className="side-bar-child">Learn more</button>
          </Link>
        </li>
        <li>
          <Link to="/all-about-green-energy/about-us" className="header-child">
            <button className="side-bar-child">About us</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
