const Persons = ({ persons, onDelete }) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}{" "}
            <button
              onClick={() => {
                onDelete(person);
              }}
            >
              {" "}
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Persons;
