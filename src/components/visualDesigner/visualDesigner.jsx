import React from "react";
import "../visualDesigner/visualDesigner.css";
import Button from "../button/button";

const VisualDesigner = () => {
  return (
    <section className="section">
      <div className="mainDiv">
        <div className="visuals">
          <h4>Branding | Image Making</h4>
          <h4>Thank you Kayus My guy. I dey wait the babe oo</h4>
          <h1>Visual Designer</h1>
          <div className="ptext">
            <p>This is a template Figma file, turned into code using Anima</p>
            <p>Learn more at AnimaApp.com</p>
          </div>
          <Button className="contact">Contact</Button>
        </div>
        <img className="visualImg" src="assets/HeaderImage 1.png" alt="None" />
      </div>
    </section>
  );
};

export default VisualDesigner;
