import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserAtom, IsLogin } from "../../Store/userInfoAtoms";
import ArrowImg from "../../assets/img/icon-arrow-left.svg";
import DisabledButtonImg from "../../assets/img/L-Disabled-button(clay).svg";
import ButtonImg from "../../assets/img/L-button(clay).svg";
import PostLogin from "../../api/PostLogin";

export default function Login() {
  const [userValue, setUserValue] = useRecoilState(UserAtom);
  const [isLogin, setIsLogin] = useRecoilState(IsLogin);
  const [valid, setValid] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [pwErrorMessage, setPwErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [buttonImg, setButtonImg] = useState(DisabledButtonImg);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleActiveButton = () => {
    setButtonImg(
      email !== "" && password !== "" ? ButtonImg : DisabledButtonImg
    );
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

  const handleEmailInput = () => {
    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!emailPattern.test(email)) {
      setEmailErrorMessage("*올바른 이메일 양식을 입력해주세요");
    } else {
      setEmailErrorMessage("");
    }
  };

  const handlePasswordInput = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length >= 6) {
      setPwErrorMessage("");

      handleActiveButton();
    } else {
      setPwErrorMessage("비밀번호는 6자 이상이어야 합니다.");
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const loginInfo = await PostLogin(email, password);
    if (!isLogin) {
      if (loginInfo.status === 422) {
        setValid(false);
        setLoginErrorMessage(loginInfo.message);
        setEmail("");
        setPassword("");
        //성공시
      } else {
        const userInfo = loginInfo.user;
        setUserValue({
          ...userValue,
          accountname: userInfo.accountname,
          token: userInfo.token,
          refreshToken: userInfo.refreshToken,
          image: userInfo.image,
        });
        setValid(true);
        setIsLogin(true);
        setLoginErrorMessage("");
        setEmail("");
        setPassword("");
        navigate("/home");
      }
    }
  };

  return (
    <LoginWrap>
      <LoginHeader>
        <button onClick={goBack}>
          <img src={ArrowImg} alt="" />
        </button>
        <h1>로그인</h1>
      </LoginHeader>
      <LoginForm onSubmit={handleLoginSubmit}>
        <InputDiv>
          <Label>이메일</Label>
          <InputBox
            className="email-input"
            name="email"
            width="322px"
            height="48px"
            padding="15px"
            onChange={handleInputChange}
            onBlur={handleEmailInput}
            placeholder="이메일을 입력해주세요"
            brColor={emailErrorMessage ? "var(--error-color)" : "#dbdbdb"}
          />
        </InputDiv>
        {emailErrorMessage && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
        <InputDiv>
          <Label>비밀번호</Label>
          <InputBox
            className="pw-input"
            name="password"
            width="322px"
            height="48px"
            onChange={handleInputChange}
            type="password"
            placeholder="비밀번호를 입력하세요"
            onBlur={handlePasswordInput}
            brColor={pwErrorMessage ? "var(--error-color)" : "#dbdbdb"}
          />
        </InputDiv>
        {pwErrorMessage && <ErrorMessage>{pwErrorMessage}</ErrorMessage>}
        {loginErrorMessage && <ErrorMessage>{loginErrorMessage}</ErrorMessage>}
        <button type="submit">
          <img src={buttonImg} alt="" />
        </button>
      </LoginForm>
      <MoveSingUp to="/account/signup/">이메일로 회원가입</MoveSingUp>
    </LoginWrap>
  );
}
const MoveSingUp = styled(Link)`
  display: block;
  color: var(--sub-font-color);
  font-size: var(--font-sm);
  text-align: center;
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-bottom: 1px solid ${(props) => props.brColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  margin-bottom: 6px;
  &::placeholder {
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
  padding-left: 34px;
  align-self: stretch;
  color: var(--error-color);
  font-size: var(--font-sm);
`;
