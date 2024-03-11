import React from "react";
import "../card/card.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <div>
        {image && (
          <div className="card-img">
            <img src={image} alt="card-img" />
          </div>
        )}
      </div>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
