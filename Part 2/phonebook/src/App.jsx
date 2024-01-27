import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = { name: newName };
    let namesList = persons.map((person) => person.name);
    if (namesList.includes(personObject.name)) {
      alert(`${personObject.name} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <div key={person.name}>{person.name}</div>;
      })}
    </div>
  );
};

export default App;
