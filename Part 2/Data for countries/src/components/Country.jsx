/* eslint-disable react/prop-types */
import Weather from "./Weather";

const Country = ({ country, weather }) => {
  if (!weather) {
    return <div>Loading</div>;
  }
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
      <Weather weather={weather} capital={country.capital[0]} />
    </div>
  );
};

export default Country;
