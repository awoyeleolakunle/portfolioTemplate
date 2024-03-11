import React from "react";
import "./listOfTestimonial.css";
import { listOfTestimonials } from "./testimonials";
import TestimonialCard from "./testimonial";

const ListOfTestimonials = () => {
  return (
    <section>
      <h1 className="testimonialText">Testimonial</h1>
      <div className="listOfTestimonials">
        {listOfTestimonials.map((test, index) => (
          <TestimonialCard
            key={index}
            name={test.name}
            companyName={test.companyName}
            image={test.image}
            description={test.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ListOfTestimonials;
