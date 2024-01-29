/* eslint-disable react/prop-types */
const CountriesList = ({ countries, onClick }) => {
  return (
    <div>
      {countries.map((country) => {
        return (
          <li key={country.name.common}>
            {country.name.common}{" "}
            <button
              onClick={() => {
                onClick(country);
              }}
            >
              show
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default CountriesList;
