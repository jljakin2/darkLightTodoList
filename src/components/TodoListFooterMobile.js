import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: none;

  @media only screen and (max-width: 37.5em) {
    background: ${({ theme }) => theme.cardBackground};
    box-shadow: 0 2.25rem 3.125rem -1rem ${({ theme }) => theme.shadow};
    border-radius: 0.3125rem;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 3rem;
    padding: 1rem 2rem;
    margin-bottom: 2.5rem;
  }
`;

const Text = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.footerText};
  letter-spacing: -0.19px;

  &:not(:last-child) {
    margin-right: 1.375rem;
  }
`;

const TodoListFooterMobile = ({ handleFilter, filter }) => {
  return (
    <MainContainer>
      <Text
        style={filter === "All" ? { color: "#3A7CFD" } : {}}
        onClick={() => handleFilter("All")}>
        All
      </Text>
      <Text
        style={filter === "Active" ? { color: "#3A7CFD" } : {}}
        onClick={() => handleFilter("Active")}>
        Active
      </Text>
      <Text
        style={filter === "Completed" ? { color: "#3A7CFD" } : {}}
        onClick={() => handleFilter("Completed")}>
        Completed
      </Text>
    </MainContainer>
  );
};

export default TodoListFooterMobile;
