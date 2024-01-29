/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

function App() {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get(`${baseUrl}/all`).then((response) => setCountries(response.data));
  }, []);

  const filterCountries = (filter, countries) => {
    return countries.filter((country) => {
      return country.name.common.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const temp = event.target.value
      ? filterCountries(event.target.value, countries)
      : [];
    setFilteredCountries(temp);
  };

  const DisplayCountries = () => {
    if (!filteredCountries) {
      return null;
    }
    if (filteredCountries.length > 10) {
      return <div>Too many matches, specify another filter</div>;
    }
    if (filteredCountries.length > 1 && filteredCountries.length < 10) {
      return (
        <div>
          {filteredCountries.map((country) => {
            return <div key={country.name.common}>{country.name.common}</div>;
          })}
        </div>
      );
    }
    if (filteredCountries.length === 1) {
      return <Country country={filteredCountries[0]} />;
    }
  };

  const Country = ({ country }) => {
    // debugger;
    return (
      <div>
        <h1>{country.name.common} </h1>
        <div>capital {country.capital[0]}</div>
        <div>area {country.area} </div>
        <h2>Languages </h2>
        <ul>
          {Object.keys(country.languages).map((key) => {
            return <li key={key}>{country.languages[key]}</li>;
          })}
        </ul>
        <div>
          <img src={country.flags.png} alt={country.flags.alt} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        search for country{" "}
        <input value={filter} onChange={handleFilterChange} />
      </div>
      <DisplayCountries />
    </div>
  );
}

export default App;
