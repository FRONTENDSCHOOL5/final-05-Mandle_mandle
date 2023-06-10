import React from "react";
import styled from "styled-components";
import { ArrowLeftNavigation } from "../../components/Common/TopNav";
import Input from "../../components/Common/Input";
import { ButtonStyle } from "../../components/Common/Button";

export default function Signup() {
  return (
    <div>
      <ArrowLeftNavigation />
      <Heading>
        이메일로 회원가입
      </Heading>
      <p>회원구분</p>

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

      <ButtonStyle
        type="button"
        bg="black"
        width="432px"
        height="56px"
        br="4px"
      >
        다음
      </ButtonStyle>
    </div>
  );
}

export const TypeDiv = styled.div`
  display:flex;
`

export const Heading = styled.h1`
  font-size: 24px;
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translate(-50%);
`