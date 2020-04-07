import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`http://starlord.hackerearth.com/TopSellingGames`).then(res => {
      console.log(res);
      const games = res.data;
      this.setState({ games });
    });
  }

  render() {
    return <div>it works</div>;
  }
}

export default withRouter(GameList);
