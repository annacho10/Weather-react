import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function App() {
  let data = {
    city: "London",
    temperature: 11,
    description: "Broken clouds",
    maxTemperaure: 11,
    minTemperature: 9,
    date: "Wednesday 13:59",
    wind: 6,
    visibility: 10,
    humidity: 71,
  };

  return (
    <div className="App">
      <div className="container">
        <div className="Weather">
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                className="form-control"
                placeholder="Enter city"
                autofocus="on"
              />
            </div>
            <div className="col-1">
              <input type="submit" class="btn btn-light" value="🔍" />
            </div>
            <div className="col-1">
              <input type="submit" class="btn btn-light" value="📍" />
            </div>
          </div>
          <h2>{data.city}</h2>
          <ReactAnimatedWeather
            icon="CLOUDY"
            size={64}
            color="white"
            animate={true}
          />
          {data.temperature}° C | F<h3>{data.description}</h3>
          <h4>
            H:{data.maxTemperaure}° L:{data.minTemperature}°
          </h4>
          Last updated: {data.date}
          <div>
            <small>Wind</small> {data.wind}mph <small>Visibility</small>{" "}
            {data.visibility}km <small>Humidity</small> {data.humidity}%
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
        <a
          href="https://github.com/annacho10/Weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/anna-cho-95551482/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anna Cho
        </a>
      </div>
    </div>
  );
}
