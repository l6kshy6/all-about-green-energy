import videoBg from "./bg.mp4";
import "./home.css";
import PageContent from "../../PageContent";
import { Fade } from "react-reveal";
import Text from "../../Text";

const Home = () => {
  const homeContent = [
    {
      title: "What even is green energy?",
      text: [
        "Basically, green energy is energy that is produced without harming the natural environment.",
        "Still curious?",
      ],
      img: "https://dalrada.com/wp-content/uploads/2022/07/clean-vs-green-energy.jpg",
      btnIndex: 1,
      btnRoute: "/all-about-green-energy/learn-more",
    },
    {
      title: "Why is this important?",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "To learn more about climate change,",
      ],
      img: "https://media.npr.org/assets/img/2014/03/18/464593903-polar-bears-water_wide-020cc7e692251ae0a9dd350208ddf43bf5a764d0-s1400-c100.jpg",
      btnIndex: 1,
      btnRoute: "/all-about-green-energy/climate-change",
    },
    {
      title: "What can you do?",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "To learn more about what you can do,",
      ],
      img: "https://kellogggarden.com/wp-content/uploads/2020/05/family-planting-tree.jpg",
      btnIndex: 1,
      btnRoute: "/all-about-green-energy/living-green",
    },
  ];

  const isEven = (num) => {
    if (num % 2 == 0) {
      return true;
    }
    return false;
  };

  const toLearnMoreHandler = () => {
    const element = document.querySelector(".page-content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="video-container">
        <video src={videoBg} autoPlay loop muted />
        <button className="home-learn-more-btn" onClick={toLearnMoreHandler}>
          Explore
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
            />
          );
          return (
            <Fade bottom>
              <div className="content-container">
                {isEven(index) ? (
                  <img src={item.img} className="half img" />
                ) : (
                  <HomeText />
                )}
                {!isEven(index) ? (
                  <img src={item.img} className="half img" />
                ) : (
                  <HomeText />
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
