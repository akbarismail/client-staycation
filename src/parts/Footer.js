const { default: Button } = require("components/Button");
const { default: IconText } = require("./IconText");

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-auto" style={{ width: 350 }}>
          <IconText />
          <p className="brand-tagline">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div className="col-auto mr-5">
          <h6 className="mt-2">For Beginners</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/register">
                New Account
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/booking">
                Start Booking a Room
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/use-payment">
                Use Payments
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-2 mr-5">
          <h6 className="mt-2">Explore Us</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/careers">
                Our Careers
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/privacy">
                Privacy
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/term">
                Terms & Conditions
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h6 className="mt-2">Connect Us</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button
                type="link"
                href="mailto:support@staycation.id"
                isExternal
              >
                support@staycation.id
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="tel:+62216539154" isExternal>
                021-653-9154
              </Button>
            </li>
            <li className="list-group-item">
              <span>Staycation, Skyway, Jakarta</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col text-center copyrights">
          Copyrights 2021 - Created by Staycation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
