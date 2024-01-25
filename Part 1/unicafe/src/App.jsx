import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Display = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={handleGoodClick} text={"good"} />
        <Button onClick={handleNeutralClick} text={"neutral"} />
        <Button onClick={handleBadClick} text={"bad"} />
      </div>
      <h1>statistics</h1>
      <div>
        <Display text={"good"} value={good} />
        <Display text={"neutral"} value={neutral} />
        <Display text={"bad"} value={bad} />
      </div>
    </div>
  );
}

export default App;
