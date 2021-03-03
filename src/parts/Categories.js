import Fade from "react-reveal/Fade";
import Button from "components/Button";

const Categories = ({ data }) => {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;

    return (
      <Fade bottom key={`category-${index1}`}>
        <section className="container">
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.map((item, index2) => {
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
                      <figure className="img-wrapper">
                        <img
                          src={
                            item.imageId[0]
                              ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={`img-${item.name}`}
                          className="img-cover"
                          style={{ height: 180 }}
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          className="stretched-link d-block text-gray-800"
                          type="link"
                          href={`/properties/${item._id}`}
                        >
                          <h5 className="h4">{item.title}</h5>
                        </Button>
                        <span className="text-gray-500">
                          {item.city}, {item.country}
                        </span>
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
  });
};

export default Categories;
