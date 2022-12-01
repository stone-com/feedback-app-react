import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback yet!</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      {feedback.map((item, index) => (
        <FeedbackItem
          key={item.id}
          item={item}
          // conditional to make every other card have reverse set to true, for styling purposes
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
