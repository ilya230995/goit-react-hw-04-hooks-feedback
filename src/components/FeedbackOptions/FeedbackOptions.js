import s from './FeedbackOptison.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(options).map((el, index) => (
        <button
          className={s.feedbackBtn}
          key={index}
          onClick={() => onLeaveFeedback(el)}
        >
          {el}
        </button>
      ))}
    </>
  );
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func,
};
