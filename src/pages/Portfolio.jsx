import React from "react";
import "./css/Portfolio.css";
import sgPhotoImg from '../Images/sgPhotoImg.png'
import drivenResultsImg from '../Images/DrivenResultsImg.png'
import linkeratorImg from '../Images/linkeratorImg.png'
import artCollectorImg from '../Images/artCollectorImg.png'
import bayouBrosImg from '../Images/bayouBrosImg.png'


const Portfolio = () => {
  const onSgPhotographyClick = () => {
    window.open("https://goofy-wright-304451.netlify.app/");
  }

  const onDrivenResultsClick = () => {
    window.open("https://peaceful-hoover-462aa0.netlify.app/")
  }

  const onBayouBrosClick = () => {
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

        <div className="projectLinks" onClick={onSgPhotographyClick}>
          SG Photography
          <img
            className="projectImg"
            style={{ maxWidth: "14em", height: "auto" }}
            src={sgPhotoImg}
            alt="sgPhotographyImg"
          />
          <p className="portfolioDescription">
            * Front End project employing React js, bootstrap, css and image API
            <br />* Responsive and polished application for an Individual
            photographer based in Colorado
          </p>
        </div>

        <div className="projectLinks" onClick={onDrivenResultsClick}>
          DrivenResults
          <img
            className="projectImg"
            style={{ maxWidth: "14em", height: "auto" }}
            src={drivenResultsImg}
            alt="drivenResultsImg"
          />
          <p className="portfolioDescription">Hello</p>
        </div>

        <div className="projectLinks" onClick={onLinkeratorClick}>
          The Great Linkerator
          <img
            className="projectImg"
            style={{ maxWidth: "14em", height: "auto" }}
            src={linkeratorImg}
            alt="linkeratorImg"
          />
          <p className="portfolioDescription">
            * Worked with a team of 3 to develop an educational fullstack
            application
            <br />
            * CRUD app featuring number of clicks and input link in descending
            order
            <br />* React, PostgreSQL, API, css
          </p>
        </div>

        {/* <div className="projectLinks">
          Firebase login -
          <p className="portfolioDescription">Hello</p>
        </div> */}

        <div className="projectLinks" onClick={onArtCollectorClick}>
          Harvard Art Collector
          <img
            className="projectImg"
            style={{ maxWidth: "14em", height: "auto" }}
            src={artCollectorImg}
            alt="artCollectorImg"
          />
          <p className="portfolioDescription">
            * Front end educational project
            <br />
            * Features functional classification dropdown and search utilizing
            Harvard art collection API
            <br />
          </p>
        </div>

        <div className="projectLinks" onClick={onBayouBrosClick}>
          Bayou Bros Meats
          <img
            className="projectImg"
            style={{ maxWidth: "14em", height: "auto" }}
            src={bayouBrosImg}
            alt="bayouBrosImg"
          />
          <p className="portfolioDescription">Hello</p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
