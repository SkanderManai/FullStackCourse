import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import Notification from "./Components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((intialPersons) => {
      setPersons(intialPersons);
    });
  }, []);

  const updateNumber = (personObject) => {
    const person = persons.find((p) => p.name === personObject.name);
    const changedPerson = { ...person, number: personObject.number };
    personService.update(changedPerson).then((updatedPerson) => {
      setPersons(
        persons.map((person) =>
          person.id !== changedPerson.id ? person : updatedPerson
        )
      );
      setMessage({
        text: `Updated ${updatedPerson.name}'s number`,
        error: false,
      });
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = { name: newName, number: newNumber };
    let namesList = persons.map((person) => person.name);
    if (namesList.includes(personObject.name)) {
      if (
        window.confirm(
          `${personObject.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        updateNumber(personObject);
      }
    } else {
      personService.create(personObject).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setMessage({
          text: `Added ${newPerson.name}`,
          error: false,
        });
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    let temp = event.target.value
      ? filterPersons(persons, event.target.value)
      : persons;
    setFilteredPersons(temp);
  };

  const filterPersons = (persons, filter) => {
    return persons.filter((person) => {
      return person.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deleteEntry(person.id)
        .then((deletedPerson) => {
          setPersons(persons.filter((p) => p.id !== deletedPerson.id));
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          setMessage({
            text: `Information of ${person.name} has already been removed from server `,
            error: 1,
          });
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setPersons(persons.filter((p) => p.id !== person.id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} onChange={handleFilterChange} />
      <h3>Add a new person</h3>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        numberValue={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        persons={filter ? filteredPersons : persons}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
