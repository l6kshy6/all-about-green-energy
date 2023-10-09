import "./AboutUs.css";
import PageContent from "../../PageContent";
import { Fade } from "react-reveal";
import Text from "../../Text";

const AboutUs = () => {
  const isEven = (num) => {
    if (num % 2 == 0) {
      return true;
    }
    return false;
  };
  const aboutUsContent = [
    {
      title: "Jeremiah de Guzman",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/07/14/16893608205539.jpg",
    },
    {
      title: "Lakshya Mehta",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://media.gq.com/photos/63371e057eeeca09549d75e8/1:1/w_1683,h_1683,c_limit/GU774_LUGGAGE%20RG_DPS_PR%20CROPS_150dpi_5.jpeg",
    },
    {
      title: "Vasista Ramachandruni",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/df/MJK_08789_Robert_Pattinson_%28Damsel%2C_Berlinale_2018%29_%28cropped%29.jpg",
    },
    {
      title: "Kaleb Ermitanio",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://pbs.twimg.com/profile_images/1299844050208555008/7wMQaJRA_400x400.jpg",
    },
    {
      title: "Tyler Nguyen",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://lh4.googleusercontent.com/qvR_O91V0A0LsajVcegLANfgCKbwYP1D5c_DOVWJy7riYTjoNkziV84lKDAmt9IVVQ1q2b1c9CHaoH6wyIPdoP8skqmiyquvHlVPhFGNN9-sVW964f9l9iRqX0gH8Joa5jOhBKelii35LEz_6BYLiRU",
    },
  ];
  return (
    <PageContent>
      <p className="page-head">About Us</p>
      {aboutUsContent.map((item, index) => (
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
  );
};

export default AboutUs;
