import { Link } from "react-router-dom";
import "./SideBar.css";
import CloseSVG from "./CloseSVG";

const SideBar = (props) => {
  const closeClickHandler = () => {
    props.setSideBarActive(false);
  };

  const linkClickHandler = () => {
    closeClickHandler();
    props.setPageIsSet(false);
  };

  return (
    <div className={props.className}>
      <CloseSVG onClick={closeClickHandler} />
      <ul>
        <li>
          <Link to="/climate-change" className="header-child">
            <button className="side-bar-child" onClick={linkClickHandler}>
              Climate change
            </button>
          </Link>
        </li>
        <li>
          <Link to="/living-green" className="header-child">
            <button className="side-bar-child" onClick={linkClickHandler}>
              Living green
            </button>
          </Link>
        </li>
        <li>
          <Link to="/learn-more" className="header-child">
            <button className="side-bar-child" onClick={linkClickHandler}>
              Learn more
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="header-child">
            <button className="side-bar-child" onClick={linkClickHandler}>
              About us
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
