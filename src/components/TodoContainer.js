import React from "react";
import styled from "styled-components";

import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

const MainContainer = styled.div`
  width: 100%;

  z-index: 1;
`;

const Todo = ({
  handleAddItem,
  todoList,
  handleChecked,
  handleRemoveCompleted,
  filter,
  handleFilter,
  handleDelete,
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
        handleDelete={handleDelete}
      />
    </MainContainer>
  );
};

export default Todo;
