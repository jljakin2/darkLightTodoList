import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 2.1875rem 3.125rem -0.9375rem ${({ theme }) => theme.shadow};
  border-radius: 0.3125rem;

  display: flex;

  width: 100%;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;

  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 37.5em) {
    padding: 1rem 1.25rem;
  }
`;

const Circle = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;

  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;

  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 37.5em) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex: 1;

  & input {
    background: none;
    border: none;
    caret-color: ${({ theme }) => theme.primary};

    font-size: 1.125rem;
    color: ${({ theme }) => theme.createTodo};
    letter-spacing: -0.015625rem;

    width: 100%;

    transition: all 0.2s ease-in-out;

    @media only screen and (max-width: 37.5em) {
      font-size: 0.75rem;
    }

    &::placeholder {
      color: ${({ theme }) => theme.createTodo};
      font-size: 1.125rem;
      letter-spacing: -0.015625rem;

      transition: all 0.2s ease-in-out;

      @media only screen and (max-width: 37.5em) {
        font-size: 0.75rem;
      }
    }

    &:focus {
      outline: none;
    }
  }
`;

class TodoCreate extends React.Component {
  state = { item: "" };

  onInputChange = e => {
    // gets input from user and updates state to track what the user is typing
    this.setState({ item: e.target.value });
  };

  onFormSubmit = e => {
    /**
     * Function that takes what the user has typed passes it to the function in App.js that adds
     * the item to the "todoList" state array
     */
    e.preventDefault();

    this.props.handleAddItem(this.state.item);

    this.setState({ item: "" });
  };

  render() {
    return (
      <MainContainer>
        <Circle />
        <Form onSubmit={this.onFormSubmit} action="">
          <input
            placeholder="Create a new todo..."
            type="text"
            onChange={this.onInputChange}
            value={this.state.item}
          />
        </Form>
      </MainContainer>
    );
  }
}

export default TodoCreate;
