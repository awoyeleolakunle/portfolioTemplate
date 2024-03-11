import React from "react";

import "./testimonial.css";
import { stars } from "./star";

const TestimonialCard = ({ description, name, companyName, image }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-description">
        <p>{description}</p>
      </div>
      <div className="details">
        <div>
          {image && (
            <div className="testimonial-img">
              <img src={image} alt="testimonial-img" />
            </div>
          )}
        </div>
        <div className="testimonial-info">
          <div className="testimonial-stars">
            {stars.map((star, index) => (
              <img key={index} src={star} alt="None" />
            ))}
          </div>
          <div className="testimonial-name">
            <h2>{name}</h2>
          </div>
          <div className="testimonial-companyName">
            <h2>{companyName}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
