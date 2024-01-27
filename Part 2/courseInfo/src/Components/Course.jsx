const Header = ({ courseName }) => {
  return <h2>{courseName} </h2>;
};

const Part = ({ partName, exercises }) => {
  return (
    <p>
      {partName} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return (
          <Part partName={part.name} exercises={part.exercises} key={part.id} />
        );
      })}
    </div>
  );
};

const Total = ({ parts }) => {
  const sum = parts.reduce((sum, part) => (sum += part.exercises), 0);
  return <p>total of {sum} exercises</p>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
