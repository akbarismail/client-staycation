import Button from "components/Button";
import React from "react";

const MostPicked = ({ data, refMostPicked }) => {
  return (
    <section className="container" ref={refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {data.map((item, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span>/{item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={`img-${item.name}`}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    className="stretched-link d-block text-white"
                    type="link"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MostPicked;
