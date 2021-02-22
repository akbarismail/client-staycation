import { useState } from "react";
import { oneOfType, func, string, number, bool } from "prop-types";
import "./index.scss";

const Number = (props) => {
  const {
    value,
    name,
    min,
    max,
    prefix,
    suffix,
    outerClassName,
    isSuffixPlural,
  } = props;

  const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (event) => {
    let value = String(event.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name,
          value: +value,
        },
      });
      setInputValue(
        `${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`
      );
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          pattern="[0-9]*"
          className="form-control"
          name={name}
          value={String(InputValue)}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: oneOfType([string, number]),
  onChange: func,
  isSuffixPlural: bool,
  outerClassName: string,
};

export default Number;
