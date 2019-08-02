import React from "react";

import GoalForm from "../GoalForm/GoalForm";

import { CenteredMain } from "./Main.styles";

class Main extends React.Component {
  state = {
    tdee: null,
  };

  handleTdeeChange = tdee => {
    this.setState({ tdee });
  };

  render() {
    const tdee = this.state.tdee;

    return (
      <CenteredMain {...this.props}>
        {tdee ? (
          <div>{this.state.tdee}</div>
        ) : (
          <GoalForm updateTdee={this.handleTdeeChange} />
        )}
      </CenteredMain>
    );
  }
}
export default Main;
