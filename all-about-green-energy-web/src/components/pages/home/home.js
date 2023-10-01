import videoBg from "/Users/jeremiah/all-about-green-energy/all-about-green-energy/all-about-green-energy-web/src/bg.mp4";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="video-container">
        <video src={videoBg} autoPlay loop muted />
        <button>learn more</button>
      </div>
    </div>
  );
};

export default Home;
