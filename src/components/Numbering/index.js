import { object, string } from "prop-types";
import Fade from "react-reveal/Fade";
import "./index.scss";

const Numbering = ({ style, className, data, current }) => {
  const keysOfData = Object.keys(data);

  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {keysOfData.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === keysOfData.length) {
            isActive = "";
            return null;
          }

          return (
            <li key={`step-${index + 1}`} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
};

Numbering.propTypes = {
  className: string,
  data: object,
  current: string,
};

export default Numbering;
