import "assets/scss/style.scss";
import Example from "pages/Example";
// import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={LandingPage}></Route> */}
        <Route path="/" component={Example}></Route>
      </Switch>
    </Router>
  );
}

export default App;
