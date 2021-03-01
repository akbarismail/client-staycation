import Fade from "react-reveal/Fade";
import TestimonyFrame from "assets/images/testimonial-landingpages-frame.jpg";
import Button from "components/Button";
import Star from "components/Star";

const Testimony = ({ data }) => {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 60 }}>
            <div
              className="testimonial-hero"
              style={{ margin: "30px 0 0 30px" }}
            >
              <figure>
                <img
                  src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`}
                  alt={`img-${data.name}`}
                  className="position-absolute"
                  style={{ zIndex: 1 }}
                />
                <img
                  src={TestimonyFrame}
                  alt={`img-${data.name}-frame`}
                  className="position-absolute"
                  style={{ margin: "-30px 0 0 -30px" }}
                />
              </figure>
            </div>
          </div>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4} />
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                type="link"
                href={`/testimonial/${data._id}`}
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Testimony;
