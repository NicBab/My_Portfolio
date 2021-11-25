/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import "./css/Portfolio.css";
import { Container } from "react-bootstrap";
import sgPhotoImg from "../Images/sgPhotoImg.png";
import drivenResultsImg from "../Images/DrivenResultsImg.png";
import linkeratorImg from "../Images/linkeratorImg.png";
import artCollectorImg from "../Images/artCollectorImg.png";
import bayouBrosImg from "../Images/bayouBrosImg.png";

const Portfolio = () => {
  const onSgPhotographyClick = () => {
    window.open("https://goofy-wright-304451.netlify.app/");
}

  const onDrivenResultsClick = () => {
    window.open("https://peaceful-hoover-462aa0.netlify.app/");
}

  const onBayouBrosClick = () => {;
  window.open("https://jolly-ramanujan-7108eb.netlify.app/");
}

const onArtCollectorClick = () => {
  window.open("https://quirky-lamport-8e798a.netlify.app/");
}

  const onLinkeratorClick = () => {
    window.open("https://obscure-basin-06170.herokuapp.com/");
}

  return (
    <>
      <div className="portfolioPg">
        <Container className="projectCardsContainer">
          <div className="projectLinks" onClick={onSgPhotographyClick}>
            SG Photography
            <img
              className="projectImg"
              src={sgPhotoImg}
              alt="sgPhotographyImg"
            />
          </div>

          <div className="projectLinks" onClick={onDrivenResultsClick}>
            DrivenResults
            <img
              className="projectImg"
              src={drivenResultsImg}
              alt="drivenResultsImg"
            />
          </div>

          <div className="projectLinks" onClick={onLinkeratorClick}>
            The Great Linkerator
            <img
              className="projectImg"
              src={linkeratorImg}
              alt="linkeratorImg"
            />
          </div>

          <div className="projectLinks" onClick={onArtCollectorClick}>
            Harvard Art Collector
            <img
              className="projectImg"
              src={artCollectorImg}
              alt="artCollectorImg"
            />
          </div>

          <div className="projectLinks" onClick={onBayouBrosClick}>
            Bayou Bros Meats
            <img className="projectImg" src={bayouBrosImg} alt="bayouBrosImg" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
