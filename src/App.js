import React, { Component, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./styles.css";
import "bulma/css/bulma.css";
import "./styles.scss";

import { HeaderBar, NavBar, NotFound } from "./components";

const Games = withRouter(
  lazy(() => import(/* webpackChunkName: "heroes" */ "./games/Games"))
);

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="section columns">
          <NavBar />
          <main className="column">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Redirect from="/" exact to="/games" />
                <Route path="/games" component={Games} />
                <Route exact path="**" component={NotFound} />
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
