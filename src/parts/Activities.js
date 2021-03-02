import Fade from "react-reveal/Fade";

import Button from "components/Button";

const Activities = ({ data }) => {
  if (data.length === 0) return null;
  return (
    <Fade bottom>
      <section className="container">
        <h4 className="mb-3 font-weight-medium">Activities</h4>
        <div className="container-grid">
          {data.map((item, index2) => {
            return (
              <Fade bottom delay={300 * index2} key={`activity-item-${index2}`}>
                <div className="item column-3 row-1">
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper">
                      <img
                        src={
                          item.imageUrl
                            ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                            : ""
                        }
                        alt={`img-${item.name}`}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="stretched-link d-block text-gray-800"
                        type="link"
                        href={`/properties/${item._id}`}
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">{item.type}</span>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </section>
    </Fade>
  );
};

export default Activities;
