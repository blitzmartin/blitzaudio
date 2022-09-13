import React from "react";
import PortfolioItem from "../components/PortfolioItem";


export default function Works() {
  return (
    <div className="center-align">
      <div className="bg-image"></div>
      <div className="overlay portfolio-container">
        <h2>Works</h2>
        <p>Blitzaudio took part in the production of hundreds of commercials and short movies, creating original music and curating the many stages of audio post-production including dubbing, sound design, dialogue editing, music selection, music editing, mixing and mastering.  Check out the following selection of works and contact us to watch something that fits your job best. For gaming sound design and music check <a href="https://blitzaudio.itch.io/" target="_blank">Itch.io page</a>.</p>
       <PortfolioItem />
      </div>
    </div>
  );
}
