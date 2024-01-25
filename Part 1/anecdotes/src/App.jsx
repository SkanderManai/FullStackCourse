import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(8).fill(0));
  const [maxVotesIndex, setMaxVotesIndex] = useState(0);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const nextHandler = () => {
    setSelected(getRandomInt(0, 8));
  };

  const maxVotesHandler = (votes) => {
    let max = votes[0];
    let maxIndex = 0;

    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > max) {
        max = votes[i];
        maxIndex = i;
      }
    }
    setMaxVotesIndex(maxIndex);
  };

  const voteHandler = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    maxVotesHandler(copy);
  };

  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteHandler}>Vote</button>
      <button onClick={nextHandler}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVotesIndex]} </p>
    </div>
  );
};

export default App;
