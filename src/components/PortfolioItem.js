import React from "react";
import Card from "react-bootstrap/Card";
import data from "../data"

export default function PortfolioItem() {
    return(
        <>

        {
           data.map((work) =>{
            <div className="portfolio-item">
            <div>
              <iframe src="https://www.youtube.com/embed/1H9zmucUAas"/>
            </div>
            <div>
                <Card.Body style={{ textAlign: "right" }}>
                  <Card.Title>{work.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                  {work.subtitle}
                  </Card.Subtitle>
                  <Card.Text>Directed by: {work.director}</Card.Text>
                  <Card.Text>
                    Analytics: {work.analytics}
                  </Card.Text>
                </Card.Body>
            </div>
          </div>
           })
         }


         
         <div className="portfolio-item">
          <div>
            <iframe src="https://www.youtube.com/embed/1H9zmucUAas" />
          </div>
          <div>
              <Card.Body style={{ textAlign: "right" }}>
                <Card.Title>X-Factor / Sky (2018)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Music, audio post-production, mix and master
                </Card.Subtitle>
                <Card.Text>Directed by: Francesco Ebbasta</Card.Text>
                <Card.Text>
                  Analytics: 20M views, reach 70M users Winner Grand Prix BC&E
                  Award 2019
                </Card.Text>
              </Card.Body>
          </div>
        </div>

        <div className="portfolio-item">
          <div>
            <iframe src="https://www.youtube.com/embed/eSmNnwUmtcc" />
          </div>
          <div>
              <Card.Body style={{ textAlign: "right" }}>
                <Card.Title>Netflix Italia - Narcos 3 (2017)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Music, audio post-production, mix and master
                </Card.Subtitle>
                <Card.Text>Directed by: Mattia Croccia</Card.Text>
                <Card.Text>
                Analytics: 1.7M
                </Card.Text>
              </Card.Body>
          </div>
        </div>
        </>
    )
}