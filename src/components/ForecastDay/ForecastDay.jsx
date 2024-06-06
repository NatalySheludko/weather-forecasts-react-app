import WeatherAnimatedIcon from "../WeatherAnimatedIcon/WeatherAnimatedIcon";
import css from "../ForecastDay/ForecastDay.module.css";

export default function ForecastDay({ data }) {
  function maxTemperature() {
    const temperature = Math.round(data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    const temperature = Math.round(data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    const date = new Date(data.time * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className={css.weekdaysForecast}> {day()}</div>

      <div>
        <WeatherAnimatedIcon code={data.condition.icon} size={50} />
        <br />
        <span className={css.temperatureForecastDay}>
          {maxTemperature()}
          <span className={css.degree}>°</span>
        </span>
        <span className={css.temperatureForecastNight}>
          {minTemperature()}
          <span className={css.degree}>°</span>
        </span>
      </div>
    </div>
  );
}
