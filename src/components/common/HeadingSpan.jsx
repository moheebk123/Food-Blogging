import propTypes from "prop-types";

const HeadingSpan = ({ text, redColor }) => {
  return (
    <span
      className={`${
        redColor ? "text-red-500" : "text-[#0E2368]"
      } font-bold text-5xl`}
    >
      {text}
    </span>
  );
};

HeadingSpan.propTypes = {
  text: propTypes.string.isRequired,
  redColor: propTypes.bool.isRequired,
};

export default HeadingSpan;
