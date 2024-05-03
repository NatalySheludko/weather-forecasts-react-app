import WeatherAnimatedIcon from "../WeatherAnimatedIcon/WeatherAnimatedIcon";
import css from "../ForecastDay/ForecastDay.module.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className={css.weekdaysForecast}> {day()}</div>
      <div>
        <WeatherAnimatedIcon code={props.data.condition.icon} size={32} />
        <br />
        <span className={css.temperatureForecastDay}>
          {maxTemperature()}
          <span className={css.degree}>°</span>
        </span>{" "}
        <span className={css.temperatureForecastNight}>
          {minTemperature()}
          <span className={css.degree}>°</span>
        </span>
      </div>
    </div>
  );
}
