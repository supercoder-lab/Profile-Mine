import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nftmint from "../../Assets/Projects/nftmint.png";
import swap from "../../Assets/Projects/real-estate.png";
import unity2dfight from "../../Assets/Projects/unity2d_4.png";
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
              imgPath={nftmint}
              isBlog={false}
              title="NFT Mint"
              description="NFT mint website which users can mint nfts. It was built with React, ERC721 smart contract."              
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
              imgPath={unity2dfight}
              isBlog={false}
              title="Unity2D Game"
              description="Unity2D card game. Players can get higher score from their playing and enjoy the time."
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
