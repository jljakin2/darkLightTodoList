import React from "react";
import styled from "styled-components";

import check from "../images/icon-check.svg";

const Circle = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  cursor: pointer;

  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;
`;

const Check = styled.img`
  width: 0.5rem;
  height: 0.5rem;
`;

const CheckCircle = () => {
  return (
    <Circle>
      <Check src={check} alt="check" />
    </Circle>
  );
};

export default CheckCircle;
