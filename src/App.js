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

  @media only screen and (max-width: 37.5em) {
    width: 100%;
  }
`;

class App extends React.Component {
  state = { todoList: [], isDarkTheme: false, filter: "All" };

  handleAddItem = item => {
    /**
     * Method that takes the existing todoList state and adds a new item
     */
    this.setState({
      todoList: [
        ...this.state.todoList,
        { id: new Date().getTime(), item, isChecked: false },
      ],
    });
  };

  handleThemeChange = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };

  handleChecked = clickedId => {
    /**
     * Method that takes existing todoList array and finds the item that was
     * clicked. Then it changes the state of the item to reflect the fact that it
     * was completed. Finally, it replaces the current version of the item with the
     * updated version and then we update the entire state of todoList.
     */
    const newArray = [...this.state.todoList];
    const checkedItem = newArray.find(element => element.id === clickedId);
    checkedItem.isChecked = !checkedItem.isChecked;
    const index = newArray.indexOf(checkedItem);
    newArray[index] = checkedItem;

    this.setState({ todoList: newArray });
  };

  handleDelete = itemId => {
    /**
     * Method that filters out the item that the user clicked on, then updates the state of the
     * "todoList" with the filtered array
     */
    const newArr = [...this.state.todoList];
    const filterArr = newArr.filter(item => item.id !== itemId);

    this.setState({ todoList: filterArr });
  };

  handleRemoveCompleted = () => {
    /**
     * Method that filters out the items of the "todoList" that have been checked.
     */
    const newArray = [...this.state.todoList];
    const onlyOpen = newArray.filter(item => item.isChecked === false);

    this.setState({ todoList: onlyOpen });
  };

  handleFilter = clickedItem => {
    /**
     * Method that sets the state of "filter" depending on which filter option the user clicked on
     */
    if (clickedItem === "All") {
      this.setState({ filter: "All" });
    } else if (clickedItem === "Active") {
      this.setState({ filter: "Active" });
    } else if (clickedItem === "Completed") {
      this.setState({ filter: "Completed" });
    }
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
            handleChecked={this.handleChecked}
            handleRemoveCompleted={this.handleRemoveCompleted}
            filter={this.state.filter}
            handleFilter={this.handleFilter}
            handleDelete={this.handleDelete}
          />
          {/* <Footer text="Drag and drop to reorder list" /> */}
        </MainContainer>
      </ThemeProvider>
    );
  }
}

export default App;
