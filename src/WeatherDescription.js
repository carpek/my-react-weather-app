import React from "react";
import "./styles.css";

export default function WeatherDescription(props) {
  return (
    <div className="weather-items">
      <p className="weather-measure">{props.measure}</p>
      <p className="weather-result">{props.result}</p>
    </div>
  );
}
