import Fade from "react-reveal/Fade";
import Button from "components/Button";

const MostPicked = ({ data, refMostPicked }) => {
  return (
    <section className="container" ref={refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {data.map((item, index) => {
            return (
              <Fade bottom delay={300 * index} key={`mostpicked-${index}`}>
                <div
                  className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
                >
                  <div className="card card-featured">
                    <div className="tag">
                      Rp.{item.price}
                      <span>/{item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={
                          item.imageId[0]
                            ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                            : ""
                        }
                        alt={`img-${item.name}`}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="stretched-link d-block text-white"
                        type="link"
                        href={`/details/${item._id}`}
                      >
                        <h5>{item.title}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </section>
  );
};

export default MostPicked;
