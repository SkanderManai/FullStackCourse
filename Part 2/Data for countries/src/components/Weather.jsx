/* eslint-disable react/prop-types */
//import getWeather from "../services/weather";

const Weather = ({ capital, weather }) => {
  //  const weather = getWeather(latLng[0], latLng[1]).then((weather) => {});
  const imgUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div>temperature : {weather.main.temp}</div>
      <div>
        <img src={imgUrl} alt="" />
      </div>
      <div>wind {weather.wind.speed} m/s</div>
    </div>
  );
};

export default Weather;
