import DetailsPage from "pages/DetailsPage";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/style.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/details/:id" component={DetailsPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
