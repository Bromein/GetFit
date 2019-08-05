import React from "react";

import { Result } from "./DisplayResults.styles";

const DisplayResults = props => (
  <Result>
    <div className="results">Your TDEE is {props.tdee}</div>
    <span>2800</span>
  </Result>
);
export default DisplayResults;
