import React, { useState } from "react";
import InputNumber from "components/Form/InputNumber";

const Example = () => {
  const [inputValue, setInputValue] = useState({ value: "1" });

  const handleChange = (event) => {
    setInputValue({ [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          <InputNumber
            suffix=" night"
            isSuffixPlural
            max={30}
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
