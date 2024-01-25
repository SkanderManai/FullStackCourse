const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.partName} {props.number}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part partName={props.partNames[0]} number={props.exercises[0]} />
      <Part partName={props.partNames[1]} number={props.exercises[1]} />
      <Part partName={props.partNames[2]} number={props.exercises[2]} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.totalNumber} </p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const partNames = [part1, part2, part3];
  const exercises = [exercises1, exercises2, exercises3];

  return (
    <div>
      <Header course={course} />
      <Content partNames={partNames} exercises={exercises} />
      <Total totalNumber={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
