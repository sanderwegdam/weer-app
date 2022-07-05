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
          <h1 className="weather-title" style={{ fontSize: '1em' }}>Vandaag</h1>
          <p className="paragraph">
            <span className="tijd-main">
              <h1 style={{ fontSize: '.8em' }}> {weather?.current.condition.text}</h1>
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
        <img width="100" height="100" src={weather?.current.condition.icon}
          alt={`Icon of ${weather?.location.country}`} />
      </div>

      <div className="container-mid">
        <h3 className="tijd">{moment(weather.forecast.forecastday[1].date
        ).format("D MMM")}</h3>
        <span className="weather-temp-main" style={{ fontSize: '30px' }}>
          {weather?.forecast.forecastday[1].day.maxtemp_c} <span style={{ fontSize: '16px' }} className="weather-tepm">°C</span>
        </span>
        <img width="80" height="80" src={weather?.forecast.forecastday[1].day.condition.icon}
          alt={`Icon of ${weather?.location.country}`} />
      </div>

      <div className="container-mid" style={{ paddingBottom: "50px" }}>
        <h3 className="tijd">{moment(weather.forecast.forecastday[2].date
        ).format("D MMM")} </h3>
        <span className="weather-temp-main" style={{ fontSize: '30px' }}>
          {weather?.forecast.forecastday[2].day.maxtemp_c}  <span style={{ fontSize: '16px' }} className="weather-tepm">°C</span>
        </span>
        <img width="80" height="80" src={weather?.forecast.forecastday[2].day.condition.icon}
          alt={`Icon of ${weather?.location.country}`} />
      </div>
    </section>
  );
}
