import css from "../App/App.module.css";
import Weather from '../Weather/Weather';

const DEFAULT_CITY = "Kyiv";

export default function App() {
  return (
    <div className={css.container}>
      <Weather defaultCity={DEFAULT_CITY} />
    </div>
  );
}


