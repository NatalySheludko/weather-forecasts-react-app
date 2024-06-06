import { useState, useEffect } from "react";
import axios from "axios";
import css from "../Forecast/Forecast.module.css";
import ForecastDay from "../ForecastDay/ForecastDay";

export default function Forecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function currCoordinates() {
    const apiKey = "6fa3cb02fc6ct4bd31ab65905b1ado1a";
    const longitude = coordinates.longitude;
    const latitude = coordinates.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className={css.forecast}>
        {forecast.map((dailyForecast, index) => {
          if (index < 6) {
            return (
              <div key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    currCoordinates();
    return null;
  }
}
