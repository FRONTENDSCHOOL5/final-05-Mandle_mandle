import React from "react";
import styled from "styled-components";
import Input from "../../components/Common/Input";
import { ButtonStyle } from "../../components/Common/Button";
import ClayImg from "../../assets/img/L-button-clay.svg";
import ArrowImg from "../../assets/img/icon-arrow-left.svg";

export default function Signup() {
  return (
    <SignupDiv>
      <LoginHeader>
        <button>
          <img src={ArrowImg} alt="" />
        </button>
        <h1>이메일로 회원가입하기</h1>
      </LoginHeader>

      <Wrap>
        <TypeP>회원구분</TypeP>

        <TypeDiv>
          <ButtonStyle
            type="button"
            bg="#fff"
            width="154.31px"
            height="30px"
            br="20px"
            border="1.5px solid #036635"
            color="#036635"
          >
            일반 회원(수강생)
          </ButtonStyle>
          <ButtonStyle
            type="button"
            bg="#fff"
            width="154.31px"
            height="30px"
            br="20px"
            border="1.5px solid #036635"
            color="#036635"
          >
            강사 회원
          </ButtonStyle>
        </TypeDiv>

        <Input />
        <ButtonImg />
      </Wrap>
    </SignupDiv>
  );
}

export const TypeDiv = styled.div`
  display: flex;
  gap: 13px;
  margin: auto;
  justify-content: center;
`;
export const ButtonImg = styled.button`
  display: block;
  width: 350px;
  height: 70px;
  margin: 17px 0 0 -15px;
  background: url(${ClayImg}) center / contain no-repeat;
`;
export const SignupDiv = styled.div`
  margin: auto;
  padding: auto;
  max-width: 390px;
`;

export const TypeP = styled.p`
  font-size: 12px;
  color: #767676;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Wrap = styled.div`
  width: 322px;
  margin: auto;
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
