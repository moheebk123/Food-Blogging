import propTypes from "prop-types";

const FooterColumn = ({ children, classes }) => {
  return <div className={`${classes ? classes : ""} text-left flex flex-col gap-2`}>{children}</div>;
};

FooterColumn.propTypes = {
  children: propTypes.node.isRequired,
  classes: propTypes.string
};

export default FooterColumn;
