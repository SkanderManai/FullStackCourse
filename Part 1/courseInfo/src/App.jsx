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
      <Part partName={props.parts[0].name} number={props.parts[0].exercises} />
      <Part partName={props.parts[1].name} number={props.parts[1].exercises} />
      <Part partName={props.parts[2].name} number={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  const totalNumber =
    props.firstNumber + props.secondNumber + props.thirdNumber;
  return <p>Number of exercises {totalNumber} </p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total
        firstNumber={part1.exercises}
        secondNumber={part2.exercises}
        thirdNumber={part3.exercises}
      />
    </div>
  );
};

export default App;
