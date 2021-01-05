import { useState } from 'react';

import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import SectionTitle from './components/SectionTitle/SectionTitle';
import NotificationMessage from './components/NotificationMessage/NotificationMessage';
import Container from './components/Container/Container';

function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const addFeedback = type => {
    switch (type) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;
      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const totalFeedback = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / totalFeedback) * 100);
  };
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <Container>
      <SectionTitle title="Please leave feedback" />
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={addFeedback}
      />
      <SectionTitle title="Statistics" />
      {countTotalFeedback === 0 ? (
        <NotificationMessage message="No feedback given" />
      ) : (
        <Statistics
          total={totalFeedback}
          good={good}
          neutral={neutral}
          bad={bad}
          positiveFeedbackPercentege={positiveFeedback}
        />
      )}
    </Container>
  );
}

export default App;
