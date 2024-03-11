import React from "react";
import "../logo/logo.css";

const Logo = ({ src }) => {
  return <img className="logoImage" src={src} alt="None" loading="lazy" />;
};

export default Logo;
