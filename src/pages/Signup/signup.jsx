import React from "react";
import styled from "styled-components";
import { ArrowLeftNavigation } from "../../components/Common/TopNav";
import Input from "../../components/Common/Input";
import { ButtonStyle } from "../../components/Common/Button";
import ClayImg from "../../assets/img/L-button-clay.svg";

export default function Signup() {
  return (
    <SignupDiv>
      <ArrowLeftNavigation />
      <Heading>이메일로 회원가입</Heading>
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

export const Heading = styled.h1`
  font-size: 24px;
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translate(-50%);
`;
export const ButtonImg = styled.button`
  display: block;
  width: 322px;
  height: 70px;
  margin-top: 17px;
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
