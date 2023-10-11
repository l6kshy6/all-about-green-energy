import videoBg from "./bg.mp4";
import "./home.css";
import PageContent from "../../PageContent";
import { Fade } from "react-reveal";
import Text from "../../Text";

const Home = () => {
  const homeContent = [
    {
      title: "What is green energy?",
      text: "Basically, green energy is energy that is produced without harming the natural environment.",
      img: "https://dalrada.com/wp-content/uploads/2022/07/clean-vs-green-energy.jpg",
    },
    {
      title: "Is it the same as renewable energy?",
      text: "Not exactly the same thing, the important thing to note is that most green energy sources are also renewable, some renewable resources are not green. Energy is renewable if it is simply produced from sources that are regularly renewed.",
      img: "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-12T154605.688.jpg",
    },
    {
      title: "What about clean energy?",
      text: "Clean energy is energy, when if used, creates minimal or no greenhouse gas emissions. Like renewable energy, not all clean energy is completely green.",
      img: "https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg",
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
          Learn more
        </button>
      </div>
      <PageContent>
        {homeContent.map((item, index) => (
          <Fade top>
            <div className="content-container">
              {isEven(index) ? (
                <img src={item.img} className="half img" />
              ) : (
                <Text bigText={item.title} regularText={item.text} />
              )}
              {!isEven(index) ? (
                <img src={item.img} className="half img" />
              ) : (
                <Text bigText={item.title} regularText={item.text} />
              )}
            </div>
          </Fade>
        ))}
      </PageContent>
    </div>
  );
};

export default Home;
