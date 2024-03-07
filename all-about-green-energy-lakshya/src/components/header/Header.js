import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";
import RegBar from "./RegBar";
import SideBar from "./SideBar";
import MenuSVG from "./MenuSVG";

const Header = (props) => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [sideBarActive, setSideBarActive] = useState(false);

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const onClickHandler = () => {
    setSideBarActive(true);
  };

  return (
    <>
      <SideBar
        className={`side-bar ${sideBarActive ? "side-bar-active" : ""}`}
        setSideBarActive={setSideBarActive}
        setPageIsSet={props.setPageIsSet}
      />
      <div className="outer-nav">
        <nav
          className={`nav ${props.navHome ? "nav-home" : ""} ${
            scroll > 0 && props.navHome ? "burger" : ""
          }`}
        >
          <Link
            to="/"
            className="header-child logo"
            onClick={() => props.setPageIsSet(false)}
          >
            {width > 1100 ? (
              "All about green energy."
            ) : (
              <img src={logo} className="logo-img"></img>
            )}
          </Link>
          {width > 800 ? (
            <RegBar setPageIsSet={props.setPageIsSet} />
          ) : (
            <MenuSVG onClick={onClickHandler} />
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
