import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./components/Footer/Footer";

// import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

import { light, dark } from "./styles/themes/themes";
import { GlobalStyle } from "./styles/GlobalStyle";

const Page = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  height: 100vh;
`;

class App extends React.Component {
  state = {
    darkMode: false,
  };

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.darkMode ? dark : light}>
        <Page>
          <GlobalStyle />
          {/* <Header /> */}
          <Main />
          <Footer toggleDarkMode={this.toggleDarkMode} />
        </Page>
      </ThemeProvider>
    );
  }
}

export default App;
