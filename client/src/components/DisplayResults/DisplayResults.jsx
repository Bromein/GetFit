import React from "react";

import { Result, GoalCard } from "./DisplayResults.styles";

const DisplayResults = props => (
  <Result>
    <div className="results">Your TDEE is {props.tdee}</div>
    <GoalCard>
      <section>
        <p>
          Lose 1lb A Week <span>{props.tdee - 500}</span>
        </p>
      </section>
      <section>
        <p>
          Maintain Your Current Weight <span>{props.tdee}</span>
        </p>
      </section>
      <section>
        <p>
          Gain 1lb A Week <span>{props.tdee + 500}</span>
        </p>
      </section>
    </GoalCard>
  </Result>
);
export default DisplayResults;
