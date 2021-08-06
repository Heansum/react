import { useState } from 'react';
import styled from 'styled-components';
import Center from './test/Center';
import NavBar from './components/NavBar';
import PostItem from './components/PostItem';
import { getData } from './provider/Post';
import MyButton from './components/MyButton';

const StyledBox = styled.div`
  width: 70%;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid black;
`;

const StyledRightBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function App() {
  console.log(getData());

  const [posts, setPosts] = useState(getData());

  function addPost() {
    // 상태 변경이란
    // 값을 변경하고 함수를 재실행하는 것
    setPosts([
      ...posts,
      {
        id: 5,
        title: '리엑트 전개연산자',
        content: '전개연산자는 흩뿌리는 연산자',
      },
    ]);
    alert('클릭됨');
  }

  return (
    <div>
      <NavBar />

      <StyledBox>
        <StyledRightBox>
          <button onClick={() => addPost()}>추가</button>
        </StyledRightBox>

        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </StyledBox>
    </div>
  );
}

export default App;
