import React from "react";
import "./City.css";



export default function city(props) {
  return (
    <div>
      
          <h1>{props.city}</h1>
          <h2 id="description">{props.description}</h2>
      
          <h3 id="date">{props.date}</h3>

          <h3 id="time">{props.time}</h3>
       
    </div>
  );
}
