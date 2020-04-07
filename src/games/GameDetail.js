import React, { Component } from "react";
import { withRouter } from "react-router";

import { ButtonFooter, InputDetail } from "../components";

class GameDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.game = this.props.game;
  }

  render() {
    return (
      <div className="card edit-detail">
        <header className="card-header">
          <p className="card-header-title">
            {this.state.game.name}
            &nbsp;
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {this.state.game.id && (
              <InputDetail
                name="id"
                value={this.state.game.id}
                readOnly="true"
              />
            )}
            <InputDetail
              name="name"
              value={this.state.game.name}
              placeholder="e.g Colleen"
            />
            <InputDetail
              name="description"
              value={this.state.game.description}
              placeholder="e.g dance fight!"
            />
          </div>
        </div>
        <footer className="card-footer ">
          <ButtonFooter
            className="cancel-button"
            iconClasses="fas fa-undo"
            label="Cancel"
          />
          <ButtonFooter
            className="save-button"
            iconClasses="fas fa-save"
            label="Save"
          />
        </footer>
      </div>
    );
  }
}

export default withRouter(GameDetail);
