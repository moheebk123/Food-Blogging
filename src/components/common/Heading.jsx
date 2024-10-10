import propTypes from "prop-types";

const Heading = ({ text, fontSize }) => {
  return <div className={`${fontSize} font-bold text-[#0E2368]`}>{text}</div>;
};

Heading.propTypes = {
  text: propTypes.string.isRequired,
  fontSize: propTypes.string.isRequired,
};

export default Heading;
