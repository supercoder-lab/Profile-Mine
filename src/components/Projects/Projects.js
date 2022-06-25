import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import arootah from "../../Assets/Projects/1.jpg";
import swap from "../../Assets/Projects/real-estate.png";
import visualized from "../../Assets/Projects/2.jpg";
import unity3dracing from "../../Assets/Projects/unity3d_racing.png";
import unity3danimal from "../../Assets/Projects/unity3d_squirrel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arootah}
              isBlog={false}
              title="Next.js Website"
              description= "A marketplace for the travel industry similar to Fiverr. Buyers can obtain information and travel related services from sellers. A typical e-commerce based system for generating revenue."           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swap}
              isBlog={false}
              title="Real Estate Platform"
              description="Real estate is an integral part of the company of any country. Client demand a web application where an end user could sale/rent properties on-the-go."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visualized}
              isBlog={false}
              title="Visualized(React | Node)"
              description="My solution for the virtual staging of the property helps increase enquiries by an average of 75%. Most home sellers and agents know that furnished and decorated apartments help buyers visualize their future homes. Brokers rely on our online solution because it allows them to test the market, attract the attention of prospective buyers, and save money through bypassing purchasing actual furniture. Visualized allows both buyers and sellers to appreciate the true value of a vacant property, including its room dimensions, room sizes and outdoor space."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unity3dracing}
              isBlog={false}
              title="Unity3D Racing"
              description="Unity3D fan game. Using own custom assets, Implementing complex logic. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unity3danimal}
              isBlog={false}
              title="Unity3D SQUIRREL"
              description="Unity3D Animal Fan Game. Enjoying with animals like the real world."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
