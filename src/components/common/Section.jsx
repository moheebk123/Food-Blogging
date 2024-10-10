import propTypes from "prop-types";

const Section = ({ classes, children }) => {
  return <div className={`${classes ? classes : ""} w-screen`}>{children}</div>;
};

Section.propTypes = {
  classes: propTypes.string,
  children: propTypes.node.isRequired,
};

export default Section;
