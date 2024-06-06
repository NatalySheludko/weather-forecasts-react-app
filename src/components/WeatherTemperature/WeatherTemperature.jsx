import css from "../WeatherTemperature/WeatherTemperature.module.css";

export default function WeatherTemperature({ celsius }) {
  return (
    <div>
      <span className={css.currentTemperature}>{Math.round(celsius)}</span>
      <span className={css.unit}>°C</span>
    </div>
  );
}
