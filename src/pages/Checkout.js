import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

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

import { submitBooking } from "store/actions/checkout";

const Checkout = (props) => {
  const { location, checkout, page, history } = props;

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

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Staycation | Checkout";
  }, []);

  const onChange = (event) => {
    setInputForm({
      data: {
        ...InputForm.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  const { data } = InputForm;

  const _submit = (nextStep) => {
    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("image", data.proofPayment[0]);
    payload.append("bankFrom", data.bankName);
    payload.append("accountHolder", data.bankHolder);
    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);

    props.submitBooking(payload).then(() => {
      nextStep();
    });
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
              <Button
                className="btn mt-5"
                type="button"
                isLight
                onClick={() => history.goBack()}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    );

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          itemDetails={page[checkout._id]}
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
          checkout={checkout}
          itemDetails={page[checkout._id]}
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
                    type="button"
                    className="btn"
                    isBlock
                    isLight
                    onClick={() => history.goBack()}
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
                          onClick={() => _submit(nextStep)}
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
                    href="/"
                    isBlock
                    isPrimary
                    hasShadow
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
  page: state.page,
});

export default connect(mapStateProps, { submitBooking })(Checkout);
