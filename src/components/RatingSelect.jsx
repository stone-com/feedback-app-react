const RatingSelect = ({ setRating, selected }) => {
  const handleChange = (e) => {
    // use + (unary plus operator) to convert e target value string to a number
    setRating(+e.target.value);
  };
  return (
    <ul className='rating'>
      {/* use Array.from to iterate over an array of 10 and create 10 radio buttons, not sure if this is the best way, but wanted to try out using Array.from method.*/}
      {Array.from({ length: 10 }, (value, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
