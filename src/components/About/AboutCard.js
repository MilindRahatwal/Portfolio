import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="purple">Milind Rahatwal </span>
            from <span className="purple">India</span> currently located in <span className="purple">Nova Scotia</span>,<span className="purple"> Canada</span>.
            <br /> I am pursuing Masters in Computer Science at St. Francis Xavier University.
            <br />
			<br />
            Apart from coding, here are some other activities that I like to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(226 177 60)" }}>
            "I don't know what's better gettin' laid or gettin' paid"{" "}
          </p>
          <footer className="blockquote-footer">Kanye West</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
