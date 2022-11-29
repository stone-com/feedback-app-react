import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback} = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet!</p>;
  }
  return (
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
