import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reddit from "../../Assets/Projects/reddit.jpg";
import dna from "../../Assets/Projects/dna.jpg";
import toxic from "../../Assets/Projects/toxic.jpg";
import security from "../../Assets/Projects/security.jpg";
import Agriculture from "../../Assets/Projects/Agriculture.jpg";

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
              imgPath={dna}
              isBlog={false}
              title="Gene expression analysis for the diagnosis of Type 2 Diabetes"
              description="In this project, we predict T2D with the help of gene expression. T2D is mostly attributed to the failure of pancreatic islet cells. The processing of data in a meaningful and beneficial manner is now possible thanks to modern technologies.The identification of distinctive transcriptional signatures has been made feasible by single-cell RNA sequencing (scRNA-seq)."
              ghLink="https://github.com/MilindRahatwal/Type-2-Diabetes-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toxic}
              isBlog={false}
              title="Toxicity Prediction"
              description="The competition was hosted to kaggle to predict if the chemicals are toxic or not. For this competition we were given two datasets: a train dataset which had two columns Id and Expected and a test dataset which had a single column named x. The goal of the competition was to determine which chemicals are toxic with the help of machine learning."
              ghLink="https://github.com/milindrahatwal/Kaggle-Toxicity-Prediction-II"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agriculture}
              isBlog={false}
              title="Profile Based Agriculture System"
              description="A soil profile based crop prediction system that recommends the crop to be grown based on soil data. It also detects diseases of infected crop from the uploaded images and suggests remedies. It is a user-friendly web application that serves as a centralized hub for monitoring and managingagricultural fields. Integrated predictive modeling to recommend the most profitable crops based on the current environmentalfactors, optimizing yield and profit margins."
              ghLink="https://github.com/MilindRahatwal/Profile-Based-Agriculture-System"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reddit}
              isBlog={false}
              title="Reddit Big Data Analysis"
              description="This project focuses on extracting data from Reddit using the Reddit API to create our own specified dataset to perform Exploratory Data Analysis (EDA) & visualizations. The purpose of this analysis is to gain an understanding of how various factors affected the community and gain valuable insights on the findings to generate conclusive results from content patterns."
              ghLink="https://github.com/milindrahatwal/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={security}
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
