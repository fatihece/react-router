import React from "react";
import "./App.css"
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1>CLARUSWAY</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
