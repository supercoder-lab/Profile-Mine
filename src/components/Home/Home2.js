import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillSkype,
  AiFillMessage,
  AiFillProfile
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with coding and I have learnt and worked most of time for Start up companies as a fullstack developer🤷‍♂️
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> Javascript, Typescript, React.js and Node.js. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web applications, products </b> and
                also in areas related to{" "}
                <b className="purple">
                  problem solving and bug fix.
                </b>
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

            <li className="social-icons">
                <a
                  href="https://angel.co/u/graham-marshall29"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillProfile />
                </a>

              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/supercoder-lab"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/realworld_forward"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://join.skype.com/FPwYFammhneN"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillSkype />
                </a>

              </li>

              <li className="social-icons">
                <a
                  href="mailto:grahammarshalldev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMessage />
                </a>

              </li>             

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
