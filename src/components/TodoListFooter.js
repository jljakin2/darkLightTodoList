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
  }

  & p:not(:last-child) {
    margin-right: 1.25rem;
  }
`;

const ListFooter = () => {
  return (
    <MainContainer>
      <p>5 items left</p>
      <CategoryContainer>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </CategoryContainer>
      <p>Clear Completed</p>
    </MainContainer>
  );
};

export default ListFooter;
