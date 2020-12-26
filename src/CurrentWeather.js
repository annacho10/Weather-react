import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <div>
      <h2>{props.data.city}</h2>
      <WeatherIcon code={props.data.icon} />
      <span className="temperature">{Math.round(props.data.temperature)}°</span>
      <span className="unit">C | F</span>
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
