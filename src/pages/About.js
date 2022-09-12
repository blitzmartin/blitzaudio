import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function About() {
  let navigate = useNavigate();
  const goToPortfolio = () => {
    navigate("/works");
  };
  return (
    <Container>
      <div className="bg-image"></div>
      <div className="overlay dark-container">
        <Container>
          <Row>
            <Col>
              <div className="home-title">
                <h2>About</h2>
                <p>
                  Blitz Audio comes from an idea of Liz Martin (Annalisa De
                  Martino), audio engineer and composer with almost 10 years of
                  experience in the pro audio business. Liz Martin has composed
                  original music and managed the many stages of audio
                  post-production for all branded content, advertising and short
                  movies produced by The Jackal / Ciaopeople from 2014 to 2020,
                  she writes for pro audio magazines and blogs since 2011, she
                  is part of the MIDI Music Educational program and is one of
                  the few Presonus Studio One certified teachers in Italy. Blitz
                  Audio works mostly in the field of music and audio for visual
                  media (advertising, branded content, short movies, tv),
                  dealing with the sound at 360°, from music creation and sound
                  design to the entire process of audio post-production,
                  deliverying mix and master for any platform. Some of the
                  brands that have benefited from our expertise over the years:{" "}
                  <em>
                    <b>
                      Sky, RAI, La7, Vodafone, Wind, Huawei, Playstation,
                      Spotify, Leerdammer, Muller, Disney, Netlflix, Milano
                      Fashion Week, INPS, David di Donatello, Action Aid, Bayer,
                      Caffè Borbone, Carrefour, Kinder, Cattleya, Enel, Ford,
                      Ferrarelle, Golia, ENI, Hasbro, ISTAT, Kerastase, MAC
                      Cosmetics, L'Oreal, Lego, Amaro Montenegro, Pandora,
                      Philadelphia, MD, Fanpage, Vidal, Tavernello, Pringles,
                      Wudy, Kellogg's...
                    </b>
                  </em>
                </p>
                <Button variant="outline-light" onClick={goToPortfolio}>
                  GO TO PORTFOLIO
                </Button>
              </div>
            </Col>
            <Col>
              {" "}
              <div>
                <img
                  className="home-img"
                  src="./images/liz-profile.jpg"
                  alt="liz-martin"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}
