import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      maxTemperaure: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      visibility: response.data.visibility / 1000,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    let apiKey = "33ccc5935c23e13f1d3bcc5768a8d1d3";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            placeholder="🔍 Enter city"
            autoFocus="on"
            onChange={handleCityChange}
          />
        </form>
        <CurrentWeather data={weatherData} />
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
    search();
    return <div>Loading...</div>;
  }
}
