import React from "react";
import "../whatWeOffer/whatWeOffer.css";
import Card from "../card/card.jsx";
import { listOfWhatWeOffer } from "./listOfWhatWeOffer.js";

const WhatWeOffer = () => {
  return (
    <section>
      <div className="whatWeOffer">
        {listOfWhatWeOffer.map((whatWeOffer, index) => (
          <Card
            key={index}
            title={whatWeOffer.title}
            description={whatWeOffer.description}
            image={whatWeOffer.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
