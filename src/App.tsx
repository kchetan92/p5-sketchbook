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
import Exp from "./sketchbook/Exp";
import Spyro1 from "./sketchbook/Spyro1";
import Spyro2 from "./sketchbook/Spyro2";
import Spyro2_1 from "./sketchbook/Spyro2_1";
import Spyro2_2 from "./sketchbook/Spyro2_2";
import Spyro2_3 from "./sketchbook/Spyro2_3";

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
              <li>
                <Link to="/Exp">Exp</Link>
              </li>
              <li>
                <Link to="/Spyro1">Spyro1</Link>
              </li>
              <li>
                <Link to="/Spyro2">Spyro2</Link>
              </li>
              <li>
                <Link to="/Spyro2_1">Spyro2_1</Link>
              </li>
              <li>
                <Link to="/Spyro2_2">Spyro2_2</Link>
              </li>
              <li>
                <Link to="/Spyro2_3">Spyro2_3</Link>
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
              <Route exact path="/Exp">
                <Exp />
              </Route>
              <Route exact path="/Spyro1">
                <Spyro1 />
              </Route>
              <Route exact path="/Spyro2">
                <Spyro2 />
              </Route>
              <Route exact path="/Spyro2_1">
                <Spyro2_1 />
              </Route>
              <Route exact path="/Spyro2_2">
                <Spyro2_2 />
              </Route>
              <Route exact path="/Spyro2_3">
                <Spyro2_3 />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
