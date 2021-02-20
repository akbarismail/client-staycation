import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
