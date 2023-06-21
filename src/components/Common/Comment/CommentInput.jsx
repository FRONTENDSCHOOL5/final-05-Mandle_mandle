import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileImg from '../../../assets/img/basic-profile-img.svg';

export default function Comment() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <CommentWrap>
      <img src={ProfileImg} alt='' />
      <form>
        <input type='text' value={inputValue} onChange={handleInputChange} />
        <ButtonStyle type='button' inputValue={inputValue}>
          게시
        </ButtonStyle>
      </form>
    </CommentWrap>
  );
}

const CommentWrap = styled.footer`
  width: 100%;
  height: 60px;
  font-size: var(--font-md);
  background-color: #fff;
  border-top: 1px solid var(--border-color);
  padding: 13px 16px 11px;
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 18px;

  img {
    width: 36px;
  }

  form {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    width: 100%;

    input {
      flex-grow: 8;
    }
  }
`;
const ButtonStyle = styled.button`
  font-weight: var(--font--bold);
  color: ${(props) =>
    props.inputValue ? 'var(--main-color)' : 'var(--sub-font-color)'};
`;
