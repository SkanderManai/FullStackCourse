/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import Country from "./components/Country";
import CountriesList from "./components/CountriesList";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

function App() {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

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
    setSelectedCountry(null);
    const temp = event.target.value
      ? filterCountries(event.target.value, countries)
      : [];
    setFilteredCountries(temp);
  };

  const handleShowButton = (country) => {
    setSelectedCountry(country);
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
        <CountriesList
          countries={filteredCountries}
          onClick={handleShowButton}
        />
      );
    }
    if (filteredCountries.length === 1) {
      return <Country country={filteredCountries[0]} />;
    }
  };

  const Display = () => {
    if (!selectedCountry) {
      return <DisplayCountries />;
    }
    return <Country country={selectedCountry} />;
  };

  return (
    <div>
      <div>
        search for country{" "}
        <input value={filter} onChange={handleFilterChange} />
      </div>
      <Display />
    </div>
  );
}

export default App;
