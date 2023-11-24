import { Link } from "react-router-dom";
import "./SideBar.css";
import CloseSVG from "./CloseSVG";

const SideBar = (props) => {
  const closeClickHandler = () => {
    props.setSideBarActive(false);
  };

  return (
    <div className={props.className}>
      <CloseSVG onClick={closeClickHandler} />
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
