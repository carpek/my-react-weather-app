import React from "react";
import "./City.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function city(props) {
  return (
    <div>
      <Row>
        <Col>
          <h1>{props.city}</h1>
          <h2 id="description">{props.description}</h2>
        </Col>

        <Col>
          <h3 id="date">{props.date}</h3>

          <h3 id="time">{props.time}</h3>
        </Col>
      </Row>
    </div>
  );
}
