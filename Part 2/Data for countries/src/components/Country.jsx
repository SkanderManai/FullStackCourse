/* eslint-disable react/prop-types */
const Country = ({ country }) => {
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

export default Country;
