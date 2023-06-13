import React from "react";
import styled from "styled-components";
import Input from "../../components/Common/Input";
import { ButtonStyle } from "../../components/Common/Button";
import ArrowImg from "../../assets/img/icon-arrow-left.svg";
import {
  TypeDiv,
  ButtonImg,
  SignupDiv,
  TypeP,
  Wrap,
  LoginHeader,
} from "./SignupStyle";

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
