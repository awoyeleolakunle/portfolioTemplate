import React from "react";
import "../footer/footer.css";
import { listOfIcons } from "./iconList";
import Button from "../button/button";

const Footer = () => {
  return (
    <section className="mainContainer">
      <div>
        <h2>Lets work together</h2>
      </div>

      <div className="textIconAndInputButton">
        <div className="textAndIcons">
          <p>
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div>
            {listOfIcons.map((icon, index) => (
              <img key={index} src={icon} alt="" />
            ))}
          </div>
        </div>

        <div className="inputAndButton">
          <div>
            <input type="text" placeholder="Name" />
          </div>

          <div>
            <input type="text" placeholder="Email" />
          </div>
          <Button children="Submit" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
