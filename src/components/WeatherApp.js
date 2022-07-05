import { useEffect, useState } from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherDetails from "../components/WeatherDetails";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  window.onload = function () { document.querySelector("input").focus(); }

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weer | ${weather?.location.country}`;
  }, [weather]);

  async function loadInfo(city = "Overdinkel", days = 4, lang = "nl") {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}&days=${days}&lang=${lang}`
      );
      const response = await data.json();

      setWeather(response);

    } catch (error) { window.location.href = "/weer-app" }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="weather-app">
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? (
        <>
          <WeatherDetails weather={weather} />
        </>
      ) : (
        <div></div>
      )
      }
    </div >
  );
}
