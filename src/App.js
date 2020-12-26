import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="london" />
        <small>
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
        </small>
      </div>
    </div>
  );
}
