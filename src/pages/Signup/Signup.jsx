import { React, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ArrowImg from "../../assets/img/icon-arrow-left.svg";
import ClayDisabledButton from "../../assets/img/L-Disabled-button(clay).svg";
import ClayButtonImg from "../../assets/img/L-button-clay.svg";
import Input from "../../components/Common/Input";
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

  // const navigate = useNavigate();

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        user: {
          accountname: type,
          email: email,
          password: password,
        },
      };
      console.log(data);

      if (response.status === 200) {
        console.log("회원가입 성공");

        // navigate("/home");
      } else {
        console.log("회원가입 성공");
      }
    } catch (error) {
      console.error(error);
    }
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
            bg="#fff"
            width="154.31px"
            height="30px"
            br="20px"
            border="1.5px solid #036635"
            color="#036635"
            onClick={(e) => {
              setType((e.target.value = "Student"));
              // console.log(e.target.value);
            }}
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
            onClick={(e) => {
              setType((e.target.value = "Teacher"));
              // console.log(e.target.value);
            }}
          >
            강사 회원
          </ButtonStyle>
        </TypeDiv>

        <SignupForm>
          <Input />
          <button type="submit" onSubmit={handleSignupSubmit}>
            <img src={ClayButtonImg} alt="" />
          </button>
        </SignupForm>
      </Wrap>
    </SignupDiv>
  );
}
