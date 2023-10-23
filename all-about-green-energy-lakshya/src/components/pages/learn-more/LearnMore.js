import { Fade } from "react-reveal";
import Text from "../../Text";
import PageContent from "../../PageContent";

const LearnMore = () => {
  const isEven = (num) => {
    if (num % 2 == 0) {
      return true;
    }
    return false;
  };
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
        <p className="page-head">Learn more about green energy.</p>
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
    </PageContent>
  );
};

export default LearnMore;
