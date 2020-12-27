import React, { useState } from "react";
import axios from "axios";
import HourlyForecast from "./HourlyForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row">
        <HourlyForecast data={forecast.list[0]} />
        <HourlyForecast data={forecast.list[1]} />
        <HourlyForecast data={forecast.list[2]} />
        <HourlyForecast data={forecast.list[3]} />
        <HourlyForecast data={forecast.list[4]} />
        <HourlyForecast data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "33ccc5935c23e13f1d3bcc5768a8d1d3";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
