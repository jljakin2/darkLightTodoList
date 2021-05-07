import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import TodoListFooter from "./TodoListFooter";

const MainContainer = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 0.3125rem;
  cursor: pointer;

  width: 100%;
  margin-bottom: 3.125rem;

  transition: all 0.2s ease-in-out;
  cursor: default;
`;

const List = styled.div`
  width: 100%;
  min-height: 10.875rem;
`;

const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10.875rem;
`;

const EmptyStateText = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.completedText};
  letter-spacing: -0.015625rem;
`;

const TodoList = ({
  todoList,
  handleChecked,
  handleRemoveCompleted,
  handleFilter,
  filter,
}) => {
  const getRenderedListItems = filterType => {
    /**
     * Function that takes the type of filter that the user clicks on and renders the todo list items
     * that match the filterType.
     */
    if (todoList.length === 0) {
      return (
        <EmptyStateContainer>
          <EmptyStateText>
            There are currently no items in your list. Do work, son!
          </EmptyStateText>
        </EmptyStateContainer>
      );
    } else if (filterType === "All" && todoList.length > 0) {
      return todoList.map(item => {
        return (
          <TodoListItem
            id={item.id}
            item={item.item}
            isChecked={item.isChecked}
            handleChecked={handleChecked}></TodoListItem>
        );
      });
    } else if (filterType === "Active") {
      const onlyActive = todoList.filter(item => item.isChecked === false);
      return onlyActive.map(item => {
        return (
          <TodoListItem
            id={item.id}
            item={item.item}
            isChecked={item.isChecked}
            handleChecked={handleChecked}></TodoListItem>
        );
      });
    } else if (filterType === "Completed") {
      const onlyCompleted = todoList.filter(item => item.isChecked === true);
      return onlyCompleted.map(item => {
        return (
          <TodoListItem
            id={item.id}
            item={item.item}
            isChecked={item.isChecked}
            handleChecked={handleChecked}></TodoListItem>
        );
      });
    }
  };

  return (
    <MainContainer>
      <List>{getRenderedListItems(filter)}</List>
      <TodoListFooter
        todoList={todoList}
        handleRemoveCompleted={handleRemoveCompleted}
        filter={filter}
        handleFilter={handleFilter}
      />
    </MainContainer>
  );
};

export default TodoList;
