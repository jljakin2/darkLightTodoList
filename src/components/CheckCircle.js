import React from "react";
import styled from "styled-components";

import check from "../images/icon-check.svg";

const CircleEmpty = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  cursor: pointer;

  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;
`;

const CircleFull = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.gradientLight},
    ${({ theme }) => theme.gradientDark}
  );
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;
`;

const Check = styled.img`
  width: 0.5rem;
  height: 0.5rem;
`;

const CheckCircle = ({ isChecked }) => {
  const renderContent = () => {
    if (isChecked) {
      return (
        <CircleFull>
          <Check src={check} alt="check" />
        </CircleFull>
      );
    } else {
      return <CircleEmpty />;
    }
  };

  return renderContent();
};

export default CheckCircle;
