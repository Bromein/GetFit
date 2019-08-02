import React from "react";

import { StyledForm } from "./GoalForm.styles";

class GoalForm extends React.Component {
  state = {
    height: "",
    age: "",
    gender: "",
    weight: "",
    activityModifier: "",
    tdee: null,
  };

  calculateBmr = e => {
    e.preventDefault();
    const { height, age, gender, weight, activityModifier } = this.state;

    if (gender === "male") {
      const maleBmr = 10 * weight + 6.25 * height - 5 * age + 5;
      // this.setState({ tdee: Math.ceil(maleBmr * activityModifier) });
      this.props.updateTdee(Math.ceil(maleBmr * activityModifier));
    } else {
      const femaleBmr = 10 * weight + 6.25 * height - 5 * age - 171;
      this.setState({ tdee: Math.ceil(femaleBmr * activityModifier) });
    }
  };

  handleMeasurementConversion = (name, valueToChange) => {
    if (name === "height") {
      //return an inch to cm conversion
      return valueToChange * 2.54;
    } else {
      // if it wasnt height, then its weight. convert lbs to kgs
      return valueToChange * 0.45359237;
    }
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === "height" || name === "weight") {
      const convertedValue = this.handleMeasurementConversion(name, value);
      this.setState({ [name]: convertedValue });
    } else {
      this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }
  };

  render() {
    return (
      <StyledForm onSubmit={this.calculateBmr}>
        <label>Height (inches)</label>
        <input type="number" name="height" onChange={this.handleChange} />
        <label>Age</label>
        <input
          type="number"
          name="age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <label>Weight (lbs)</label>
        <input type="number" name="weight" onChange={this.handleChange} />
        <select
          name="gender"
          onChange={this.handleChange}
          value={this.state.gender}
        >
          <option value="">--Gender--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select name="activityModifier" onChange={this.handleChange}>
          <option value="">How active are you?</option>
          <option value="1.2">Sedentary (little to no exercise)</option>
          <option value="1.375">
            Lightly Active (I workout lightly 1-3 times a week)
          </option>
          <option value="1.55">
            Moderately Active (I could push my workouts harder, but they're
            still hard. (3-5 times a week)
          </option>
          <option value="1.75">
            Very Active (I'm sweating. Hard. 6-7 days a week)
          </option>
        </select>

        <button type="submit">Let's go!</button>
        <div>{this.state.tdee}</div>
      </StyledForm>
    );
  }
}

export default GoalForm;
