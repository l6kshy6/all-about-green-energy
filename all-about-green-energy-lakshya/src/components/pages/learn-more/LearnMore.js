import { Fade } from "react-reveal";
import Text from "../../Text";
import PageContent from "../../PageContent";
import ArrowForward from "./ArrowForward";
import ArrowBack from "./ArrowBack";
import "./LearnMore.css";
import { useState } from "react";

const LearnMore = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animation, setAnimation] = useState(600);

  const isEven = (num) => {
    if (num % 2 == 0) {
      return true;
    }
    return false;
  };

  const ArrowForwardHandler = () => {
    if (slideIndex !== slides.length - 1) {
      setSlideIndex(slideIndex + 1);
      setAnimation(animation - 1140);
    }
  };
  const ArrowBackHandler = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
      setAnimation(animation + 1140);
    }
  };

  const slides = [
    {
      type: "Solar",
      img: "https://www.marketplace.org/wp-content/uploads/2023/01/GettyImages-1336080074.jpg?fit=3800%2C2533",
    },
    {
      type: "Wind",
      img: "https://www.treehugger.com/thmb/tPH_RvCSAC71lrHLaG7pLlK3bJ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-505412046-0728e5aa8a1c417aa3837f363126cb96.jpg",
    },
  ];

  const learnMoreContent = [
    {
      title: "Is it the same as renewable energy?",
      text: [
        "Not exactly the same thing, the important thing to note is that most green energy sources are also renewable, some renewable resources are not green. Energy is renewable if it is simply produced from sources that are regularly renewed.",
      ],
      img: "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-12T154605.688.jpg",
    },
    {
      title: "What about clean energy?",
      text: [
        "Clean energy is energy, when if used, creates minimal or no greenhouse gas emissions. Like renewable energy, not all clean energy is completely green.",
      ],
      img: "https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg",
    },
  ];
  return (
    <PageContent>
      <Fade bottom>
        <p className="page-head">Learn more about green energy</p>
      </Fade>
      {learnMoreContent.map((item, index) => (
        <Fade bottom>
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
      <p className="big-text">Types of clean energy</p>
      <div className="slide-container">
        <div
          className="slide-img-container"
          style={{ transform: `translate(${animation}px)` }}
        >
          {slides.map((slide) => (
            <div className={animation}>
              <p className="slide-head">{slide.type}</p>
              <img className="slide-img" src={slide.img} />
            </div>
          ))}
        </div>
        <ArrowForward onArrowForward={ArrowForwardHandler} />
        <ArrowBack onArrowBack={ArrowBackHandler} />
      </div>
    </PageContent>
  );
};

export default LearnMore;
