import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Hello from "./sketchbook/basic/Hello";
import BeginShape from "./sketchbook/basic/BeginShape";
import DNA from "./sketchbook/DNA";
import Waves from "./sketchbook/Waves";
import Circles from "./sketchbook/Circles";
import Bezier from "./sketchbook/Bezier";
import Particles from "./sketchbook/Particles";
import Particles2 from "./sketchbook/Particles2";

function App() {
  return (
    <div className="App container">
      <h1 className="is-size-1">Chetan's sketches</h1>
      <p>My Sketches:</p>

      <BrowserRouter>
        <div className="columns">
          <div className="column">
            <ul>
              {/* <li>
                <Link to="/basic/hello">basic/hello</Link>
              </li>
              <li>
                <Link to="/basic/BeginShape">basic/BeginShape</Link>
              </li> */}
              <li>
                <Link to="/DNA">DNA</Link>
              </li>
              <li>
                <Link to="/Waves">Waves*</Link>
              </li>
              <li>
                <Link to="/Circles">Circles</Link>
              </li>
              <li>
                <Link to="/Bezier">Bezier</Link>
              </li>
              <li>
                <Link to="/Bezier-light">Bezier (light)</Link>
              </li>
              <li>
                <Link to="/Particles">Particles</Link>
              </li>
              <li>
                <Link to="/Particles2">Particles2</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <Switch>
              <Route exact path="/basic/hello">
                <Hello />
              </Route>
              <Route exact path="/basic/BeginShape">
                <BeginShape />
              </Route>
              <Route exact path="/DNA">
                <DNA />
              </Route>
              <Route exact path="/Waves">
                <Waves />
              </Route>
              <Route exact path="/Circles">
                <Circles />
              </Route>
              <Route exact path="/Bezier">
                <Bezier />
              </Route>
              <Route exact path="/Bezier-light">
                <Bezier theme="light" />
              </Route>
              <Route exact path="/Particles">
                <Particles />
              </Route>
              <Route exact path="/Particles2">
                <Particles2 />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
