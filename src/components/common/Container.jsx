import propTypes from "prop-types";

const Container = ({ classes, children }) => {
  return (
    <div className={`${classes ? classes : ""} w-full max-w-[1440px] mx-auto`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  classes: propTypes.string,
  children: propTypes.node.isRequired
};

export default Container;
