import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserAtom, IsLogin, AutoLogin } from '../../Store/userInfoAtoms';
import PostLogin from '../../api/PostLogin';
import Input from '../../components/Account/Input';
import UserInfoInput from '../../Hooks/UserInfoInput';
import AccountHeader from '../../components/Account/AccountHeader';
import ButtonImg from '../../assets/img/L-login-button(clay).svg';
import DisabledButtonImg from '../../assets/img/L-login-Disabled-button(clay).svg';
import usePasswordToggle from '../../Hooks/usePasswordToggle';
import {
  MoveSignup,
  AccountForm,
  ErrorMessage,
  ButtonImgStyle,
} from '../../components/Account/AccountStyle';
export default function Login() {
  const [userInfo, setUserInfo] = useRecoilState(UserAtom);
  const [isLogin, setIsLogin] = useRecoilState(IsLogin);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [autoLogin, setAutoLogin] = useRecoilState(AutoLogin);

  const navigate = useNavigate();

  const { toggleShowPassword, showPassword } = usePasswordToggle();

  useEffect(() => {
    //자동로그인 체크박스 기본값 false 설정
    setAutoLogin(false);
    if (isLogin) {
      navigate('/home');
    }
  }, []);

  const {
    email,
    setEmail,
    password,
    setPassword,
    buttonImg,
    handleInputChange,
    emailErrorMessage,
    setEmailErrorMessage,
    pwErrorMessage,
    setPwErrorMessage,
  } = UserInfoInput(ButtonImg, DisabledButtonImg, 'login');

  const handleEmailValid = () => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      setEmailErrorMessage('*올바른 이메일 형식을 입력해주세요');
    } else {
      setEmailErrorMessage('');
    }
  };

  const handleCheckboxChange = () => {
    setAutoLogin((prevAutoLogin) => !prevAutoLogin);
  };

  const handlePasswordValid = () => {
    if (password.length >= 6) {
      setPwErrorMessage('');
    } else {
      setPwErrorMessage('비밀번호는 6자 이상이어야 합니다.');
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (buttonImg === DisabledButtonImg) {
      return; // 버튼 비활성화일 때 기능 막기
    }
    const loginInfo = await PostLogin(email, password);

    if (!isLogin) {
      //로그인 실패
      if (loginInfo.status === 422) {
        setLoginErrorMessage(loginInfo.message);
        setEmail('');
        setPassword('');
        //성공시
      } else {
        //로그인 성공

        const {
          _id,
          accountname,
          token,
          refreshToken,
          image,
          username,
          intro,
        } = loginInfo.user;

        setUserInfo({
          id: _id,
          accountname,
          username,
          token,
          refreshToken,
          image,
          intro,
          resInfo: userInfo.resInfo || [],
          liked: userInfo.liked || [],
        });
        setIsLogin(true);
        setLoginErrorMessage('');
        setEmail('');
        setPassword('');
        navigate('/home/');
      }
    }
  };
  return (
    <>
      <AccountHeader title='로그인' />
      <AccountForm onSubmit={handleLoginSubmit}>
        <Input
          label='이메일'
          name='email'
          type='email'
          placeholder='이메일을 입력해주세요'
          onChange={handleInputChange}
          onBlur={handleEmailValid}
          borderColor={emailErrorMessage ? 'var(--error-color)' : '#dbdbdb'}
        />
        {emailErrorMessage && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
        <Input
          label='비밀번호'
          name='password'
          type='password'
          placeholder='비밀번호를 입력해주세요'
          onChange={handleInputChange}
          onBlur={handlePasswordValid}
          borderColor={pwErrorMessage ? 'var(--error-color)' : '#dbdbdb'}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          maxLength={30}
        />
        {pwErrorMessage && <ErrorMessage>{pwErrorMessage}</ErrorMessage>}
        {loginErrorMessage && <ErrorMessage>{loginErrorMessage}</ErrorMessage>}
        <CheckboxBox>
          <CheckboxInput
            type='checkbox'
            checked={autoLogin}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel>자동 로그인</CheckboxLabel>
        </CheckboxBox>

        <ButtonImgStyle
          type='submit'
          disabled={buttonImg === ButtonImg ? false : true}
        >
          <img src={buttonImg} alt='로그인하기 버튼' />
        </ButtonImgStyle>
      </AccountForm>
      <MoveSignup to='/account/signup'>이메일로 회원가입</MoveSignup>
    </>
  );
}

const CheckboxBox = styled.div`
  display: flex;
  margin: 10px 0 3px;
  align-items: center;
  justify-self: flex-start;
`;

const CheckboxInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1.5px solid gainsboro;
  margin-right: 6px;
  border-radius: 0.35rem;
  cursor: pointer;
  &:checked {
    /* background-color: #007bff; */
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #036635;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #767676;
  cursor: pointer;
`;
