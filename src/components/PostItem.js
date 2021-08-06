import React from 'react';
import styled from 'styled-components';
import MyButton from './MyButton';

const StyledPostBox = styled.div`
  border: 1px solid black;
  padding: 10px;
  background-color: beige;
  margin-bottom: 10px;
`;

const StyledTitle = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function PostItem(props) {
  console.log(props);

  const { id, title, content } = props.post;

  return (
    <StyledPostBox>
      <StyledTitle>
        {id}:{title}
      </StyledTitle>
      <StyledButtonBox>
        <MyButton text={'삭제'} color={'red'} />
        <MyButton text={'상세보기'} color={'orange'} />
      </StyledButtonBox>
    </StyledPostBox>
  );
}

export default PostItem;
