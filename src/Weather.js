import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      maxTemperaure: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      date: "Wednesday 13:59",
      wind: response.data.wind.speed,
      visibility: response.data.visibility / 1000,
      humidity: response.data.main.humidity,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                className="form-control"
                placeholder="Enter city"
                autoFocus="on"
              />
            </div>
            <div className="col-1">
              <input type="submit" className="btn btn-light" value="🔍" />
            </div>
            <div className="col-1">
              <input type="submit" className="btn btn-light" value="📍" />
            </div>
          </div>
        </form>
        <h2>{weatherData.city}</h2>
        <ReactAnimatedWeather
          icon="CLOUDY"
          size={64}
          color="white"
          animate={true}
        />
        <span className="temperature">
          {Math.round(weatherData.temperature)}°
        </span>
        <span className="unit">C | F</span>
        <h3 className="text-capitalize">{weatherData.description}</h3>
        <h4>
          H:{Math.round(weatherData.maxTemperaure)}° L:
          {Math.round(weatherData.minTemperature)}°
        </h4>
        Last updated: {weatherData.date}
        <div>
          <small>Wind</small> {Math.round(weatherData.wind)}mph{" "}
          <small>Visibility</small> {weatherData.visibility}km{" "}
          <small>Humidity</small> {weatherData.humidity}%
        </div>
        <div className="row">
          <div className="col-sm">
            <ul>
              <li>Thu</li>
              <li>10° 7°</li>
              <ReactAnimatedWeather
                icon="SLEET"
                size={48}
                color="white"
                animate={true}
              />
              <li>Sleet</li>
            </ul>
          </div>
          <div className="col-sm">
            <ul>
              <li>Fri</li>
              <li>10° 7°</li>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                size={48}
                color="white"
                animate={true}
              />{" "}
              <li>Clear</li>
            </ul>
          </div>
          <div className="col-sm">
            <ul>
              <li>Sat</li>
              <li>10° 7°</li>
              <ReactAnimatedWeather
                icon="RAIN"
                size={48}
                color="white"
                animate={true}
              />{" "}
              <li>Rain</li>
            </ul>
          </div>
          <div className="col-sm">
            <ul>
              <li>Sun</li>
              <li>10° 7°</li>
              <ReactAnimatedWeather
                icon="FOG"
                size={48}
                color="white"
                animate={true}
              />{" "}
              <li>Fog</li>
            </ul>
          </div>
          <div className="col-sm">
            <ul>
              <li>Mon</li>
              <li>10° 7°</li>
              <ReactAnimatedWeather
                icon="SNOW"
                size={48}
                color="white"
                animate={true}
              />{" "}
              <li>Snow</li>
            </ul>
          </div>
          <div className="col-sm">
            <ul>
              <li>Tue</li>
              <li>10° 7°</li>
              <ReactAnimatedWeather
                icon="PARTLY_CLOUDY_DAY"
                size={48}
                color="white"
                animate={true}
              />{" "}
              <li>Cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "33ccc5935c23e13f1d3bcc5768a8d1d3";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.dafaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
