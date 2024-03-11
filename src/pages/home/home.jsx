import React from "react";
import "../home/home.css";
import Header from "../../components/header/header";
import VisualDesigner from "../../components/visualDesigner/visualDesigner";
import ListOfLogos from "../../components/logo/logoList.jsx";
import WhatWeOffer from "../../components/whatWeOffer/whatWeOffer.jsx";
import LatestWorks from "../../components/latestWork/lastestWork.jsx";
import ListOfTestimonials from "../../components/testimonial/listOfTestimonials.jsx";
import Footer from "../../components/footer/footer.jsx";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content-below-header">
        <VisualDesigner />
        <ListOfLogos />
        <WhatWeOffer />
        <LatestWorks />
        <ListOfTestimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
