const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet!</p>
  }
  return <div>FeedbackList</div>;
};

export default FeedbackList;
