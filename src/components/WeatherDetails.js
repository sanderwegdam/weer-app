import "./WeatherDetails.css";
import moment from "moment";

import WeatherMap from "../components/WeatherMap";

export default function WeatherDetails({ weather }) {
  return (
    <section className="weather-container">



      <div className="container-map">
        <WeatherMap weather={weather} />
      </div>

      <div className="container-top">
        <div>
          <p className="paragraph">
            <span className="tijd-main">
              <h1 className="weather-title">Vandaag</h1>
              <span className="tijd">{moment(weather?.location.localtime).format("D MMM")}</span>
              {moment(weather?.location.localtime).format("H:mm") + ' uur'}
            </span>
          </p>
        </div>
      </div>

      <div className="container-mid">
        <span className="weather-temp-main">
          {weather?.current.temp_c} <span className="weather-tepm">°C</span>
        </span>
        <img
          width="100"
          height="100"
          src={weather?.current.condition.icon}
          alt={`Icon of ${weather?.location.country}`}
        />
      </div>



    </section >
  );
}
