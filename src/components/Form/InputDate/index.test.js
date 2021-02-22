import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";

// eslint-disable-next-line testing-library/no-dom-import
import { screen } from "@testing-library/dom";
import InputDate from "./index";

const TestInputDate = () => {
  const [DateInput, setDateInput] = useState({
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const handleChange = (event) => {
    setDateInput({ [event.target.name]: event.target.value });
  };

  return (
    <InputDate name="value" value={DateInput.value} onChange={handleChange} />
  );
};

const setup = () => {
  const { container } = render(<TestInputDate />);
  const wrapper = container.querySelector(".input-date");
  const input = container.querySelector("input.form-control");

  return {
    container,
    wrapper,
    input,
  };
};

test("should have wrapper with className .form-control", () => {
  const { wrapper } = setup();

  expect(wrapper).toBeInTheDocument();
});

test("should have tag <input> and has className .form-control", () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

test("should show date picker when click input field", () => {
  const { container, input } = setup();

  screen.debug();
  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector(".date-range-wrapper");

  expect(datePickerWrapper).toBeInTheDocument();
});
