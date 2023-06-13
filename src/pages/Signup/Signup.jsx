import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ArrowImg from "../../assets/img/icon-arrow-left.svg";
import ClayDisabledButton from "../../assets/img/L-Disabled-button(clay).svg";
import ClayButtonImg from "../../assets/img/L-button-clay.svg";
import { InputDiv, Label, InputBox } from "../../components/Common/Input";
import { ButtonStyle } from "../../components/Common/Button";
import {
  TypeDiv,
  ButtonImg,
  SignupDiv,
  TypeP,
  Wrap,
  SignupHeader,
  SignupForm,
} from "./SignupStyle";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("Student");

  const navigate = useNavigate();
  const handleSignupSubmit = (event) => {
    event.preventDefault();

    const state = {
      // username: "",
      email: email,
      password: password,
      accountname: type,
      // intro: "",
      // image: "",
    };
    console.log(state);
    navigate("/set_profile", { state });
  };

  const handleStudentBtnClick = () => {
    setType("Student");
  };
  const handleTeacherBtnClick = () => {
    setType("Teacher");
  };

  return (
    <SignupDiv>
      <SignupHeader>
        <button>
          <img src={ArrowImg} alt="" />
        </button>
        <h1>이메일로 회원가입하기</h1>
      </SignupHeader>

      <Wrap>
        <TypeP>회원구분</TypeP>

        <TypeDiv>
          <ButtonStyle
            type="button"
            bg={type === "Student" ? "#036635" : "#fff"}
            width="154.31px"
            height="30px"
            br="20px"
            border="1.5px solid #036635"
            color={type === "Student" ? "#fff" : "#036635"}
            onClick={handleStudentBtnClick}
            // onClick={() => setType("Student")}
          >
            일반 회원(수강생)
          </ButtonStyle>
          <ButtonStyle
            type="button"
            bg={type === "Teacher" ? "#036635" : "#fff"}
            width="154.31px"
            height="30px"
            br="20px"
            border="1.5px solid #036635"
            color={type === "Teacher" ? "#fff" : "#036635"}
            onClick={handleTeacherBtnClick}
            // onClick={() => setType("Teacher")}
          >
            강사 회원
          </ButtonStyle>
        </TypeDiv>

        <SignupForm onSubmit={handleSignupSubmit}>
          <InputDiv>
            <Label>이메일</Label>
            <InputBox
              width="322px"
              height="48px"
              padding="15px"
              onChange={(e) => {
                setEmail(e.target.value.trim());
                // console.log(e.target.value);
              }}
              placeholder="이메일을 입력해주세요"
            />
          </InputDiv>
          <InputDiv>
            <Label>비밀번호</Label>
            <InputBox
              width="322px"
              height="48px"
              onChange={(e) => {
                setPassword(e.target.value.trim());
                // console.log(e.target.value);
              }}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </InputDiv>
          <button type="submit" onClick={handleSignupSubmit}>
            <img src={ClayButtonImg} alt="" />
          </button>
        </SignupForm>
      </Wrap>
    </SignupDiv>
  );
}
