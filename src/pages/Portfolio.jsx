import React from "react";
import "./css/Portfolio.css";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Portfolio = () => {
  const onSgPhotographyClick = () => {
    window.open("https://goofy-wright-304451.netlify.app/");
  };

  const onBayouBrosClick = () => {
    window.open("https://jolly-ramanujan-7108eb.netlify.app/");
  };

  const onArtCollectorClick = () => {
    window.open("https://quirky-lamport-8e798a.netlify.app/");
  };

  const onLinkeratorClick = () => {
    window.open("https://obscure-basin-06170.herokuapp.com/");
  };

  return (
    <>
      <div className="portfolioPg">
        <div className="sgPhotography" onClick={onSgPhotographyClick}>
          SG Photography -
          <p className="portfolioDescription">
            * Front End project employing React js, bootstrap, css and image API
            <br />* Responsive and polished application for an Individual
            photographer based in Colorado
          </p>
        </div>

        <div className="linkerator" onClick={onLinkeratorClick}>
          The Great Linkerator -
          <p className="portfolioDescription">
            * Worked with a team of 3 to develop an educational fullstack
            application
            <br />
            * CRUD app featuring number of clicks and input link in descending
            order
            <br />* React, PostgreSQL, API, css
          </p>
        </div>

        <div className="firebaseLogin">
          Firebase login -
          <p className="portfolioDescription">Hello</p>
        </div>

        <div className="artCollector" onClick={onArtCollectorClick}>
          Harvard Art Collector -
          <p className="portfolioDescription">
            * Front end educational project
            <br />
            * Features functional classification dropdown and search utilizing
            Harvard art collection API
            <br />
          </p>
        </div>

        <div className="bayouBros" onClick={onBayouBrosClick}>
          Bayou Bros Meats -
          <p className="portfolioDescription">Hello</p>
        </div>

<Card style={{ width: '18rem', border: "1px solid black", borderRadius: "10px" }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>


      </div>
    </>
  );
};

export default Portfolio;
