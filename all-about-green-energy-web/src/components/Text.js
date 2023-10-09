import "./Text.css";

const Text = (props) => {
  return (
    <div className="text-container half">
      <div>
        <p className="big-text text">{props.bigText}</p>
        <p className="regular-text text">{props.regularText}</p>
      </div>
    </div>
  );
};

export default Text;
