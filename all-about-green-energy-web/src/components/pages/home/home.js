import videoBg from "/Users/jeremiah/all-about-green-energy/all-about-green-energy/all-about-green-energy-web/src/bg.mp4";
import "./home.css";
import PageContent from "../../PageContent";

const Home = () => {
  const toLearnMoreHandler = () => {
    const element = document.querySelector(".text-container");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
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
        <div className="half-left">
          <img
            src="https://dalrada.com/wp-content/uploads/2022/07/clean-vs-green-energy.jpg"
            className="half img"
          />
        </div>
        <div className="half-right">
          <div className="text-container half">
            <p className="big-text text">What is green energy?</p>
            <p className="regular-text text">
              Basically, green energy is energy that is produced without harming
              the environment
            </p>
          </div>
        </div>
      </PageContent>
    </div>
  );
};

export default Home;
