import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positiveFeedbackPercentege }) {
  return (
    <ul className={s.statisticsFeedback}>
      <li className={s.statisticsFeedbackItem}>Good: {good}</li>
      <li className={s.statisticsFeedbackItem}>Neutural: {neutral}</li>
      <li className={s.statisticsFeedbackItem}>Bad: {bad}</li>
      <li className={s.statisticsFeedbackItem}>Total: {total}</li>
      <li className={s.statisticsFeedbackItem}>
        Positive feedback:{' '}
        {total === 0
          ? (positiveFeedbackPercentege = 0)
          : positiveFeedbackPercentege}
      </li>
    </ul>
  );
}
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentege: PropTypes.number.isRequired,
};
