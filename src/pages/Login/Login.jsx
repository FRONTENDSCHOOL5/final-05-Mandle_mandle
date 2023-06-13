import { React, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import ArrowImg from "../../assets/img/icon-arrow-left.svg";
import DisabledButtonImg from "../../assets/img/L-Disabled-button(clay).svg";
import ButtonImg from "../../assets/img/L-button(clay).svg";
import { GoBackButton } from "../../components/Common/goBackButton";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [pwErrorMessage, setPwErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [buttonImg, setButtonImg] = useState(DisabledButtonImg);

  // const navigate = useNavigate();

  //input 값이 있을때 or 없을때 달라지는 버튼 색 변경함수
  const handleActiveButton = () => {
    if (email !== "" && password !== "") {
      setButtonImg(ButtonImg);
    } else {
      setButtonImg(DisabledButtonImg);
    }
  };

  // 입력란 값 변경 시 실행되는 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // 입력란 값 변경
    if (name === "email") {
      setEmail(value.trim());
    } else if (name === "password") {
      setPassword(value.trim());
    }

    handleActiveButton();
    // 두 입력란에 값이 모두 존재할 경우 버튼 활성화 함수 실행
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    //정규 표현식을 사용한 이메일, 비밀번호 유효성 검사
    const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
      setEmailErrorMessage("*올바른 이메일 양식을 입력해주세요");
    }

    const passwordPattern =
      /^(?=.*[!@#$%^&()_+=-])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setPwErrorMessage(
        "*비밀번호는 8자 이상 특수문자와 대문자를 포함해야 합니다!"
      );
    }

    try {
      const data = {
        user: {
          email: email,
          password: password,
        },
      };
      console.log(data);
      const response = await axios.post(
        "https://api.mandarin.weniv.co.kr/user/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      if (response.data.status === 200) {
        console.log("로그인 성공");

        // navigate("/home");
      } else {
        setLoginErrorMessage("*이메일  또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginWrap>
      <LoginHeader>
        {/* <GoBackButton /> */}
        <h1>로그인</h1>
      </LoginHeader>
      <LoginForm onSubmit={handleLoginSubmit}>
        <InputDiv>
          <Label>이메일</Label>
          <InputBox
            name="email" // 입력란 식별을 위해 name 속성 추가
            width="322px"
            height="48px"
            padding="15px"
            onChange={handleInputChange}
            placeholder="이메일을 입력해주세요"
          />
        </InputDiv>
        <div>
          {emailErrorMessage && (
            <ErrorMessage>{emailErrorMessage}</ErrorMessage>
          )}
        </div>
        <InputDiv>
          <Label>비밀번호</Label>
          <InputBox
            name="password" // 입력란 식별을 위해 name 속성 추가
            width="322px"
            height="48px"
            onChange={handleInputChange}
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </InputDiv>
        {(pwErrorMessage && <ErrorMessage>{pwErrorMessage}</ErrorMessage>) ||
          (loginErrorMessage && (
            <ErrorMessage>{loginErrorMessage}</ErrorMessage>
          ))}
        <button type="submit">
          <img src={buttonImg} alt="" />
        </button>
      </LoginForm>
      <Link to="/singup">이메일로 회원가입</Link>
    </LoginWrap>
  );
}

const LoginWrap = styled.div`
  font-size: var(--font-md);
  a {
    display: block;
    color: var(--sub-font-color);
    font-size: var(--font-sm);
    text-align: center;
  }
`;
const LoginForm = styled.form`
  padding: 0 34px;
  font-size: var(--font-mds);

  button {
    margin: 16px 0 8px;
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
  margin-bottom: 6px;
  border- &::placeholder {
    color: var(--border-color);
  }
  &:focus {
    border-color: var(--main-color);
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

const ErrorMessage = styled.div`
  text-align: start;
  color: var(--error-color);
  font-size: var(--font-sm);
`;
