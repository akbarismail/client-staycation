import { useEffect } from "react";
import { connect } from "react-redux";

import BookingForm from "parts/BookingForm";
import FeatureImage from "parts/FeatureImage";
import Footer from "parts/Footer";
import PageDetailDescription from "parts/PageDetailDescription";
import Testimony from "parts/Testimony";

import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";
import Activities from "parts/Activities";

const { default: Header } = require("parts/Header");
const { default: PageDetailTitle } = require("parts/PageDetailTitle");

const DetailsPage = (props) => {
  const { location, checkoutBooking, page, match, fetchPage } = props;

  useEffect(() => {
    document.title = "Staycation | Details Page";
    window.scrollTo(0, 0);

    if (!page[match.params.id])
      fetchPage(`/detail-page/${match.params.id}`, match.params.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!page[match.params.id]) return null;

  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  return (
    <>
      <Header location={location} />
      <main>
        <PageDetailTitle
          breadcrumb={breadcrumbList}
          data={page[match.params.id]}
        />
        <FeatureImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={page[match.params.id]} />
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={checkoutBooking}
              />
            </div>
          </div>
        </section>
        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
      </main>
      <Footer />
    </>
  );
};

const mapStateProps = (state) => ({
  page: state.page,
});

export default connect(mapStateProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
