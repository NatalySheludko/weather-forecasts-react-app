import { useState, useEffect } from "react";
import axios from "axios";
import css from "../Forecast/Forecast.module.css";
import ForecastDay from "../ForecastDay/ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    //console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function coordinates() {
    let apiKey = "6fa3cb02fc6ct4bd31ab65905b1ado1a";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    //console.log(forecast);
    return (
      <div className={css.forecast}>
        <div className={css.row}>
          {forecast.map((dailyForecast, index) => {
            if (index < 6) {
              return (
                <div className={css.colSecond} key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    coordinates();
    return null;
  }
}
