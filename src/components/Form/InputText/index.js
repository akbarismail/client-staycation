import { useState } from "react";
import { oneOfType, func, number, string } from "prop-types";

import "./index.scss";

const Text = ({
  value,
  type,
  onChange,
  placeholder,
  name,
  prepend,
  append,
  outerClassName,
  inputClassName,
  errorResponse,
}) => {
  const [HassError, setHassError] = useState(null);

  let pattern = "";
  if (type === "email")
    pattern = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (type === "tel") pattern = "[0-9]*";

  const handleChange = (event) => {
    const target = {
      target: {
        name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHassError(errorResponse);
      else setHassError(null);
    }

    if (type === "tel") {
      if (event.target.validity.valid) onChange(target);
    } else {
      onChange(target);
    }
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          name={name}
          type={type}
          pattern={pattern}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {HassError && <span className="error-helper">{HassError}</span>}
    </div>
  );
};

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format.",
};

Text.propTypes = {
  name: string.isRequired,
  value: oneOfType([number, string]).isRequired,
  onChange: func.isRequired,
  prepend: oneOfType([number, string]),
  append: oneOfType([number, string]),
  type: string,
  placeholder: string,
  outerClassName: string,
  inputClassName: string,
};

export default Text;
