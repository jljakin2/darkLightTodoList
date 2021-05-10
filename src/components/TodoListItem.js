import React from "react";
import styled from "styled-components";

import CheckCircle from "./CheckCircle";

import close from "../images/icon-cross.svg";

const MainContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 1.25rem 1.5rem;

  z-index: 1;

  &:hover img {
    visibility: visible;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 1rem 1.25rem;
  }
`;

const Item = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.015625rem;

  flex: 1;

  @media only screen and (max-width: 37.5em) {
    font-size: 0.75rem;
  }
`;

const ItemChecked = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.completedText};
  letter-spacing: -0.015625rem;
  text-decoration: line-through;

  flex: 1;
`;

const Close = styled.img`
  visibility: hidden;

  z-index: 100;

  @media only screen and (max-width: 37.5em) {
    visibility: visible;

    width: 0.75rem;
    height: 0.75rem;
  }
`;

class ListItem extends React.Component {
  onCheck = () => {
    this.props.handleChecked(this.props.id);
  };

  onDelete = () => {
    this.props.handleDelete(this.props.id);
  };

  render() {
    const { item, isChecked, id, handleChecked } = this.props;
    return (
      <MainContainer>
        <CheckCircle
          isChecked={isChecked}
          id={id}
          handleChecked={handleChecked}
        />
        {isChecked ? (
          <ItemChecked onClick={this.onCheck}>{item}</ItemChecked>
        ) : (
          <Item onClick={this.onCheck}>{item}</Item>
        )}
        <Close src={close} alt="close" onClick={this.onDelete} />
      </MainContainer>
    );
  }
}

export default ListItem;
