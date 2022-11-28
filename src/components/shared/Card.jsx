import { PropTypes } from 'prop-types';
const Card = ({ children, reverse }) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
};

// Setting proptypes for practice
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
