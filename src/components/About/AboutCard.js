import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Graham Marshall </span>
            from <span className="purple"> Oakland, CA.</span>
            <br />I am a fullstack developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing ValleyBall
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stop dreaming about tomorrow, Start making a difference day!"{" "}
          </p>
          <footer className="blockquote-footer">Graham Marshall</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
