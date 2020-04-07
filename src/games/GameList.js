import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

import { CardContent } from '../components';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {games:[]};
  }

  componentDidMount() {
    axios.get(`http://starlord.hackerearth.com/TopSellingGames`).then(res => {
      const games = res.data;
      this.setState({ games: games });
    });
  }

  render() {
    return (
        <ul className="list">
          {this.state.games.map((game, index) => (
              <li key={game.Rank} role="presentation">
                <div className="card">
                  <CardContent name={game.Name} description={game.Platform} />
                </div>
              </li>
          ))}
        </ul>
    );
  }
}

export default withRouter(GameList);
