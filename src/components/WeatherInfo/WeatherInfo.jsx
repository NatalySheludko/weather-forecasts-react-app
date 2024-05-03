import css from "../WeatherInfo/WeatherInfo.module.css";

import WeatherAnimatedIcon from "../WeatherAnimatedIcon/WeatherAnimatedIcon";
import WeatherTemperature from "../WeatherTemperature/WeatherTemperature";
import FormatDate from "../FormatDate/FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className={css.weatherInfo}>
      <h2 className={css.heading}>
        <span className={css.headingText}>Result:</span> {props.data.city}
      </h2>
      <div>
        <div>
          <div className={css.mainBox}>
            <div className={css.weatherIcon}>
              <WeatherAnimatedIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div>
          <div className={css.feelsLikeBox}>
            <ul className={css.weatherMenu}>
              <li>
                Feels like: {props.data.feels_like}
                <span className={css.degreeColor}>°</span>
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={css.descriptionBox}>
            <ul className={css.weatherMenu}>
              <li>
                <h1 className={css.mainHeading}>Weather</h1>
              </li>
              <li>
                <FormatDate time={props.data.time} />
              </li>
              <li className={css.textCapitalize}>{props.data.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
