import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillSkype,
  AiFillMessage,
  AiFillProfile
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by WenCheng</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} TOP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            <li className="social-icons">
              <a
                href="https://angel.co/u/graham-marshall29"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillProfile />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://github.com/supercoder-lab"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://t.me/realworld_forward"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
            </li>
           
            <li className="social-icons">
              <a
                href="https://join.skype.com/yhRCCgxtdXq8"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillSkype />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="mailto:wenchenglin29@gmail.com"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillMessage />
                </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
