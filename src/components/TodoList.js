import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import TodoListFooter from "./TodoListFooter";

const MainContainer = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 0.3125rem;

  width: 100%;
  margin-bottom: 3.125rem;

  transition: all 0.2s ease-in-out;
`;

const List = styled.div`
  width: 100%;
  min-height: 10.875rem;
`;

const TodoList = ({ todoList }) => {
  const renderedListItems = todoList.map(item => {
    return <TodoListItem item={item}></TodoListItem>;
  });

  return (
    <MainContainer>
      <List>{renderedListItems}</List>
      <TodoListFooter />
    </MainContainer>
  );
};

export default TodoList;
