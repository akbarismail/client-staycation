import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Checkout from "pages/Checkout";
import DetailsPage from "pages/DetailsPage";
import LandingPage from "pages/LandingPage";
import "assets/scss/style.scss";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/details/:id" component={DetailsPage}></Route>
          <Route path="/checkout" component={Checkout}></Route>
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
