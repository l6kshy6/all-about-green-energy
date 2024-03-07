import { Link } from "react-router-dom";
import logo from "./logo.png";

const RegBar = (props) => {
  const linkClickHandler = () => props.setPageIsSet(false);

  return (
    <>
      <ul>
        <li>
          <Link to="/climate-change" className="header-child">
            <button onClick={linkClickHandler}>Climate change</button>
          </Link>
        </li>
        <li>
          <Link to="/living-green" className="header-child">
            <button onClick={linkClickHandler}>Living green</button>
          </Link>
        </li>
        <li>
          <Link to="/learn-more" className="header-child">
            <button onClick={linkClickHandler}>Learn more</button>
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="header-child">
            <button onClick={linkClickHandler}>About us</button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default RegBar;
