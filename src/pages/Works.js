import React from "react";
import PortfolioItem from "../components/PortfolioItem";


export default function Works() {
  return (
    <div className="center-align">
      <div className="bg-image"></div>
      <div className="overlay portfolio-container">
        <h2>Works</h2>
        <p>Blitzaudio took part in the production of hundreds of commercials and short movies, creating original music and curating the many stages of audio post-production including dubbing, sound design, dialogue editing, music selection, music editing, mixing and mastering.  Check out a selection of our works and contact us to watch something that fits your job best.</p>

       <PortfolioItem />

      </div>
    </div>
  );
}
