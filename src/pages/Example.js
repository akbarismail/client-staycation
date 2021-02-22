import React, { useState } from "react";
import { InputDate } from "components/Form";

const Example = () => {
  const [inputValue, setInputValue] = useState({
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const handleChange = (event) => {
    setInputValue({ [event.target.name]: event.target.value });
  };

  console.log(inputValue.value);

  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          <InputDate
            name="value"
            value={inputValue.value}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Example;
