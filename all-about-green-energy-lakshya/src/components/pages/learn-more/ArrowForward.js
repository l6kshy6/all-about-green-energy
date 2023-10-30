import "./LearnMore.css";

const ArrowForward = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="75"
      viewBox="0 -960 960 960"
      width="75"
      className="slide-arrow arrow-right"
      onClick={props.onArrowForward}
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
};

export default ArrowForward;
