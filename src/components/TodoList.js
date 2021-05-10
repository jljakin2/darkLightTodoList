import React from "react";
import styled from "styled-components";

import TodoListItem from "./TodoListItem";
import TodoListFooter from "./TodoListFooter";
import TodoListFooterMobile from "./TodoListFooterMobile";

const MainContainer = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 0.3125rem;
  cursor: pointer;

  width: 100%;
  margin-bottom: 3.125rem;

  transition: all 0.2s ease-in-out;
  cursor: default;

  z-index: 1;

  @media only screen and (max-width: 37.5em) {
    margin-bottom: 1rem;
  }
`;

const List = styled.div`
  width: 100%;
  min-height: 10.875rem;

  @media only screen and (max-width: 37.5em) {
    min-height: 7rem;
  }
`;

const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10.875rem;

  @media only screen and (max-width: 37.5em) {
    height: 7rem;
    padding: 1.5rem;
  }
`;

const EmptyStateText = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.completedText};
  letter-spacing: -0.015625rem;

  @media only screen and (max-width: 37.5em) {
    font-size: 1rem;
    text-align: center;
  }
`;

const TodoList = ({
  todoList,
  handleChecked,
  handleRemoveCompleted,
  handleFilter,
  filter,
  handleDelete,
}) => {
  const getRenderedListItems = filterType => {
    /**
     * Function that takes the type of filter that the user clicks on and renders the todo list items
     * that match the filterType.
     */
    const todoListComponent = todoItem => {
      return (
        <TodoListItem
          key={todoItem.id}
          id={todoItem.id}
          item={todoItem.item}
          isChecked={todoItem.isChecked}
          handleChecked={handleChecked}
          handleDelete={handleDelete}></TodoListItem>
      );
    };

    if (todoList.length === 0) {
      // checks if there aren't any items and renders the empty state version of the list
      return (
        <EmptyStateContainer>
          <EmptyStateText>
            You don't have any items in your list. Do work, son!
          </EmptyStateText>
        </EmptyStateContainer>
      );
      // checks the current state of "filter" and makes sure the list has at least one item
    } else if (filterType === "All" && todoList.length > 0) {
      return todoList.map(item => {
        return todoListComponent(item);
      });
    } else if (filterType === "Active") {
      const onlyActive = todoList.filter(item => item.isChecked === false);
      return onlyActive.map(item => {
        return todoListComponent(item);
      });
    } else if (filterType === "Completed") {
      const onlyCompleted = todoList.filter(item => item.isChecked === true);
      return onlyCompleted.map(item => {
        return todoListComponent(item);
      });
    }
  };

  return (
    <>
      <MainContainer>
        <List>{getRenderedListItems(filter)}</List>
        <TodoListFooter
          todoList={todoList}
          handleRemoveCompleted={handleRemoveCompleted}
          filter={filter}
          handleFilter={handleFilter}
        />
      </MainContainer>
      <TodoListFooterMobile handleFilter={handleFilter} filter={filter} />
    </>
  );
};

export default TodoList;
