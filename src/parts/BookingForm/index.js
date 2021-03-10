import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { object, func } from "prop-types";
import Fade from "react-reveal/Fade";

import { Button } from "components";
import { InputNumber, InputDate } from "components/Form";

export class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (event) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const duration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    const { itemDetails } = this.props;

    return (
      <Fade bottom>
        <div className="card bordered" style={{ padding: "60px 80px" }}>
          <h4 className="mb-3">Start Booking</h4>
          <h5 className="h2 text-teal mb-4">
            Rp.{itemDetails.price}{" "}
            <span className="text-gray-500 font-weight-light">
              per {itemDetails.unit}
            </span>
          </h5>

          <label htmlFor="duration">How long you will stay?</label>
          <InputNumber
            max={30}
            suffix=" night"
            isSuffixPlural
            name="duration"
            value={data.duration}
            onChange={this.updateData}
          />

          <label htmlFor="date">Pick a date</label>
          <InputDate name="date" value={data.date} onChange={this.updateData} />

          <h6
            className="text-gray-500 font-weight-light"
            style={{ marginBottom: 40 }}
          >
            You will pay{" "}
            <span className="text-gray-900">
              Rp. {itemDetails.price * data.duration}
            </span>{" "}
            per{" "}
            <span className="text-gray-900">
              {data.duration} {itemDetails.unit}
            </span>
          </h6>

          <Button
            className="btn"
            hasShadow
            isPrimary
            isBlock
            onClick={this.startBooking}
          >
            Continue to Book
          </Button>
        </div>
      </Fade>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: object,
  startBooking: func,
};

export default withRouter(BookingForm);
