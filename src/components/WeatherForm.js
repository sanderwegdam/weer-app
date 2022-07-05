import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "./WeatherForm.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  function onChange(e) {
    const value = e.target.value;
    if (value === "") {
      alert("Voer eerst een plaats in");
    } else {
      setCity(value);
    }
  }

  return (
    <form className="container-form" onSubmit={handleSubmit} action="">
      <input
        className="weatherSearch input"
        onChange={onChange}
        type="text"
        placeholder="Vul hier de stad in"
      />
      <BiSearch size={25} className="weatherIcon input" onClick={handleSubmit} />
    </form>
  );
}
