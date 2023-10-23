import "./Text.css";
import { Link } from "react-router-dom";

const Text = (props) => {
  const Button = () => {
    return (
      <Link to={props.btnRoute}>
        <button onClick={props.clickHandler} className="text__button">
          Learn More
        </button>
      </Link>
    );
  };

  return (
    <div className="text-container half">
      <div>
        <p className="big-text">{props.bigText}</p>
        {props.regularText.map((text, index) => {
          return (
            <p className="regular-text">
              {text} {index == props.btnIndex ? <Button /> : ""}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Text;
