import React from "react";
import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <Container>
      <div className="bg-image"></div>
      <div className="overlay dark-container">
        <h2 className="home-title">About</h2>
        <p className="home-title">
          Blitz Audio comes from an idea of Liz Martin (Annalisa De Martino),
          audio engineer and composer with almost 10 years of experience in the
          pro audio business. Liz Martin has composed original music and managed
          the many stages of audio post-production for all branded content,
          advertising and short movies produced by The Jackal / Ciaopeople from
          2014 to 2020, she writes for pro audio magazines and blogs since 2011,
          she is part of the MIDI Music Educational program and is one of the
          few Presonus Studio One certified teachers in Italy. Blitz Audio works
          mostly in the field of music and audio for visual media (advertising,
          branded content, short movies, tv), dealing with the sound at 360°,
          from music creation and sound design to the entire process of audio
          post-production, deliverying mix and master for any platform. Some of
          the brands that have benefited from our expertise over the years: <em><b>Sky,
          RAI, La7, Vodafone, Wind, Huawei, Playstation, Spotify, Leerdammer,
          Muller, Disney, Netlflix, Milano Fashion Week, INPS, David di
          Donatello, Action Aid, Bayer, Caffè Borbone, Carrefour, Kinder,
          Cattleya, Enel, Ford, Ferrarelle, Golia, ENI, Hasbro, ISTAT,
          Kerastase, MAC Cosmetics, L'Oreal, Lego, Amaro Montenegro, Pandora,
          Philadelphia, MD, Fanpage, Vidal, Tavernello, Pringles, Wudy,
          Kellogg's...</b></em>
        </p>
      </div>
    </Container>
  );
}
