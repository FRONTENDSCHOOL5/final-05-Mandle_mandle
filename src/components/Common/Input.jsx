import React from 'react';
import styled from 'styled-components';

export default function Input() {
  return (
    <>
      <InputWrap>
        <p>이메일</p>
        <input onChange={() => {}} placeholder='이메일을 입력해주세요' />
      </InputWrap>
    </>
  );
}

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  p {
    font-family: var(--font--Bold);
    margin-bottom: 5px;
    font-weight: 700;
    color: #767676;
    font-size: 12px;
  }
  input {
    width: 322px;
    height: 48px;
    border-bottom: 1px solid #dbdbdb;
    &::placeholder {
      color: #dbdbdb;
    }
    &:focus {
      border-color: #036635;
    }
  }
`;
