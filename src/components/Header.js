import PropTypes from "prop-types";
//import Button from './Button'
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 style={{ fontWeight: "bolder" }}>Todo App</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};
//block css
const headingStyle = {
  color: "purple",
};

export default Header;
