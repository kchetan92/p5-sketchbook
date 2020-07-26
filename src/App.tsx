import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Hello from "./sketchbook/basic/Hello";
import BeginShape from "./sketchbook/basic/BeginShape";
import DNA from "./sketchbook/DNA";

function App() {
  return (
    <div className="App container">
      <h1 className="is-size-1">Chetan's sketches</h1>
      <p>My Sketches:</p>

      <BrowserRouter>
        <div className="columns">
          <div className="column">
            <ul>
              <li>
                <Link to="/basic/hello">basic/hello</Link>
              </li>
              <li>
                <Link to="/basic/BeginShape">basic/BeginShape</Link>
              </li>
              <li>
                <Link to="/DNA">DNA</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <Switch>
              <Route path="/basic/hello">
                <Hello />
              </Route>
              <Route path="/basic/BeginShape">
                <BeginShape />
              </Route>
              <Route path="/DNA">
                <DNA />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
