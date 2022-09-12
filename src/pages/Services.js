import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Services() {
  return (
    <div className="center-align">
      <h1>Our services</h1>
      <CardGroup>
      <Card border="light" bg="dark" text="light" className="mx-2 my-2">
        <Card.Img variant="top" src="./images/sheets.jpg" />
        <Card.Body>
          <Card.Title>Original music and mixing</Card.Title>
          <Card.Text>
          We write, arrange and mix music for all kind of genre (orchestral mock-ups, rock, electronic, advertising jingles...). We specialize in branded contents and ads, together with soundtracks for films, short movies, tv, theater and art installations.  We collaborate with artists on their productions and final mixes.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" bg="dark" text="light" className="mx-2 my-2">
        <Card.Img variant="top" src="./images/editing.jpg" />
        <Card.Body>
          <Card.Title>Audio post-production</Card.Title>
          <Card.Text>
          We manage the entire process of audio post-production. Thanks to our experience in the field, we collect hints, needs and feedbacks from the agency, the client, the director synthesizing all the information and giving back the best product with the right mastering specs.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" bg="dark" text="light" className="mx-2 my-2">
        <Card.Img variant="top" src="./images/restore.jpg" />
        <Card.Body>
          <Card.Title>Audio restoration and repair</Card.Title>
          <Card.Text>
          We optimize every kind of noisy audio clip with the industry standard Izotope RX.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card border="light" bg="dark" text="light" className='m-2'>
        <Card.Img variant="top" src="./images/learn.jpg" />
        <Card.Body>
          <Card.Title>Learning</Card.Title>
          <Card.Text>
          Online lessons and short courses about music production, audio post-production, film scoring and composing for advertising, tv and videogames. We have certified Studio One teachers and offer educational discounts.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" bg="dark" text="light" className="mx-2 my-2">
        <Card.Img variant="top" src="./images/betatest.jpg" />
        <Card.Body>
          <Card.Title>Beta-test and reviews</Card.Title>
          <Card.Text>
          We facilitate the sales of new products in the pro audio business, supporting the launch on the market with articles and video reviews showcasing plugins, softwares, effects and instruments. We also offer beta-testing on Windows.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" bg="dark" text="light" className="mx-2 my-2">
        <Card.Img variant="top" src="./images/gaming.jpg" />
        <Card.Body>
          <Card.Title>Mobile app and gaming</Card.Title>
          <Card.Text>
          We make royalty free music and sound design for videogames and mobile apps with FMOD and Unity.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}
