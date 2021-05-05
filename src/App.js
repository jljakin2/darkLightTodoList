import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import Footer from "./components/Footer";

import GlobalStyle from "./theme/GlobalStyle";
import { lightTheme, darkTheme } from "./theme/theme";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 33.75rem;
`;

class App extends React.Component {
  state = { todoList: [], isDarkTheme: false };

  handleAddItem = item => {
    this.setState({ todoList: [...this.state.todoList, item] });
  };

  handleThemeChange = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <MainContainer>
          <Header
            handleThemeChange={this.handleThemeChange}
            isDarkTheme={this.state.isDarkTheme}
          />
          <TodoContainer
            handleAddItem={this.handleAddItem}
            todoList={this.state.todoList}
          />
          <Footer text="Drag and drop to reorder list" />
        </MainContainer>
      </ThemeProvider>
    );
  }
}

export default App;
