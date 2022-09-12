import React from "react";
import Card from "react-bootstrap/Card";
import {data} from "../data"

export default function PortfolioItem() {
  return (
    <>
      {data.map((work) => (
        <div className="portfolio-item" key={work.videoID}>
          <div>
            <iframe src={`https://www.youtube.com/embed/${work.videoID}`} />
          </div>
          <div>
            <Card.Body style={{ textAlign: "right" }}>
              <Card.Title>{work.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {work.subtitle}
              </Card.Subtitle>
              <Card.Text>Directed by: {work.director}</Card.Text>
              <Card.Text>Analytics: {work.analytics} views</Card.Text>
            </Card.Body>
          </div>
        </div>
      ))}
    </>
  );
}
