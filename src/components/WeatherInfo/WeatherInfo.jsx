import css from "../WeatherInfo/WeatherInfo.module.css";

import WeatherAnimatedIcon from "../WeatherAnimatedIcon/WeatherAnimatedIcon";
import WeatherTemperature from "../WeatherTemperature/WeatherTemperature";
import FormatDate from "../FormatDate/FormatDate";

export default function WeatherInfo({ data }) {
  const {
    city,
    icon,
    temperature,
    feels_like,
    humidity,
    wind,
    time,
    description,
  } = data;

  return (
    <div className={css.weatherInfo}>
      <div className={css.weather}>
        <h2 className={css.heading}>{city}</h2>

        <div className={css.mainBox}>
          <div>
            <WeatherAnimatedIcon code={icon} size={80} />
          </div>
          <div>
            <WeatherTemperature celsius={temperature} />
          </div>
        </div>
      </div>

      <div className={css.feelsLikeBox}>
        <ul>
          <li>
            Feels like: {feels_like}
            <span className={css.degreeColor}>°</span>
          </li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
        </ul>
      </div>

      <div className={css.descriptionBox}>
        <ul>
          <li>
            <h1 className={css.mainTitle}>Weather</h1>
          </li>
          <li>
            <FormatDate time={time} />
          </li>
          <li>{description}</li>
        </ul>
      </div>
    </div>
  );
}
