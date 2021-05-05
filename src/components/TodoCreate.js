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
`;

const Circle = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;

  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;

  transition: all 0.2s ease-in-out;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex: 1;

  & input {
    background: none;
    border: none;

    font-size: 1.125rem;
    color: ${({ theme }) => theme.createTodo};
    letter-spacing: -0.015625rem;

    width: 100%;

    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: ${({ theme }) => theme.createTodo};
      font-size: 1.125rem;
      letter-spacing: -0.015625rem;

      transition: all 0.2s ease-in-out;
    }

    &:focus {
      outline: none;
    }
  }
`;

class TodoCreate extends React.Component {
  state = { item: "" };

  onInputChange = e => {
    this.setState({ item: e.target.value });
  };

  onFormSubmit = e => {
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
