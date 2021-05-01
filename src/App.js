import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components/

import Navbar from "./components/Navbar";

//Pages

import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/singleshow/:id" component={SinglePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
