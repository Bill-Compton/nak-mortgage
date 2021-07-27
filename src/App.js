import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import NoMatch from "./Component/NoMatch/NoMatch";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pricing from "./Component/Pricing/Pricing";
import AboutUs from "./Component/AboutUs/AboutUs"

class App extends React.Component {
  render() {
    return (
      <div className="bg-dark">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Pricing" component={Pricing} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact pathe="/404" component={NoMatch} />
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    );
  }
}

export default App;
