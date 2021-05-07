import React from "react";
import styled from "styled-components";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

const MainContainer = styled.div`
  width: 100%;
`;

const Todo = ({
  handleAddItem,
  todoList,
  handleChecked,
  handleRemoveCompleted,
  filter,
  handleFilter,
}) => {
  return (
    <MainContainer>
      <TodoCreate handleAddItem={handleAddItem} />
      <TodoList
        todoList={todoList}
        handleChecked={handleChecked}
        handleRemoveCompleted={handleRemoveCompleted}
        filter={filter}
        handleFilter={handleFilter}
      />
    </MainContainer>
  );
};

export default Todo;
