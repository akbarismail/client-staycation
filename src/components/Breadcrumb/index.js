import { Button } from "components";
import { array, string } from "prop-types";

const Breadcrumb = ({ className, data }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={["breadcrumb", className].join(" ")}>
        {data.map((item, index) => {
          return (
            <li
              key={`item-${index + 1}`}
              className={`breadcrumb-item ${
                index === data.length - 1 ? "active" : ""
              }`}
            >
              {index === data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  data: array,
  className: string,
};

export default Breadcrumb;
