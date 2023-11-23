import "./Text.css";
import { Link } from "react-router-dom";

const Text = (props) => {
  const Button = () => {
    return (
      <Link to={props.btnRoute}>
        <button onClick={props.clickHandler} className="text__button">
          Learn more
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
            <>
              <p className="regular-text">{text}</p>
              {index == props.btnIndex ? <Button /> : ""}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Text;
