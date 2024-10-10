import propTypes from "prop-types";

const Button = ({
  text,
  fontSize,
  textColor,
  backgroundColor,
  borderWidth,
  borderColor,
}) => {
  return (
    <button
      className={`transition ease-in-out duration-300 py-3 px-6 cursor-pointer hover:scale-110 rounded-full ${
        fontSize ? fontSize : ""
      } ${textColor ? textColor : ""} ${
        backgroundColor ? backgroundColor : ""
      } ${borderWidth ? borderWidth : ""} ${borderColor ? borderColor : ""}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  fontSize: propTypes.string.isRequired,
  textColor: propTypes.string,
  backgroundColor: propTypes.string,
  borderWidth: propTypes.string,
  borderColor: propTypes.string,
};

export default Button;
