import React, { useState, useEffect, useRef } from "react";
import { object, func, string } from "prop-types";
import { DateRange } from "react-date-range";

import IconCalendar from "assets/images/icons/icon-calendar.svg";
import formatDate from "utils/formatDate";

import "./index.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Date = (props) => {
  const { value, placeholder, name } = props;
  const [IsShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name,
      },
    };
    props.onChange(target);
  };

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <div className="input-group-text">
            <img src={IconCalendar} alt="icon-calendar" />
          </div>
        </div>
        <input
          readOnly
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={displayDate}
          onClick={() => setIsShowed(!IsShowed)}
        />
        {IsShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
              onChange={datePickerChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Date.propTypes = {
  value: object,
  onChange: func,
  placeholder: string,
  outerClassName: string,
  name: string,
};

export default Date;
