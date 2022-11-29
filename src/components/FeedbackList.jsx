import FeedbackItem from './FeedbackItem';
import { PropTypes } from 'prop-types';

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet!</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item, index) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          // conditional to make every other card have reverse set to true, for styling purposes
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
    </div>
  );
};

// Setting Proptypes for practice
// Checking that the feedback prop is an array of objects containing id, text, and rating
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
