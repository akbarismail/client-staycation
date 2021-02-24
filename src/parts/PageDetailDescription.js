import ReactHTMLParser from "react-html-parser";
import Fade from "react-reveal/Fade";

const PageDetailDescription = ({ data }) => {
  return (
    <Fade bottom>
      <div className="page-details">
        <h4>About The Place</h4>
        {ReactHTMLParser(data.description)}
        <div className="row" style={{ marginTop: 30 }}>
          {data.features.map((feature, index) => {
            return (
              <Fade bottom delay={300 * index} key={`feature-${index + 1}`}>
                <div className="col-3" style={{ marginBottom: 20 }}>
                  <figure>
                    <img
                      width={38}
                      src={feature.imageUrl}
                      alt={`img-${feature.name}`}
                      className="d-block mb-2"
                    />
                  </figure>
                  <span>{feature.qty}</span>{" "}
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </Fade>
  );
};

export default PageDetailDescription;
