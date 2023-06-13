import React from "react";
import styled from "styled-components";
import ArrowImg from "../../assets/img/icon-arrow-left.svg";
import ClayDisabledButton from "../../assets/img/L-Disabled-button(clay).svg";
import ClayButtonImg from "../../assets/img/L-button(clay).svg";
export default function Login() {
  return (
    <>
      <LoginHeader>
        <button>
          <img src={ArrowImg} alt="" />
        </button>
        <h1>로그인</h1>
      </LoginHeader>
      <LoginMain>
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
        <button>
          <img src={ClayButtonImg} alt="" />
        </button>
        <a href="">이메일로 회원가입</a>
      </LoginMain>
    </>
  );
}
const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 16px 0 8px;
  }

  a {
    color: var(--sub-font-color);
    font-size: var(--font-sm);
  }
`;

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

export const LoginHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 33px 34px 40px;

  button {
    position: absolute;

    left: 34px;
  }
`;
