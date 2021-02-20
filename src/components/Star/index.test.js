import { render } from "@testing-library/react";
import Star from "./index";

test("should have props [value, width, height, spacing]", () => {
  const width = 40,
    height = 40,
    spacing = 4;
  const { container } = render(
    <Star value={4.2} width={width} height={height} spacing={spacing} />
  );
  const starYellow = "div.stars div.star:not(.placeholder)";

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );

  expect(container.querySelector(starYellow)).toBeInTheDocument();
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`width: ${width}px`)
  );
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`margin-right: ${spacing}px`)
  );
});
