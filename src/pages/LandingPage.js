import React, { createRef } from "react";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
const { default: Header } = require("parts/Header");

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
      </main>
    </>
  );
};

export default LandingPage;
