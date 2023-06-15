import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios"; 사용하지 않아 주석처리 합니다
import styled from "styled-components"; // 사용하지 않아 주석처리 합니다
import ArrowImg from "../../assets/img/icon-arrow-left.svg";
import ClayButtonImg from "../../assets/img/L-button(clay).svg";
import ClayDisabledButton from "../../assets/img/L-Next-Disabled-button(clay).svg"; // input에 값이 모두 입력되기 전에 사용할 버튼 이미지 입니다
import { InputDiv, Label, InputBox } from "../../components/Common/Input";
import { ButtonStyle } from "../../components/Common/Button";
import {
  TypeDiv,
  SignupDiv,
  TypeP,
  Wrap,
  SignupHeader,
  Heading1,
  ButtonImg,
} from "./SignupStyle";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("Student");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [pwErrorMessage, setPwErrorMessage] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [buttonImg, setButtonImg] = useState(ClayDisabledButton);
  const navigate = useNavigate();

  //이전 페이지 이동
  const goBack = () => {
    navigate(-1);
  };

  // 입력란 값 변경 시 실행되는 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // 입력란 값 변경
    if (name === "email") {
      setEmail(e.target.value.trim());
    } else if (name === "password") {
      setPassword(e.target.value.trim());
    }

    // 두 입력란에 값이 모두 존재할 경우 버튼 활성화 함수 실행
    handleActiveButton();
  };

  //input 값이 있을때 or 없을때 달라지는 버튼 색 변경함수
  const handleActiveButton = () => {
    if (email !== "" && password !== "") {
      setButtonImg(ClayButtonImg);
    } else {
      setButtonImg(ClayDisabledButton);
    }
  };

  //유효성 검사
  const checkEmailIsValid = () => {
    if (email === "dayanne@lion.comcom") {
      setEmailErrorMessage("이 이메일은 이미 등록된 이메일입니다.");
      setEmailIsValid(false);
    } else {
      setEmailErrorMessage("사용 가능한 이메일입니다.");
      setEmailIsValid(true);
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
      // setEmailErrorMessage("*올바른 이메일 양식을 입력해주세요");
      // setEmailIsValid(false);
      // return;
    }
    const passwordPattern =
      /^(?=.*[!@#$%^&()_+=-])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
      // setPwErrorMessage(
      //   "*비밀번호는 8자 이상 특수문자와 대문자를 포함해야 합니다!"
      // );
      // setPasswordIsValid(false);
    }

    const state = {
      email: email,
      password: password,
      accountname: type,
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
        <button onClick={goBack}>
          <img src={ArrowImg} alt="" />
        </button>
        <Heading1>이메일로 회원가입하기</Heading1>
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
          >
            강사 회원
          </ButtonStyle>
        </TypeDiv>

        <form onSubmit={handleSignupSubmit}>
          <InputDiv>
            <Label>이메일</Label>
            <InputBox
              name="email"
              onChange={handleInputChange}
              // onBlur={checkEmailIsValid} // 가입한 이메일인지 비교하는 속성 onBlur
              placeholder="이메일을 입력해주세요"
            />
            {/* {emailErrorMessage && <span>{emailErrorMessage}</span>} */}
          </InputDiv>
          <InputDiv>
            <Label>비밀번호</Label>
            <InputBox
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </InputDiv>
          <ButtonImg type="submit">
            <img src={buttonImg} alt="" />
          </ButtonImg>
        </form>
      </Wrap>
    </SignupDiv>
  );
}
