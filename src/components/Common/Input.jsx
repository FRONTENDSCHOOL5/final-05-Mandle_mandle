import React from "react";
import styled from "styled-components";

export default function Input() {
  return (
    <>
      <InputDiv>
        <Label>이메일</Label>
        <InputBox
          width="322px"
          height="48px"
          padding="15px"
          onChange={() => {}}
          placeholder="이메일을 입력해주세요"
        />
      </InputDiv>
      <InputDiv>
        <Label>비밀번호</Label>
        <InputBox
          width="322px"
          height="48px"
          onChange={() => {}}
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </InputDiv>
    </>
  );
}

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;
export const Label = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: 9px;
  font-weight: 700;
  color: #767676;
  font-size: 12px;
`;

export const InputBox = styled.input`
  border: none;
  border-bottom: 1px solid #dbdbdb;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  // border-radius: 4px;
  &::placeholder {
    color: #dbdbdb;
  }
  &:focus {
    border-color: #036635;
  }
`;
