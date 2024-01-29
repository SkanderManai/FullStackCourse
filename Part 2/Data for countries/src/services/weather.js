import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_KEY

const getWeather = (latlng) => {
    // console.log("i got here")
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${apiKey}&units=metric`
    return axios.get(baseUrl).then(response => {
        // console.log(response.data)
        return response.data
    })
}

export default getWeather