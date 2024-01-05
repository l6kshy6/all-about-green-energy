import videoBg from "./bg.mp4";
import "./home.css";
import PageContent from "../../PageContent";
import { Fade } from "react-reveal";
import Text from "../../Text";
import { useState } from "react";
import ExpandArrow from "./ExpandArrow";

const Home = (props) => {
  const [expandArrowActive, setExpandArrowActive] = useState(false);

  const mouseEnterHandler = () => {
    setExpandArrowActive(true);
  };
  const mouseLeaveHandler = () => {
    setExpandArrowActive(false);
  };

  const homeContent = [
    {
      title: "What even is green energy?",
      text: [
        "Basically, green energy is energy that is produced without harming the natural environment.",
      ],
      img: "https://dalrada.com/wp-content/uploads/2022/07/clean-vs-green-energy.jpg",
      position:
        props.width > 800
          ? "-650px"
          : "-440px" /*changes the horizontal offset of the image, positive value pans image to left, negative pans to right*/,
      btnIndex: 0,
      btnRoute: "/all-about-green-energy/learn-more",
    },
    {
      title: "Why is this important?",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      img: "https://media.npr.org/assets/img/2014/03/18/464593903-polar-bears-water_wide-020cc7e692251ae0a9dd350208ddf43bf5a764d0-s1400-c100.jpg",
      position:
        "-60px" /*changes the horizontal offset of the image, positive value pans image to left, negative pans to right*/,
      btnIndex: 0,
      btnRoute: "/all-about-green-energy/climate-change",
    },
    {
      title: "What can you do?",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      img: "https://kellogggarden.com/wp-content/uploads/2020/05/family-planting-tree.jpg",
      position:
        "-140px" /*changes the horizontal offset of the image, positive value pans image to left, negative pans to right*/,
      btnIndex: 0,
      btnRoute: "/all-about-green-energy/living-green",
    },
  ];

  const toLearnMoreHandler = () => {
    const navHeight = document.querySelector(".nav").offsetHeight;
    window.scrollBy({
      top: window.innerHeight - navHeight - props.scroll,
      behavior: "smooth",
    });
    setExpandArrowActive(false);
  };

  return (
    <div>
      <div className="video-container">
        <video src={videoBg} autoPlay loop muted playsInline />
        <button
          className="home-learn-more-btn"
          onClick={toLearnMoreHandler}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          Explore
          <div
            className={`expand-arrow ${
              expandArrowActive ? "expand-arrow-active" : ""
            }`}
          >
            <ExpandArrow
              className={`expand-arrow-svg ${
                expandArrowActive ? "expand-arrow-svg-active" : ""
              }`}
            />
          </div>
        </button>
      </div>
      <PageContent>
        {homeContent.map((item, index) => {
          const HomeText = () => (
            <Text
              bigText={item.title}
              regularText={item.text}
              btnIndex={item.btnIndex}
              btnRoute={item.btnRoute}
              clickHandler={() => props.setPageIsSet(false)}
            />
          );
          return (
            <Fade bottom>
              <div className="content-container">
                {props.width > 800 && index % 2 == 0 ? (
                  <>
                    <img
                      src={item.img}
                      className="half"
                      style={{ objectPosition: item.position }}
                    />
                    <HomeText />
                  </>
                ) : (
                  <>
                    <HomeText />
                    <img
                      src={item.img}
                      className="half"
                      style={{ objectPosition: item.position }}
                    />
                  </>
                )}
              </div>
            </Fade>
          );
        })}
      </PageContent>
    </div>
  );
};

export default Home;
