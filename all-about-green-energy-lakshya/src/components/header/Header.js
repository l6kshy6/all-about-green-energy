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
  const [overSideBar, setOverSideBar] = useState(false);
  const [overMenu, setOverMenu] = useState(false);
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  props.getOnAppClick(() => {
    if (sideBarActive && !overSideBar && !overMenu) {
      setSideBarActive(false);
    }
  });
  // window.addEventListener("click", () => {
  //   if (sideBarActive && !overSideBar && !overMenu) {
  //     setSideBarActive(false);
  //     console.log("cheeseburgers");
  //   }
  // });
  const onClickHandler = () => {
    setSideBarActive(true);
    console.log("hamburgers");
  };
  const onMouseEnterHandler = () => {
    setOverSideBar(true);
  };
  const onMouseLeaveHandler = () => {
    setOverSideBar(false);
  };
  const onMouseEnterHandlerMenu = () => {
    setOverMenu(true);
  };
  const onMouseLeaveHandlerMenu = () => {
    setOverMenu(false);
  };

  return (
    <>
      <SideBar
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className={`side-bar ${sideBarActive ? "side-bar-active" : ""}`}
      />
      <nav
        className={`nav ${props.navHome ? "nav-home" : ""} ${
          scroll > 0 && props.navHome ? "burger" : ""
        }`}
      >
        {width > 800 ? (
          <RegBar width={width} />
        ) : (
          <MenuSVG
            onClick={onClickHandler}
            onMouseEnter={onMouseEnterHandlerMenu}
            onMouseLeave={onMouseLeaveHandlerMenu}
          />
        )}
      </nav>
    </>
  );
};

export default Header;
