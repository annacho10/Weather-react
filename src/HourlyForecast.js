import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecast(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) hours = `0${hours}`;
    return `${hours}:00`;
  }

  return (
    <div className="col-6 col-sm">
      <ul>
        <li>{hours()}</li>
        <li>{Math.round(props.data.main.temp)}°</li>
        <WeatherIcon code={props.data.weather[0].icon} size={48} />
        <li>{props.data.weather[0].main}</li>
      </ul>
    </div>
  );
}
