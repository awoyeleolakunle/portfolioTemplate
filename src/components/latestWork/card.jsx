import React from "react";

import "../latestWork/card.css";

const LatestCard = ({ title, description, image }) => {
  return (
    <div className="latestCard">
      <div>
        {image && (
          <div className="latestCard-img">
            <img src={image} alt="latestCard-img" />
          </div>
        )}
      </div>
      <div className="latestCard-title">
        <h2>{title}</h2>
      </div>
      <div className="latestCard-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LatestCard;
