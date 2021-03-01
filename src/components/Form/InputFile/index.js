import { useRef } from "react";
import { oneOfType, func, number, string } from "prop-types";

const File = ({
  name,
  value,
  onChange,
  accept,
  prepend,
  append,
  placeholder,
  outerClassName,
  inputClassName,
}) => {
  const refInputFile = useRef(null);

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={value}
          onChange={onChange}
        />
        <input
          defaultValue={value}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
          onClick={() => refInputFile.current.click()}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
};

File.defaultProps = {
  placeholder: "Browse a file...",
};

File.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  accept: string.isRequired,
  prepend: oneOfType([number, string]),
  append: oneOfType([number, string]),
  placeholder: string,
  outerClassName: string,
  inputClassName: string,
};

export default File;
