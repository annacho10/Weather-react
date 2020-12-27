import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function CurrentWeather(props) {
  return (
    <div>
      <h2>{props.data.city}</h2>
      <WeatherIcon code={props.data.icon} />
      <CurrentTemperature celcius={props.data.temperature} />
      <h3 className="text-capitalize">{props.data.description}</h3>
      <h4>
        H:{Math.round(props.data.maxTemperaure)}° L:
        {Math.round(props.data.minTemperature)}°
      </h4>
      Last updated: <FormattedDate date={props.data.date} />
      <div>
        <small>Wind</small> {Math.round(props.data.wind)}mph{" "}
        <small>Visibility</small> {props.data.visibility}km{" "}
        <small>Humidity</small> {props.data.humidity}%
      </div>
    </div>
  );
}
