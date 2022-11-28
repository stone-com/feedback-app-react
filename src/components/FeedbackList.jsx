import FeedbackItem from './FeedbackItem';
import { PropTypes } from 'prop-types';

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet!</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
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
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
