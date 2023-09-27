import videoBg from "/Users/jeremiah/all-about-green-energy/all-about-green-energy/all-about-green-energy-web/src/bg.mp4";
import "./home.css";

const Home = () => {
  return (
    <div>
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
};

export default Home;
