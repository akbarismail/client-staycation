import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";
import { Button } from "components";
import { formatNumber } from "utils";
import Fade from "react-reveal/Fade";

const Hero = ({ refMostPicked, data }) => {
  function showMostPicked() {
    window.scrollTo({
      top: refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide that you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <figure>
                  <img
                    src={IconTraveler}
                    width={36}
                    alt={`${data.travelers} Travelers`}
                  />
                </figure>
                <h6 className="mt-3">
                  {formatNumber(data.travelers)}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <figure>
                  <img
                    src={IconTreasure}
                    width={36}
                    alt={`${data.treasures} Treasures`}
                  />
                </figure>
                <h6 className="mt-3">
                  {formatNumber(data.treasures)}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <figure>
                  <img
                    src={IconCities}
                    width={36}
                    alt={`${data.cities} Cities`}
                  />
                </figure>
                <h6 className="mt-3">
                  {formatNumber(data.cities)}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-3">
            <div style={{ width: 520, height: 410 }}>
              <figure>
                <img
                  src={ImageHero}
                  alt="Room with couches"
                  className="img-fluid position-absolute"
                  style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                />

                <img
                  src={ImageHero_}
                  alt="Room with couches frame"
                  className="img-fluid position-absolute"
                  style={{ margin: "0 -15px -15px 0" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
