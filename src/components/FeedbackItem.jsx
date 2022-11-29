import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import { PropTypes } from 'prop-types';

const FeedbackItem = ({ item, handleDelete, reverse }) => {
  return (
    <Card reverse={reverse}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

// Setting Proptypes
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
