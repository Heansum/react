import React from 'react';
import styled from 'styled-components';

function MyButton(props) {
  const { text, color } = props;

  const StyledButton = styled.button`
    background-color: ${color || 'orange'};
    height: 30px;
    border: none;
    box-shadow: 0 3px 3px 0 gray;
    cursor: pointer;
    margin-left: 3px;
  `;

  return <StyledButton>{text}</StyledButton>;
}

export default MyButton;
