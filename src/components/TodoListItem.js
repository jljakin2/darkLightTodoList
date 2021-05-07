import React from "react";
import styled from "styled-components";
import CheckCircle from "./CheckCircle";

const MainContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 1.25rem 1.5rem;
`;

const Item = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.015625rem;

  flex: 1;
`;

const ItemChecked = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.completedText};
  letter-spacing: -0.015625rem;
  text-decoration: line-through;

  flex: 1;
`;

class ListItem extends React.Component {
  onCheck = () => {
    this.props.handleChecked(this.props.id);
  };

  render() {
    const { item, isChecked, id } = this.props;
    return (
      <MainContainer key={id} onClick={this.onCheck}>
        <CheckCircle isChecked={isChecked} />
        {isChecked ? <ItemChecked>{item}</ItemChecked> : <Item>{item}</Item>}
      </MainContainer>
    );
  }
}

export default ListItem;
