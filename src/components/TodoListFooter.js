import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  color: ${({ theme }) => theme.footerText};

  display: flex;
  justify-content: space-between;

  padding: 1rem 1.5rem;
`;

const CategoryContainer = styled.div`
  display: flex;

  & p {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.subtextHover};
    }
  }

  & p:not(:last-child) {
    margin-right: 1.25rem;
  }
`;

const Count = styled.p`
  cursor: default;
`;

const Clear = styled.p`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.subtextHover};
  }
`;

const ListFooter = ({
  todoList,
  handleRemoveCompleted,
  handleFilter,
  filter,
}) => {
  const getOpenTodoItemsLength = () => {
    const onlyOpen = todoList.filter(item => item.isChecked === false);
    return onlyOpen.length;
  };

  return (
    <MainContainer>
      <Count>{getOpenTodoItemsLength()} items left</Count>
      <CategoryContainer>
        <p
          style={filter === "All" ? { color: "#3A7CFD" } : {}}
          onClick={() => handleFilter("All")}>
          All
        </p>
        <p
          style={filter === "Active" ? { color: "#3A7CFD" } : {}}
          onClick={() => handleFilter("Active")}>
          Active
        </p>
        <p
          style={filter === "Completed" ? { color: "#3A7CFD" } : {}}
          onClick={() => handleFilter("Completed")}>
          Completed
        </p>
      </CategoryContainer>
      <Clear onClick={() => handleRemoveCompleted()}>Clear Completed</Clear>
    </MainContainer>
  );
};

export default ListFooter;
