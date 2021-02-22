import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./index";

const TestInput = () => {
  const [inputValue, setInputValue] = useState({ value: "" });

  const handleChange = (event) => {
    setInputValue({ [event.target.name]: event.target.value });
  };

  return (
    <InputNumber
      max={30}
      onChange={handleChange}
      name="value"
      value={inputValue.value}
    />
  );
};

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector("input.form-control[name='value']");

  return {
    input,
  };
};

test("should able to change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).toBe("23");
});

test("should not be able to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe("");
});
