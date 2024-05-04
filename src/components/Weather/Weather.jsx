import { useState } from "react";
import axios from "axios";

import css from "../Weather/Weather.module.css";

import WeatherInfo from "../WeatherInfo/WeatherInfo";
import Forecast from "../Forecast/Forecast";

export default function Weather(props) {
  const [showWeatherData, setWeatherData] = useState({ ready: false });
  const [showCity, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      icon: response.data.condition.icon,
      temperature: Math.round(response.data.temperature.current),
      feels_like: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      time: new Date(response.data.time * 1000),
      description: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }

  function handleCityChange(event) {
    //update city
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "6fa3cb02fc6ct4bd31ab65905b1ado1a";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${showCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (showWeatherData.ready) {
    return (
      <div className={css.weather}>
        <form onSubmit={handleSubmit}>
          <div className={css.searchLine}>
            <div>
              <input
                type="search"
                placeholder="Search a city..."
                className={css.formControl}
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div>
              <input type="submit" value="Search" className={css.btn} />
            </div>
          </div>
        </form>

        <WeatherInfo data={showWeatherData} />
        <Forecast coordinates={showWeatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <span className={css.loader}></span>;
  }
}
