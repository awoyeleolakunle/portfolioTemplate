import React from "react";
import "../logo/logoList.css";
import Logo from "./logo";
import { listOfLogoImageSrc } from "./logoImages";

const ListOfLogos = () => {
  return (
    <section>
      <div className="logoList">
        {listOfLogoImageSrc.map((imageSrc, index) => (
          <Logo key={index} src={imageSrc} />
        ))}
      </div>
    </section>
  );
};

export default ListOfLogos;
