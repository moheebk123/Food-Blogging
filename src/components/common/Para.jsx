import propTypes from "prop-types";

const Para = ({ text, fontSize }) => {
  return <p className={`${fontSize}`}>{text}</p>;
};

Para.propTypes = {
  text: propTypes.string.isRequired,
  fontSize: propTypes.string.isRequired,
};

export default Para;
