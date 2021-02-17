const { default: Header } = require("parts/Header");

const LandingPage = ({ location }) => {
  return (
    <>
      <Header location={location} />
    </>
  );
};

export default LandingPage;
