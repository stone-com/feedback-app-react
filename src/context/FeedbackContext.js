import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Setting up context to use state globally instead of prop drilling
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // fetch feedback, sort by ID, descending order
  const fetchFeedback = async () => {
    const response = await fetch(
      'http://localhost:5500/feedback?_sort=id&_order=desc'
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Delete Feedback Item
  const deleteFeedback = (id) => {
    // Alert/ask user to confirm before deleting the feedback
    if (window.confirm('Are you sure you want to delete??')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // Add Feedback Item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback item
  // Map through all feedback, find Id that matches and update that item with updated item, else just return the item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
