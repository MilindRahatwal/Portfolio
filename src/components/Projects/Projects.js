import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Gene expression analysis for the diagnosis of Type 2 Diabetes"
              description="In this project, we predict T2D with the help of gene expression. T2D is mostly attributed to the failure of pancreatic islet cells. The processing of data in a meaningful and beneficial manner is now possible thanks to modern technologies.The identification of distinctive transcriptional signatures has been made feasible by single-cell RNA sequencing (scRNA-seq)."
              ghLink="https://github.com/milindrahatwal/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Toxicity Prediction"
              description="The competition was hosted to kaggle to predict if the chemicals are toxic or not. For this competition we were given two datasets: a train dataset which had two columns Id and Expected and a test dataset which had a single column named x. The goal of the competition was to determine which chemicals are toxic with the help of machine learning."
              ghLink="https://github.com/milindrahatwal/Kaggle-Toxicity-Prediction-II"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Profile Based Agriculture System"
              description="A soil profile based crop prediction system that recommends the crop to be grown based on soil data. It also detects diseases of infected crop from the uploaded images and suggests remedies."
              ghLink="https://github.com/milindrahatwal/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/milindrahatwal/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Location Based Security"
              description="A moibile application that uses a location dependent approach to share files to registered users. It also offers twop factor authentication and sends user an OTP before making the file accessible. The file key is encrypted using Advanced Encryption System before sharing."
              ghLink="https://github.com/milindrahatwal/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
