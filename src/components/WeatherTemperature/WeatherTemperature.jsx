import css from "../WeatherTemperature/WeatherTemperature.module.css";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span className={css.currentTemperature}>{Math.round(props.celsius)}</span>
      <span className={css.unit}>°C</span>
    </div>
  );
}
