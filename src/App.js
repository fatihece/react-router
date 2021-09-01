import React from "react";
import "./App.css"
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1>CLARUSWAY</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/details/abc">Details</Link></li>
            
          </ul>
        </nav>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/details" component={Details} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
