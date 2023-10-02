import videoBg from "/Users/jeremiah/all-about-green-energy/all-about-green-energy/all-about-green-energy-web/src/bg.mp4";
import "./home.css";
import PageContent from "../../PageContent";

const Home = () => {
  return (
    <div>
      <div className="video-container">
        <video src={videoBg} autoPlay loop muted />
        <button className="home-learn-more-btn">Learn more</button>
      </div>
      <PageContent>
        <div>lkajlkfajsdfs</div>
      </PageContent>
    </div>
  );
};

export default Home;
