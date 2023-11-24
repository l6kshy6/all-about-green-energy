const CloseSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="50"
    viewBox="0 -960 960 960"
    width="50"
    className="close-svg"
    onClick={props.onClick}
  >
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </svg>
);

export default CloseSVG;
