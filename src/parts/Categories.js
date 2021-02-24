import Fade from "react-reveal/Fade";
import Button from "components/Button";

const Categories = ({ data }) => {
  return data.map((category, index1) => {
    return (
      <Fade bottom key={`category-${index1}`}>
        <section className="container">
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no destination at category
                </div>
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <Fade
                    bottom
                    delay={300 * index2}
                    key={`category-item-${index2}`}
                  >
                    <div className="item column-3 row-1">
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular{" "}
                            <span className="font-weight-light">Choice</span>
                          </div>
                        )}
                        <figure className="img-wrapper" style={{ height: 180 }}>
                          <img
                            src={item.imageUrl}
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
                          <span className="text-gray-500">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                );
              })
            )}
          </div>
        </section>
      </Fade>
    );
  });
};

export default Categories;
