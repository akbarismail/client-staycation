import { useEffect } from "react";
import { connect } from "react-redux";

import ItemDetails from "json/itemDetails.json";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import FeatureImage from "parts/FeatureImage";
import Footer from "parts/Footer";
import PageDetailDescription from "parts/PageDetailDescription";
import Testimony from "parts/Testimony";

import { checkoutBooking } from "store/actions/checkout";

const { default: Header } = require("parts/Header");
const { default: PageDetailTitle } = require("parts/PageDetailTitle");

const DetailsPage = (props) => {
  const { location, checkoutBooking } = props;

  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  useEffect(() => {
    document.title = "Staycation | Details Page";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header location={location} />
      <main>
        <PageDetailTitle breadcrumb={breadcrumbList} data={ItemDetails} />
        <FeatureImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={ItemDetails} />
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={ItemDetails}
                startBooking={checkoutBooking}
              />
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
      </main>
      <Footer />
    </>
  );
};

const mapStateProps = (state) => ({
  page: state.page,
});

export default connect(mapStateProps, { checkoutBooking })(DetailsPage);
