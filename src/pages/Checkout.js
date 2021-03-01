import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import ItemDetails from "json/itemDetails.json";
import Header from "parts/Header";
import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";
import Stepper from "components/Stepper";
import Numbering from "components/Stepper/Numbering";
import MainContent from "components/Stepper/MainContent";
import Meta from "components/Stepper/Meta";
import Controller from "components/Stepper/Controller";
import Button from "components/Button";

const Checkout = (props) => {
  const { location, checkout } = props;

  const [InputForm, setInputForm] = useState({
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  });

  const onChange = (event) => {
    setInputForm({
      data: {
        ...InputForm.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Staycation | Checkout";
  }, []);

  const { data } = InputForm;

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          itemDetails={ItemDetails}
          handleChange={onChange}
        />
      ),
    },
    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: (
        <Payment
          data={data}
          itemDetails={ItemDetails}
          checkout={checkout}
          handleChange={onChange}
        />
      ),
    },
    completed: {
      title: "Yay! Completed",
      description: null,
      content: <Completed />,
    },
  };

  if (!checkout)
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center text-center"
          style={{ height: "100vh" }}
        >
          <div className="col-3">
            Pilih Kamar Terlebih Dahulu
            <div>
              <Button className="btn mt-5" type="link" href="/" isLight>
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <Header location={location} isCentered />
      <main>
        <Stepper steps={steps} initialStep="bookingInformation">
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />

              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    type="link"
                    href={`/details/${ItemDetails._id}`}
                    className="btn"
                    isBlock
                    isLight
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href={`/`}
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </main>
    </>
  );
};

const mapStateProps = (state) => ({
  checkout: state.checkout,
});

export default connect(mapStateProps)(Checkout);