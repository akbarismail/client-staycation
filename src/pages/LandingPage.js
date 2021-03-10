import React, { createRef, useEffect } from "react";
import { connect } from "react-redux";

import { Hero, MostPicked, Categories, Header, Testimony, Footer } from "parts";

import { fetchPage } from "store/actions/page";

const LandingPage = (props) => {
  const { location, page, fetchPage } = props;

  const refMostPicked = createRef();

  useEffect(() => {
    document.title = "Staycation | Home Page";
    window.scrollTo(0, 0);

    if (!page.landingPage) fetchPage(`/landing-page`, "landingPage");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!page.hasOwnProperty("landingPage")) return null;

  return (
    <>
      <Header location={location} />
      <main>
        <Hero refMostPicked={refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimony data={page.landingPage.testimonial} />
      </main>
      <Footer />
    </>
  );
};

const mapStateProps = (state) => ({
  page: state.page,
});

export default connect(mapStateProps, { fetchPage })(LandingPage);
