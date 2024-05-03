import css from "../App/App.module.css";
import Weather from '../Weather/Weather';


export default function App() {
  return (
    <div className={css.app}>
      <div className={css.container}>
        <Weather defaultCity="Paris" />
      </div>
    </div>
  );
}


