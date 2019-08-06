import React from "react";
import Footer from "../Footer/Footer";

import { Link } from "react-router-dom";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { WelcomePage, DailyQuote } from "./Welcome.styles";

class Welcome extends React.Component {
  state = {
    randomQuote: {},
  };

  componentDidMount() {
    fetch("https://theysaidso.p.rapidapi.com/qod", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": process.env.REACT_APP_HOST,
        "x-rapidapi-key": process.env.REACT_APP_SECRET,
      },
    })
      .then(res => res.json())
      .then(data => this.setState({ randomQuote: data.contents.quotes[0] }));
  }

  render() {
    console.log(this.state.randomQuote);
    return (
      <WelcomePage bgImg={this.state.randomQuote.background}>
        <GlobalStyle />

        <DailyQuote>
          <h1>{this.state.randomQuote.quote}</h1>
          <h3>-{this.state.randomQuote.author}</h3>
        </DailyQuote>
        <Link to="/get-started">Get started</Link>
      </WelcomePage>
    );
  }
}

export default Welcome;
