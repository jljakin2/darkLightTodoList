import React from "react";
import styled from "styled-components";
import CheckCircle from "./CheckCircle";

const MainContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};

  display: flex;
  align-items: center;

  padding: 1.25rem 1.5rem;
`;

const Item = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.015625rem;
  cursor: default;

  flex: 1;
`;

const ListItem = ({ item }) => {
  return (
    <MainContainer>
      <CheckCircle />
      <Item>{item}</Item>
    </MainContainer>
  );
};

export default ListItem;
