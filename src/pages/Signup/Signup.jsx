import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArrowImg from "../../assets/img/icon-arrow-left.svg";
import ClayButtonImg from "../../assets/img/L-button(clay).svg";
import ClayDisabledButton from "../../assets/img/L-Next-Disabled-button(clay).svg";
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

  const goBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value.trim());
    } else if (name === "password") {
      setPassword(value.trim());
    }

    handleActiveButton();
  };

  const handleActiveButton = () => {
    if (email !== "" && password !== "") {
      setButtonImg(ClayButtonImg);
    } else {
      setButtonImg(ClayDisabledButton);
    }
  };

  // const checkEmailIsValid = () => {
  //   const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  //   if (!emailPattern.test(email)) {
  //     setEmailErrorMessage("*유효한 이메일 형식을 입력해주세요");
  //     setEmailIsValid(false);
  //   } else {
  //     setEmailErrorMessage("");
  //     setEmailIsValid(true);
  //   }
  // };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    if (buttonImg === ClayDisabledButton) {
      return; // 버튼 비활성화일 때 기능 막기
    }

    try {
      const data = {
        user: {
          email: email,
        },
      };
      console.log(data);
      const response = await axios.post(
        "https://api.mandarin.weniv.co.kr/user/emailvalid",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.data.message === "사용 가능한 이메일 입니다.") {
        navigate("/set_profile");
      } else if (response.data.message === "이미 가입된 이메일 주소 입니다.") {
      }

      //  else if (response.data.message === "필수 입력사항을 입력해주세요.") {
      //   setEmailErrorMessage("필수 입력사항을 입력해주세요.");
      //   setEmailIsValid(false);
      // } else if (
      //   response.data.message === "비밀번호는 6자 이상이어야 합니다."
      // ) {
      //   setEmailErrorMessage("비밀번호는 6자 이상이어야 합니다.");
      //   setEmailIsValid(false);
      // } else if (response.data.message === "잘못된 이메일 형식입니다.") {
      //   setEmailErrorMessage("잘못된 이메일 형식입니다.");
      //   setEmailIsValid(false);
      // } else if (response.data.message === "이미 사용중인 계정 ID입니다.") {
      //   setEmailErrorMessage("이미 사용중인 계정 ID입니다.");
      //   setEmailIsValid(false);
      // } else {
      //   console.log("회원가입 성공");

      // }
    } catch (error) {
      // '이메일 형식을 확인해주세요'라는 글을 담은 태그를 보이도록 함
      console.error(error);

      setEmailIsValid(false);
    }
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
        <Heading1>이메일로 가입하기</Heading1>
      </SignupHeader>
      <Wrap>
        <TypeP>회원 분류</TypeP>
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
            일반 회원 (수강생)
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

        <InputDiv>
          <Label>이메일</Label>
          <InputBox
            name="email"
            onChange={handleInputChange}
            placeholder="이메일을 입력해주세요"
          />
          {emailErrorMessage && <span>{emailErrorMessage}</span>}
        </InputDiv>
        <InputDiv>
          <Label>비밀번호</Label>
          <InputBox
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          {pwErrorMessage && <span>{pwErrorMessage}</span>}
        </InputDiv>
        <ButtonImg type="submit" onClick={handleSignupSubmit}>
          <img src={buttonImg} alt="" />
        </ButtonImg>
      </Wrap>
    </SignupDiv>
  );
}
