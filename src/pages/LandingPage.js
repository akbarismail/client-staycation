import React, { createRef } from "react";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import Header from "parts/Header";

const LandingPage = ({ location }) => {
  const refMostPicked = createRef();

  return (
    <>
      <Header location={location} />
      <main>
        <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
