import React from "react";
import { Route, Switch } from "react-router-dom";

import { ListHeader } from "../components";
import GameDetail from "./GameDetail";
import GameList from "./GameList";

function Games() {
  return (
    <div className="content-container">
      <ListHeader title="Games" routePath="/games" />
      <div className="columns is-multiline is-variable">
        <div className="column is-8">
          <Switch>
            <Route exact path="/games" component={() => <GameList />} />
            <Route
              exact
              path="/heroes/:id"
              component={() => {
                return <GameDetail />;
              }}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Games;
