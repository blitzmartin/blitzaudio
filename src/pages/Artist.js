import React from "react";
import { data } from "../artist";

export default function Artist() {
  return (
    <>
      <div className="center-align">
        <div className="bg-image"></div>
        <div className="overlay portfolio-container">
          <h2>Artist</h2>
          <p>
            Liz Martin's YouTube channel contains electronic live jam, original
            pieces and all kinds of productions. Here's a selection of
            performances: (all tracks recorded, produced and mixed by Liz BLiTZ
            Martin)
          </p>
          <div className="artist-container">
            {data.map((artist) => (
              <div key={artist.videoID}>
                <iframe title={artist.videoID}
                  src={`https://www.youtube.com/embed/${artist.videoID}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
