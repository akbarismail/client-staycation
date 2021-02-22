import Button from "components/Button";
import BrandIcon from "./IconText";
import Fade from "react-reveal/Fade";

const Header = ({ location }) => {
  const getNavLink = (path) => {
    return location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <Fade>
        <nav className="navbar navbar-expand-lg navbar-light container">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLink("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLink("/browse-by")}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getNavLink("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLink("/agents")}`}>
                <Button className="nav-link" type="link" href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </Fade>
    </header>
  );
};

export default Header;
