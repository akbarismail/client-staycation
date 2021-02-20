import { string, number } from "prop-types";
import "./index.scss";

const Star = ({ className, value, width, height, spacing }) => {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        key={`star-${index + 1}`}
        className="star"
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        key="stardecimals"
        className="star"
        style={{
          left: leftPos,
          width: decimals * width - spacing,
          height: height,
        }}
      ></div>
    );
  }

  const starPlaceHolder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceHolder.push(
      <div
        key={`starplaceholder-${index + 1}`}
        className="star placeholder"
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={[`stars`, className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceHolder}
        {star}
      </div>
    </>
  );
};

Star.propTypes = {
  className: string,
  value: number,
  width: number,
  height: number,
  spacing: number,
};

export default Star;
