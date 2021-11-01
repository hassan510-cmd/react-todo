import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Controlled from "./Controlled";
import Notcontrolled from "./Notcontrolled";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/controlled">controlled</Link>
            </li>
            <li>
              <Link to="/Uncontroled">Uncontroled</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/controlled">
            <GoControle />
          </Route>
          <Route path="/Uncontroled">
            <GoNotcontrol />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function GoControle() {
  return <Controlled/>;
}

function GoNotcontrol() {
    return <Notcontrolled/>;
    // return <Controlled/>;
}

function Users() {
  return <h2>Users</h2>;
}