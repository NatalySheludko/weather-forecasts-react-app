import css from "../WeatherInfo/WeatherInfo.module.css";

import WeatherAnimatedIcon from "../WeatherAnimatedIcon/WeatherAnimatedIcon";
import WeatherTemperature from "../WeatherTemperature/WeatherTemperature";
import FormatDate from "../FormatDate/FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className={css.weatherInfo}>
      <div className={css.weather}>
        <h2 className={css.heading}>{props.data.city}</h2>

        <div className={css.mainBox}>
          <div>
            <WeatherAnimatedIcon code={props.data.icon} size={80} />
          </div>
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>

      <div className={css.feelsLikeBox}>
        <ul>
          <li>
            Feels like: {props.data.feels_like}
            <span className={css.degreeColor}>°</span>
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>

      <div className={css.descriptionBox}>
        <ul>
          <li>
            <h1 className={css.mainTitle}>Weather</h1>
          </li>
          <li>
            <FormatDate time={props.data.time} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
    </div>
  );
}
