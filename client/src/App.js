import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
  render () {
    return (
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route exact path="/saved" component={Saved}/>
          </Switch>
      </Router>
    )
  }
};


export default App;
