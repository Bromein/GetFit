import React from "react";

import { StyledForm, ErrorText } from "./GoalForm.styles";

class GoalForm extends React.Component {
  state = {
    height: "",
    age: "",
    gender: "",
    weight: "",
    activityModifier: "",
    errors: {
      height: "",
      age: "",
      gender: "",
      weight: "",
      activityModifier: "",
    },
    allowSubmit: false,
  };

  componentDidMount() {
    const errors = this.state.errors;

    Object.values(errors).forEach(
      val => val === "" && this.setState({ allowSubmit: false })
    );
  }

  formValidation = ({ errors, ...others }) => {
    let valid = true;

    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    Object.values(others).forEach(val => val === "" && (valid = false));
    return valid;
  };

  calculateBmr = e => {
    e.preventDefault();

    if (this.formValidation(this.state)) {
      const { height, age, gender, weight, activityModifier } = this.state;
      console.log("form valid");

      if (gender === "male") {
        const maleBmr = 10 * weight + 6.25 * height - 5 * age + 5;
        // this.setState({ tdee: Math.ceil(maleBmr * activityModifier) });
        this.props.updateTdee(Math.ceil(maleBmr * activityModifier));
      } else {
        const femaleBmr = 10 * weight + 6.25 * height - 5 * age - 171;
        this.props.updateTdee(Math.ceil(femaleBmr * activityModifier));
      }
      this.setState({
        height: "",
        age: "",
        gender: "",
        weight: "",
        activityModifier: "",
        tdee: null,
      });
    } else {
      console.error("form invalid");
    }
  };

  //convert inches to cm and lb to kg... murica'
  handleMeasurementConversion = (name, valueToChange) => {
    if (name === "height") {
      //return an inch to cm conversion
      return valueToChange * 2.54;
    } else {
      // if it wasnt height, then its weight. convert lbs to kgs
      return valueToChange * 0.45359237;
    }
  };

  //checking to see if
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    let errors = this.state.errors;
    let convertedValue;

    switch (name) {
      case "height":
        errors.height =
          value.length < 2 ? "Please enter your height in inches" : "";
        convertedValue = this.handleMeasurementConversion(name, value);
        break;
      case "weight":
        errors.weight = value.length < 2 ? "Don't forget your weight!" : "";
        convertedValue = this.handleMeasurementConversion(name, value);
        break;
      case "gender":
        errors.gender = value.length < 1 ? "Please select your gender." : "";
        break;
      case "age":
        errors.age =
          value.length < 2
            ? "Age plays an important role in your calories, make sure to add it"
            : "";
        break;
      case "activityModifier":
        errors.activityModifier =
          value.length < 1 ? "Let us know how active you are" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: convertedValue ? convertedValue : value });
  };

  render() {
    const { errors, allowSubmit } = this.state;

    return (
      <StyledForm onSubmit={this.calculateBmr}>
        <label>Height (inches)</label>
        <input
          className={errors.height.length > 0 ? "error" : null}
          type="number"
          name="height"
          onChange={this.handleChange}
        />
        {errors.height.length > 0 && <ErrorText>{errors.height}</ErrorText>}
        <label>Age</label>
        <input
          className={errors.age.length > 0 ? "error" : null}
          type="number"
          name="age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        {errors.age.length > 0 && <ErrorText>{errors.age}</ErrorText>}
        <label>Weight (lbs)</label>
        <input
          className={errors.weight.length > 0 ? "error" : null}
          type="number"
          name="weight"
          onChange={this.handleChange}
        />
        {errors.weight.length > 0 && <ErrorText>{errors.weight}</ErrorText>}
        <select
          name="gender"
          onChange={this.handleChange}
          value={this.state.gender}
          className={errors.gender.length > 0 ? "error" : null}
        >
          <option value="">--Gender--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender.length > 0 && <ErrorText>{errors.gender}</ErrorText>}
        <select
          className={errors.gender.length > 0 ? "error" : null}
          name="activityModifier"
          onChange={this.handleChange}
        >
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
        {errors.activityModifier.length > 0 && (
          <ErrorText>{errors.activityModifier}</ErrorText>
        )}

        <button type="submit">Let's go!</button>
      </StyledForm>
    );
  }
}

export default GoalForm;
