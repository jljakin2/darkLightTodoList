import React from "react";
import styled from "styled-components";

import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 2.5rem;
`;

const Text = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.header};
  letter-spacing: 0.9375rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.regular};

  @media only screen and (max-width: 37.5em) {
    font-size: 1.5rem;
  }
`;

const Icon = styled.img`
  cursor: pointer;

  width: 1.625rem;
  height: 1.625rem;

  @media only screen and (max-width: 37.5em) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Header = ({ isDarkTheme, handleThemeChange }) => {
  return (
    <MainContent>
      <Text>Todo</Text>
      <Icon
        src={isDarkTheme ? sun : moon}
        onClick={() => handleThemeChange()}></Icon>
    </MainContent>
  );
};
export default Header;
