import React from "react";
import styled from "styled-components";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

const MainContainer = styled.div`
  width: 100%;
`;

const Todo = ({ handleAddItem, todoList }) => {
  return (
    <MainContainer>
      <TodoCreate handleAddItem={handleAddItem} />
      <TodoList todoList={todoList} />
    </MainContainer>
  );
};

export default Todo;
