import React from "react";

import GoalForm from "../GoalForm/GoalForm";
import DisplayResults from "../DisplayResults/DisplayResults";
import Sidebar from "../Sidebar/Sidebar";

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
        {/* <Sidebar /> */}
        {tdee ? (
          <DisplayResults tdee={this.state.tdee} />
        ) : (
          <GoalForm updateTdee={this.handleTdeeChange} />
        )}
        {/* <DisplayResults /> */}
      </CenteredMain>
    );
  }
}
export default Main;
