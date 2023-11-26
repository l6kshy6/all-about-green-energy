import { Fade } from "react-reveal";
import Text from "../../Text";
import PageContent from "../../PageContent";
import ArrowForward from "./ArrowForward";
import ArrowBack from "./ArrowBack";
import "./LearnMore.css";
import { useState } from "react";
import Circle from "./Circle";

const LearnMore = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animation, setAnimation] = useState(0);

  const isEven = (num) => {
    if (num % 2 == 0) {
      return true;
    }
    return false;
  };

  const circleClickHandler = (i) => {
    const indexDiff = slideIndex - i;
    setAnimation(animation + indexDiff * 940);
    setSlideIndex(i);
  };

  const ArrowForwardHandler = () => {
    if (slideIndex !== slides.length - 1) {
      setSlideIndex(slideIndex + 1);
      setAnimation(animation - 940);
    }
  };
  const ArrowBackHandler = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
      setAnimation(animation + 940);
    }
  };

  const slides = [
    {
      type: "Solar",
      img: "https://www.marketplace.org/wp-content/uploads/2023/01/GettyImages-1336080074.jpg?fit=3800%2C2533",
      content:
        "Solar technologies convert sunlight into electrical energy either through photovoltaic (PV) panels or through mirrors that concentrate solar radiation. The average solar panel has a power output rating of 250 to 400 watts (W) and generates around 1.5 kilowatt-hours (kWh) of energy per day.",
    },
    {
      type: "Wind",
      img: "https://www.treehugger.com/thmb/tPH_RvCSAC71lrHLaG7pLlK3bJ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-505412046-0728e5aa8a1c417aa3837f363126cb96.jpg",
      content:
        "Wind is converted into electricity using the aerodynamic force from the rotor blades. More specifically, wind flows across the blade and the air pressure on one side of the blade decreases. The difference in air pressure across the two sides of the blade creates both lift and drag.",
    },
    {
      type: "Hydro",
      img: "https://conservativeenergynetwork.org/wp-content/uploads/2022/09/cfa-hydropower.jpg",
      content:
        "Hydropower is an affordable source of electricity, due to relying only on the energy from moving water. This source of energy holds these relatively low costs throughout the duration of a full project lifetime in terms of maintenance, operations, and fuel.",
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
      <Fade bottom>
        <p className="big-text">Types of clean energy</p>
        <div className="slide-container">
          <div
            className="slide-img-container"
            style={{ transform: `translate(${animation}px)` }}
          >
            {slides.map((slide) => (
              <div className="slide">
                <p className="slide-head">{slide.type}</p>
                <p className="slider-content">{slide.content}</p>
                <div className="slide-img-behind" />
                <img className="slide-img" src={slide.img} />
              </div>
            ))}
          </div>
          <ArrowForward
            onArrowForward={ArrowForwardHandler}
            show={slideIndex == slides.length - 1}
          />
          <ArrowBack onArrowBack={ArrowBackHandler} show={slideIndex == 0} />
          <div className="slider-btn-container">
            {slides.map((slide, i) => (
              <Circle
                index={i}
                onCircleClick={circleClickHandler}
                selected={i == slideIndex ? true : false}
              />
            ))}
          </div>
        </div>
      </Fade>
    </PageContent>
  );
};

export default LearnMore;
